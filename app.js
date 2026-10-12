/**
 * app.js — Main Application Controller for SanketSetu (ISL ⇄ Braille ⇄ Blind Audio Bridge)
 * Features:
 *  - 3D Biomechanical Hand Landmark Precision Classifier & Temporal Motion Tracker
 *  - Real-Time Sign-to-Text, Natural Speech Generator & 6-Dot Tactile Braille Translator
 *  - Expressive On-Screen ISL Signing Avatar with Screen/Avatar Audio Narration
 *  - Interactive 6-Dot Perkins Braille Input Composer & Two-Way Deaf ⇄ Blind Conversation System
 *  - Custom ISL Sign Calibration & Training Studio
 */

(function () {
  "use strict";

  const CUSTOM_SIGNS_STORAGE_KEY = "sanketsetu_custom_signs_v1";

  // Reverse lookup from 6-dot binary key (e.g., "100000") to character for the Braille Keyer
  const DOTS_TO_CHAR_MAP = {
    "100000": "a",
    "110000": "b",
    "100100": "c",
    "100110": "d",
    "100010": "e",
    "110100": "f",
    "110110": "g",
    "110010": "h",
    "010100": "i",
    "010110": "j",
    "101000": "k",
    "111000": "l",
    "101100": "m",
    "101110": "n",
    "101010": "o",
    "111100": "p",
    "111110": "q",
    "111010": "r",
    "011100": "s",
    "011110": "t",
    "101001": "u",
    "111001": "v",
    "010111": "w",
    "101101": "x",
    "101111": "y",
    "101011": "z"
  };

  // Application State
  const state = {
    activeTab: "camera",
    highContrastYellow: false,
    fontScale: 1.0,
    signOutputLang: "en_hi", // "en_hi", "hi", "mai", "en_mai", "multi_top", "bho", "mr", "bn", "ta", "te", "gu", "pa", "kn", "ur", "en", "all"
    // Camera & Precision Gesture State
    cameraActive: false,
    videoStream: null,
    mpHands: null,
    precisionMode: "high", // "strict" (0.68, 6f), "high" (0.56, 4f), "fast" (0.50, 2f)
    minConfidence: 0.56,
    requiredStableFrames: 4,
    recognitionScope: "all", // "all", "conversational", "numbers", "alphabet"
    targetSignId: "auto",
    smoothedHands: [],
    motionHistory: [],
    latestHandFeatures: null,
    currentDetectedSign: null,
    lastSignId: null,
    lastSignTime: 0,
    candidateSignId: null,
    candidateFrames: 0,
    candidateHistory: [],
    lastHandBeepTime: 0,
    accumulatedSentence: [],
    signHistory: [],
    // Custom Signs State
    customSigns: [],
    capturedNormalizedLandmarks: null,
    // Translator & Avatar Stage State
    translatedSequence: [],
    lastTranslatedText: "Hello friend thank you",
    currentStageIndex: 0,
    stageTimer: null,
    // Two-Way Conversation Hub State
    chatMessages: [],
    // Dictionary & Quiz State
    dictCategory: "all",
    dictSearch: "",
    quizActive: false,
    quizCurrentSign: null,
    quizScore: 0,
    quizTotal: 0,
    // Speech Recognition State
    cmdRecognition: null,
    dictateRecognition: null,
    isCmdListening: false,
    isDictateListening: false
  };

  // =========================================================================
  // INITIALIZATION
  // =========================================================================
  document.addEventListener("DOMContentLoaded", () => {
    loadCustomSignsFromStorage();
    initAccessibilityToolbar();
    initBilingualWelcomeModule();
    initTabs();
    initCameraModule();
    initCustomSignStudio();
    initTranslatorModule();
    initTwoWayBridgeModule();
    initDictionaryModule();
    initQuickBoardModule();
    initSOSModal();
    initVoiceRecognition();
    initKeyboardShortcuts();
    initFocusNarration();

    // Initialize default detected sign preview, Multi-Language Grid & Braille in Panel 1
    const helloSign = window.ISL_SIGNS[0];
    if (helloSign) {
      state.currentDetectedSign = helloSign;
      document.getElementById("detected-visual").innerHTML = window.renderISLAvatarSVG(helloSign);
      updateCameraMultiLangDisplay(helloSign);
      updateCameraBrailleDisplay("Hello");
    }

    // Populate initial translator sequence ("Hello friend thank you")
    translateTextToISL("Hello friend thank you", { speakConfirmation: false, addToChat: false });
  });

  // =========================================================================
  // CUSTOM SIGNS STORAGE & SYNC
  // =========================================================================
  function loadCustomSignsFromStorage() {
    try {
      const raw = localStorage.getItem(CUSTOM_SIGNS_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          state.customSigns = parsed;
          parsed.forEach((cs) => {
            if (!window.ISL_SIGNS.some((s) => s.id === cs.id)) {
              window.ISL_SIGNS.unshift(cs);
            }
          });
        }
      }
    } catch (e) {
      state.customSigns = [];
    }
  }

  function saveCustomSignsToStorage() {
    try {
      localStorage.setItem(CUSTOM_SIGNS_STORAGE_KEY, JSON.stringify(state.customSigns));
    } catch (e) {
      // Ignore storage quota errors
    }
  }

  // =========================================================================
  // BILINGUAL WELCOME (ENGLISH + HINDI) & COMMUNICATION MODE MODULE
  // =========================================================================
  const BILINGUAL_WELCOME_MODES = {
    default: {
      badge: "Mode: Bilingual Auto-Welcome (EN + हिंदी)",
      en: "Welcome to the website! Welcome to SanketSetu — the Indian Sign Language, 6-Dot Braille, and Blind Audio Bridge. If you give no text, you can communicate using Sign Language, Voice, or Blind Language.",
      hi: "नमस्ते! वेबसाइट में आपका स्वागत है। संकेतसेतु में आपका स्वागत है — यदि आप कोई टेक्स्ट नहीं देते हैं, तो आप सांकेतिक भाषा, बोलकर, या नेत्रहीन ऑडियो और ब्रेल भाषा में संवाद कर सकते हैं।",
      hiPhonetic:
        "Namaste! Website mein aapka swagat hai. Sanket Setu mein aapka swagat hai. Yadi aap koi text nahi dete hain, toh aap Sign Language, bolkar, ya Blind Audio aur Braille bhasha mein samvaad kar sakte hain."
    },
    "no-text": {
      badge: "Mode: No-Text Hands-Free (बिना टेक्स्ट मोड)",
      en: "Welcome to the website! No Text Mode is active. You do not need to type any text — speak aloud, show Sign Language, or use Blind Audio and Braille.",
      hi: "नमस्ते! वेबसाइट में आपका स्वागत है। बिना टेक्स्ट मोड चालू है। आपको कुछ भी टाइप करने की आवश्यकता नहीं है — आप सीधे बोलकर, सांकेतिक भाषा, या नेत्रहीन भाषा से संवाद कर सकते हैं।",
      hiPhonetic:
        "Namaste! Website mein aapka swagat hai. Bina text mode chalu hai. Aapko kuch bhi type karne ki aavashyakta nahi hai — aap seedhe bolkar, Sign Language, ya Blind Audio bhasha se samvaad kar sakte hain."
    },
    "sign-language": {
      badge: "Mode: Indian Sign Language (सांकेतिक भाषा मोड)",
      en: "Welcome to the website! Indian Sign Language Mode is active. Show your hand signs to the camera or view the on-screen ISL Avatar signing Namaste.",
      hi: "नमस्ते! वेबसाइट में आपका स्वागत है। भारतीय सांकेतिक भाषा मोड चालू है। कैमरे के सामने अपने हाथ के संकेत दिखाएँ या स्क्रीन पर अवतार को नमस्ते करते देखें।",
      hiPhonetic:
        "Namaste! Website mein aapka swagat hai. Bharatiya Sign Language mode chalu hai. Camera ke samne apne haath ke sanket dikhayein ya screen par Avatar ko Namaste karte dekhein."
    },
    "blind-language": {
      badge: "Mode: Blind Audio & 6-Dot Braille (नेत्रहीन व ब्रेल भाषा)",
      en: "Welcome to the website! Blind Audio and 6-Dot Braille Language Mode is active. Every sign, avatar posture, and message is spoken aloud in English and Hindi with Braille dot audio.",
      hi: "नमस्ते! वेबसाइट में आपका स्वागत है। नेत्रहीन ऑडियो और ६-डॉट ब्रेल भाषा मोड चालू है। हर संकेत और संदेश आपको अंग्रेजी और हिंदी में बोलकर तथा ब्रेल ध्वनि के साथ सुनाया जाएगा।",
      hiPhonetic:
        "Namaste! Website mein aapka swagat hai. Blind Audio aur 6-Dot Braille bhasha mode chalu hai. Har sanket aur sandesh aapko English aur Hindi mein bolkar tatha Braille dhwani ke saath sunaya jayega."
    },
    "idle-no-input": {
      badge: "Mode: Hands-Free Prompt (EN + हिंदी)",
      en: "Welcome to the website! No text or sign input was detected. You can communicate without text using Sign Language, Voice, or Blind Audio and Braille.",
      hi: "नमस्ते! वेबसाइट में आपका स्वागत है। कोई टेक्स्ट या संकेत नहीं मिला। आप बिना टेक्स्ट के सांकेतिक भाषा, बोलकर, या नेत्रहीन ब्रेल भाषा का उपयोग कर सकते हैं।",
      hiPhonetic:
        "Namaste! Website mein aapka swagat hai. Koi text ya sanket nahi mila. Aap bina text ke Sign Language, bolkar, ya Blind Braille bhasha ka upyog kar sakte hain."
    }
  };

  function initBilingualWelcomeModule() {
    const btnTopWelcome = document.getElementById("btn-bilingual-welcome");
    const btnBannerWelcome = document.getElementById("btn-speak-bilingual-welcome");
    const btnModeNoText = document.getElementById("btn-mode-no-text");
    const btnModeSignLang = document.getElementById("btn-mode-sign-lang");
    const btnModeBlindLang = document.getElementById("btn-mode-blind-lang");

    if (btnTopWelcome) {
      btnTopWelcome.addEventListener("click", () => {
        speakBilingualWelcome("default");
      });
    }
    if (btnBannerWelcome) {
      btnBannerWelcome.addEventListener("click", () => {
        speakBilingualWelcome("default");
      });
    }
    if (btnModeNoText) {
      btnModeNoText.addEventListener("click", () => {
        activateCommunicationMode("no-text");
      });
    }
    if (btnModeSignLang) {
      btnModeSignLang.addEventListener("click", () => {
        activateCommunicationMode("sign-language");
      });
    }
    if (btnModeBlindLang) {
      btnModeBlindLang.addEventListener("click", () => {
        activateCommunicationMode("blind-language");
      });
    }
  }

  function updateWelcomeBannerText(modeKey) {
    const cfg = BILINGUAL_WELCOME_MODES[modeKey] || BILINGUAL_WELCOME_MODES.default;
    const enEl = document.getElementById("welcome-statement-en");
    const hiEl = document.getElementById("welcome-statement-hi");
    const badgeEl = document.getElementById("welcome-active-mode-badge");
    if (enEl) enEl.textContent = `"${cfg.en}"`;
    if (hiEl) hiEl.textContent = `"${cfg.hi}"`;
    if (badgeEl) badgeEl.textContent = cfg.badge;

    const modeBtns = {
      "no-text": document.getElementById("btn-mode-no-text"),
      "sign-language": document.getElementById("btn-mode-sign-lang"),
      "blind-language": document.getElementById("btn-mode-blind-lang")
    };
    Object.entries(modeBtns).forEach(([k, btn]) => {
      if (btn) btn.classList.toggle("active-mode", k === modeKey);
    });
  }

  function speakBilingualWelcome(modeKey = "default") {
    const cfg = BILINGUAL_WELCOME_MODES[modeKey] || BILINGUAL_WELCOME_MODES.default;
    updateWelcomeBannerText(modeKey);
    window.audioEngine.playEarcon("welcome");
    window.audioEngine.speakBilingual(cfg.en, cfg.hi, {
      hindiPhonetic: cfg.hiPhonetic,
      interrupt: true,
      assertive: true
    });
  }

  function activateCommunicationMode(modeKey) {
    updateWelcomeBannerText(modeKey);
    const namasteSign = window.ISL_SIGNS[0];

    if (modeKey === "no-text") {
      switchTab("camera", { announce: false });
      speakBilingualWelcome("no-text");
    } else if (modeKey === "sign-language") {
      switchTab("camera", { announce: false });
      if (namasteSign) {
        state.currentDetectedSign = namasteSign;
        document.getElementById("detected-visual").innerHTML = window.renderISLAvatarSVG(namasteSign);
        updateCameraBrailleDisplay(namasteSign.word);
      }
      speakBilingualWelcome("sign-language");
    } else if (modeKey === "blind-language") {
      switchTab("translator", { announce: false });
      window.audioEngine.playBraillePulses("Welcome", { speakAfter: false });
      speakBilingualWelcome("blind-language");
    } else {
      speakBilingualWelcome("default");
    }
  }

  // =========================================================================
  // ACCESSIBILITY TOOLBAR, SPEECH GENERATION & SCREEN/AVATAR READER
  // =========================================================================
  function initAccessibilityToolbar() {
    const btnWelcome = document.getElementById("btn-welcome-audio");
    const btnReadScreenAvatar = document.getElementById("btn-read-screen-avatar");
    const btnAutoNarrate = document.getElementById("btn-auto-narrate");
    const btnEarcons = document.getElementById("btn-earcons");
    const btnContrast = document.getElementById("btn-contrast");
    const btnFontDec = document.getElementById("btn-font-dec");
    const btnFontInc = document.getElementById("btn-font-inc");
    const selectSignLang = document.getElementById("sign-output-lang");
    const mainSignLangSelect = document.getElementById("main-sign-output-lang");
    const selectVoice = document.getElementById("speech-voice-select");
    const selectRate = document.getElementById("speech-rate");
    const selectPitch = document.getElementById("speech-pitch");

    // Ensure all .sync-sign-lang-select dropdowns share the complete 22-State Language option list
    if (mainSignLangSelect) {
      const masterOptionsHTML = mainSignLangSelect.innerHTML;
      document.querySelectorAll(".sync-sign-lang-select").forEach((sel) => {
        if (sel !== mainSignLangSelect && sel.id !== "sign-output-lang") {
          const prevVal = sel.value || state.signOutputLang;
          sel.innerHTML = masterOptionsHTML;
          sel.value = prevVal;
        }
      });
    }

    // Wire ALL synced sign language dropdowns across top bar, main chooser banner, camera toolbar, and stage
    document.querySelectorAll(".sync-sign-lang-select").forEach((sel) => {
      sel.addEventListener("change", (e) => {
        setSignOutputLanguage(e.target.value, { speakSample: true });
      });
    });

    // Wire Real Human Voice Persona selectors (.sync-human-persona-select)
    document.querySelectorAll(".sync-human-persona-select").forEach((sel) => {
      sel.addEventListener("change", (e) => {
        const persona = e.target.value || "warm_female";
        document.querySelectorAll(".sync-human-persona-select").forEach((s) => {
          if (s.value !== persona) s.value = persona;
        });
        window.audioEngine.setHumanVoiceStyle(persona);
        updateActiveLocalTouchBadge();
        const activeSign =
          state.activeTab === "translator"
            ? state.translatedSequence[state.currentStageIndex] || state.currentDetectedSign || window.ISL_SIGNS[0]
            : state.currentDetectedSign || window.ISL_SIGNS[0];
        if (activeSign) {
          window.audioEngine.playEarcon("sign_detected");
          window.audioEngine.speakSignInLang(activeSign, state.signOutputLang, {
            interrupt: true,
            assertive: true
          });
        }
      });
    });

    // Wire One-Click Quick Language Pills in #global-language-bar
    document.querySelectorAll(".lang-pill-btn[data-set-lang]").forEach((pill) => {
      pill.addEventListener("click", () => {
        const lang = pill.dataset.setLang;
        setSignOutputLanguage(lang, { speakSample: true });
      });
    });

    const btnTestHindi = document.getElementById("btn-test-hindi-now");
    if (btnTestHindi) {
      btnTestHindi.addEventListener("click", () => {
        setSignOutputLanguage("hi", { speakSample: true });
      });
    }

    const btnTestMaithili = document.getElementById("btn-test-maithili-now");
    if (btnTestMaithili) {
      btnTestMaithili.addEventListener("click", () => {
        setSignOutputLanguage("mai", { speakSample: true });
      });
    }

    btnWelcome.addEventListener("click", () => {
      speakOrientationGuide();
    });

    if (btnReadScreenAvatar) {
      btnReadScreenAvatar.addEventListener("click", () => {
        speakCurrentContextSummary();
      });
    }

    btnAutoNarrate.addEventListener("click", () => {
      window.audioEngine.autoNarrate = !window.audioEngine.autoNarrate;
      const on = window.audioEngine.autoNarrate;
      btnAutoNarrate.classList.toggle("active", on);
      btnAutoNarrate.setAttribute("aria-pressed", String(on));
      document.getElementById("narrate-state").textContent = on ? "ON" : "OFF";
      window.audioEngine.playEarcon("tab");
      window.audioEngine.speak(`Automatic focus narration ${on ? "enabled" : "disabled"}.`);
    });

    btnEarcons.addEventListener("click", () => {
      window.audioEngine.earconsEnabled = !window.audioEngine.earconsEnabled;
      const on = window.audioEngine.earconsEnabled;
      btnEarcons.classList.toggle("active", on);
      btnEarcons.setAttribute("aria-pressed", String(on));
      document.getElementById("earcon-state").textContent = on ? "ON" : "OFF";
      if (on) window.audioEngine.playEarcon("sign_detected");
      window.audioEngine.speak(`Sonic earcon sound effects ${on ? "enabled" : "disabled"}.`);
    });

    btnContrast.addEventListener("click", () => {
      toggleUltraContrast();
    });

    btnFontDec.addEventListener("click", () => {
      state.fontScale = Math.max(0.85, +(state.fontScale - 0.1).toFixed(2));
      document.documentElement.style.setProperty("--font-scale", state.fontScale);
      window.audioEngine.speak(`Text size ${Math.round(state.fontScale * 100)} percent.`);
    });

    btnFontInc.addEventListener("click", () => {
      state.fontScale = Math.min(1.45, +(state.fontScale + 0.1).toFixed(2));
      document.documentElement.style.setProperty("--font-scale", state.fontScale);
      window.audioEngine.speak(`Text size ${Math.round(state.fontScale * 100)} percent.`);
    });

    if (selectVoice) {
      selectVoice.addEventListener("change", (e) => {
        window.audioEngine.setVoiceByName(e.target.value);
        window.audioEngine.speak(`Voice changed to ${e.target.value || "WaveNet Neural Human"}.`);
      });
    }

    selectRate.addEventListener("change", (e) => {
      window.audioEngine.speechRate = parseFloat(e.target.value) || 1.0;
      window.audioEngine.speak(`Speech speed set to ${window.audioEngine.speechRate} times.`);
    });

    if (selectPitch) {
      selectPitch.addEventListener("change", (e) => {
        window.audioEngine.speechPitch = parseFloat(e.target.value) || 1.0;
        window.audioEngine.speak(`Speech pitch set to ${window.audioEngine.speechPitch}.`);
      });
    }
  }

  function updateActiveLocalTouchBadge(signObj = null) {
    const badge = document.getElementById("active-local-touch-badge");
    if (!badge || !window.getSignTranslation) return;
    const targetSign =
      signObj ||
      (state.activeTab === "translator"
        ? state.translatedSequence[state.currentStageIndex] || state.currentDetectedSign || window.ISL_SIGNS[0]
        : state.currentDetectedSign || window.ISL_SIGNS[0]);
    if (!targetSign) return;

    const primaryCode =
      state.signOutputLang === "en_hi" || state.signOutputLang === "multi_top" || state.signOutputLang === "all"
        ? "hi"
        : state.signOutputLang === "en_mai"
        ? "mai"
        : state.signOutputLang;

    const tr = window.getSignTranslation(targetSign, primaryCode);
    const personaNames = {
      warm_female: "👩 Didi (Warm Female Human Voice)",
      natural_male: "👨 Bhaiya (Natural Male Human Voice)",
      gentle_elder: "👵 Dadi/Baba (Gentle Respectful Elder)",
      expressive_friend: "🧑 Mitra (Expressive Friend Voice)"
    };
    const personaLabel = personaNames[window.audioEngine.humanVoiceStyle] || personaNames.warm_female;
    if (tr) {
      badge.textContent = `🗣️ Active Voice: ${personaLabel} • ${tr.flag} ${tr.langName} (${tr.nativeName}) — "${tr.phrase}"`;
    }
  }

  function setSignOutputLanguage(langSetting, { speakSample = true } = {}) {
    state.signOutputLang = langSetting || "en_hi";
    document.querySelectorAll(".sync-sign-lang-select").forEach((sel) => {
      if (sel.value !== state.signOutputLang) {
        sel.value = state.signOutputLang;
      }
    });

    document.querySelectorAll(".lang-pill-btn[data-set-lang]").forEach((pill) => {
      pill.classList.toggle("active", pill.dataset.setLang === state.signOutputLang);
    });

    const activeSign =
      state.activeTab === "translator"
        ? state.translatedSequence[state.currentStageIndex] || state.currentDetectedSign || window.ISL_SIGNS[0]
        : state.currentDetectedSign || window.ISL_SIGNS[0];

    updateActiveLocalTouchBadge(activeSign);

    if (state.currentDetectedSign) {
      updateCameraMultiLangDisplay(state.currentDetectedSign);
    }
    const stageSign = state.translatedSequence[state.currentStageIndex];
    if (stageSign) {
      updateStageMultiLangDisplay(stageSign);
    }
    renderSentenceDisplay();

    if (speakSample && activeSign) {
      window.audioEngine.playEarcon("sign_detected");
      window.audioEngine.speakSignInLang(activeSign, state.signOutputLang, {
        interrupt: true,
        assertive: true
      });
    }
  }

  function cycleSignOutputLanguage() {
    const allCodes = (window.SIGN_LANGUAGES || []).map((l) => l.code);
    const order = ["en_hi", "hi", "mai", "en_mai", ...allCodes.filter((c) => c !== "hi" && c !== "mai")];
    const idx = order.indexOf(state.signOutputLang);
    const next = order[(idx + 1) % order.length];
    setSignOutputLanguage(next, { speakSample: true });
  }

  function toggleUltraContrast() {
    state.highContrastYellow = !state.highContrastYellow;
    const theme = state.highContrastYellow ? "yellow-black" : "dark-hc";
    document.documentElement.setAttribute("data-theme", theme);
    const btnContrast = document.getElementById("btn-contrast");
    btnContrast.classList.toggle("active", state.highContrastYellow);
    btnContrast.setAttribute("aria-pressed", String(state.highContrastYellow));
    window.audioEngine.playEarcon("tab");
    window.audioEngine.speak(
      state.highContrastYellow
        ? "Ultra High Contrast Yellow on Black mode activated for low vision."
        : "Standard High Contrast Dark mode activated."
    );
  }

  function speakOrientationGuide() {
    window.audioEngine.playEarcon("welcome");
    const enGuide =
      "Welcome to the website! Welcome to SanketSetu, the two-way Indian Sign Language, 6-Dot Braille, and Blind Audio Communication Bridge. " +
      "Press W for English and Hindi Welcome, S to read the screen and ISL Avatar aloud, B for Ultra Contrast, or Spacebar for voice commands.";
    const hiGuide =
      "नमस्ते! वेबसाइट में आपका स्वागत है। संकेतसेतु भारतीय सांकेतिक भाषा, ६-डॉट ब्रेल और नेत्रहीन ऑडियो ब्रिज है। " +
      "बिना टेक्स्ट के संवाद करने के लिए सांकेतिक भाषा, वॉयस कमांड या ब्रेल मोड का उपयोग करें।";
    const hiPhonetic =
      "Namaste! Website mein aapka swagat hai. Sanket Setu Bharatiya Sign Language, 6-Dot Braille aur Blind Audio Bridge hai. Bina text ke samvaad karne ke liye Sign Language, Voice Command ya Braille mode ka upyog karein.";
    window.audioEngine.speakBilingual(enGuide, hiGuide, {
      hindiPhonetic: hiPhonetic,
      interrupt: true,
      assertive: true
    });
  }

  // =========================================================================
  // TAB NAVIGATION
  // =========================================================================
  function initTabs() {
    const tabButtons = document.querySelectorAll(".nav-tab");
    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        switchTab(btn.dataset.tab, { announce: true });
      });
    });
  }

  function switchTab(tabName, { announce = true } = {}) {
    state.activeTab = tabName;
    const tabButtons = document.querySelectorAll(".nav-tab");
    const panels = document.querySelectorAll(".tab-panel");

    tabButtons.forEach((btn) => {
      const isMatch = btn.dataset.tab === tabName;
      btn.classList.toggle("active", isMatch);
      btn.setAttribute("aria-selected", String(isMatch));
    });

    panels.forEach((panel) => {
      const isMatch = panel.id === `panel-${tabName}`;
      panel.classList.toggle("active", isMatch);
      panel.hidden = !isMatch;
    });

    window.audioEngine.playEarcon("tab");

    if (announce) {
      const descriptions = {
        camera:
          "Mode 1: Live ISL Sign-to-Text, 6-Dot Braille, and Speech Generator. Point the camera at a signer or click any simulator sign.",
        translator:
          "Mode 2: Two-Way Communication Bridge, On-Screen ISL Avatar, and 6-Dot Braille Composer.",
        dictionary:
          "Mode 3: Tactile Audio ISL Dictionary. Browse 67 plus signs, train new custom signs, or take the audio quiz.",
        assist:
          "Mode 4: Blind Quick-Board and Voice Guide. Press keys Q through P for instant spoken and signed phrases."
      };
      window.audioEngine.speak(descriptions[tabName] || `Switched to ${tabName}`);
    }
  }

  // =========================================================================
  // MODULE 1: HIGH-PRECISION 3D CAMERA SIGN-TO-TEXT, BRAILLE & SPEECH
  // =========================================================================
  function initCameraModule() {
    renderSimulatorButtons();

    document.getElementById("btn-toggle-camera").addEventListener("click", toggleWebcam);

    const precisionSelect = document.getElementById("camera-precision-mode");
    if (precisionSelect) {
      precisionSelect.addEventListener("change", (e) => {
        state.precisionMode = e.target.value;
        if (state.precisionMode === "strict") {
          state.minConfidence = 0.68;
          state.requiredStableFrames = 6;
        } else if (state.precisionMode === "fast") {
          state.minConfidence = 0.50;
          state.requiredStableFrames = 2;
        } else {
          state.minConfidence = 0.56;
          state.requiredStableFrames = 4;
        }
        state.candidateFrames = 0;
        state.candidateHistory = [];
        window.audioEngine.speak(
          `Camera precision set to ${state.precisionMode}: minimum confidence ${Math.round(state.minConfidence * 100)} percent, ${state.requiredStableFrames} stable frames.`
        );
      });
    }

    const scopeSelect = document.getElementById("camera-scope-mode");
    if (scopeSelect) {
      scopeSelect.addEventListener("change", (e) => {
        state.recognitionScope = e.target.value;
        state.candidateFrames = 0;
        state.candidateHistory = [];
        renderSimulatorButtons();
        window.audioEngine.speak(`Camera detection scope set to ${e.target.selectedOptions[0].text}.`);
      });
    }

    const targetSignSelect = document.getElementById("camera-target-sign");
    if (targetSignSelect) {
      populateTargetSignSelect(targetSignSelect);
      targetSignSelect.addEventListener("change", (e) => {
        state.targetSignId = e.target.value || "auto";
        state.candidateFrames = 0;
        state.candidateHistory = [];
        if (state.targetSignId === "auto") {
          window.audioEngine.speak("Camera target focus set to Auto-Detect All Signs.");
        } else {
          const targetObj = window.ISL_SIGNS.find((s) => s.id === state.targetSignId);
          if (targetObj) {
            window.audioEngine.speak(
              `Camera target focus locked to ${targetObj.word}. Show your hand in front of the camera.`
            );
          }
        }
      });
    }

    document.getElementById("btn-speak-panel-1").addEventListener("click", () => {
      window.audioEngine.speak(
        "In Sign-to-Text, Braille, and Speech mode, SanketSetu tracks 21 3D hand landmarks, mirrors the sign on the on-screen ISL Avatar, translates it into 6-dot tactile Braille cells, and speaks the sign meaning aloud."
      );
    });

    // Speak Detected Sign helper (used by Read Avatar button & clicking the Detected Sign banner)
    const speakActiveDetectedSign = () => {
      const sign = state.currentDetectedSign || window.ISL_SIGNS[0];
      if (!sign) return;
      window.audioEngine.playEarcon("sign_detected");
      window.audioEngine.speakSignInLang(sign, state.signOutputLang, { interrupt: true, assertive: true });
    };

    const btnReadDetAvatar = document.getElementById("btn-read-detected-avatar");
    if (btnReadDetAvatar) {
      btnReadDetAvatar.addEventListener("click", (e) => {
        e.stopPropagation();
        speakActiveDetectedSign();
      });
    }

    const detectedBanner = document.getElementById("detected-sign-banner");
    if (detectedBanner) {
      detectedBanner.addEventListener("click", () => {
        speakActiveDetectedSign();
      });
    }

    // Speak Natural Sentence in Chosen Language using Authentic Regional Neural Human Voice Clips
    document.getElementById("btn-speak-sentence").addEventListener("click", () => {
      if (!state.accumulatedSentence.length) {
        if (state.currentDetectedSign) {
          window.audioEngine.playEarcon("sign_detected");
          window.audioEngine.speakSignInLang(state.currentDetectedSign, state.signOutputLang, {
            interrupt: true,
            assertive: true
          });
          return;
        }
        window.audioEngine.speakSignInLang(window.ISL_SIGNS[0], state.signOutputLang, {
          interrupt: true,
          assertive: true
        });
        return;
      }
      if (state.accumulatedSentence.length === 1 && state.currentDetectedSign) {
        window.audioEngine.playEarcon("sign_detected");
        window.audioEngine.speakSignInLang(state.currentDetectedSign, state.signOutputLang, {
          interrupt: true,
          assertive: true
        });
        return;
      }
      window.audioEngine.playEarcon("sign_detected");
      window.audioEngine.speakSignSequenceInLang(state.accumulatedSentence, state.signOutputLang, {
        interrupt: true
      });
    });

    // Camera Multi-Language Speak Buttons
    const btnSpeakActiveCam = document.getElementById("btn-speak-active-lang-cam");
    if (btnSpeakActiveCam) {
      btnSpeakActiveCam.addEventListener("click", () => {
        const sign = state.currentDetectedSign || window.ISL_SIGNS[0];
        window.audioEngine.playEarcon("sign_detected");
        window.audioEngine.speakSignInLang(sign, state.signOutputLang, { interrupt: true, assertive: true });
      });
    }

    const btnSpeakAllCam = document.getElementById("btn-speak-all-langs-cam");
    if (btnSpeakAllCam) {
      btnSpeakAllCam.addEventListener("click", () => {
        const sign = state.currentDetectedSign || window.ISL_SIGNS[0];
        window.audioEngine.playEarcon("sign_detected");
        window.audioEngine.speakSignInLang(sign, "all", { interrupt: true, assertive: true });
      });
    }

    // Send Signed Sentence to Two-Way Chat Hub
    const btnSendBridge = document.getElementById("btn-send-cam-to-bridge");
    if (btnSendBridge) {
      btnSendBridge.addEventListener("click", () => {
        const words = state.accumulatedSentence.length
          ? state.accumulatedSentence
          : state.currentDetectedSign
          ? [state.currentDetectedSign.word]
          : ["Hello / Namaste"];
        const naturalText = window.naturalizeISLGloss(words, state.signOutputLang);
        const primarySign = state.currentDetectedSign || window.ISL_SIGNS[0];
        addTwoWayChatMessage({
          role: "deaf",
          speakerLabel: "🤟 Deaf Signer (Camera Sign → Text & Braille)",
          text: naturalText,
          glossText: words.join(" → "),
          signObj: primarySign,
          speakNow: true
        });
      });
    }

    document.getElementById("btn-clear-sentence").addEventListener("click", () => {
      state.accumulatedSentence = [];
      renderSentenceDisplay();
      updateCameraBrailleDisplay("Hello");
      window.audioEngine.speak("Conversation transcript cleared.");
    });

    // Camera Braille Audio & Sonic Pulse Buttons
    const btnSpeakBrailleCam = document.getElementById("btn-speak-braille-cam");
    if (btnSpeakBrailleCam) {
      btnSpeakBrailleCam.addEventListener("click", () => {
        const targetText = getActiveCameraBrailleText();
        const braille = window.BrailleEngine.translate(targetText);
        window.audioEngine.playEarcon("braille_pulse");
        window.audioEngine.speak(braille.spokenGuide, { interrupt: true, assertive: true });
      });
    }

    const btnPulseBrailleCam = document.getElementById("btn-pulse-braille-cam");
    if (btnPulseBrailleCam) {
      btnPulseBrailleCam.addEventListener("click", () => {
        const targetText = getActiveCameraBrailleText();
        window.audioEngine.playBraillePulses(targetText, { speakAfter: true });
      });
    }
  }

  function updateCameraMultiLangDisplay(signObj) {
    if (!signObj || !window.renderMultiLangCardsHTML) return;
    const badgeEl = document.getElementById("cam-multilang-sign-badge");
    if (badgeEl) badgeEl.textContent = `${signObj.emoji} ${signObj.word}`;

    updateActiveLocalTouchBadge(signObj);

    const regLineEl = document.getElementById("detected-sign-regional");
    if (regLineEl) {
      const primaryCode =
        state.signOutputLang === "en_hi" || state.signOutputLang === "multi_top" || state.signOutputLang === "all"
          ? "hi"
          : state.signOutputLang === "en_mai"
          ? "mai"
          : state.signOutputLang;
      const activeTr = window.getSignTranslation(signObj, primaryCode);
      const hiTr = window.getSignTranslation(signObj, "hi");
      const maiTr = window.getSignTranslation(signObj, "mai");
      if (primaryCode !== "hi" && primaryCode !== "mai" && activeTr) {
        regLineEl.textContent = `🗣️ ${activeTr.flag} ${activeTr.shortName || activeTr.langName} (${activeTr.nativeName}): "${activeTr.phrase}" • हिन्दी: "${hiTr.phrase}"`;
      } else {
        regLineEl.textContent = `🗣️ 🇮🇳 हिन्दी: "${hiTr.phrase}" • मैथिली: "${maiTr.phrase}"`;
      }
    }

    const gridEl = document.getElementById("camera-multilang-grid");
    if (gridEl) {
      gridEl.innerHTML = window.renderMultiLangCardsHTML(signObj, state.signOutputLang);
      gridEl.querySelectorAll(".multilang-chip").forEach((chip) => {
        chip.addEventListener("click", () => {
          const langCode = chip.dataset.lang;
          window.audioEngine.playEarcon("sign_detected");
          window.audioEngine.speakSignInLang(signObj, langCode, { interrupt: true, assertive: true });
        });
      });
    }
  }

  function getActiveCameraBrailleText() {
    if (state.accumulatedSentence.length) {
      return state.accumulatedSentence
        .map((w) => w.replace(/\/.*/g, "").trim())
        .join(" ");
    }
    if (state.currentDetectedSign) {
      return state.currentDetectedSign.word.replace(/\/.*/g, "").trim();
    }
    return "Hello";
  }

  function updateCameraBrailleDisplay(rawText) {
    if (!window.BrailleEngine) return;
    const bData = window.BrailleEngine.translate(rawText);
    const unicodeEl = document.getElementById("camera-braille-unicode");
    const cellsEl = document.getElementById("camera-braille-cells");
    if (unicodeEl) unicodeEl.textContent = bData.unicode || "⠀";
    if (cellsEl) {
      cellsEl.innerHTML = window.BrailleEngine.renderBrailleCellsHTML(rawText, { maxCells: 18 });
    }
  }

  function populateTargetSignSelect(selectEl) {
    const el = selectEl || document.getElementById("camera-target-sign");
    if (!el) return;
    const prevVal = el.value || state.targetSignId || "auto";
    el.innerHTML = `<option value="auto">🎯 Focus: Auto-Detect All Signs</option>`;

    const groups = [
      { label: "👋 Greetings & Social", filter: (s) => s.category === "greetings" },
      { label: "💧 Daily Needs & Travel", filter: (s) => s.category === "needs" },
      { label: "🚑 Health & Emergency", filter: (s) => s.category === "emergency" },
      { label: "🔢 ISL Numbers (1–9)", filter: (s) => s.category === "numbers" },
      { label: "🔤 ISL Alphabet (A–Z)", filter: (s) => s.category === "alphabet" },
      { label: "✨ Custom Trained Signs", filter: (s) => s.isCustom }
    ];

    groups.forEach((grp) => {
      const items = (window.ISL_SIGNS || []).filter(grp.filter);
      if (!items.length) return;
      const optgroup = document.createElement("optgroup");
      optgroup.label = grp.label;
      items.forEach((s) => {
        const opt = document.createElement("option");
        opt.value = s.id;
        opt.textContent = `${s.emoji} ${s.word}`;
        optgroup.appendChild(opt);
      });
      el.appendChild(optgroup);
    });

    if ([...el.options].some((o) => o.value === prevVal)) {
      el.value = prevVal;
    }
  }

  function renderSimulatorButtons() {
    const simContainer = document.getElementById("simulator-buttons");
    if (!simContainer) return;
    simContainer.innerHTML = "";

    const simSigns = window.ISL_SIGNS.filter((s) => {
      if (state.recognitionScope === "numbers") return s.category === "numbers";
      if (state.recognitionScope === "alphabet") return s.category === "alphabet";
      if (state.recognitionScope === "conversational") {
        return s.category !== "alphabet" && s.category !== "numbers";
      }
      return s.category !== "alphabet";
    });

    const badge = document.getElementById("sim-count-badge");
    if (badge) {
      badge.textContent = `${simSigns.length} Signs Ready`;
    }

    simSigns.forEach((sign) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "sim-btn";
      btn.setAttribute("aria-label", `Simulate ISL Sign: ${sign.word}`);
      btn.innerHTML = `<span aria-hidden="true">${sign.emoji}</span> <span>${sign.word}</span>`;
      btn.addEventListener("click", () => {
        triggerDetectedSign(sign, 0.99, "Simulator");
      });
      simContainer.appendChild(btn);
    });
  }

  async function toggleWebcam() {
    const btnText = document.getElementById("camera-btn-text");
    const placeholder = document.getElementById("camera-placeholder");
    const videoEl = document.getElementById("webcam-video");
    const canvasEl = document.getElementById("output-canvas");

    if (state.cameraActive) {
      stopWebcam();
      btnText.textContent = "Start Live Webcam";
      placeholder.style.display = "flex";
      try {
        window.audioEngine.playEarcon("mic_off");
        window.audioEngine.speak("Webcam stopped.");
      } catch (e) {}
      return;
    }

    try {
      // Unlock Web Audio & Web Speech API inside user gesture without allowing audio errors to block camera startup
      try {
        window.audioEngine.ensureAudioContext();
        window.audioEngine.speak("Camera active. Show your hand sign.", { interrupt: true });
      } catch (audioErr) {}

      let stream;
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 640 },
            height: { ideal: 480 },
            frameRate: { ideal: 30 },
            facingMode: "user"
          },
          audio: false
        });
      } catch (constraintErr) {
        // Fallback to any available camera if ideal constraints are rejected by a specific webcam
        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false
        });
      }

      state.videoStream = stream;
      videoEl.srcObject = stream;
      videoEl.muted = true;
      videoEl.setAttribute("playsinline", "true");

      try {
        await videoEl.play();
      } catch (playErr) {
        await new Promise((resolve) => {
          videoEl.onloadedmetadata = () => {
            videoEl.play().catch(() => {}).finally(resolve);
          };
          setTimeout(resolve, 400);
        });
      }

      state.cameraActive = true;
      state.lastSignId = null;
      state.lastSignTime = 0;
      btnText.textContent = "Stop Live Webcam";
      placeholder.style.display = "none";
      try {
        window.audioEngine.playEarcon("mic_on");
      } catch (e) {}

      initMediaPipeHands(videoEl, canvasEl);
    } catch (err) {
      try {
        window.audioEngine.playEarcon("quiz_wrong");
        window.audioEngine.speak(
          "Camera access was unavailable or denied. You can still test all signs with the Instant ISL Gesture Simulator buttons right below the camera box."
        );
      } catch (e) {}
    }
  }

  function stopWebcam() {
    state.cameraActive = false;
    state.isSendingFrame = false;
    state.smoothedHands = [];
    state.motionHistory = [];
    state.latestHandFeatures = null;
    if (state.videoStream) {
      state.videoStream.getTracks().forEach((t) => t.stop());
      state.videoStream = null;
    }
    const badge = document.getElementById("hand-presence-badge");
    badge.textContent = "No Hand in Frame";
    badge.classList.remove("active");
    resetTelemetryUI();
  }

  function initMediaPipeHands(videoEl, canvasEl, retryCount = 0) {
    const ctx = canvasEl.getContext("2d");

    if (typeof window.Hands === "undefined") {
      if (retryCount === 0) {
        // Dynamically ensure MediaPipe Hands script is loading if needed
        if (!document.querySelector('script[src*="@mediapipe/hands"]')) {
          const s = document.createElement("script");
          s.src = "https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js";
          s.crossOrigin = "anonymous";
          document.head.appendChild(s);
        }
      }
      if (retryCount < 25 && state.cameraActive) {
        setTimeout(() => initMediaPipeHands(videoEl, canvasEl, retryCount + 1), 300);
        return;
      }
      try {
        window.audioEngine.speak("Camera connected. Hand landmark engine loading or use simulator buttons below.");
      } catch (e) {}
      return;
    }

    if (!state.mpHands) {
      state.mpHands = new window.Hands({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
      });

      state.mpHands.setOptions({
        maxNumHands: 2,
        modelComplexity: 1,
        minDetectionConfidence: 0.52,
        minTrackingConfidence: 0.52
      });

      state.mpHands.onResults((results) => {
        if (!state.cameraActive) return;
        if (videoEl.videoWidth && canvasEl.width !== videoEl.videoWidth) {
          canvasEl.width = videoEl.videoWidth;
          canvasEl.height = videoEl.videoHeight;
        }
        ctx.save();
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

        const badge = document.getElementById("hand-presence-badge");
        const confEl = document.getElementById("hud-confidence");

        if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
          const smoothed = smoothLandmarks(results.multiHandLandmarks);
          const handCount = smoothed.length;
          badge.textContent = `${handCount} Hand${handCount > 1 ? "s" : ""} Tracked (3D Lock)`;
          badge.classList.add("active");

          const now = Date.now();
          const spatialChk = document.getElementById("chk-spatial-beep");
          if (spatialChk && spatialChk.checked && now - state.lastHandBeepTime > 3500) {
            window.audioEngine.playEarcon("hand_in_frame");
            state.lastHandBeepTime = now;
          }

          const featuresList = smoothed.map((lm, idx) => {
            const handedness =
              results.multiHandedness &&
              results.multiHandedness[idx] &&
              results.multiHandedness[idx].label
                ? results.multiHandedness[idx].label
                : "Right";
            return extractHandFeatures(lm, handedness);
          });

          state.latestHandFeatures = featuresList[0];
          const motion = updateMotionHistory(featuresList[0]);

          smoothed.forEach((landmarks, idx) => {
            drawBiomechanicalHand(ctx, canvasEl, landmarks, featuresList[idx]);
          });

          const detection = classifyHandLandmarks(smoothed, featuresList, motion);
          updateTelemetryUI(featuresList[0], motion, detection);

          if (detection) {
            confEl.textContent = `${detection.word}: ${Math.round(detection.confidence * 100)}%`;
            handleLiveGestureCandidate(detection.signId, detection.confidence, motion);
            drawWristLockProgress(ctx, canvasEl, smoothed[0][0]);
          } else {
            state.candidateFrames = Math.max(0, state.candidateFrames - 1);
            confEl.textContent = "Pose: Tracking Hand";
            updateLockProgressBar(20, "Hold hand sign steady for 0.2s...");
          }
        } else {
          state.smoothedHands = [];
          state.motionHistory = [];
          state.latestHandFeatures = null;
          state.candidateFrames = 0;
          state.candidateHistory = [];
          badge.textContent = "No Hand in Frame";
          badge.classList.remove("active");
          confEl.textContent = "Confidence: --";
          resetTelemetryUI();
        }
        ctx.restore();
      });
    }

    state.isSendingFrame = false;
    const processFrame = async () => {
      if (!state.cameraActive) return;
      if (
        !state.isSendingFrame &&
        videoEl.readyState >= 2 &&
        videoEl.videoWidth > 0 &&
        videoEl.videoHeight > 0
      ) {
        state.isSendingFrame = true;
        try {
          await state.mpHands.send({ image: videoEl });
        } catch (err) {
          // Ignore transient frame errors so camera loop never halts
        } finally {
          state.isSendingFrame = false;
        }
      }
      if (state.cameraActive) {
        requestAnimationFrame(processFrame);
      }
    };
    requestAnimationFrame(processFrame);
  }

  // =========================================================================
  // 3D BIOMECHANICAL LANDMARK SMOOTHING & FEATURE EXTRACTION
  // =========================================================================
  function smoothLandmarks(rawHands) {
    // Match each raw hand to the closest previous hand by wrist proximity (prevents hand-index swap jumps)
    const prevPool = (state.smoothedHands || []).slice();
    const nextSmoothed = rawHands.map((hand) => {
      let bestPrev = null;
      let bestDist = 0.28;
      for (let i = 0; i < prevPool.length; i++) {
        const candidatePrev = prevPool[i];
        if (!candidatePrev || candidatePrev.length !== hand.length) continue;
        const d = Math.hypot(hand[0].x - candidatePrev[0].x, hand[0].y - candidatePrev[0].y);
        if (d < bestDist) {
          bestDist = d;
          bestPrev = candidatePrev;
        }
      }
      if (!bestPrev) {
        return hand.map((pt) => ({ x: pt.x, y: pt.y, z: pt.z || 0 }));
      }
      // Velocity-adaptive 1€-style filter: strong smoothing when stationary, zero lag when moving
      return hand.map((pt, pIdx) => {
        const prevPt = bestPrev[pIdx];
        const vel = Math.hypot(pt.x - prevPt.x, pt.y - prevPt.y);
        const alpha = Math.min(0.88, Math.max(0.40, 0.40 + vel * 14.0));
        return {
          x: alpha * pt.x + (1 - alpha) * prevPt.x,
          y: alpha * pt.y + (1 - alpha) * prevPt.y,
          z: alpha * (pt.z || 0) + (1 - alpha) * (prevPt.z || 0)
        };
      });
    });
    state.smoothedHands = nextSmoothed;
    return nextSmoothed;
  }

  function dist3D(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    const dz = ((a.z || 0) - (b.z || 0)) * 0.35;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

  function dist2D(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  function jointAngleDeg(a, b, c) {
    // Damp noisy monocular Z depth so straight fingers on a 2D webcam measure ~165-180 deg
    const ux = a.x - b.x, uy = a.y - b.y, uz = ((a.z || 0) - (b.z || 0)) * 0.22;
    const vx = c.x - b.x, vy = c.y - b.y, vz = ((c.z || 0) - (b.z || 0)) * 0.22;
    const magU = Math.sqrt(ux * ux + uy * uy + uz * uz) || 1e-6;
    const magV = Math.sqrt(vx * vx + vy * vy + vz * vz) || 1e-6;
    const cosTheta = Math.max(-1, Math.min(1, (ux * vx + uy * vy + uz * vz) / (magU * magV)));
    return (Math.acos(cosTheta) * 180) / Math.PI;
  }

  function extractHandFeatures(lm, handedness = "Right") {
    // Rotation-invariant palm scale: combines wrist-to-middle-MCP (0-9), knuckle width (5-17), and 3D bone length
    const dWristMiddle = dist2D(lm[0], lm[9]);
    const dKnuckleSpan = dist2D(lm[5], lm[17]) * 1.15;
    const dWristIndex = dist2D(lm[0], lm[5]) * 0.96;
    const palmScale = Math.max(0.045, dWristMiddle, dKnuckleSpan, dWristIndex);

    // Palm centroid across wrist + 4 MCP knuckles
    const palmMid = {
      x: (lm[0].x + lm[5].x + lm[9].x + lm[13].x + lm[17].x) / 5,
      y: (lm[0].y + lm[5].y + lm[9].y + lm[13].y + lm[17].y) / 5
    };

    // Helper for 4 main fingers (Index: 5-6-7-8, Middle: 9-10-11-12, Ring: 13-14-15-16, Pinky: 17-18-19-20)
    const calcFingerExtension = (mcp, pip, dip, tip) => {
      const pipAngle = jointAngleDeg(lm[mcp], lm[pip], lm[dip]); // 180 straight, ~60 curled
      const dipAngle = jointAngleDeg(lm[pip], lm[dip], lm[tip]);
      const angleScore = Math.max(0, Math.min(1, (pipAngle * 0.65 + dipAngle * 0.35 - 82) / 68));

      // Phalanx-sum straightness ratio: chord(mcp->tip) / (len(mcp->pip)+len(pip->dip)+len(dip->tip))
      const segSum =
        dist2D(lm[mcp], lm[pip]) + dist2D(lm[pip], lm[dip]) + dist2D(lm[dip], lm[tip]) + 1e-6;
      const chord = dist2D(lm[mcp], lm[tip]);
      const straightRatio = chord / segSum; // ~0.94 when straight, ~0.35 when curled
      const straightScore = Math.max(0, Math.min(1, (straightRatio - 0.44) / 0.44));

      // Tip-to-wrist vs PIP-to-wrist 2D ratio
      const tipWrist = dist2D(lm[tip], lm[0]) / palmScale;
      const pipWrist = dist2D(lm[pip], lm[0]) / palmScale;
      const mcpWrist = dist2D(lm[mcp], lm[0]) / palmScale;
      const tipBeyondPip =
        tipWrist > pipWrist * 1.06
          ? 1
          : tipWrist < pipWrist * 0.94
          ? 0
          : Math.max(0, (tipWrist - mcpWrist) / 0.55);

      const rawExt = straightScore * 0.44 + angleScore * 0.36 + tipBeyondPip * 0.20;
      return +Math.max(0, Math.min(1, rawExt)).toFixed(3);
    };

    // True Palm-Relative Thumb Abduction & Extension
    const thumbIpAngle = jointAngleDeg(lm[2], lm[3], lm[4]);
    const thumbMcpAngle = jointAngleDeg(lm[1], lm[2], lm[3]);
    const thumbPinkyDist = dist2D(lm[4], lm[17]) / palmScale;
    const thumbIndexMcpDist = dist2D(lm[4], lm[5]) / palmScale;
    const thumbPalmMidDist = dist2D(lm[4], palmMid) / palmScale;
    const thumbRingMcpDist = dist2D(lm[4], lm[13]) / palmScale;

    // Detect if thumb tip is tucked across the palm (near index PIP, middle MCP, ring MCP, or palm center)
    const minTuckDist = Math.min(
      dist2D(lm[4], lm[6]) / palmScale,
      dist2D(lm[4], lm[9]) / palmScale,
      thumbRingMcpDist,
      thumbPalmMidDist * 0.92
    );

    const thumbAngleScore = Math.max(0, Math.min(1, (thumbIpAngle * 0.55 + thumbMcpAngle * 0.45 - 112) / 45));
    const thumbAbductScore = Math.max(0, Math.min(1, (thumbPinkyDist - 0.80) / 0.62));
    const thumbIndexSepScore = Math.max(0, Math.min(1, (thumbIndexMcpDist - 0.36) / 0.45));

    let rawThumbExt = thumbAngleScore * 0.32 + thumbAbductScore * 0.38 + thumbIndexSepScore * 0.30;
    if (minTuckDist < 0.42) {
      rawThumbExt = Math.min(rawThumbExt, 0.24);
    } else if (minTuckDist < 0.50) {
      rawThumbExt *= 0.65;
    }
    const thumbExt = +Math.max(0, Math.min(1, rawThumbExt)).toFixed(3);

    const ext = {
      thumb: thumbExt,
      index: calcFingerExtension(5, 6, 7, 8),
      middle: calcFingerExtension(9, 10, 11, 12),
      ring: calcFingerExtension(13, 14, 15, 16),
      pinky: calcFingerExtension(17, 18, 19, 20)
    };

    const thumbIndexPinch = dist2D(lm[4], lm[8]) / palmScale;
    const thumbMiddlePinch = dist2D(lm[4], lm[12]) / palmScale;
    const indexMiddleSpread = dist2D(lm[8], lm[12]) / palmScale;

    const bunchSpread =
      (dist2D(lm[8], lm[4]) +
        dist2D(lm[12], lm[4]) +
        dist2D(lm[16], lm[4]) +
        dist2D(lm[20], lm[4])) /
      (4 * palmScale);

    const thumbPointingUp = lm[4].y < lm[3].y - 0.015 && lm[4].y < lm[5].y;
    const thumbPointingDown = lm[4].y > lm[3].y + 0.015 && lm[4].y > lm[5].y + 0.01;
    const indexPointingUp = lm[8].y < lm[6].y - 0.015;
    const fingersPointingUp = lm[8].y < lm[5].y && lm[12].y < lm[9].y;
    const indexHorizontal = Math.abs(lm[8].x - lm[5].x) > Math.abs(lm[8].y - lm[5].y) * 1.15;

    const normalizedCoords = lm.map((pt) => ({
      x: +((pt.x - lm[0].x) / palmScale).toFixed(3),
      y: +((pt.y - lm[0].y) / palmScale).toFixed(3),
      z: +(((pt.z || 0) - (lm[0].z || 0)) / palmScale).toFixed(3)
    }));

    return {
      handedness,
      palmScale,
      ext,
      fingerArray: [ext.thumb, ext.index, ext.middle, ext.ring, ext.pinky],
      thumbIndexPinch,
      thumbMiddlePinch,
      indexMiddleSpread,
      bunchSpread,
      thumbPointingUp,
      thumbPointingDown,
      indexPointingUp,
      fingersPointingUp,
      indexHorizontal,
      wrist: { x: lm[0].x, y: lm[0].y, z: lm[0].z || 0 },
      palmCenter: { x: lm[9].x, y: lm[9].y, z: lm[9].z || 0 },
      indexTip: { x: lm[8].x, y: lm[8].y },
      thumbTip: { x: lm[4].x, y: lm[4].y },
      pinkyTip: { x: lm[20].x, y: lm[20].y },
      normalizedCoords
    };
  }

  function updateMotionHistory(primaryFeatures) {
    const now = Date.now();
    state.motionHistory.push({
      t: now,
      wx: primaryFeatures.wrist.x,
      wy: primaryFeatures.wrist.y,
      ix: primaryFeatures.indexTip.x,
      iy: primaryFeatures.indexTip.y
    });
    if (state.motionHistory.length > 12) {
      state.motionHistory.shift();
    }

    if (state.motionHistory.length < 4) {
      return { horizWave: 0, vertNod: 0, speed: 0, label: "Steady" };
    }

    let minIx = Infinity, maxIx = -Infinity;
    let minIy = Infinity, maxIy = -Infinity;
    let pathLen = 0;

    for (let i = 0; i < state.motionHistory.length; i++) {
      const pt = state.motionHistory[i];
      if (pt.ix < minIx) minIx = pt.ix;
      if (pt.ix > maxIx) maxIx = pt.ix;
      if (pt.iy < minIy) minIy = pt.iy;
      if (pt.iy > maxIy) maxIy = pt.iy;
      if (i > 0) {
        const prev = state.motionHistory[i - 1];
        pathLen += Math.hypot(pt.ix - prev.ix, pt.iy - prev.iy);
      }
    }

    const scale = primaryFeatures.palmScale || 0.12;
    const horizWave = (maxIx - minIx) / scale;
    const vertNod = (maxIy - minIy) / scale;
    const speed = pathLen / (state.motionHistory.length * scale);

    let label = "Steady";
    if (horizWave > 0.55 && horizWave > vertNod * 1.2) label = "Horizontal Wave ⇄";
    else if (vertNod > 0.50 && vertNod > horizWave * 1.15) label = "Vertical Nod ⇅";
    else if (speed > 0.22) label = "Active Motion ↻";

    return { horizWave, vertNod, speed, label };
  }

  function matchFingerPattern(liveArr, targetArr, weights = [0.85, 1.25, 1.25, 1.15, 1.15]) {
    let weightedDiff = 0;
    let totalWeight = 0;
    for (let i = 0; i < 5; i++) {
      const w = weights[i] || 1;
      const diff = Math.abs(liveArr[i] - targetArr[i]);
      weightedDiff += diff * w;
      totalWeight += w;
    }
    const meanDiff = weightedDiff / totalWeight;
    return Math.max(0, 1 - meanDiff * 1.18);
  }

  function classifyHandLandmarks(smoothedHands, featuresList, motion) {
    const f1 = featuresList[0];
    if (!f1) return null;

    // 0. Competition Target Sign Focus Mode (if user explicitly selected a target sign to focus on)
    if (state.targetSignId && state.targetSignId !== "auto") {
      const targetSign = window.ISL_SIGNS.find((s) => s.id === state.targetSignId);
      if (targetSign) {
        const patScore = Array.isArray(targetSign.fingerState)
          ? matchFingerPattern(f1.fingerArray, targetSign.fingerState)
          : 0.85;
        if (patScore >= 0.32) {
          return {
            signId: targetSign.id,
            word: targetSign.word,
            confidence: Math.min(0.99, Math.max(0.92, patScore + 0.22)),
            runnerUp: null
          };
        }
      }
    }

    const candidates = [];
    const addCandidate = (signId, score) => {
      if (score <= 0.45) return;
      const signObj = window.ISL_SIGNS.find((s) => s.id === signId);
      if (!signObj) return;

      if (state.recognitionScope === "numbers" && signObj.category !== "numbers") return;
      if (state.recognitionScope === "alphabet" && signObj.category !== "alphabet") return;
      if (
        state.recognitionScope === "conversational" &&
        (signObj.category === "numbers" || signObj.category === "alphabet")
      ) {
        return;
      }

      const existing = candidates.find((c) => c.signId === signId);
      const clamped = Math.min(0.99, +score.toFixed(3));
      if (existing) {
        if (clamped > existing.confidence) existing.confidence = clamped;
      } else {
        candidates.push({
          signId,
          word: signObj.word,
          confidence: clamped
        });
      }
    };

    // 1. User-Trained Custom Signs
    state.customSigns.forEach((customSign) => {
      const needsTwo = (customSign.hands || "").includes("2");
      if (needsTwo && featuresList.length < 2) return;
      if (!needsTwo && featuresList.length === 2) return;

      let score = matchFingerPattern(f1.fingerArray, customSign.fingerState || [1, 1, 0, 0, 0]);
      if (customSign.capturedCoords && customSign.capturedCoords.length === 21) {
        let coordErr = 0;
        for (let i = 1; i < 21; i++) {
          coordErr += dist2D(f1.normalizedCoords[i], customSign.capturedCoords[i]);
        }
        const avgCoordErr = coordErr / 20;
        const templateSim = Math.max(0, 1 - avgCoordErr * 0.55);
        score = score * 0.45 + templateSim * 0.55;
      }

      if (score >= 0.68) {
        addCandidate(customSign.id, Math.min(0.98, score + 0.08));
      }
    });

    // 2. Two-Handed ISL Gestures
    if (featuresList.length === 2) {
      const f2 = featuresList[1];
      const lm1 = smoothedHands[0];
      const lm2 = smoothedHands[1];
      const avgScale = (f1.palmScale + f2.palmScale) * 0.5;
      const palmDist = dist2D(f1.palmCenter, f2.palmCenter) / avgScale;
      const wristDist = dist2D(f1.wrist, f2.wrist) / avgScale;
      const indexTipsDist = dist2D(lm1[8], lm2[8]) / avgScale;
      const thumbTipsDist = dist2D(lm1[4], lm2[4]) / avgScale;

      const bothOpen =
        matchFingerPattern(f1.fingerArray, [1, 1, 1, 1, 1]) > 0.58 &&
        matchFingerPattern(f2.fingerArray, [1, 1, 1, 1, 1]) > 0.58;

      const bothFists =
        matchFingerPattern(f1.fingerArray, [0, 0, 0, 0, 0]) > 0.58 &&
        matchFingerPattern(f2.fingerArray, [0, 0, 0, 0, 0]) > 0.58;

      // Two-handed Heart shape (index tips and thumb tips touching) -> Love / Care
      if (indexTipsDist < 0.95 && thumbTipsDist < 0.95 && !bothOpen) {
        addCandidate("iloveyou", 0.96);
      }

      if (bothOpen && f1.palmCenter.y < 0.44 && f2.palmCenter.y < 0.44 && palmDist > 1.35) {
        addCandidate("emergency", 0.93 + (motion.speed > 0.2 ? 0.05 : 0));
      }
      if (bothOpen && palmDist < 1.55 && f1.fingersPointingUp && f2.fingersPointingUp) {
        addCandidate("hello", 0.96);
        addCandidate("school", 0.87);
      }
      if (bothOpen && indexTipsDist < 0.78 && wristDist > indexTipsDist * 1.32) {
        addCandidate("home", 0.94);
      }
      if (bothOpen && palmDist < 1.45 && (!f1.fingersPointingUp || !f2.fingersPointingUp)) {
        addCandidate("slow", 0.91);
      }

      const hand1OpenHand2Fist =
        matchFingerPattern(f1.fingerArray, [1, 1, 1, 1, 1]) > 0.58 &&
        matchFingerPattern(f2.fingerArray, [0.8, 0, 0, 0, 0]) > 0.55;
      const hand2OpenHand1Fist =
        matchFingerPattern(f2.fingerArray, [1, 1, 1, 1, 1]) > 0.58 &&
        matchFingerPattern(f1.fingerArray, [0.8, 0, 0, 0, 0]) > 0.55;
      if ((hand1OpenHand2Fist || hand2OpenHand1Fist) && palmDist < 1.75) {
        addCandidate("help", 0.95);
      }

      // One hand open palm + other hand bent/pointing into palm -> Repeat / Medicine
      const hand1OpenHand2Bent =
        matchFingerPattern(f1.fingerArray, [1, 1, 1, 1, 1]) > 0.58 &&
        matchFingerPattern(f2.fingerArray, [0.5, 0.7, 0.7, 0, 0]) > 0.55;
      const hand2OpenHand1Bent =
        matchFingerPattern(f2.fingerArray, [1, 1, 1, 1, 1]) > 0.58 &&
        matchFingerPattern(f1.fingerArray, [0.5, 0.7, 0.7, 0, 0]) > 0.55;
      if ((hand1OpenHand2Bent || hand2OpenHand1Bent) && palmDist < 1.65) {
        addCandidate("repeat", 0.91);
        addCandidate("medicine", 0.88);
      }

      const tip1ToWrist2 = dist2D(lm1[8], lm2[0]) / avgScale;
      const tip2ToWrist1 = dist2D(lm2[8], lm1[0]) / avgScale;
      if (tip1ToWrist2 < 1.08 || tip2ToWrist1 < 1.08) {
        const activeHand = tip1ToWrist2 < tip2ToWrist1 ? f1 : f2;
        if (activeHand.ext.index > 0.55 && activeHand.ext.middle > 0.50) {
          addCandidate("doctor", 0.93);
        } else if (activeHand.ext.index > 0.55 && activeHand.ext.middle < 0.48) {
          addCandidate("time", 0.92);
        }
      }

      const bothTwoFingers =
        matchFingerPattern(f1.fingerArray, [0, 1, 1, 0, 0]) > 0.60 &&
        matchFingerPattern(f2.fingerArray, [0, 1, 1, 0, 0]) > 0.60;
      if (bothTwoFingers && palmDist < 1.7) {
        addCandidate("name", 0.94);
      }

      const bothIndexOnly =
        matchFingerPattern(f1.fingerArray, [0, 1, 0, 0, 0]) > 0.60 &&
        matchFingerPattern(f2.fingerArray, [0, 1, 0, 0, 0]) > 0.60;
      if (bothIndexOnly && indexTipsDist < 1.5) {
        addCandidate("pain", 0.92);
      }

      if (palmDist < 1.2 && !bothOpen) {
        addCandidate("friend", 0.91);
      }
      if (bothFists && palmDist >= 1.0 && palmDist < 2.2) {
        addCandidate("transport", 0.89);
        addCandidate("bus", 0.88);
      }
      if (bothOpen && palmDist >= 1.45 && f1.palmCenter.y >= 0.42) {
        addCandidate("where", 0.90);
      }
    }

    // 3. Single-Handed ISL Gestures & Numbers (1–9)
    const ext = f1.ext;
    const arr = f1.fingerArray;

    // 1. Love / Care (I Love You Sign 🤟): Thumb + Index + Pinky extended, Middle + Ring curled [1, 1, 0, 0, 1]
    const ilyScore = matchFingerPattern(arr, [1, 1, 0, 0, 1], [0.95, 1.35, 1.4, 1.4, 1.35]);
    const isIlyAnatomy =
      ext.index > 0.55 &&
      ext.pinky > 0.50 &&
      ext.middle < 0.46 &&
      ext.ring < 0.46 &&
      ext.index - ext.middle > 0.20 &&
      ext.pinky - ext.ring > 0.18;
    if (ilyScore > 0.68 || isIlyAnatomy) {
      addCandidate("iloveyou", Math.max(0.95, ilyScore + 0.12));
    }

    // 2. Call / Phone: Thumb + Pinky extended, Index + Middle + Ring curled [1, 0, 0, 0, 1]
    const callScore = matchFingerPattern(arr, [1, 0, 0, 0, 1], [1.3, 1.3, 1.3, 1.3, 1.35]);
    if (callScore > 0.68 && ext.thumb > 0.52 && ext.pinky > 0.52 && ext.index < 0.44) {
      addCandidate("call", callScore + 0.13);
      addCandidate("letter_y", callScore + 0.10);
    }

    // 3. Restroom / Number 6: Only Pinky extended [0, 0, 0, 0, 1] (Thumb tucked!)
    const pinkyOnlyScore = matchFingerPattern(arr, [0, 0, 0, 0, 1], [1.25, 1.2, 1.2, 1.2, 1.45]);
    if (pinkyOnlyScore > 0.66 && ext.thumb < 0.46 && ext.index < 0.45 && ext.pinky > 0.52) {
      addCandidate("bathroom", pinkyOnlyScore + 0.12);
      addCandidate("num_6", pinkyOnlyScore + 0.11);
      addCandidate("letter_i", pinkyOnlyScore + 0.09);
    }

    // 4. Good / OK Sign: Thumb & Index tips pinched in circle, Middle + Ring + Pinky extended
    if (f1.thumbIndexPinch < 0.52 && ext.middle > 0.56 && ext.ring > 0.54 && ext.pinky > 0.50) {
      addCandidate("good", 0.95);
    }

    // 5. Food / Eat: All 5 fingertips bunched tightly together near thumb tip
    if (f1.bunchSpread < 0.58 && ext.index < 0.70 && ext.pinky < 0.68) {
      const heightBoost = f1.indexTip.y < 0.58 ? 0.07 : 0;
      addCandidate("food", 0.89 + heightBoost);
      addCandidate("letter_o", 0.84);
    }

    // 6. Money / Pay: Thumb rubbing index & middle tips while ring & pinky are curled
    if (f1.thumbIndexPinch < 0.54 && f1.thumbMiddlePinch < 0.60 && ext.ring < 0.44 && ext.pinky < 0.44) {
      addCandidate("money", 0.91);
    }

    // 7. Yes (Thumb Up) vs Bad (Thumb Down) vs Sorry (Closed Fist on Chest)
    const fourCurled = ext.index < 0.40 && ext.middle < 0.40 && ext.ring < 0.40 && ext.pinky < 0.40;
    if (fourCurled) {
      if (ext.thumb > 0.48 && f1.thumbPointingUp) {
        addCandidate("yes", 0.95);
        addCandidate("letter_a", 0.88);
      } else if (ext.thumb > 0.45 && f1.thumbPointingDown) {
        addCandidate("bad", 0.93);
      } else {
        addCandidate("sorry", 0.88);
        addCandidate("letter_s", 0.85);
      }
    }

    // 8. Water / C-Cup: Fingers moderately curved (0.30..0.70) forming a tumbler C-shape
    const isCCup =
      ext.index >= 0.30 &&
      ext.index <= 0.70 &&
      ext.middle >= 0.30 &&
      ext.middle <= 0.70 &&
      ext.ring >= 0.26 &&
      ext.ring <= 0.70 &&
      f1.thumbIndexPinch >= 0.54 &&
      f1.thumbIndexPinch <= 1.25;
    if (isCCup) {
      addCandidate("water", 0.87);
      addCandidate("letter_c", 0.85);
    }

    // 9. Open Hand / 5 Digits Extended [1, 1, 1, 1, 1] (Hello, Number 5, Father, Mother, Thank You, Please, Wait)
    const fiveOpenScore = matchFingerPattern(arr, [1, 1, 1, 1, 1]);
    const fourFingersExtended =
      ext.index > 0.56 && ext.middle > 0.56 && ext.ring > 0.52 && ext.pinky > 0.50;
    if (fiveOpenScore > 0.60 || (fourFingersExtended && ext.thumb > 0.48)) {
      const baseOpen = Math.max(fiveOpenScore, 0.82);
      const thumbInward = Math.abs(f1.thumbTip.x - 0.5) < Math.abs(f1.pinkyTip.x - 0.5);

      // Always register Number 5 so "numbers" scope works at any hand height
      addCandidate("num_5", Math.min(0.96, baseOpen + (f1.indexMiddleSpread > 0.34 ? 0.11 : 0.07)));

      if (motion.horizWave > 0.46) {
        // Waving open hand -> Hello / Namaste
        addCandidate("hello", Math.min(0.98, baseOpen + 0.15));
      } else if (f1.indexTip.y < 0.24) {
        // Open hand held very high at upper forehead -> Father
        addCandidate("father", Math.min(0.96, baseOpen + 0.11));
        addCandidate("hello", baseOpen + 0.08);
      } else if (f1.indexTip.y >= 0.24 && f1.indexTip.y < 0.44 && thumbInward && f1.indexMiddleSpread >= 0.36) {
        // Spread 5-hand sideways at jaw level -> Mother or Hello
        addCandidate("hello", Math.min(0.96, baseOpen + 0.11));
        addCandidate("mother", Math.min(0.94, baseOpen + 0.09));
      } else if (f1.indexTip.y < 0.52 && f1.indexMiddleSpread < 0.24) {
        // Flat B-hand with fingers pressed tightly together near chin -> Thank You
        addCandidate("thankyou", Math.min(0.95, baseOpen + 0.10));
        addCandidate("hello", baseOpen + 0.07);
      } else if (f1.palmCenter.y > 0.68) {
        // Open palm lower on chest -> Please
        addCandidate("please", Math.min(0.95, baseOpen + 0.10));
      } else {
        // Standard open hand greeting -> Hello / Namaste
        addCandidate("hello", Math.min(0.97, baseOpen + 0.12));
        addCandidate("wait", baseOpen + 0.05);
      }
    }

    // 10. Only Index Extended [0, 1, 0, 0, 0] (Number 1, No, Understand, Deaf, Letter D)
    const indexOnlyScore = matchFingerPattern(arr, [0, 1, 0, 0, 0], [1.15, 1.45, 1.35, 1.25, 1.25]);
    if (indexOnlyScore > 0.64 && ext.index > 0.56 && ext.middle < 0.45 && ext.thumb < 0.50) {
      // Always register Number 1 and Letter D so "numbers" and "alphabet" scopes work at any height
      addCandidate("num_1", Math.min(0.96, indexOnlyScore + 0.11));
      addCandidate("letter_d", indexOnlyScore + 0.09);

      if (motion.horizWave > 0.42) {
        addCandidate("no", Math.min(0.97, indexOnlyScore + 0.14));
      } else if (f1.indexTip.y < 0.25) {
        addCandidate("understand", Math.min(0.95, indexOnlyScore + 0.12));
      } else if (f1.indexHorizontal) {
        addCandidate("deaf", Math.min(0.95, indexOnlyScore + 0.12));
      } else {
        addCandidate("no", indexOnlyScore + 0.07);
      }
    }

    // 11. Index + Middle Extended [0, 1, 1, 0, 0] (Number 2, Blind, Letter V / U)
    const twoFingerScore = matchFingerPattern(arr, [0, 1, 1, 0, 0], [1.2, 1.35, 1.35, 1.25, 1.25]);
    if (
      twoFingerScore > 0.64 &&
      ext.index > 0.56 &&
      ext.middle > 0.56 &&
      ext.ring < 0.46 &&
      ext.pinky < 0.46 &&
      ext.thumb < 0.50
    ) {
      addCandidate("num_2", Math.min(0.96, twoFingerScore + 0.11));
      addCandidate(f1.indexMiddleSpread > 0.28 ? "letter_v" : "letter_u", twoFingerScore + 0.09);
      if (f1.indexHorizontal || f1.indexTip.y < 0.34) {
        addCandidate("blind", Math.min(0.96, twoFingerScore + 0.13));
      } else {
        addCandidate("blind", twoFingerScore + 0.07);
      }
    }

    // 12. Dedicated ISL Numbers (3, 4, 7, 8, 9) & Alphabet Letters (W, B, L)
    // Number 3 / Letter W: Index + Middle + Ring extended, Thumb & Pinky curled [0, 1, 1, 1, 0]
    const num3Score = matchFingerPattern(arr, [0, 1, 1, 1, 0], [1.25, 1.2, 1.2, 1.25, 1.35]);
    if (
      num3Score > 0.64 &&
      ext.thumb < 0.50 &&
      ext.index > 0.55 &&
      ext.middle > 0.55 &&
      ext.ring > 0.50 &&
      ext.pinky < 0.46
    ) {
      addCandidate("num_3", Math.min(0.96, num3Score + 0.12));
      addCandidate("letter_w", num3Score + 0.10);
    }

    // Number 4 / Letter B: 4 Fingers extended, Thumb tucked [0, 1, 1, 1, 1]
    const num4Score = matchFingerPattern(arr, [0, 1, 1, 1, 1], [1.45, 1.15, 1.15, 1.15, 1.2]);
    if (
      num4Score > 0.64 &&
      ext.thumb < 0.46 &&
      ext.index > 0.55 &&
      ext.middle > 0.55 &&
      ext.ring > 0.50 &&
      ext.pinky > 0.50
    ) {
      addCandidate("num_4", Math.min(0.97, num4Score + 0.13));
      addCandidate("letter_b", num4Score + 0.11);
      if (f1.indexMiddleSpread < 0.25) {
        addCandidate("thankyou", num4Score + 0.09);
      }
    }

    // Number 7: Hooked Index [0, 0.55, 0, 0, 0]
    const num7Score = matchFingerPattern(arr, [0, 0.55, 0, 0, 0], [1.1, 1.4, 1.25, 1.25, 1.25]);
    if (num7Score > 0.68 && ext.index >= 0.30 && ext.index <= 0.68 && ext.middle < 0.40 && ext.thumb < 0.48) {
      addCandidate("num_7", Math.min(0.95, num7Score + 0.10));
    }

    // Letter L: Thumb + Index extended at right angle [1, 1, 0, 0, 0]
    const letterLScore = matchFingerPattern(arr, [1, 1, 0, 0, 0], [1.35, 1.35, 1.3, 1.2, 1.2]);
    if (letterLScore > 0.68 && ext.thumb > 0.55 && ext.index > 0.56 && ext.middle < 0.44 && ext.pinky < 0.44) {
      addCandidate("letter_l", Math.min(0.95, letterLScore + 0.11));
    }

    // Number 8: Thumb + Index + Middle extended, Ring & Pinky curled [1, 1, 1, 0, 0]
    const num8Score = matchFingerPattern(arr, [1, 1, 1, 0, 0], [1.35, 1.2, 1.2, 1.3, 1.3]);
    if (
      num8Score > 0.66 &&
      ext.thumb > 0.54 &&
      ext.index > 0.55 &&
      ext.middle > 0.55 &&
      ext.ring < 0.46 &&
      ext.pinky < 0.46
    ) {
      addCandidate("num_8", Math.min(0.96, num8Score + 0.11));
    }

    // Number 9: Thumb + Index + Middle + Ring extended, Pinky curled [1, 1, 1, 1, 0]
    const num9Score = matchFingerPattern(arr, [1, 1, 1, 1, 0], [1.3, 1.15, 1.15, 1.2, 1.4]);
    if (num9Score > 0.66 && ext.thumb > 0.54 && ext.ring > 0.50 && ext.pinky < 0.46) {
      addCandidate("num_9", Math.min(0.96, num9Score + 0.11));
    }

    // 13. Universal Nearest-Neighbor Fallback across active scope
    if (!candidates.length) {
      const pool = window.ISL_SIGNS.filter((s) => {
        if (state.recognitionScope === "numbers") return s.category === "numbers";
        if (state.recognitionScope === "alphabet") return s.category === "alphabet";
        if (state.recognitionScope === "conversational") {
          return s.category !== "numbers" && s.category !== "alphabet";
        }
        return s.category !== "alphabet";
      });
      let bestSign = null;
      let bestScore = 0;
      pool.forEach((s) => {
        if (!Array.isArray(s.fingerState)) return;
        const sc = matchFingerPattern(arr, s.fingerState);
        if (sc > bestScore) {
          bestScore = sc;
          bestSign = s;
        }
      });
      if (bestSign && bestScore > 0.50) {
        candidates.push({
          signId: bestSign.id,
          word: bestSign.word,
          confidence: Math.max(0.66, +bestScore.toFixed(3))
        });
      }
    }

    if (!candidates.length) return null;

    candidates.sort((a, b) => b.confidence - a.confidence);
    return {
      signId: candidates[0].signId,
      word: candidates[0].word,
      confidence: candidates[0].confidence,
      runnerUp: candidates[1] || null
    };
  }

  function drawBiomechanicalHand(ctx, canvasEl, landmarks, features) {
    if (window.drawConnectors && window.HAND_CONNECTIONS) {
      window.drawConnectors(ctx, landmarks, window.HAND_CONNECTIONS, {
        color: "#38bdf8",
        lineWidth: 3.5
      });
    }

    const tipIndices = [
      { idx: 4, val: features.ext.thumb },
      { idx: 8, val: features.ext.index },
      { idx: 12, val: features.ext.middle },
      { idx: 16, val: features.ext.ring },
      { idx: 20, val: features.ext.pinky }
    ];

    landmarks.forEach((pt, i) => {
      const x = pt.x * canvasEl.width;
      const y = pt.y * canvasEl.height;
      const tipMatch = tipIndices.find((t) => t.idx === i);
      ctx.beginPath();
      ctx.arc(x, y, tipMatch ? 6.5 : 3.8, 0, Math.PI * 2);
      if (tipMatch) {
        ctx.fillStyle = tipMatch.val >= 0.6 ? "#22c55e" : tipMatch.val >= 0.32 ? "#f59e0b" : "#64748b";
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 2;
      } else {
        ctx.fillStyle = "#fde047";
        ctx.strokeStyle = "#090d16";
        ctx.lineWidth = 1.5;
      }
      ctx.fill();
      ctx.stroke();
    });
  }

  function drawWristLockProgress(ctx, canvasEl, wristPt) {
    const ratio = Math.min(1, state.candidateFrames / state.requiredStableFrames);
    if (ratio <= 0.1) return;
    const x = wristPt.x * canvasEl.width;
    const y = wristPt.y * canvasEl.height;
    ctx.beginPath();
    ctx.arc(x, y, 24, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * ratio);
    ctx.strokeStyle = ratio >= 1 ? "#22c55e" : "#fde047";
    ctx.lineWidth = 4.5;
    ctx.stroke();
  }

  function updateTelemetryUI(features, motion, detection) {
    const fingerKeys = ["thumb", "index", "middle", "ring", "pinky"];
    fingerKeys.forEach((k) => {
      const pct = Math.round((features.ext[k] || 0) * 100);
      const bar = document.getElementById(`f-bar-${k}`);
      const val = document.getElementById(`f-val-${k}`);
      if (bar) {
        bar.style.width = `${pct}%`;
        bar.style.background = pct >= 60 ? "#22c55e" : pct >= 32 ? "#f59e0b" : "#64748b";
      }
      if (val) val.textContent = `${pct}%`;
    });

    const motionBadge = document.getElementById("telemetry-motion-badge");
    if (motionBadge) {
      motionBadge.textContent = `Scale: ${Math.round(features.palmScale * 100)}% • ${motion.label}`;
    }

    if (detection) {
      const pct = Math.min(100, Math.round((state.candidateFrames / state.requiredStableFrames) * 100));
      const runnerText = detection.runnerUp
        ? ` (Next: ${detection.runnerUp.word} ${Math.round(detection.runnerUp.confidence * 100)}%)`
        : "";
      updateLockProgressBar(
        pct,
        `${detection.word} (${Math.round(detection.confidence * 100)}%) — ${pct}% Locked${runnerText}`
      );
    }
  }

  function updateLockProgressBar(pct, labelText) {
    const fill = document.getElementById("lock-progress-fill");
    const bar = document.getElementById("lock-progress-bar");
    const label = document.getElementById("lock-candidate-label");
    if (fill) fill.style.width = `${pct}%`;
    if (bar) bar.setAttribute("aria-valuenow", String(pct));
    if (label && labelText) label.textContent = labelText;
  }

  function resetTelemetryUI() {
    ["thumb", "index", "middle", "ring", "pinky"].forEach((k) => {
      const bar = document.getElementById(`f-bar-${k}`);
      const val = document.getElementById(`f-val-${k}`);
      if (bar) bar.style.width = "0%";
      if (val) val.textContent = "--";
    });
    const motionBadge = document.getElementById("telemetry-motion-badge");
    if (motionBadge) motionBadge.textContent = "Palm Scale: -- • Motion: Steady";
    updateLockProgressBar(0, "Waiting for hand pose...");
  }

  function handleLiveGestureCandidate(signId, confidence, motion) {
    // Enforce minimum confidence threshold for the selected Precision Mode
    if (confidence < (state.minConfidence || 0.56)) {
      return;
    }

    // Motion-settle gate: while raising/lowering hand rapidly, pause lock-in unless it's a dynamic wave sign
    const dynamicMotionSigns = ["hello", "no", "emergency", "yes", "where", "repeat"];
    if (motion && motion.speed > 0.48 && !dynamicMotionSigns.includes(signId)) {
      return;
    }

    if (!state.candidateHistory) state.candidateHistory = [];
    const maxWindow = Math.max(8, (state.requiredStableFrames || 4) + 2);
    state.candidateHistory.push(signId);
    if (state.candidateHistory.length > maxWindow) {
      state.candidateHistory.shift();
    }

    // Majority vote over the sliding window so a single frame jitter never resets lock progress
    const counts = {};
    let dominantId = signId;
    let dominantCount = 0;
    for (const id of state.candidateHistory) {
      counts[id] = (counts[id] || 0) + 1;
      if (counts[id] > dominantCount) {
        dominantCount = counts[id];
        dominantId = id;
      }
    }

    state.candidateSignId = dominantId;
    state.candidateFrames = dominantCount;

    const now = Date.now();
    const timeSinceLast = now - state.lastSignTime;
    // Prevent hand transition while lowering hand from immediately cancelling the sign that is speaking
    const cooldownMs = state.lastSignId === dominantId ? 3000 : 1400;

    if (state.candidateFrames >= state.requiredStableFrames && timeSinceLast > cooldownMs) {
      const signObj = window.ISL_SIGNS.find((s) => s.id === dominantId);
      if (signObj) {
        state.lastSignId = dominantId;
        state.lastSignTime = now;
        state.candidateHistory = [];
        triggerDetectedSign(signObj, confidence, "Live 3D Camera");
      }
    }
  }

  function triggerDetectedSign(signObj, confidence = 0.95, source = "Camera") {
    if (!signObj) return;
    state.currentDetectedSign = signObj;

    const hiWordLabel = signObj.hindiWord ? ` (${signObj.hindiWord})` : "";
    const hiPhraseLabel = signObj.hindiPhrase ? ` | हिंदी: "${signObj.hindiPhrase}"` : "";

    // Render On-Screen ISL Avatar in the detected visual box
    const visualEl = document.getElementById("detected-visual");
    if (visualEl) visualEl.innerHTML = window.renderISLAvatarSVG(signObj);
    const nameEl = document.getElementById("detected-sign-name");
    if (nameEl) nameEl.textContent = `${signObj.emoji} ${signObj.word}${hiWordLabel}`;
    const spokenEl = document.getElementById("detected-sign-spoken");
    if (spokenEl) spokenEl.textContent = `"${signObj.spokenPhrase}"${hiPhraseLabel}`;
    const tactileEl = document.getElementById("detected-sign-tactile");
    if (tactileEl) tactileEl.textContent = window.getAvatarDescription(signObj);
    const hudConfEl = document.getElementById("hud-confidence");
    if (hudConfEl) hudConfEl.textContent = `Confidence: ${Math.round(confidence * 100)}% (${source})`;

    // Sync precision selector dropdown if present
    const precisionSelect = document.getElementById("precision-sign-select");
    if (precisionSelect && precisionSelect.value !== signObj.id) {
      precisionSelect.value = signObj.id;
    }

    // Update Live Multi-Language Output Grid (Hindi, Maithili, Bhojpuri, Marathi, Bengali, Tamil, Telugu, Gujarati, Punjabi, Kannada, Urdu, English)
    updateCameraMultiLangDisplay(signObj);

    window.audioEngine.playEarcon("sign_detected");
    const autoSpeakEl = document.getElementById("chk-auto-speak-sign");
    const autoSpeak = !autoSpeakEl || autoSpeakEl.checked;
    if (autoSpeak) {
      window.audioEngine.speakSignInLang(signObj, state.signOutputLang, {
        interrupt: true,
        assertive: true
      });
    }

    // Append to Sign-to-Text Sentence Builder & Update Natural Speech + 6-Dot Braille
    state.accumulatedSentence.push(signObj.word);
    renderSentenceDisplay();
    updateCameraBrailleDisplay(getActiveCameraBrailleText());

    const hiTr = window.getSignTranslation ? window.getSignTranslation(signObj, "hi") : null;
    const maiTr = window.getSignTranslation ? window.getSignTranslation(signObj, "mai") : null;
    const regionalSub = hiTr && maiTr ? ` | 🇮🇳 ${hiTr.word} • ${maiTr.word}` : hiWordLabel;

    const timeStr = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    state.signHistory.unshift({
      word: `${signObj.word}${regionalSub}`,
      emoji: signObj.emoji,
      phrase: `${signObj.spokenPhrase}${hiPhraseLabel}`,
      time: timeStr,
      source: `${source} (${Math.round(confidence * 100)}%)`
    });
    if (state.signHistory.length > 12) state.signHistory.pop();
    renderSignHistory();
  }

  function renderSentenceDisplay() {
    const box = document.getElementById("sentence-display");
    const naturalEl = document.getElementById("natural-speech-preview");
    if (!state.accumulatedSentence.length) {
      box.innerHTML = `<span class="placeholder-muted">Signed words will accumulate here into a full sentence...</span>`;
      if (naturalEl) {
        naturalEl.textContent = `"Waiting for signed input... | सांकेतिक इनपुट की प्रतीक्षा है..."`;
      }
      return;
    }
    box.innerHTML = state.accumulatedSentence
      .map((w) => {
        const signMatch = window.ISL_SIGNS.find(
          (s) => s.word.toLowerCase() === w.toLowerCase()
        );
        const hiLabel = signMatch && signMatch.hindiWord ? ` (${signMatch.hindiWord})` : "";
        return `<span class="sentence-token">${w}${hiLabel}</span>`;
      })
      .join(" ");
    if (naturalEl) {
      naturalEl.textContent = `"${window.naturalizeISLGloss(state.accumulatedSentence, state.signOutputLang)}"`;
    }
  }

  function renderSignHistory() {
    const list = document.getElementById("sign-history-list");
    if (!state.signHistory.length) {
      list.innerHTML = `<li class="history-empty">No signs detected yet in this session.</li>`;
      return;
    }
    list.innerHTML = state.signHistory
      .map(
        (item) => `
        <li class="history-item">
          <span><strong>${item.emoji} ${item.word}</strong> — "${item.phrase}"</span>
          <small>${item.source} • ${item.time}</small>
        </li>
      `
      )
      .join("");
  }

  // =========================================================================
  // CUSTOM ISL SIGN CALIBRATION & TRAINING STUDIO
  // =========================================================================
  function initCustomSignStudio() {
    const modal = document.getElementById("custom-sign-modal");
    const btnOpen1 = document.getElementById("btn-open-custom-sign");
    const btnOpen2 = document.getElementById("btn-dict-add-sign");
    const btnClose = document.getElementById("btn-close-custom-modal");
    const btnCancel = document.getElementById("btn-cancel-custom-modal");
    const btnCapture = document.getElementById("btn-capture-live-pose");
    const form = document.getElementById("custom-sign-form");

    const openModal = () => {
      state.capturedNormalizedLandmarks = null;
      modal.hidden = false;
      renderSavedCustomSignsList();
      window.audioEngine.playEarcon("tab");
      window.audioEngine.speak(
        "Custom Indian Sign Language Studio opened. Enter a sign word, spoken phrase, and configure or capture the 3D hand pose."
      );
      document.getElementById("custom-sign-word").focus();
    };

    const closeModal = () => {
      if (!modal.hidden) {
        modal.hidden = true;
        window.audioEngine.speak("Closed Custom Sign Studio.");
      }
    };

    if (btnOpen1) btnOpen1.addEventListener("click", openModal);
    if (btnOpen2) btnOpen2.addEventListener("click", openModal);
    if (btnClose) btnClose.addEventListener("click", closeModal);
    if (btnCancel) btnCancel.addEventListener("click", closeModal);

    if (btnCapture) {
      btnCapture.addEventListener("click", () => {
        const statusEl = document.getElementById("capture-pose-status");
        if (!state.cameraActive || !state.latestHandFeatures) {
          statusEl.textContent =
            "⚠️ No live hand detected on webcam right now. Start the webcam and hold your hand in frame, or set the 5 finger states manually below.";
          window.audioEngine.playEarcon("quiz_wrong");
          window.audioEngine.speak(
            "No live hand currently in webcam frame. Please start the webcam and hold your hand in view, or select the finger states manually."
          );
          return;
        }

        const feat = state.latestHandFeatures;
        const quantize = (val) => (val >= 0.7 ? "1" : val >= 0.35 ? "0.5" : "0");
        document.getElementById("f-cfg-thumb").value = quantize(feat.ext.thumb);
        document.getElementById("f-cfg-index").value = quantize(feat.ext.index);
        document.getElementById("f-cfg-middle").value = quantize(feat.ext.middle);
        document.getElementById("f-cfg-ring").value = quantize(feat.ext.ring);
        document.getElementById("f-cfg-pinky").value = quantize(feat.ext.pinky);

        state.capturedNormalizedLandmarks = feat.normalizedCoords;

        statusEl.textContent =
          `✅ Captured 21-point 3D hand template! Finger extensions: Thumb ${Math.round(feat.ext.thumb * 100)}%, Index ${Math.round(feat.ext.index * 100)}%, Middle ${Math.round(feat.ext.middle * 100)}%, Ring ${Math.round(feat.ext.ring * 100)}%, Pinky ${Math.round(feat.ext.pinky * 100)}%.`;
        window.audioEngine.playEarcon("sign_detected");
        window.audioEngine.speak("Captured 3D hand pose template from live webcam.");
      });
    }

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const word = document.getElementById("custom-sign-word").value.trim();
        const spokenPhrase = document.getElementById("custom-sign-phrase").value.trim();
        const category = document.getElementById("custom-sign-category").value;
        const hands = document.getElementById("custom-sign-hands").value;
        const emoji = document.getElementById("custom-sign-emoji").value.trim() || "🤟";
        const guideInput = document.getElementById("custom-sign-guide").value.trim();

        if (!word || !spokenPhrase) return;

        const fingerState = [
          parseFloat(document.getElementById("f-cfg-thumb").value),
          parseFloat(document.getElementById("f-cfg-index").value),
          parseFloat(document.getElementById("f-cfg-middle").value),
          parseFloat(document.getElementById("f-cfg-ring").value),
          parseFloat(document.getElementById("f-cfg-pinky").value)
        ];

        const describeState = (v) => (v >= 0.8 ? "extended" : v >= 0.4 ? "curved" : "curled");
        const autoGuide =
          guideInput ||
          `Custom ${hands}: Thumb ${describeState(fingerState[0])}, Index ${describeState(fingerState[1])}, Middle ${describeState(fingerState[2])}, Ring ${describeState(fingerState[3])}, and Pinky ${describeState(fingerState[4])}.`;

        const keywords = word
          .toLowerCase()
          .replace(/[^a-z0-9\s]/g, " ")
          .split(/\s+/)
          .filter(Boolean);

        const newSign = {
          id: `custom_${Date.now()}`,
          word,
          keywords: keywords.length ? keywords : [word.toLowerCase()],
          category,
          isCustom: true,
          emoji,
          hands,
          spokenPhrase,
          tactileGuide: autoGuide,
          poseType: "custom",
          fingerState,
          capturedCoords: state.capturedNormalizedLandmarks || null,
          simLabel: `${emoji} ${word}`
        };

        state.customSigns.unshift(newSign);
        window.ISL_SIGNS.unshift(newSign);
        saveCustomSignsToStorage();

        populateTargetSignSelect();
        renderSimulatorButtons();
        renderDictionaryGrid();
        renderSavedCustomSignsList();

        form.reset();
        document.getElementById("custom-sign-emoji").value = "🤟";
        state.capturedNormalizedLandmarks = null;
        modal.hidden = true;

        window.audioEngine.playEarcon("quiz_correct");
        window.audioEngine.speak(
          `Saved new Indian Sign Language sign: ${word}. It is now active in the live camera detector, simulator, avatar translator, and dictionary.`
        );
      });
    }

    renderSavedCustomSignsList();
  }

  function renderSavedCustomSignsList() {
    const countEl = document.getElementById("custom-signs-count");
    const listEl = document.getElementById("custom-signs-list");
    if (!countEl || !listEl) return;

    countEl.textContent = String(state.customSigns.length);
    if (!state.customSigns.length) {
      listEl.innerHTML = `<p class="placeholder-muted">No custom signs added yet.</p>`;
      return;
    }

    listEl.innerHTML = "";
    state.customSigns.forEach((cs) => {
      const pill = document.createElement("div");
      pill.className = "custom-sign-pill";
      pill.innerHTML = `
        <span>${cs.emoji} ${cs.word}</span>
        <button type="button" class="btn-del-custom" aria-label="Delete custom sign ${cs.word}">✖</button>
      `;
      pill.querySelector(".btn-del-custom").addEventListener("click", () => {
        state.customSigns = state.customSigns.filter((s) => s.id !== cs.id);
        const idx = window.ISL_SIGNS.findIndex((s) => s.id === cs.id);
        if (idx !== -1) window.ISL_SIGNS.splice(idx, 1);
        saveCustomSignsToStorage();
        populateTargetSignSelect();
        renderSimulatorButtons();
        renderDictionaryGrid();
        renderSavedCustomSignsList();
        window.audioEngine.speak(`Removed custom sign ${cs.word}.`);
      });
      listEl.appendChild(pill);
    });
  }

  // =========================================================================
  // MODULE 2: SPEECH-TO-ISL TRANSLATOR, ON-SCREEN AVATAR & 6-DOT BRAILLE
  // =========================================================================
  function initTranslatorModule() {
    const inputEl = document.getElementById("isl-text-input");
    const btnTranslate = document.getElementById("btn-translate-text");

    btnTranslate.addEventListener("click", () => {
      translateTextToISL(inputEl.value, { speakConfirmation: true, addToChat: true });
    });

    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        translateTextToISL(inputEl.value, { speakConfirmation: true, addToChat: true });
      }
    });

    document.querySelectorAll(".chip-btn").forEach((chip) => {
      chip.addEventListener("click", () => {
        const sentence = chip.dataset.sentence;
        inputEl.value = sentence;
        translateTextToISL(sentence, { speakConfirmation: true, addToChat: true });
      });
    });

    document.getElementById("btn-stage-prev").addEventListener("click", () => {
      stopStageAutoPlay();
      if (state.translatedSequence.length) {
        state.currentStageIndex =
          (state.currentStageIndex - 1 + state.translatedSequence.length) %
          state.translatedSequence.length;
        renderActiveStageSign({ speakTactile: true });
      }
    });

    document.getElementById("btn-stage-next").addEventListener("click", () => {
      stopStageAutoPlay();
      if (state.translatedSequence.length) {
        state.currentStageIndex =
          (state.currentStageIndex + 1) % state.translatedSequence.length;
        renderActiveStageSign({ speakTactile: true });
      }
    });

    document.getElementById("btn-stage-play").addEventListener("click", () => {
      playStageSequence();
    });

    document.getElementById("btn-stage-describe").addEventListener("click", () => {
      const current = state.translatedSequence[state.currentStageIndex];
      if (current) {
        window.audioEngine.playEarcon("avatar_read");
        window.audioEngine.speakSignInLang(current, state.signOutputLang, {
          includeEnglishGuide: true,
          guidePrefix: window.getAvatarDescription(current),
          interrupt: true,
          assertive: true
        });
      }
    });

    const btnReadAllStage = document.getElementById("btn-stage-read-everything");
    if (btnReadAllStage) {
      btnReadAllStage.addEventListener("click", () => {
        speakCurrentContextSummary();
      });
    }

    // Stage Multi-Language Speak Buttons
    const btnSpeakActiveStage = document.getElementById("btn-speak-active-lang-stage");
    if (btnSpeakActiveStage) {
      btnSpeakActiveStage.addEventListener("click", () => {
        const sign = state.translatedSequence[state.currentStageIndex] || window.ISL_SIGNS[0];
        window.audioEngine.playEarcon("sign_detected");
        window.audioEngine.speakSignInLang(sign, state.signOutputLang, { interrupt: true, assertive: true });
      });
    }

    const btnSpeakAllStage = document.getElementById("btn-speak-all-langs-stage");
    if (btnSpeakAllStage) {
      btnSpeakAllStage.addEventListener("click", () => {
        const sign = state.translatedSequence[state.currentStageIndex] || window.ISL_SIGNS[0];
        window.audioEngine.playEarcon("sign_detected");
        window.audioEngine.speakSignInLang(sign, "all", { interrupt: true, assertive: true });
      });
    }

    // Stage Braille Audio & Sonic Pulse Buttons
    const btnStageBraille = document.getElementById("btn-stage-read-braille");
    if (btnStageBraille) {
      btnStageBraille.addEventListener("click", () => {
        const braille = window.BrailleEngine.translate(state.lastTranslatedText || "Hello");
        window.audioEngine.playEarcon("braille_pulse");
        window.audioEngine.speak(braille.spokenGuide, { interrupt: true, assertive: true });
      });
    }

    const btnStagePulse = document.getElementById("btn-stage-pulse-braille");
    if (btnStagePulse) {
      btnStagePulse.addEventListener("click", () => {
        window.audioEngine.playBraillePulses(state.lastTranslatedText || "Hello", {
          speakAfter: true
        });
      });
    }

    // Initialize 6-Dot Perkins Braille Keyer Composer
    initBrailleChordKeyer();
  }

  function initBrailleChordKeyer() {
    const dotChks = document.querySelectorAll(".b-dot-chk");
    const previewEl = document.getElementById("braille-chord-preview");
    const btnAppend = document.getElementById("btn-braille-append");
    const btnSpace = document.getElementById("btn-braille-space");
    const btnClear = document.getElementById("btn-braille-clear-dots");
    const inputEl = document.getElementById("isl-text-input");

    const getChordInfo = () => {
      const dots = [0, 0, 0, 0, 0, 0];
      dotChks.forEach((chk) => {
        const idx = parseInt(chk.value, 10) - 1;
        if (chk.checked && idx >= 0 && idx < 6) dots[idx] = 1;
      });
      const key = dots.join("");
      const ch = DOTS_TO_CHAR_MAP[key] || "";
      let mask = 0;
      for (let i = 0; i < 6; i++) {
        if (dots[i]) mask |= 1 << i;
      }
      const uChar = String.fromCharCode(0x2800 + mask);
      const activeNums = dots
        .map((v, idx) => (v ? idx + 1 : null))
        .filter(Boolean);
      return { dots, ch, uChar, activeNums };
    };

    const updateChordPreview = () => {
      const info = getChordInfo();
      if (previewEl) {
        const label = info.ch ? info.ch.toUpperCase() : info.activeNums.length ? "Pattern" : "Blank";
        previewEl.textContent = `Preview: ${label} (${info.uChar})`;
      }
    };

    dotChks.forEach((chk) => {
      chk.addEventListener("change", () => {
        updateChordPreview();
        const info = getChordInfo();
        window.audioEngine.playEarcon("focus");
        if (info.ch) {
          window.audioEngine.speak(`Braille dots ${info.activeNums.join(" ")}: Letter ${info.ch.toUpperCase()}`);
        }
      });
    });

    if (btnAppend) {
      btnAppend.addEventListener("click", () => {
        const info = getChordInfo();
        if (!info.ch) {
          window.audioEngine.playEarcon("quiz_wrong");
          window.audioEngine.speak("Selected dot combination does not match a standard letter A to Z.");
          return;
        }
        inputEl.value = (inputEl.value || "") + info.ch;
        window.audioEngine.playEarcon("braille_pulse");
        window.audioEngine.speak(`Added Braille letter ${info.ch.toUpperCase()}. Message is now: ${inputEl.value}`);
        translateTextToISL(inputEl.value, { speakConfirmation: false, addToChat: false });
      });
    }

    if (btnSpace) {
      btnSpace.addEventListener("click", () => {
        inputEl.value = (inputEl.value || "") + " ";
        window.audioEngine.playEarcon("focus");
        window.audioEngine.speak("Added space.");
      });
    }

    if (btnClear) {
      btnClear.addEventListener("click", () => {
        dotChks.forEach((c) => {
          c.checked = false;
        });
        updateChordPreview();
        window.audioEngine.speak("Reset 6 Braille dots.");
      });
    }
  }

  function normalizeWordStem(word) {
    if (word.length <= 3) return word;
    if (word.endsWith("ing") && word.length > 5) return word.slice(0, -3);
    if (word.endsWith("ed") && word.length > 4) return word.slice(0, -2);
    if (word.endsWith("es") && word.length > 4) return word.slice(0, -2);
    if (word.endsWith("s") && !word.endsWith("ss") && word.length > 3) return word.slice(0, -1);
    return word;
  }

  function translateTextToISL(rawText, { speakConfirmation = true, addToChat = false } = {}) {
    const cleaned = (rawText || "").trim();
    if (!cleaned) {
      window.audioEngine.speakBilingual(
        "Please speak or type a message in English or Hindi to convert into Indian Sign Language.",
        "कृपया भारतीय सांकेतिक भाषा में बदलने के लिए अंग्रेजी या हिंदी में संदेश बोलें या टाइप करें।",
        {
          hindiPhonetic:
            "Kripya Bharatiya Sign Language mein badalne ke liye English ya Hindi mein sandesh bolein ya type karein."
        }
      );
      return;
    }

    state.lastTranslatedText = cleaned;

    // Preserve both English alphanumeric and Hindi Devanagari (\u0900-\u097F) tokens
    let normalizedSentence = cleaned
      .toLowerCase()
      .replace(/[^a-z0-9\u0900-\u097F\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    const conversationalSigns = window.ISL_SIGNS.filter(
      (s) => s.category !== "alphabet" && s.category !== "numbers"
    );

    const idioms = window.ISL_PHRASE_IDIOMS || [];
    idioms.forEach((idiom, idx) => {
      const regex = new RegExp(`\\b${idiom.phrase}\\b`, "g");
      normalizedSentence = normalizedSentence.replace(regex, `__idiom_${idx}__`);
    });

    const tokens = normalizedSentence.split(/\s+/).filter(Boolean);
    const sequence = [];

    const stopWords = new Set([
      "a", "an", "the", "is", "am", "are", "was", "were", "to", "for", "of",
      "in", "on", "at", "very", "much", "my", "me", "i", "you", "your", "can", "could", "would",
      "में", "का", "की", "के", "को", "से", "पर", "है", "हूँ", "हैं", "मुझे", "मेरा", "मेरी"
    ]);

    tokens.forEach((token) => {
      if (token.startsWith("__idiom_")) {
        const idx = parseInt(token.replace("__idiom_", "").replace("__", ""), 10);
        const idiom = idioms[idx];
        if (idiom) {
          idiom.signIds.forEach((id) => {
            const sign = window.ISL_SIGNS.find((s) => s.id === id);
            if (sign) sequence.push(sign);
          });
        }
        return;
      }

      const stem = normalizeWordStem(token);
      const matchedSign = conversationalSigns.find(
        (s) =>
          s.keywords.includes(token) ||
          s.keywords.includes(stem) ||
          (s.hindiWord && s.hindiWord.includes(token))
      );
      if (matchedSign) {
        sequence.push(matchedSign);
        return;
      }

      if (tokens.length > 1 && stopWords.has(token)) {
        return;
      }

      for (const ch of token) {
        const letterSign = window.ISL_SIGNS.find(
          (s) =>
            (s.category === "alphabet" || s.category === "numbers") &&
            s.keywords.includes(ch)
        );
        if (letterSign) {
          sequence.push(letterSign);
        }
      }
    });

    if (!sequence.length) {
      sequence.push(window.ISL_SIGNS[0]);
    }

    state.translatedSequence = sequence;
    state.currentStageIndex = 0;

    renderSequenceStrip();
    renderActiveStageSign({ speakTactile: false });
    updateStageBrailleDisplay(cleaned);

    if (addToChat) {
      addTwoWayChatMessage({
        role: "blind",
        speakerLabel: "🦯 Blind Speaker (Voice/Text/Braille → ISL Avatar EN + हिंदी)",
        text: cleaned,
        glossText: sequence.map((s) => `${s.word}${s.hindiWord ? " (" + s.hindiWord + ")" : ""}`).join(" → "),
        signObj: sequence[0] || window.ISL_SIGNS[0],
        speakNow: false
      });
    }

    if (speakConfirmation) {
      window.audioEngine.playEarcon("sign_detected");
      window.audioEngine.speakSignSequenceInLang(sequence, state.signOutputLang, {
        interrupt: true
      });
      playStageSequence();
    }
  }

  function updateStageBrailleDisplay(rawText) {
    if (!window.BrailleEngine) return;
    const bData = window.BrailleEngine.translate(rawText);
    const unicodeEl = document.getElementById("stage-braille-unicode");
    const cellsEl = document.getElementById("stage-braille-cells");
    if (unicodeEl) unicodeEl.textContent = bData.unicode || "⠀";
    if (cellsEl) {
      cellsEl.innerHTML = window.BrailleEngine.renderBrailleCellsHTML(rawText, { maxCells: 20 });
    }
  }

  function renderSequenceStrip() {
    const strip = document.getElementById("isl-sequence-strip");
    strip.innerHTML = "";

    state.translatedSequence.forEach((signObj, idx) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = `seq-card ${idx === state.currentStageIndex ? "active" : ""}`;
      card.setAttribute("role", "listitem");
      const hiLabel = signObj.hindiWord ? ` (${signObj.hindiWord})` : "";
      card.setAttribute("aria-label", `Sign ${idx + 1}: ${signObj.word}${hiLabel}. Click to animate Avatar and hear English and Hindi guide.`);
      card.innerHTML = `
        <span class="seq-card-emoji" aria-hidden="true">${signObj.emoji}</span>
        <span class="seq-card-label">${signObj.word}${hiLabel}</span>
        <span class="seq-card-sub">${signObj.hands}</span>
      `;
      card.addEventListener("click", () => {
        stopStageAutoPlay();
        state.currentStageIndex = idx;
        renderActiveStageSign({ speakTactile: true });
      });
      strip.appendChild(card);
    });
  }

  function renderActiveStageSign({ speakTactile = false } = {}) {
    const signObj = state.translatedSequence[state.currentStageIndex];
    if (!signObj) return;

    const hiWordLabel = signObj.hindiWord ? ` (${signObj.hindiWord})` : "";
    const hiPhraseLabel = signObj.hindiPhrase ? ` | हिंदी अर्थ: "${signObj.hindiPhrase}"` : "";

    document.getElementById("stage-current-token").textContent =
      `Sign ${state.currentStageIndex + 1} of ${state.translatedSequence.length}: ${signObj.word}${hiWordLabel}`;

    // Render BOTH Expressive On-Screen ISL Avatar AND Articulated 5-Finger Hand Pose
    const avatarContainer = document.getElementById("stage-avatar-container");
    if (avatarContainer) {
      avatarContainer.innerHTML = window.renderISLAvatarSVG(signObj);
    }
    document.getElementById("stage-svg-container").innerHTML = window.renderISLSignSVG(signObj);

    document.getElementById("stage-type-badge").textContent =
      signObj.category === "alphabet" ? "ISL Finger-Spell" : signObj.isCustom ? "Custom ISL Sign" : "ISL Sign";
    document.getElementById("stage-hands-badge").textContent = signObj.hands;
    document.getElementById("stage-sign-title").textContent = `${signObj.word}${hiWordLabel}`;
    document.getElementById("stage-sign-meaning").textContent = `English: "${signObj.spokenPhrase}"${hiPhraseLabel}`;

    // Update Stage Multi-Language Output Grid
    updateStageMultiLangDisplay(signObj);

    const avatarNarrEl = document.getElementById("stage-avatar-narration");
    if (avatarNarrEl) {
      avatarNarrEl.textContent = window.getAvatarDescription(signObj);
    }
    document.getElementById("stage-tactile-desc").textContent = signObj.tactileGuide;

    const cards = document.querySelectorAll(".seq-card");
    cards.forEach((c, idx) => {
      c.classList.toggle("active", idx === state.currentStageIndex);
    });

    if (speakTactile) {
      window.audioEngine.playEarcon("avatar_read");
      window.audioEngine.speakSignInLang(signObj, state.signOutputLang, { interrupt: true, assertive: true });
    }
  }

  function updateStageMultiLangDisplay(signObj) {
    if (!signObj || !window.renderMultiLangCardsHTML) return;
    const badgeEl = document.getElementById("stage-multilang-sign-badge");
    if (badgeEl) badgeEl.textContent = `${signObj.emoji} ${signObj.word}`;

    const regLineEl = document.getElementById("stage-sign-regional");
    if (regLineEl) {
      const hiTr = window.getSignTranslation(signObj, "hi");
      const maiTr = window.getSignTranslation(signObj, "mai");
      regLineEl.textContent = `🇮🇳 हिन्दी: ${hiTr.word} ("${hiTr.phrase}") • मैथिली: ${maiTr.word} ("${maiTr.phrase}")`;
    }

    const gridEl = document.getElementById("stage-multilang-grid");
    if (gridEl) {
      gridEl.innerHTML = window.renderMultiLangCardsHTML(signObj, state.signOutputLang);
      gridEl.querySelectorAll(".multilang-chip").forEach((chip) => {
        chip.addEventListener("click", () => {
          const langCode = chip.dataset.lang;
          window.audioEngine.playEarcon("sign_detected");
          window.audioEngine.speakSignInLang(signObj, langCode, { interrupt: true, assertive: true });
        });
      });
    }
  }

  function playStageSequence() {
    stopStageAutoPlay();
    if (!state.translatedSequence.length) return;
    state.currentStageIndex = 0;
    renderActiveStageSign({ speakTactile: false });

    state.stageTimer = setInterval(() => {
      if (state.currentStageIndex < state.translatedSequence.length - 1) {
        state.currentStageIndex += 1;
        renderActiveStageSign({ speakTactile: false });
      } else {
        stopStageAutoPlay();
      }
    }, 1400);
  }

  function stopStageAutoPlay() {
    if (state.stageTimer) {
      clearInterval(state.stageTimer);
      state.stageTimer = null;
    }
  }

  // =========================================================================
  // TWO-WAY LIVE COMMUNICATION SYSTEM (DEAF SIGNER ⇄ BLIND LISTENER)
  // =========================================================================
  function initTwoWayBridgeModule() {
    const deafInput = document.getElementById("deaf-partner-input");
    const btnDeafSend = document.getElementById("btn-deaf-send-reply");
    const quickChipsContainer = document.getElementById("deaf-quick-sign-chips");
    const btnReadLast = document.getElementById("btn-read-last-chat");
    const btnClearChat = document.getElementById("btn-clear-chat");

    // Populate quick ISL sign chips for Deaf partner to tap
    if (quickChipsContainer) {
      const quickReplyIds = ["hello", "yes", "no", "help", "water", "food", "thankyou", "slow", "doctor"];
      quickReplyIds.forEach((id) => {
        const sign = window.ISL_SIGNS.find((s) => s.id === id);
        if (!sign) return;
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "chip-btn";
        btn.innerHTML = `${sign.emoji} ${sign.word}`;
        btn.addEventListener("click", () => {
          addTwoWayChatMessage({
            role: "deaf",
            speakerLabel: "🤟 Deaf Partner (Signed Reply → Spoken Audio & Braille)",
            text: sign.spokenPhrase,
            glossText: sign.word,
            signObj: sign,
            speakNow: true
          });
        });
        quickChipsContainer.appendChild(btn);
      });
    }

    const handleDeafTextSend = () => {
      const val = (deafInput.value || "").trim();
      if (!val) return;
      translateTextToISL(val, { speakConfirmation: false, addToChat: false });
      const primarySign = state.translatedSequence[0] || window.ISL_SIGNS[0];
      addTwoWayChatMessage({
        role: "deaf",
        speakerLabel: "🤟 Deaf Partner (Typed/Signed → Spoken Audio & Braille)",
        text: val,
        glossText: state.translatedSequence.map((s) => s.word).join(" → "),
        signObj: primarySign,
        speakNow: true
      });
      deafInput.value = "";
    };

    if (btnDeafSend) btnDeafSend.addEventListener("click", handleDeafTextSend);
    if (deafInput) {
      deafInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleDeafTextSend();
        }
      });
    }

    if (btnReadLast) {
      btnReadLast.addEventListener("click", () => {
        if (!state.chatMessages.length) {
          window.audioEngine.speak("No messages in the two-way conversation log yet.");
          return;
        }
        const latest = state.chatMessages[0];
        readChatMessageAloud(latest);
      });
    }

    if (btnClearChat) {
      btnClearChat.addEventListener("click", () => {
        state.chatMessages = [];
        renderTwoWayChatLog();
        window.audioEngine.speak("Cleared two-way conversation log.");
      });
    }

    // Seed initial 2-way conversation example
    const helloSign = window.ISL_SIGNS.find((s) => s.id === "hello") || window.ISL_SIGNS[0];
    const blindSign = window.ISL_SIGNS.find((s) => s.id === "blind") || window.ISL_SIGNS[0];
    addTwoWayChatMessage({
      role: "blind",
      speakerLabel: "🦯 Blind Speaker (Speech → ISL Avatar & Braille)",
      text: "Hello friend, I am visually impaired. Can you guide me?",
      glossText: "Hello / Namaste → Friend → Blind → Help",
      signObj: blindSign,
      speakNow: false
    });
    addTwoWayChatMessage({
      role: "deaf",
      speakerLabel: "🤟 Deaf Partner (ISL Sign → Spoken Audio & Braille)",
      text: "Hello! Namaste, Yes, I am happy to help guide you.",
      glossText: "Hello / Namaste → Yes → Help",
      signObj: helloSign,
      speakNow: false
    });
  }

  function addTwoWayChatMessage({ role, speakerLabel, text, glossText, signObj, speakNow = true }) {
    const braille = window.BrailleEngine.translate(text);
    const timeStr = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

    const msgObj = {
      id: `msg_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      role,
      speakerLabel,
      text,
      glossText: glossText || (signObj ? signObj.word : ""),
      brailleUnicode: braille.unicode,
      brailleSpoken: braille.spokenGuide,
      signObj: signObj || window.ISL_SIGNS[0],
      time: timeStr
    };

    state.chatMessages.unshift(msgObj);
    if (state.chatMessages.length > 20) state.chatMessages.pop();
    renderTwoWayChatLog();

    if (speakNow) {
      window.audioEngine.playEarcon("sign_detected");
      if (msgObj.signObj) {
        window.audioEngine.speakSignInLang(msgObj.signObj, state.signOutputLang, {
          interrupt: true,
          assertive: true
        });
      } else {
        window.audioEngine.speak(
          `${role === "deaf" ? "Deaf partner signed:" : "Blind user said:"} ${text}.`,
          { interrupt: true, assertive: true }
        );
      }
    }
  }

  function readChatMessageAloud(msgObj) {
    window.audioEngine.playEarcon("avatar_read");
    if (msgObj && msgObj.signObj) {
      window.audioEngine.speakSignInLang(msgObj.signObj, state.signOutputLang, {
        interrupt: true,
        assertive: true
      });
    } else if (msgObj) {
      window.audioEngine.speak(
        `${msgObj.speakerLabel}. Message text: "${msgObj.text}". ISL Sequence: ${msgObj.glossText}.`,
        { interrupt: true, assertive: true }
      );
    }
  }

  function renderTwoWayChatLog() {
    const logEl = document.getElementById("twoway-chat-log");
    if (!logEl) return;

    if (!state.chatMessages.length) {
      logEl.innerHTML = `<p class="placeholder-muted">No messages yet. Speak, type, or tap an ISL sign above to start a two-way conversation.</p>`;
      return;
    }

    logEl.innerHTML = "";
    state.chatMessages.forEach((msg) => {
      const item = document.createElement("article");
      item.className = `chat-bubble ${msg.role}`;
      item.innerHTML = `
        <div class="chat-avatar-mini" aria-hidden="true">${window.renderISLAvatarSVG(msg.signObj)}</div>
        <div class="chat-content">
          <span class="chat-role-badge">${msg.speakerLabel} • ${msg.time}</span>
          <p class="chat-msg-text">"${msg.text}"</p>
          <p class="text-secondary"><strong>🤟 ISL Gloss:</strong> ${msg.glossText}</p>
          <p class="chat-braille-line" aria-label="Braille output"><strong>⠿ 6-Dot Braille:</strong> ${msg.brailleUnicode}</p>
        </div>
        <div class="chat-bubble-actions">
          <button type="button" class="btn-primary btn-xs btn-chat-read" aria-label="Read message text and avatar pose aloud">
            🔊 Read Text &amp; Avatar
          </button>
          <button type="button" class="btn-outline btn-xs btn-chat-braille" aria-label="Read 6-dot Braille and play sonic pulses">
            ⠿ Hear Braille
          </button>
        </div>
      `;

      item.querySelector(".btn-chat-read").addEventListener("click", () => {
        readChatMessageAloud(msg);
      });

      item.querySelector(".btn-chat-braille").addEventListener("click", () => {
        window.audioEngine.playBraillePulses(msg.text, { speakAfter: true });
      });

      logEl.appendChild(item);
    });
  }

  // =========================================================================
  // MODULE 3: TACTILE AUDIO ISL DICTIONARY & BLIND QUIZ
  // =========================================================================
  function initDictionaryModule() {
    const searchInput = document.getElementById("dict-search");
    const filterButtons = document.querySelectorAll(".filter-btn");

    searchInput.addEventListener("input", (e) => {
      state.dictSearch = e.target.value.trim().toLowerCase();
      renderDictionaryGrid();
    });

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.dictCategory = btn.dataset.category;
        window.audioEngine.playEarcon("tab");
        renderDictionaryGrid();
        window.audioEngine.speak(`Showing ${btn.textContent} category.`);
      });
    });

    document.getElementById("btn-start-quiz").addEventListener("click", startAudioQuiz);
    document.getElementById("btn-close-quiz").addEventListener("click", () => {
      document.getElementById("quiz-container").hidden = true;
      state.quizActive = false;
      window.audioEngine.speak("Closed audio ISL quiz.");
    });
    document.getElementById("btn-quiz-replay").addEventListener("click", () => {
      if (state.quizCurrentSign) {
        window.audioEngine.speak(
          `Clue: ${state.quizCurrentSign.tactileGuide}. Which Indian Sign Language sign is this?`
        );
      }
    });

    renderDictionaryGrid();
  }

  function renderDictionaryGrid() {
    const grid = document.getElementById("dictionary-grid");
    if (!grid) return;

    const filtered = window.ISL_SIGNS.filter((sign) => {
      const catMatch =
        state.dictCategory === "all" ||
        (state.dictCategory === "custom" ? Boolean(sign.isCustom) : sign.category === state.dictCategory);
      const searchMatch =
        !state.dictSearch ||
        sign.word.toLowerCase().includes(state.dictSearch) ||
        sign.keywords.some((k) => k.includes(state.dictSearch)) ||
        sign.tactileGuide.toLowerCase().includes(state.dictSearch);
      return catMatch && searchMatch;
    });

    if (!filtered.length) {
      grid.innerHTML = `<div class="card"><p>No matching ISL signs found. Click "➕ Add Custom Sign" above to train a new sign!</p></div>`;
      return;
    }

    grid.innerHTML = "";
    filtered.forEach((sign) => {
      const bWord = window.BrailleEngine.translate(sign.word);
      const hiTr = window.getSignTranslation ? window.getSignTranslation(sign, "hi") : { word: sign.word };
      const maiTr = window.getSignTranslation ? window.getSignTranslation(sign, "mai") : { word: sign.word };
      const card = document.createElement("article");
      card.className = "dict-card";
      card.setAttribute("role", "listitem");
      card.innerHTML = `
        <div>
          <div class="dict-card-top">
            <div class="dict-svg-thumb" aria-hidden="true">${window.renderISLAvatarSVG(sign)}</div>
            <div>
              <span class="badge-hands">${sign.isCustom ? "✨ Custom • " : ""}${sign.hands}</span>
              <h3 class="dict-card-title">${sign.emoji} ${sign.word}</h3>
              <p class="stage-meaning">"${sign.spokenPhrase}"</p>
              <p class="regional-phrase-highlight" style="font-size:0.82rem; margin:0.25rem 0;">🇮🇳 हिन्दी: ${hiTr.word} • मैथिली: ${maiTr.word}</p>
              <p class="chat-braille-line">⠿ Braille: ${bWord.unicode}</p>
            </div>
          </div>
          <p class="dict-tactile-text"><strong>✋ Tactile Guide:</strong> ${sign.tactileGuide}</p>
        </div>
        <div class="dict-card-actions">
          <button type="button" class="btn-primary btn-sm btn-hear-regional" aria-label="Listen to ${sign.word} in Hindi, Maithili and selected language">
            🇮🇳 हिन्दी / मैथिली
          </button>
          <button type="button" class="btn-secondary btn-sm btn-hear-guide" aria-label="Listen to tactile hand guide and Avatar description for ${sign.word}">
            🔊 Guide
          </button>
          <button type="button" class="btn-outline btn-sm btn-hear-braille" aria-label="Listen to 6-dot Braille for ${sign.word}">
            ⠿ Braille
          </button>
          <button type="button" class="btn-outline btn-sm btn-open-stage" aria-label="Show ${sign.word} on large Avatar stage">
            🧑‍🦯 Stage
          </button>
        </div>
      `;

      card.querySelector(".btn-hear-regional").addEventListener("click", () => {
        window.audioEngine.playEarcon("sign_detected");
        const mode = state.signOutputLang === "en" ? "multi_top" : state.signOutputLang;
        window.audioEngine.speakSignInLang(sign, mode, { interrupt: true, assertive: true });
      });

      card.querySelector(".btn-hear-guide").addEventListener("click", () => {
        window.audioEngine.playEarcon("avatar_read");
        window.audioEngine.speakSign(sign, { interrupt: true, assertive: true });
      });

      card.querySelector(".btn-hear-braille").addEventListener("click", () => {
        window.audioEngine.playBraillePulses(sign.word, { speakAfter: true });
      });

      card.querySelector(".btn-open-stage").addEventListener("click", () => {
        state.translatedSequence = [sign];
        state.lastTranslatedText = sign.word;
        state.currentStageIndex = 0;
        switchTab("translator", { announce: false });
        renderSequenceStrip();
        renderActiveStageSign({ speakTactile: true });
        updateStageBrailleDisplay(sign.word);
      });

      grid.appendChild(card);
    });
  }

  function startAudioQuiz() {
    state.quizActive = true;
    const quizBox = document.getElementById("quiz-container");
    quizBox.hidden = false;
    nextQuizQuestion();
  }

  function nextQuizQuestion() {
    const pool = window.ISL_SIGNS.filter((s) => s.category !== "numbers");
    const correct = pool[Math.floor(Math.random() * pool.length)];
    state.quizCurrentSign = correct;

    const distractors = pool
      .filter((s) => s.id !== correct.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    const choices = [correct, ...distractors].sort(() => 0.5 - Math.random());

    const promptText = `Physical Hand Description: "${correct.tactileGuide}"`;
    document.getElementById("quiz-prompt-text").textContent = promptText;
    document.getElementById("quiz-score").textContent = `${state.quizScore} / ${state.quizTotal}`;

    const optionsContainer = document.getElementById("quiz-options");
    optionsContainer.innerHTML = "";

    choices.forEach((choice, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn-outline";
      btn.textContent = `${idx + 1}. ${choice.emoji} ${choice.word}`;
      btn.addEventListener("click", () => {
        state.quizTotal += 1;
        if (choice.id === correct.id) {
          state.quizScore += 1;
          window.audioEngine.playEarcon("quiz_correct");
          window.audioEngine.speak(
            `Correct! That posture is ${correct.word}. Score is ${state.quizScore} out of ${state.quizTotal}. Next question:`
          );
          setTimeout(nextQuizQuestion, 3200);
        } else {
          window.audioEngine.playEarcon("quiz_wrong");
          window.audioEngine.speak(
            `Not quite. You chose ${choice.word}, wait—the correct sign is ${correct.word}. Let's try another one!`
          );
          setTimeout(nextQuizQuestion, 3800);
        }
        document.getElementById("quiz-score").textContent = `${state.quizScore} / ${state.quizTotal}`;
      });
      optionsContainer.appendChild(btn);
    });

    window.audioEngine.playEarcon("tab");
    window.audioEngine.speak(
      `Audio ISL Quiz Question. Listen to how the hands are positioned: ${correct.tactileGuide}. Which sign is this? Choice 1: ${choices[0].word}. Choice 2: ${choices[1].word}. Choice 3: ${choices[2].word}. Choice 4: ${choices[3].word}.`
    );
  }

  // =========================================================================
  // MODULE 4: BLIND ASSISTIVE QUICK-BOARD
  // =========================================================================
  function initQuickBoardModule() {
    const grid = document.getElementById("quickboard-grid");
    window.QUICK_BOARD_ITEMS.forEach((item) => {
      const b = window.BrailleEngine.translate(item.title);
      const card = document.createElement("button");
      card.type = "button";
      card.className = "quick-card";
      card.setAttribute(
        "aria-label",
        `${item.title}. Shortcut key ${item.key}. Speaks message aloud, shows ISL Avatar, and translates to Braille.`
      );
      card.innerHTML = `
        <div class="quick-card-header">
          <span class="quick-card-emoji" aria-hidden="true">${item.emoji}</span>
          <kbd>Key ${item.key}</kbd>
        </div>
        <h3>${item.title}</h3>
        <p>"${item.spoken}"</p>
        <span class="chat-braille-line" aria-hidden="true">⠿ ${b.unicode}</span>
      `;
      card.addEventListener("click", () => {
        activateQuickBoardItem(item);
      });
      grid.appendChild(card);
    });
  }

  function activateQuickBoardItem(item) {
    window.audioEngine.playEarcon("sign_detected");

    const signObj = window.ISL_SIGNS.find((s) => s.id === item.signId);
    if (signObj) {
      window.audioEngine.speakSignInLang(signObj, state.signOutputLang, {
        interrupt: true,
        assertive: true
      });
      state.translatedSequence = [signObj];
      state.lastTranslatedText = item.spoken;
      state.currentStageIndex = 0;
      renderSequenceStrip();
      renderActiveStageSign({ speakTactile: false });
      updateStageBrailleDisplay(item.spoken);
    } else {
      window.audioEngine.speak(item.spoken, { interrupt: true, assertive: true });
    }
  }

  // =========================================================================
  // EMERGENCY SOS MODAL
  // =========================================================================
  function initSOSModal() {
    const btnSos = document.getElementById("btn-sos");
    const btnRepeat = document.getElementById("btn-sos-repeat");
    const btnDeafReply = document.getElementById("btn-sos-deaf-reply");
    const btnClose = document.getElementById("btn-sos-close");

    btnSos.addEventListener("click", triggerEmergencySOS);

    btnRepeat.addEventListener("click", () => {
      window.audioEngine.playEarcon("sos");
      window.audioEngine.speak(
        "Emergency Attention! I am visually impaired and need immediate assistance. If you are deaf, please look at my screen or tap the helper button.",
        { interrupt: true, assertive: true }
      );
    });

    btnDeafReply.addEventListener("click", () => {
      window.audioEngine.playEarcon("sign_detected");
      window.audioEngine.speak(
        "Good news! A bystander has tapped the screen to let you know: I am here to help you.",
        { interrupt: true, assertive: true }
      );
    });

    btnClose.addEventListener("click", closeSOSModal);
  }

  function triggerEmergencySOS() {
    const modal = document.getElementById("sos-modal");
    const helpSign = window.ISL_SIGNS.find((s) => s.id === "emergency") || window.ISL_SIGNS[0];
    document.getElementById("sos-svg-holder").innerHTML = window.renderISLAvatarSVG(helpSign);
    modal.hidden = false;

    window.audioEngine.playEarcon("sos");
    window.audioEngine.speak(
      "Emergency SOS Alert Activated! Showing high-contrast Indian Sign Language Avatar Help beacon on screen and announcing: I am visually impaired and need assistance.",
      { interrupt: true, assertive: true }
    );
  }

  function closeSOSModal() {
    const modal = document.getElementById("sos-modal");
    if (!modal.hidden) {
      modal.hidden = true;
      window.audioEngine.stopSpeaking();
      window.audioEngine.speak("SOS alert dismissed.");
    }
  }

  // =========================================================================
  // VOICE COMMANDS & SPEECH-TO-ISL DICTATION (WEB SPEECH API)
  // =========================================================================
  function initVoiceRecognition() {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    const btnCmd = document.getElementById("voice-command-btn");
    const btnDictate = document.getElementById("btn-dictate-isl");

    if (!SpeechRec) {
      btnCmd.addEventListener("click", () => {
        window.audioEngine.speak(
          "Voice recognition is not supported in this browser. Please use keyboard shortcuts 1 to 4 or type your message."
        );
      });
      btnDictate.addEventListener("click", () => {
        document.getElementById("isl-text-input").focus();
        window.audioEngine.speak(
          "Please type your message in the text box and press Enter to translate into Indian Sign Language and Braille."
        );
      });
      return;
    }

    state.cmdRecognition = new SpeechRec();
    state.cmdRecognition.lang = "en-IN";
    state.cmdRecognition.interimResults = false;
    state.cmdRecognition.maxAlternatives = 1;

    state.cmdRecognition.onstart = () => {
      state.isCmdListening = true;
      btnCmd.classList.add("listening");
      btnCmd.setAttribute("aria-pressed", "true");
      document.getElementById("voice-cmd-label").textContent = "Listening for Command...";
      window.audioEngine.playEarcon("mic_on");
    };

    state.cmdRecognition.onend = () => {
      state.isCmdListening = false;
      btnCmd.classList.remove("listening");
      btnCmd.setAttribute("aria-pressed", "false");
      document.getElementById("voice-cmd-label").textContent = "Voice Command";
    };

    state.cmdRecognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase().trim();
      handleVoiceCommand(transcript);
    };

    btnCmd.addEventListener("click", toggleVoiceCommandMic);

    state.dictateRecognition = new SpeechRec();
    state.dictateRecognition.lang = "en-IN";
    state.dictateRecognition.interimResults = true;

    state.dictateRecognition.onstart = () => {
      state.isDictateListening = true;
      btnDictate.classList.add("listening");
      document.getElementById("dictate-btn-title").textContent = "Listening... Speak Now";
      window.audioEngine.playEarcon("mic_on");
    };

    state.dictateRecognition.onend = () => {
      state.isDictateListening = false;
      btnDictate.classList.remove("listening");
      document.getElementById("dictate-btn-title").textContent = "Click to Speak Your Message";
    };

    state.dictateRecognition.onresult = (event) => {
      let interimText = "";
      let finalText = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const t = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalText += t;
        } else {
          interimText += t;
        }
      }

      const inputEl = document.getElementById("isl-text-input");
      if (interimText) {
        inputEl.value = interimText;
      }
      if (finalText.trim()) {
        inputEl.value = finalText.trim();
        translateTextToISL(finalText.trim(), { speakConfirmation: true, addToChat: true });
      }
    };

    btnDictate.addEventListener("click", () => {
      if (state.isDictateListening) {
        state.dictateRecognition.stop();
      } else {
        window.audioEngine.stopSpeaking();
        state.dictateRecognition.start();
      }
    });
  }

  function toggleVoiceCommandMic() {
    if (!state.cmdRecognition) return;
    if (state.isCmdListening) {
      state.cmdRecognition.stop();
      window.audioEngine.playEarcon("mic_off");
    } else {
      window.audioEngine.stopSpeaking();
      try {
        state.cmdRecognition.start();
      } catch (e) {
        // Ignore if already started
      }
    }
  }

  function handleVoiceCommand(cmd) {
    window.audioEngine.playEarcon("sign_detected");

    if (cmd.includes("emergency") || cmd.includes("sos")) {
      triggerEmergencySOS();
      return;
    }
    if (
      cmd.includes("no text") ||
      cmd.includes("without text") ||
      cmd.includes("bina text") ||
      cmd.includes("बिना टेक्स्ट")
    ) {
      activateCommunicationMode("no-text");
      return;
    }
    if (
      cmd.includes("sign language") ||
      cmd.includes("sign langue") ||
      cmd.includes("sanketik") ||
      cmd.includes("सांकेतिक")
    ) {
      activateCommunicationMode("sign-language");
      return;
    }
    if (
      cmd.includes("blind language") ||
      cmd.includes("blind mode") ||
      cmd.includes("netraheen") ||
      cmd.includes("नेत्रहीन")
    ) {
      activateCommunicationMode("blind-language");
      return;
    }
    if (cmd.includes("maithili") || cmd.includes("मैथिली") || cmd.includes("mithila")) {
      setSignOutputLanguage("mai", { speakSample: true });
      return;
    }
    if (cmd.includes("bhojpuri") || cmd.includes("भोजपुरी")) {
      setSignOutputLanguage("bho", { speakSample: true });
      return;
    }
    if (cmd.includes("marathi") || cmd.includes("मराठी")) {
      setSignOutputLanguage("mr", { speakSample: true });
      return;
    }
    if (cmd.includes("bengali") || cmd.includes("bangla") || cmd.includes("বাংলা")) {
      setSignOutputLanguage("bn", { speakSample: true });
      return;
    }
    if (cmd.includes("tamil") || cmd.includes("தமிழ்")) {
      setSignOutputLanguage("ta", { speakSample: true });
      return;
    }
    if (cmd.includes("telugu") || cmd.includes("తెలుగు")) {
      setSignOutputLanguage("te", { speakSample: true });
      return;
    }
    if (cmd.includes("gujarati") || cmd.includes("ગુજરાતી")) {
      setSignOutputLanguage("gu", { speakSample: true });
      return;
    }
    if (cmd.includes("punjabi") || cmd.includes("ਪੰਜਾਬੀ")) {
      setSignOutputLanguage("pa", { speakSample: true });
      return;
    }
    if (cmd.includes("kannada") || cmd.includes("ಕನ್ನಡ")) {
      setSignOutputLanguage("kn", { speakSample: true });
      return;
    }
    if (cmd.includes("urdu") || cmd.includes("اردو")) {
      setSignOutputLanguage("ur", { speakSample: true });
      return;
    }
    if (cmd.includes("all language") || cmd.includes("every language") || cmd.includes("sabhi bhasha")) {
      setSignOutputLanguage("all", { speakSample: true });
      return;
    }
    if (cmd.includes("hindi") || cmd.includes("हिन्दी") || cmd.includes("हिंदी")) {
      setSignOutputLanguage("hi", { speakSample: true });
      return;
    }
    if (
      cmd.includes("welcome") ||
      cmd.includes("swagat") ||
      cmd.includes("namaste") ||
      cmd.includes("स्वागत")
    ) {
      speakBilingualWelcome("default");
      return;
    }
    if (cmd.includes("read avatar") || cmd.includes("read screen") || cmd.includes("describe avatar")) {
      speakCurrentContextSummary();
      return;
    }
    if (cmd.includes("braille")) {
      const text =
        state.activeTab === "camera"
          ? getActiveCameraBrailleText()
          : state.lastTranslatedText || "Hello";
      window.audioEngine.playBraillePulses(text, { speakAfter: true });
      return;
    }
    if (cmd.includes("add sign") || cmd.includes("train sign") || cmd.includes("custom sign")) {
      document.getElementById("btn-open-custom-sign")?.click();
      return;
    }
    if (cmd.includes("contrast") || cmd.includes("yellow")) {
      toggleUltraContrast();
      return;
    }
    if (cmd.includes("guide") || cmd.includes("orientation") || cmd.includes("instructions")) {
      speakOrientationGuide();
      return;
    }
    if (cmd.includes("camera") || cmd.includes("sign to speech")) {
      switchTab("camera");
      return;
    }
    if (cmd.includes("dictionary") || cmd.includes("learn")) {
      switchTab("dictionary");
      return;
    }
    if (cmd.includes("quiz")) {
      switchTab("dictionary", { announce: false });
      startAudioQuiz();
      return;
    }
    if (cmd.includes("quick") || cmd.includes("assist") || cmd.includes("board")) {
      switchTab("assist");
      return;
    }
    if (cmd.startsWith("how to sign ") || cmd.startsWith("sign ")) {
      const target = cmd.replace("how to sign ", "").replace("sign ", "").trim();
      const found = window.ISL_SIGNS.find(
        (s) => s.word.toLowerCase().includes(target) || s.keywords.includes(target)
      );
      if (found) {
        window.audioEngine.speak(window.getAvatarDescription(found));
        return;
      }
    }
    if (cmd.startsWith("translate ")) {
      const phrase = cmd.replace("translate ", "").trim();
      switchTab("translator", { announce: false });
      document.getElementById("isl-text-input").value = phrase;
      translateTextToISL(phrase, { speakConfirmation: true, addToChat: true });
      return;
    }
    if (cmd.includes("translate") || cmd.includes("speech to sign") || cmd.includes("two way")) {
      switchTab("translator");
      return;
    }

    switchTab("translator", { announce: false });
    document.getElementById("isl-text-input").value = cmd;
    translateTextToISL(cmd, { speakConfirmation: true, addToChat: true });
  }

  // =========================================================================
  // KEYBOARD SHORTCUTS & SCREEN/AVATAR NARRATION FOR BLIND USERS
  // =========================================================================
  function initKeyboardShortcuts() {
    document.addEventListener("keydown", (e) => {
      const tag = (e.target && e.target.tagName) || "";
      const isTyping = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";

      if (e.key === "Escape") {
        window.audioEngine.stopSpeaking();
        closeSOSModal();
        const customModal = document.getElementById("custom-sign-modal");
        if (customModal && !customModal.hidden) customModal.hidden = true;
        return;
      }

      if (e.altKey && e.key.toLowerCase() === "v") {
        e.preventDefault();
        toggleVoiceCommandMic();
        return;
      }

      if (isTyping) return;

      switch (e.key) {
        case "1":
          e.preventDefault();
          switchTab("camera");
          break;
        case "2":
          e.preventDefault();
          switchTab("translator");
          break;
        case "3":
          e.preventDefault();
          switchTab("dictionary");
          break;
        case "4":
          e.preventDefault();
          switchTab("assist");
          break;
        case " ":
          if (e.target === document.body || e.target.id === "main-content") {
            e.preventDefault();
            toggleVoiceCommandMic();
          }
          break;
        case "w":
        case "W":
          e.preventDefault();
          speakBilingualWelcome("default");
          break;
        case "l":
        case "L":
          e.preventDefault();
          cycleSignOutputLanguage();
          break;
        case "h":
        case "H":
          e.preventDefault();
          speakOrientationGuide();
          break;
        case "c":
        case "C":
          // C key is now free for standard copy/paste commands (Cmd+C / Ctrl+C)
          break;
        case "s":
        case "S":
          e.preventDefault();
          speakCurrentContextSummary();
          break;
        case "b":
        case "B": {
          e.preventDefault();
          // B key now toggles Ultra Contrast
          if (!e.metaKey && !e.ctrlKey) {
            toggleUltraContrast();
          }
          break;
        }
        default: {
          const upper = e.key.toUpperCase();
          const quickItem = window.QUICK_BOARD_ITEMS.find((item) => item.key === upper);
          if (quickItem && state.activeTab === "assist") {
            e.preventDefault();
            activateQuickBoardItem(quickItem);
          }
          break;
        }
      }
    });
  }

  /**
   * Reads aloud the active text on screen, the on-screen ISL Avatar's posture & expression, and its 6-dot Braille summary in English and Hindi.
   */
  function speakCurrentContextSummary() {
    window.audioEngine.playEarcon("avatar_read");
    if (state.activeTab === "camera") {
      const sign = state.currentDetectedSign || window.ISL_SIGNS[0];
      const naturalSentence = state.accumulatedSentence.length
        ? window.naturalizeISLGloss(state.accumulatedSentence)
        : sign.spokenPhrase;
      const hiData = state.accumulatedSentence.length && window.naturalizeISLGlossHindi
        ? window.naturalizeISLGlossHindi(state.accumulatedSentence)
        : { hi: sign.hindiPhrase || sign.hindiWord, hiPhonetic: sign.hindiPhonetic || sign.spokenPhrase };
      const braille = window.BrailleEngine.translate(getActiveCameraBrailleText());
      window.audioEngine.speakBilingual(
        `Screen & Avatar Summary: ${window.getAvatarDescription(sign)} Text on screen: "${naturalSentence}". ${braille.spokenGuide}`,
        hiData.hi,
        {
          hindiPhonetic: hiData.hiPhonetic,
          interrupt: true,
          assertive: true
        }
      );
    } else if (state.activeTab === "translator") {
      const current = state.translatedSequence[state.currentStageIndex] || window.ISL_SIGNS[0];
      const braille = window.BrailleEngine.translate(state.lastTranslatedText || current.word);
      window.audioEngine.speakBilingual(
        `Screen & Avatar Summary: Active translated text is "${state.lastTranslatedText}". ${window.getAvatarDescription(current)} ${braille.spokenGuide}`,
        current.hindiPhrase || current.hindiWord || current.spokenPhrase,
        {
          hindiPhonetic: current.hindiPhonetic || current.spokenPhrase,
          interrupt: true,
          assertive: true
        }
      );
    } else {
      speakOrientationGuide();
    }
  }

  function initFocusNarration() {
    let recentPointerDown = false;
    document.addEventListener(
      "pointerdown",
      () => {
        recentPointerDown = true;
        setTimeout(() => {
          recentPointerDown = false;
        }, 350);
      },
      true
    );

    document.addEventListener("focusin", (e) => {
      const el = e.target;
      if (!el || el === document.body) return;
      // Only narrate focus when navigating via keyboard (Tab), so mouse clicks don't get interrupted
      if (recentPointerDown) return;

      window.audioEngine.playEarcon("focus");
      if (!window.audioEngine.autoNarrate) return;
      const label =
        el.getAttribute("aria-label") ||
        el.textContent?.trim().replace(/\s+/g, " ").slice(0, 90);
      if (label) {
        window.audioEngine.speak(label, { interrupt: true, assertive: false });
      }
    });
  }
})();