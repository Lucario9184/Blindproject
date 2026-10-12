/**
 * audio.js — Blind Accessibility Audio, Speech Generation & Sonic Braille Engine
 * Includes:
 *  - Guaranteed Pre-Rendered Web Audio Sign Voice Playback (window.SIGN_AUDIO_CLIPS)
 *  - Web Audio API Synthesized Earcons & Sonic/Haptic 6-Dot Braille Pulse Player
 *  - Multi-Voice Text-to-Speech (en-US / en-IN / hi-IN) + HTML5 Audio TTS Fallback
 *  - ARIA Live Region Announcements & On-Screen Text / Avatar Narration
 */

class BlindAudioEngine {
  constructor() {
    this.autoNarrate = true;
    this.earconsEnabled = true;
    this.speechRate = 1.0;
    this.speechPitch = 1.0;
    this.audioCtx = null;
    this.voices = [];
    this.selectedVoice = null;
    this.userSelectedVoice = false;
    this.hindiVoice = null;
    this.hasSpokenStartupWelcome = false;
    this._speakTimer = null;
    this._watchdogTimer = null;
    this._activeUtterances = [];
    this._decodedClipCache = {};
    this._activeBufferSource = null;
    this._activeHtmlAudio = null;
    window.__sanketActiveUtterances = this._activeUtterances;

    this.initVoices();
    this._initGestureUnlock();
  }

  _initGestureUnlock() {
    const unlock = () => {
      this.ensureAudioContext();
      if ("speechSynthesis" in window && window.speechSynthesis.paused) {
        try {
          window.speechSynthesis.resume();
        } catch (e) {}
      }
    };
    ["pointerdown", "click", "touchstart", "keydown"].forEach((evt) => {
      document.addEventListener(evt, unlock, { passive: true, capture: true });
    });
  }

  initVoices() {
    if (!("speechSynthesis" in window)) return;
    const pickVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices.length) return;
      this.voices = voices;

      // Prioritize verified pre-installed voices (Samantha on macOS, Google US English on Chrome,
      // Microsoft Aria/David/Zira on Windows) before falling back to system default, avoiding
      // un-downloaded macOS stub voices (like Rishi/Aman) that can silently fail in Chrome.
      if (!this.selectedVoice) {
        this.selectedVoice =
          voices.find((v) => v.name === "Samantha") ||
          voices.find((v) => v.name.includes("Samantha")) ||
          voices.find((v) => v.name.includes("Google US English")) ||
          voices.find((v) => v.name.includes("Google UK English Female")) ||
          voices.find((v) => v.name.includes("Microsoft Zira") || v.name.includes("Microsoft Aria")) ||
          voices.find((v) => v.name === "Alex" || v.name === "Daniel" || v.name === "Karen") ||
          voices.find((v) => v.default && v.lang.startsWith("en")) ||
          voices.find((v) => v.lang === "en-US") ||
          voices.find((v) => v.lang.startsWith("en")) ||
          voices[0];
      }

      if (!this.hindiVoice) {
        this.hindiVoice =
          voices.find(
            (v) =>
              (v.lang === "hi-IN" || v.lang.toLowerCase().startsWith("hi")) &&
              (v.name.includes("Google") || v.name.includes("Microsoft") || v.name.includes("Lekha"))
          ) ||
          voices.find((v) => v.lang === "hi-IN") ||
          null;
      }

      const voiceSelect = document.getElementById("speech-voice-select");
      if (voiceSelect && voiceSelect.options.length <= 1) {
        voiceSelect.innerHTML = '<option value="">Voice: Browser Verified Default</option>';
        const prioritized = voices.filter(
          (v) => v.lang.startsWith("en") || v.lang.startsWith("hi")
        );
        const list = prioritized.length ? prioritized : voices;
        list.slice(0, 18).forEach((v) => {
          const opt = document.createElement("option");
          opt.value = v.name;
          opt.textContent = `Voice: ${v.name.slice(0, 22)} (${v.lang})`;
          voiceSelect.appendChild(opt);
        });
      }
    };
    pickVoice();
    window.speechSynthesis.onvoiceschanged = pickVoice;
  }

  setVoiceByName(name) {
    if (!name) {
      this.selectedVoice = null;
      this.userSelectedVoice = false;
      this.initVoices();
      return;
    }
    if (!this.voices || !this.voices.length) return;
    const found = this.voices.find((v) => v.name === name);
    if (found) {
      this.selectedVoice = found;
      this.userSelectedVoice = true;
    }
  }

  ensureAudioContext() {
    try {
      if (!this.audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          this.audioCtx = new AudioContextClass();
        }
      }
      if (this.audioCtx && this.audioCtx.state === "suspended") {
        this.audioCtx.resume().catch(() => {});
      }
    } catch (e) {}
  }

  /**
   * Plays distinctive non-verbal musical earcons for eyes-free navigation feedback.
   */
  playEarcon(type) {
    if (!this.earconsEnabled) return;
    try {
      this.ensureAudioContext();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      const playTone = (freq, startOffset, duration, wave = "sine", gainVal = 0.12) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = wave;
        osc.frequency.setValueAtTime(freq, now + startOffset);
        gain.gain.setValueAtTime(gainVal, now + startOffset);
        gain.gain.exponentialRampToValueAtTime(0.001, now + startOffset + duration);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + startOffset);
        osc.stop(now + startOffset + duration);
      };

      switch (type) {
        case "focus":
          playTone(520, 0, 0.045, "sine", 0.06);
          break;
        case "tab":
          playTone(440, 0, 0.09, "triangle", 0.12);
          playTone(660, 0.08, 0.14, "triangle", 0.14);
          break;
        case "sign_detected":
          playTone(523.25, 0, 0.08, "sine", 0.12); // C5
          playTone(659.25, 0.06, 0.08, "sine", 0.12); // E5
          playTone(783.99, 0.12, 0.14, "sine", 0.14); // G5
          break;
        case "braille_pulse":
          playTone(587.33, 0, 0.07, "triangle", 0.14);
          playTone(880, 0.08, 0.11, "sine", 0.14);
          break;
        case "avatar_read":
          playTone(440, 0, 0.08, "sine", 0.13);
          playTone(554.37, 0.07, 0.08, "sine", 0.13);
          playTone(659.25, 0.14, 0.16, "sine", 0.15);
          break;
        case "mic_on":
          playTone(392, 0, 0.1, "sine", 0.15);
          playTone(587.33, 0.09, 0.16, "sine", 0.16);
          break;
        case "mic_off":
          playTone(587.33, 0, 0.1, "sine", 0.15);
          playTone(392, 0.09, 0.16, "sine", 0.15);
          break;
        case "hand_in_frame":
          playTone(880, 0, 0.06, "sine", 0.05);
          break;
        case "quiz_correct":
          playTone(523.25, 0, 0.1, "triangle", 0.16);
          playTone(659.25, 0.1, 0.1, "triangle", 0.16);
          playTone(1046.5, 0.2, 0.28, "triangle", 0.2);
          break;
        case "quiz_wrong":
          playTone(240, 0, 0.18, "sawtooth", 0.12);
          playTone(190, 0.15, 0.25, "sawtooth", 0.12);
          break;
        case "sos":
          playTone(880, 0, 0.22, "square", 0.22);
          playTone(620, 0.24, 0.22, "square", 0.22);
          playTone(880, 0.48, 0.25, "square", 0.22);
          break;
        case "welcome":
          playTone(440, 0, 0.11, "sine", 0.14);
          playTone(554.37, 0.09, 0.11, "sine", 0.14);
          playTone(659.25, 0.18, 0.14, "sine", 0.16);
          playTone(880, 0.28, 0.25, "triangle", 0.18);
          break;
      }
    } catch (e) {}
  }

  /**
   * Plays sonic & haptic 6-dot Braille rhythm pulses for a word or phrase, then speaks the dot guide.
   */
  playBraillePulses(rawText, { speakAfter = true } = {}) {
    if (!window.BrailleEngine) return;
    const braille = window.BrailleEngine.translate(rawText);
    const cells = braille.cells.filter((c) => !c.isSpace).slice(0, 8);

    try {
      this.ensureAudioContext();
      if (this.audioCtx && cells.length) {
        const dotFreqs = [440, 493.88, 554.37, 659.25, 739.99, 880];
        const now = this.audioCtx.currentTime;
        let offset = 0;
        const vibratePattern = [];

        cells.forEach((cell) => {
          cell.activeNums.forEach((dotNum) => {
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();
            osc.type = dotNum <= 3 ? "triangle" : "sine";
            osc.frequency.setValueAtTime(dotFreqs[dotNum - 1] || 520, now + offset);
            gain.gain.setValueAtTime(0.14, now + offset);
            gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.075);
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start(now + offset);
            osc.stop(now + offset + 0.08);
            offset += 0.085;
            vibratePattern.push(45, 30);
          });
          offset += 0.14;
          vibratePattern.push(0, 90);
        });

        if ("vibrate" in navigator && vibratePattern.length) {
          navigator.vibrate(vibratePattern.slice(0, 24));
        }

        if (speakAfter) {
          setTimeout(() => {
            this.speak(braille.spokenGuide, { interrupt: true, assertive: true });
          }, Math.min(2200, Math.round(offset * 1000) + 120));
        }
        return;
      }
    } catch (e) {}

    if (speakAfter) {
      this.speak(braille.spokenGuide, { interrupt: true, assertive: true });
    }
  }

  _stopActiveClipAudio() {
    if (this._activeBufferSource) {
      try {
        this._activeBufferSource.onended = null;
        this._activeBufferSource.stop();
      } catch (e) {}
      this._activeBufferSource = null;
    }
    if (this._activeHtmlAudio) {
      try {
        this._activeHtmlAudio.pause();
        this._activeHtmlAudio.src = "";
      } catch (e) {}
      this._activeHtmlAudio = null;
    }
  }

  _base64ToArrayBuffer(b64) {
    const bin = window.atob(b64);
    const len = bin.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = bin.charCodeAt(i);
    }
    return bytes.buffer;
  }

  /**
   * Plays a pre-rendered voice clip from window.SIGN_AUDIO_CLIPS via Web Audio API
   * (with HTML5 <audio> fallback and speechSynthesis fallback).
   * Guaranteed to work inside asynchronous MediaPipe camera callbacks even when
   * browser window.speechSynthesis is muted or stuck.
   */
  playSignClip(clipKey, fallbackSpokenText, { onComplete = null } = {}) {
    const clips = window.SIGN_AUDIO_CLIPS;
    if (!clips || !clips[clipKey]) {
      this._dispatchUtterance(fallbackSpokenText, {
        voice: this.selectedVoice,
        rate: this.speechRate,
        pitch: this.speechPitch,
        interrupt: true,
        onComplete
      });
      return;
    }

    // Stop any previous speech or clip
    this._stopActiveClipAudio();
    if ("speechSynthesis" in window && (window.speechSynthesis.speaking || window.speechSynthesis.pending)) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }

    const statusDot = document.getElementById("audio-status-dot");
    const statusText = document.getElementById("audio-status-text");
    this.hasSpokenStartupWelcome = true;
    if (statusDot) statusDot.classList.add("speaking");

    const finishUI = () => {
      if (statusDot) statusDot.classList.remove("speaking");
      if (statusText) {
        statusText.innerHTML =
          'Audio Guide Ready (Press <strong>Space</strong> for Voice, <strong>W</strong> for Welcome EN/हिंदी, or <strong>S</strong> to Read Screen)';
      }
      if (typeof onComplete === "function") onComplete();
    };

    const playViaHtmlAudio = () => {
      try {
        const audio = new Audio(`data:audio/mp4;base64,${clips[clipKey]}`);
        audio.playbackRate = this.speechRate || 1.0;
        audio.volume = 1.0;
        this._activeHtmlAudio = audio;
        audio.onended = () => {
          if (this._activeHtmlAudio === audio) this._activeHtmlAudio = null;
          finishUI();
        };
        audio.onerror = () => {
          if (this._activeHtmlAudio === audio) this._activeHtmlAudio = null;
          this._dispatchUtterance(fallbackSpokenText, {
            voice: this.selectedVoice,
            rate: this.speechRate,
            pitch: this.speechPitch,
            interrupt: true,
            onComplete
          });
        };
        const p = audio.play();
        if (p && typeof p.catch === "function") {
          p.catch(() => {
            this._dispatchUtterance(fallbackSpokenText, {
              voice: this.selectedVoice,
              rate: this.speechRate,
              pitch: this.speechPitch,
              interrupt: true,
              onComplete
            });
          });
        }
      } catch (e) {
        this._dispatchUtterance(fallbackSpokenText, {
          voice: this.selectedVoice,
          rate: this.speechRate,
          pitch: this.speechPitch,
          interrupt: true,
          onComplete
        });
      }
    };

    try {
      this.ensureAudioContext();
      if (!this.audioCtx) {
        playViaHtmlAudio();
        return;
      }

      const startBufferSource = (audioBuffer) => {
        try {
          this._stopActiveClipAudio();
          const source = this.audioCtx.createBufferSource();
          source.buffer = audioBuffer;
          source.playbackRate.value = this.speechRate || 1.0;
          const gainNode = this.audioCtx.createGain();
          gainNode.gain.value = 1.0;
          source.connect(gainNode);
          gainNode.connect(this.audioCtx.destination);
          this._activeBufferSource = source;
          source.onended = () => {
            if (this._activeBufferSource === source) {
              this._activeBufferSource = null;
            }
            finishUI();
          };
          source.start(0);
        } catch (err) {
          playViaHtmlAudio();
        }
      };

      if (this._decodedClipCache[clipKey]) {
        startBufferSource(this._decodedClipCache[clipKey]);
        return;
      }

      const arrBuf = this._base64ToArrayBuffer(clips[clipKey]);
      this.audioCtx.decodeAudioData(
        arrBuf,
        (decoded) => {
          this._decodedClipCache[clipKey] = decoded;
          startBufferSource(decoded);
        },
        () => {
          playViaHtmlAudio();
        }
      );
    } catch (e) {
      playViaHtmlAudio();
    }
  }

  /**
   * Looks up a pre-rendered base64 audio clip for a given language code and sign ID.
   */
  getRegionalClipBase64(langCode, clipKey) {
    if (!clipKey) return null;
    if (langCode === "en") {
      return (window.SIGN_AUDIO_CLIPS && window.SIGN_AUDIO_CLIPS[clipKey]) || null;
    }
    if (
      window.SIGN_AUDIO_CLIPS_LANG &&
      window.SIGN_AUDIO_CLIPS_LANG[langCode] &&
      window.SIGN_AUDIO_CLIPS_LANG[langCode][clipKey]
    ) {
      return window.SIGN_AUDIO_CLIPS_LANG[langCode][clipKey];
    }
    if (langCode === "hi" && window.SIGN_AUDIO_CLIPS_HI && window.SIGN_AUDIO_CLIPS_HI[clipKey]) {
      return window.SIGN_AUDIO_CLIPS_HI[clipKey];
    }
    if (langCode === "mai" && window.SIGN_AUDIO_CLIPS_MAI && window.SIGN_AUDIO_CLIPS_MAI[clipKey]) {
      return window.SIGN_AUDIO_CLIPS_MAI[clipKey];
    }
    return null;
  }

  /**
   * Plays any base64-encoded AAC/M4A clip (English, Hindi, Maithili, or any of the 12 languages)
   * via Web Audio API AudioContext with HTML5 <audio> and speechSynthesis fallbacks.
   */
  playBase64AudioClip(b64Data, cacheKey, fallbackSpokenText, { voice = null, lang = "hi-IN", onComplete = null } = {}) {
    if (!b64Data) {
      this._dispatchUtterance(fallbackSpokenText, {
        voice: voice || this.selectedVoice,
        lang,
        rate: this.speechRate,
        pitch: this.speechPitch,
        interrupt: true,
        skipClipLookup: true,
        onComplete
      });
      return;
    }

    this._stopActiveClipAudio();
    if ("speechSynthesis" in window && (window.speechSynthesis.speaking || window.speechSynthesis.pending)) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }

    const statusDot = document.getElementById("audio-status-dot");
    this.hasSpokenStartupWelcome = true;
    if (statusDot) statusDot.classList.add("speaking");

    const finishClip = () => {
      if (statusDot) statusDot.classList.remove("speaking");
      if (typeof onComplete === "function") onComplete();
    };

    const playViaHtmlAudio = () => {
      try {
        const audio = new Audio(`data:audio/mp4;base64,${b64Data}`);
        audio.playbackRate = this.speechRate || 1.0;
        audio.volume = 1.0;
        this._activeHtmlAudio = audio;
        audio.onended = () => {
          if (this._activeHtmlAudio === audio) this._activeHtmlAudio = null;
          finishClip();
        };
        audio.onerror = () => {
          if (this._activeHtmlAudio === audio) this._activeHtmlAudio = null;
          this._dispatchUtterance(fallbackSpokenText, {
            voice: voice || this.selectedVoice,
            lang,
            rate: this.speechRate,
            pitch: this.speechPitch,
            interrupt: true,
            skipClipLookup: true,
            onComplete
          });
        };
        const p = audio.play();
        if (p && typeof p.catch === "function") {
          p.catch(() => {
            this._dispatchUtterance(fallbackSpokenText, {
              voice: voice || this.selectedVoice,
              lang,
              rate: this.speechRate,
              pitch: this.speechPitch,
              interrupt: true,
              skipClipLookup: true,
              onComplete
            });
          });
        }
      } catch (e) {
        this._dispatchUtterance(fallbackSpokenText, {
          voice: voice || this.selectedVoice,
          lang,
          rate: this.speechRate,
          pitch: this.speechPitch,
          interrupt: true,
          skipClipLookup: true,
          onComplete
        });
      }
    };

    try {
      this.ensureAudioContext();
      if (!this.audioCtx) {
        playViaHtmlAudio();
        return;
      }

      const startBufferSource = (audioBuffer) => {
        try {
          this._stopActiveClipAudio();
          const source = this.audioCtx.createBufferSource();
          source.buffer = audioBuffer;
          source.playbackRate.value = this.speechRate || 1.0;
          const gainNode = this.audioCtx.createGain();
          gainNode.gain.value = 1.0;
          source.connect(gainNode);
          gainNode.connect(this.audioCtx.destination);
          this._activeBufferSource = source;
          source.onended = () => {
            if (this._activeBufferSource === source) {
              this._activeBufferSource = null;
            }
            finishClip();
          };
          source.start(0);
        } catch (err) {
          playViaHtmlAudio();
        }
      };

      if (this._decodedClipCache[cacheKey]) {
        startBufferSource(this._decodedClipCache[cacheKey]);
        return;
      }

      const arrBuf = this._base64ToArrayBuffer(b64Data);
      this.audioCtx.decodeAudioData(
        arrBuf,
        (decoded) => {
          this._decodedClipCache[cacheKey] = decoded;
          startBufferSource(decoded);
        },
        () => {
          playViaHtmlAudio();
        }
      );
    } catch (e) {
      playViaHtmlAudio();
    }
  }

  /**
   * Returns currently active sign output language from the UI selector.
   */
  getActiveSignLangSetting() {
    const el =
      document.getElementById("main-sign-output-lang") ||
      document.getElementById("sign-output-lang");
    return (el && el.value) || "en_hi";
  }

  /**
   * Speaks any ISL Sign object aloud immediately in the user's chosen language
   * (Hindi, Maithili, Hindi+English, or any of the 12 languages).
   */
  speakSign(signObj, { interrupt = true, assertive = true, onComplete = null } = {}) {
    if (!signObj) return;
    const activeLang = this.getActiveSignLangSetting();
    this.speakSignInLang(signObj, activeLang, { interrupt, assertive, onComplete });
  }

  /**
   * Internal helper that dispatches speechSynthesis and automatically falls back
   * to an HTML5 Audio stream or pre-baked clip if speechSynthesis fails to start.
   */
  _dispatchUtterance(
    spokenText,
    {
      voice = null,
      lang = "",
      rate = this.speechRate,
      pitch = this.speechPitch,
      interrupt = true,
      skipClipLookup = false,
      onStart = null,
      onComplete = null
    } = {}
  ) {
    if (!spokenText) return;

    if (this._speakTimer) {
      clearTimeout(this._speakTimer);
      this._speakTimer = null;
    }
    if (this._watchdogTimer) {
      clearTimeout(this._watchdogTimer);
      this._watchdogTimer = null;
    }

    if (interrupt) {
      this._stopActiveClipAudio();
    }

    const statusText = document.getElementById("audio-status-text");
    const statusDot = document.getElementById("audio-status-dot");

    if (!skipClipLookup && window.SIGN_AUDIO_CLIPS && window.ISL_SIGNS) {
      const normalized = spokenText.trim().toLowerCase();
      if (normalized.startsWith("camera active")) {
        this.playSignClip("_camera_active", spokenText, { onComplete });
        return;
      }
    }

    if (!("speechSynthesis" in window)) {
      if (typeof onComplete === "function") onComplete();
      return;
    }

    if (!this.voices || !this.voices.length) {
      this.initVoices();
    }

    if (interrupt && (window.speechSynthesis.speaking || window.speechSynthesis.pending)) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
      this._activeUtterances.length = 0;
    }

    try {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
    } catch (e) {}

    const utterance = new SpeechSynthesisUtterance(spokenText);
    const chosenVoice = voice || this.selectedVoice;
    if (chosenVoice) {
      utterance.voice = chosenVoice;
      utterance.lang = lang || chosenVoice.lang || "en-US";
    } else {
      utterance.lang = lang || "en-US";
    }

    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = 1.0;

    this._activeUtterances.push(utterance);

    let hasStarted = false;
    const cleanup = () => {
      const idx = this._activeUtterances.indexOf(utterance);
      if (idx !== -1) this._activeUtterances.splice(idx, 1);
      if (this._watchdogTimer) {
        clearTimeout(this._watchdogTimer);
        this._watchdogTimer = null;
      }
      if (statusDot) statusDot.classList.remove("speaking");
      if (statusText) {
        statusText.innerHTML =
          'Audio Guide Ready (Press <strong>Space</strong> for Voice, <strong>L</strong> to Cycle Language, or <strong>S</strong> to Read Screen)';
      }
      if (typeof onComplete === "function") onComplete();
    };

    utterance.onstart = () => {
      hasStarted = true;
      this.hasSpokenStartupWelcome = true;
      if (statusDot) statusDot.classList.add("speaking");
      if (typeof onStart === "function") onStart();
    };
    utterance.onend = cleanup;
    utterance.onerror = () => {
      cleanup();
    };

    try {
      window.speechSynthesis.speak(utterance);
    } catch (e) {}

    this._watchdogTimer = setTimeout(() => {
      if (!hasStarted && "speechSynthesis" in window) {
        try {
          if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
          }
        } catch (e) {}
      }
    }, 250);
  }

  /**
   * Speaks a bilingual statement in Hindi AND English aloud reliably across all browsers.
   */
  speakBilingual(
    englishText,
    hindiText,
    { hindiPhonetic = "", signId = "", interrupt = true, assertive = true, onStart = null, onComplete = null } = {}
  ) {
    const combinedAria = `हिंदी: ${hindiText} | ${englishText}`;
    const srEl = document.getElementById(assertive ? "sr-assertive" : "sr-polite");
    if (srEl) {
      srEl.textContent = "";
      setTimeout(() => {
        srEl.textContent = combinedAria;
      }, 20);
    }

    // If a specific signId is passed, speak it in the user's selected regional language mode
    if (signId && window.ISL_SIGNS) {
      const matched = window.ISL_SIGNS.find((s) => s.id === signId);
      if (matched) {
        this.speakSignInLang(matched, this.getActiveSignLangSetting(), {
          interrupt,
          assertive,
          onComplete
        });
        return;
      }
    }

    const statusText = document.getElementById("audio-status-text");
    if (statusText) {
      statusText.textContent = `Speaking (हिन्दी + EN): "${(hindiText || englishText).slice(0, 65)}"`;
    }

    // If this is the Welcome statement and pre-rendered Hindi + English welcome clips exist, chain them!
    const hiWelcomeClip = this.getRegionalClipBase64("hi", "_welcome");
    const enWelcomeClip = this.getRegionalClipBase64("en", "_welcome");
    if (
      String(englishText || "").toLowerCase().startsWith("welcome to the website") &&
      hiWelcomeClip &&
      enWelcomeClip
    ) {
      this.playBase64AudioClip(hiWelcomeClip, "hi__welcome", hindiText, {
        voice: this.hindiVoice,
        lang: "hi-IN",
        onComplete: () => {
          this.playBase64AudioClip(enWelcomeClip, "en__welcome", englishText, {
            voice: this.selectedVoice,
            lang: "en-US",
            onComplete
          });
        }
      });
      return;
    }

    const cleanEnglish = String(englishText || "").replace(/\s*\/\s*/g, ", ");
    const cleanHindi = this.hindiVoice
      ? String(hindiText || hindiPhonetic || "")
      : String(hindiPhonetic || hindiText || "");

    if (cleanHindi) {
      this._dispatchUtterance(cleanHindi, {
        voice: this.hindiVoice || this.selectedVoice,
        lang: this.hindiVoice ? "hi-IN" : "en-US",
        rate: Math.max(0.85, this.speechRate * 0.95),
        pitch: this.speechPitch,
        interrupt,
        skipClipLookup: true,
        onStart,
        onComplete: () => {
          this._dispatchUtterance(cleanEnglish, {
            voice: this.selectedVoice,
            lang: "en-US",
            rate: this.speechRate,
            pitch: this.speechPitch,
            interrupt: false,
            skipClipLookup: true,
            onComplete
          });
        }
      });
      return;
    }

    this._dispatchUtterance(cleanEnglish, {
      voice: this.selectedVoice,
      rate: this.speechRate,
      pitch: this.speechPitch,
      interrupt,
      skipClipLookup: true,
      onStart,
      onComplete
    });
  }

  /**
   * Speaks Hindi statement aloud.
   */
  speakHindi(hindiText, hindiPhonetic = "", { interrupt = true, assertive = true } = {}) {
    const statusText = document.getElementById("audio-status-text");
    if (statusText) {
      statusText.textContent = `Speaking (हिंदी): "${(hindiText || "").slice(0, 75)}"`;
    }

    const textToSpeak = this.hindiVoice ? hindiText : hindiPhonetic || hindiText;

    this._dispatchUtterance(textToSpeak, {
      voice: this.hindiVoice || this.selectedVoice,
      lang: this.hindiVoice ? "hi-IN" : "en-US",
      rate: Math.max(0.85, this.speechRate * 0.95),
      pitch: this.speechPitch,
      interrupt,
      skipClipLookup: true
    });
  }

  /**
   * Speaks text aloud using Web Speech API (or pre-baked clip) and updates screen reader live region.
   */
  speak(text, { interrupt = true, assertive = false } = {}) {
    if (!text) return;

    const srEl = document.getElementById(assertive ? "sr-assertive" : "sr-polite");
    if (srEl) {
      srEl.textContent = "";
      setTimeout(() => {
        srEl.textContent = text;
      }, 20);
    }

    const statusText = document.getElementById("audio-status-text");
    if (statusText) {
      statusText.textContent = `Speaking: "${text.slice(0, 85)}${text.length > 85 ? "..." : ""}"`;
    }

    const cleanText = String(text).replace(/\s*\/\s*/g, ", ");
    this._dispatchUtterance(cleanText, {
      voice: this.selectedVoice,
      rate: this.speechRate,
      pitch: this.speechPitch,
      interrupt
    });
  }

  /**
   * Finds the best installed TTS voice for a given BCP-47 language code (e.g., "mai-IN", "ta-IN", "bn-IN")
   * while avoiding broken macOS stub voices like Aman/Rishi for English.
   */
  findRegionalVoice(voiceLang = "hi-IN", fallbackLang = "hi-IN") {
    if (!this.voices || !this.voices.length) {
      this.initVoices();
    }
    const prefix = (voiceLang || "hi-IN").split("-")[0].toLowerCase();
    if (prefix === "en") {
      return { voice: this.selectedVoice || null, isNativeScriptSupported: true };
    }
    if (["hi", "mai", "bho", "mr"].includes(prefix) && this.hindiVoice) {
      return { voice: this.hindiVoice, isNativeScriptSupported: true };
    }

    const direct =
      this.voices.find((v) => v.lang.toLowerCase() === (voiceLang || "").toLowerCase()) ||
      this.voices.find((v) => v.lang.toLowerCase().startsWith(prefix));
    if (direct) return { voice: direct, isNativeScriptSupported: true };

    if (fallbackLang && fallbackLang.startsWith("hi") && this.hindiVoice) {
      return { voice: this.hindiVoice, isNativeScriptSupported: false };
    }

    return { voice: this.selectedVoice || null, isNativeScriptSupported: false };
  }

  /**
   * Speaks any ISL sign in the selected regional language mode using guaranteed pre-rendered
   * 12-language WebAudio voice clips (with Web Speech API fallback for custom user-trained signs):
   *  - "hi" (Hindi Only — Lekha)
   *  - "en_hi" (Hindi + English — speaks Hindi FIRST then English!)
   *  - "mai" (Maithili Only — Lekha Devanagari)
   *  - "en_mai" (Maithili + English — speaks Maithili FIRST then English!)
   *  - "multi_top" (Hindi + Maithili + English)
   *  - "all" (All 12 Indian & English Languages sequentially)
   *  - Individual language codes: "bho", "mr", "bn", "ta", "te", "gu", "pa", "kn", "ur", "en"
   */
  speakSignInLang(signObj, langSetting = "en_hi", { interrupt = true, assertive = true, onComplete = null } = {}) {
    if (!signObj || !window.getSignTranslation) return;

    let codesToSpeak = [];
    if (langSetting === "en_hi") {
      // Speak Hindi FIRST so the user hears Hindi output immediately, followed by English
      codesToSpeak = ["hi", "en"];
    } else if (langSetting === "en_mai") {
      codesToSpeak = ["mai", "en"];
    } else if (langSetting === "multi_top") {
      codesToSpeak = ["hi", "mai", "en"];
    } else if (langSetting === "all") {
      codesToSpeak = ["hi", "mai", "bho", "mr", "bn", "ta", "te", "gu", "pa", "kn", "ur", "en"];
    } else {
      codesToSpeak = [langSetting];
    }

    const translations = codesToSpeak
      .map((code) => window.getSignTranslation(signObj, code))
      .filter(Boolean);
    if (!translations.length) return;

    const summaryAria = translations
      .map((t) => `${t.langName} (${t.nativeName}): ${t.word} — "${t.phrase}"`)
      .join(" | ");

    const srEl = document.getElementById(assertive ? "sr-assertive" : "sr-polite");
    if (srEl) {
      srEl.textContent = "";
      setTimeout(() => {
        srEl.textContent = summaryAria;
      }, 20);
    }

    const statusText = document.getElementById("audio-status-text");
    const statusDot = document.getElementById("audio-status-dot");

    if (interrupt) {
      this.stopSpeaking();
    }

    const resetStatus = () => {
      if (statusDot) statusDot.classList.remove("speaking");
      if (statusText) {
        statusText.innerHTML =
          'Audio Guide Ready (Press <strong>Space</strong> for Voice, <strong>L</strong> to Cycle Language, or <strong>S</strong> to Read Screen)';
      }
      if (typeof onComplete === "function") onComplete();
    };

    const playAtIndex = (idx) => {
      if (idx >= translations.length) {
        resetStatus();
        return;
      }
      const tr = translations[idx];
      if (statusDot) statusDot.classList.add("speaking");
      if (statusText) {
        statusText.textContent = `Speaking ${tr.flag} ${tr.langName} (${tr.nativeName}): "${tr.word} — ${tr.phrase}"`;
      }

      const clipB64 = this.getRegionalClipBase64(tr.langCode, signObj.id);
      const { voice, isNativeScriptSupported } = this.findRegionalVoice(tr.voiceLang, tr.fallbackVoice);
      const fallbackText =
        tr.langCode === "en"
          ? `${signObj.word.replace(/\/.*/g, "")}. ${tr.phrase}`
          : isNativeScriptSupported
          ? `${tr.word.replace(/\/.*/g, "")}। ${tr.phrase}`
          : `${tr.langName}: ${tr.phonetic}`;

      if (clipB64) {
        this.playBase64AudioClip(clipB64, `${tr.langCode}_${signObj.id}`, fallbackText, {
          voice,
          lang: tr.voiceLang || "hi-IN",
          onComplete: () => playAtIndex(idx + 1)
        });
      } else {
        this._dispatchUtterance(fallbackText, {
          voice,
          lang: isNativeScriptSupported ? tr.voiceLang : "en-US",
          rate: tr.langCode === "en" ? this.speechRate : Math.max(0.85, this.speechRate * 0.95),
          pitch: this.speechPitch,
          interrupt: idx === 0,
          skipClipLookup: true,
          onComplete: () => playAtIndex(idx + 1)
        });
      }
    };

    playAtIndex(0);
  }

  stopSpeaking() {
    if (this._speakTimer) {
      clearTimeout(this._speakTimer);
      this._speakTimer = null;
    }
    if (this._watchdogTimer) {
      clearTimeout(this._watchdogTimer);
      this._watchdogTimer = null;
    }
    this._stopActiveClipAudio();
    this._activeUtterances.length = 0;
    if ("speechSynthesis" in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
    const statusDot = document.getElementById("audio-status-dot");
    if (statusDot) statusDot.classList.remove("speaking");
  }
}

window.audioEngine = new BlindAudioEngine();

