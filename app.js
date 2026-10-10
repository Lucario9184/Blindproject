/**
 * app.js — Main Application Controller for SanketSetu (ISL ⇄ Blind Audio Bridge)
 * Upgraded with 3D Biomechanical Hand Landmark Precision Engine, Temporal Motion Tracking,
 * Multi-Word ISL Phrase NLP, and Interactive Custom ISL Sign Calibration Studio.
 */

(function () {
  "use strict";

  const CUSTOM_SIGNS_STORAGE_KEY = "sanketsetu_custom_signs_v1";

  // Application State
  const state = {
    activeTab: "camera",
    highContrastYellow: false,
    fontScale: 1.0,
    // Camera & Precision Gesture State
    cameraActive: false,
    videoStream: null,
    mpHands: null,
    precisionMode: "high", // "strict" (0.85, 12f), "high" (0.78, 8f), "fast" (0.70, 5f)
    minConfidence: 0.78,
    requiredStableFrames: 8,
    recognitionScope: "all", // "all", "conversational", "numbers"
    smoothedHands: [],
    motionHistory: [], // rolling 12-frame wrist & index-tip trajectory
    latestHandFeatures: null, // latest extracted 3D biomechanical features for live capture
    lastSignId: null,
    lastSignTime: 0,
    candidateSignId: null,
    candidateFrames: 0,
    lastHandBeepTime: 0,
    accumulatedSentence: [],
    signHistory: [],
    // Custom Signs State
    customSigns: [],
    capturedNormalizedLandmarks: null,
    // Translator Stage State
    translatedSequence: [],
    currentStageIndex: 0,
    stageTimer: null,
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
    initTabs();
    initCameraModule();
    initCustomSignStudio();
    initTranslatorModule();
    initDictionaryModule();
    initQuickBoardModule();
    initSOSModal();
    initVoiceRecognition();
    initKeyboardShortcuts();
    initFocusNarration();

    // Populate initial translator sequence ("Hello friend thank you")
    translateTextToISL("Hello friend thank you", { speakConfirmation: false });
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
  // ACCESSIBILITY TOOLBAR & PREFERENCES
  // =========================================================================
  function initAccessibilityToolbar() {
    const btnWelcome = document.getElementById("btn-welcome-audio");
    const btnAutoNarrate = document.getElementById("btn-auto-narrate");
    const btnEarcons = document.getElementById("btn-earcons");
    const btnContrast = document.getElementById("btn-contrast");
    const btnFontDec = document.getElementById("btn-font-dec");
    const btnFontInc = document.getElementById("btn-font-inc");
    const selectRate = document.getElementById("speech-rate");

    btnWelcome.addEventListener("click", () => {
      speakOrientationGuide();
    });

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

    selectRate.addEventListener("change", (e) => {
      window.audioEngine.speechRate = parseFloat(e.target.value) || 1.0;
      window.audioEngine.speak(`Speech speed set to ${window.audioEngine.speechRate} times.`);
    });
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
    window.audioEngine.playEarcon("sign_detected");
    const guideText =
      "Welcome to SanketSetu, the high-precision Indian Sign Language and Blind Accessibility Bridge. " +
      "You can navigate eyes-free using number keys 1 through 4, or press the Spacebar at any time to speak a voice command. " +
      "Press 1 for 3D Biomechanical Camera Sign-to-Speech, which recognizes over 40 Indian Sign Language gestures and numbers and speaks them aloud. " +
      "Press 2 for Speech-to-ISL Translator, where you speak and your words appear as articulated Indian Sign Language visuals for a deaf person. " +
      "Press 3 for the Tactile Audio ISL Dictionary and Quiz, or to add and train your own custom signs. " +
      "Press 4 for the Quick Communication Board. Press Escape at any time to stop speech.";
    window.audioEngine.speak(guideText, { interrupt: true, assertive: true });
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
          "Mode 1: High-Precision Live ISL Sign-to-Speech. Point the camera at a signer, adjust precision sensitivity, or click any simulator sign below.",
        translator:
          "Mode 2: Speech-to-ISL Translator. Speak into your microphone or type a sentence to display articulated Indian Sign Language visuals.",
        dictionary:
          "Mode 3: Tactile Audio ISL Dictionary. Browse 67 plus signs, train new custom signs, or take the audio quiz.",
        assist:
          "Mode 4: Blind Quick-Board and Voice Guide. Press keys Q through P for instant spoken and signed phrases."
      };
      window.audioEngine.speak(descriptions[tabName] || `Switched to ${tabName}`);
    }
  }

  // =========================================================================
  // MODULE 1: HIGH-PRECISION 3D CAMERA SIGN-TO-SPEECH & SIMULATOR
  // =========================================================================
  function initCameraModule() {
    renderSimulatorButtons();

    document.getElementById("btn-toggle-camera").addEventListener("click", toggleWebcam);

    // Precision Mode Selector
    const precisionSelect = document.getElementById("camera-precision-mode");
    if (precisionSelect) {
      precisionSelect.addEventListener("change", (e) => {
        state.precisionMode = e.target.value;
        if (state.precisionMode === "strict") {
          state.minConfidence = 0.85;
          state.requiredStableFrames = 12;
        } else if (state.precisionMode === "fast") {
          state.minConfidence = 0.70;
          state.requiredStableFrames = 5;
        } else {
          state.minConfidence = 0.78;
          state.requiredStableFrames = 8;
        }
        state.candidateFrames = 0;
        window.audioEngine.speak(
          `Camera precision set to ${state.precisionMode}: minimum confidence ${Math.round(state.minConfidence * 100)} percent, ${state.requiredStableFrames} stable frames.`
        );
      });
    }

    // Recognition Scope Selector
    const scopeSelect = document.getElementById("camera-scope-mode");
    if (scopeSelect) {
      scopeSelect.addEventListener("change", (e) => {
        state.recognitionScope = e.target.value;
        state.candidateFrames = 0;
        renderSimulatorButtons();
        window.audioEngine.speak(`Camera detection scope set to ${e.target.selectedOptions[0].text}.`);
      });
    }

    document.getElementById("btn-speak-panel-1").addEventListener("click", () => {
      window.audioEngine.speak(
        "In High-Precision Sign-to-Speech mode, SanketSetu normalizes 21 3D hand landmarks by palm scale, computes true 3D joint angles for all five digits, tracks wrist motion, and waits for a stable lock-in before speaking aloud. You can also click Add or Train New Sign to teach the camera your own custom gestures."
      );
    });

    document.getElementById("btn-speak-sentence").addEventListener("click", () => {
      if (!state.accumulatedSentence.length) {
        window.audioEngine.speak("Your conversation transcript is currently empty. Detect or simulate a sign first.");
        return;
      }
      const fullText = state.accumulatedSentence.join(", ");
      window.audioEngine.playEarcon("sign_detected");
      window.audioEngine.speak(`Full signed sentence: ${fullText}`);
    });

    document.getElementById("btn-clear-sentence").addEventListener("click", () => {
      state.accumulatedSentence = [];
      renderSentenceDisplay();
      window.audioEngine.speak("Conversation transcript cleared.");
    });
  }

  function renderSimulatorButtons() {
    const simContainer = document.getElementById("simulator-buttons");
    if (!simContainer) return;
    simContainer.innerHTML = "";

    const simSigns = window.ISL_SIGNS.filter((s) => {
      if (state.recognitionScope === "numbers") return s.category === "numbers";
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
      window.audioEngine.playEarcon("mic_off");
      window.audioEngine.speak("Webcam stopped.");
      return;
    }

    try {
      window.audioEngine.speak(
        "Starting high-precision webcam hand tracking. Please allow camera access if prompted."
      );
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 640 },
          height: { ideal: 480 },
          frameRate: { ideal: 30 },
          facingMode: "user"
        },
        audio: false
      });

      state.videoStream = stream;
      videoEl.srcObject = stream;
      await videoEl.play();
      state.cameraActive = true;
      btnText.textContent = "Stop Live Webcam";
      placeholder.style.display = "none";
      window.audioEngine.playEarcon("mic_on");

      initMediaPipeHands(videoEl, canvasEl);
    } catch (err) {
      window.audioEngine.playEarcon("quiz_wrong");
      window.audioEngine.speak(
        "Camera access was unavailable or denied. You can still test all signs with the Instant ISL Gesture Simulator buttons right below the camera box."
      );
    }
  }

  function stopWebcam() {
    state.cameraActive = false;
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

  function initMediaPipeHands(videoEl, canvasEl) {
    const ctx = canvasEl.getContext("2d");

    if (typeof window.Hands === "undefined") {
      window.audioEngine.speak("Camera connected. Hand landmark engine loading or use simulator buttons below.");
      return;
    }

    if (!state.mpHands) {
      state.mpHands = new window.Hands({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
      });

      state.mpHands.setOptions({
        maxNumHands: 2,
        modelComplexity: 1,
        minDetectionConfidence: 0.72,
        minTrackingConfidence: 0.72
      });

      state.mpHands.onResults((results) => {
        if (!state.cameraActive) return;
        ctx.save();
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

        const badge = document.getElementById("hand-presence-badge");
        const confEl = document.getElementById("hud-confidence");

        if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
          const smoothed = smoothLandmarks(results.multiHandLandmarks);
          const handCount = smoothed.length;
          badge.textContent = `${handCount} Hand${handCount > 1 ? "s" : ""} Tracked (3D Lock)`;
          badge.classList.add("active");

          // Optional spatial audio beep so a blind user knows the signer's hands are in frame
          const now = Date.now();
          const spatialChk = document.getElementById("chk-spatial-beep");
          if (spatialChk && spatialChk.checked && now - state.lastHandBeepTime > 3500) {
            window.audioEngine.playEarcon("hand_in_frame");
            state.lastHandBeepTime = now;
          }

          // Extract 3D biomechanical features for each detected hand
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

          // Draw high-contrast color-coded biomechanical skeleton & lock-in ring
          smoothed.forEach((landmarks, idx) => {
            drawBiomechanicalHand(ctx, canvasEl, landmarks, featuresList[idx]);
          });

          // Classify ISL Gesture using 3D angles, palm-normalized geometry & motion
          const detection = classifyHandLandmarks(smoothed, featuresList, motion);
          updateTelemetryUI(featuresList[0], motion, detection);

          if (detection && detection.confidence >= state.minConfidence) {
            confEl.textContent = `${detection.word}: ${Math.round(detection.confidence * 100)}%`;
            handleLiveGestureCandidate(detection.signId, detection.confidence, detection.word);
            drawWristLockProgress(ctx, canvasEl, smoothed[0][0]);
          } else {
            state.candidateFrames = Math.max(0, state.candidateFrames - 1);
            confEl.textContent = detection
              ? `Low Conf (${detection.word} ${Math.round(detection.confidence * 100)}%)`
              : "Pose: Neutral / Transition";
            updateLockProgressBar(0, detection ? `Hold clearer pose (${detection.word}?)` : "Neutral hand posture");
          }
        } else {
          state.smoothedHands = [];
          state.motionHistory = [];
          state.latestHandFeatures = null;
          state.candidateFrames = 0;
          badge.textContent = "No Hand in Frame";
          badge.classList.remove("active");
          confEl.textContent = "Confidence: --";
          resetTelemetryUI();
        }
        ctx.restore();
      });
    }

    const processFrame = async () => {
      if (!state.cameraActive) return;
      if (videoEl.readyState >= 2) {
        await state.mpHands.send({ image: videoEl });
      }
      requestAnimationFrame(processFrame);
    };
    requestAnimationFrame(processFrame);
  }

  // =========================================================================
  // 3D BIOMECHANICAL LANDMARK SMOOTHING & FEATURE EXTRACTION
  // =========================================================================

  /**
   * Exponential Moving Average (EMA) smoothing across frames to remove webcam landmark jitter.
   */
  function smoothLandmarks(rawHands) {
    const alpha = 0.68; // responsive yet jitter-free
    const nextSmoothed = rawHands.map((hand, hIdx) => {
      const prevHand = state.smoothedHands[hIdx];
      if (!prevHand || prevHand.length !== hand.length) {
        return hand.map((pt) => ({ x: pt.x, y: pt.y, z: pt.z || 0 }));
      }
      return hand.map((pt, pIdx) => ({
        x: alpha * pt.x + (1 - alpha) * prevHand[pIdx].x,
        y: alpha * pt.y + (1 - alpha) * prevHand[pIdx].y,
        z: alpha * (pt.z || 0) + (1 - alpha) * (prevHand[pIdx].z || 0)
      }));
    });
    state.smoothedHands = nextSmoothed;
    return nextSmoothed;
  }

  function dist3D(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    const dz = (a.z || 0) - (b.z || 0);
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

  function dist2D(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  /**
   * Computes angle in degrees at vertex B formed by segments BA and BC in 3D space (180 = straight line).
   */
  function jointAngleDeg(a, b, c) {
    const ux = a.x - b.x, uy = a.y - b.y, uz = (a.z || 0) - (b.z || 0);
    const vx = c.x - b.x, vy = c.y - b.y, vz = (c.z || 0) - (b.z || 0);
    const magU = Math.sqrt(ux * ux + uy * uy + uz * uz) || 1e-6;
    const magV = Math.sqrt(vx * vx + vy * vy + vz * vz) || 1e-6;
    const cosTheta = Math.max(-1, Math.min(1, (ux * vx + uy * vy + uz * vz) / (magU * magV)));
    return (Math.acos(cosTheta) * 180) / Math.PI;
  }

  /**
   * Extracts scale-invariant 3D joint extension scores [0..1], orientation, and pinch/spread ratios.
   */
  function extractHandFeatures(lm, handedness = "Right") {
    // Scale reference: distance from wrist (0) to middle MCP (9)
    const palmScale = Math.max(0.04, dist3D(lm[0], lm[9]));

    // Helper for 4 main fingers (Index: 5-6-7-8, Middle: 9-10-11-12, Ring: 13-14-15-16, Pinky: 17-18-19-20)
    const calcFingerExtension = (mcp, pip, dip, tip) => {
      const pipAngle = jointAngleDeg(lm[mcp], lm[pip], lm[dip]); // 180 straight, ~60 curled
      const dipAngle = jointAngleDeg(lm[pip], lm[dip], lm[tip]);
      const angleScore = Math.max(0, Math.min(1, (pipAngle * 0.65 + dipAngle * 0.35 - 75) / 95));

      // Tip-to-wrist vs MCP-to-wrist ratio ensures folded fingers pointing down aren't misread
      const tipWrist = dist3D(lm[tip], lm[0]) / palmScale;
      const mcpWrist = dist3D(lm[mcp], lm[0]) / palmScale;
      const distScore = Math.max(0, Math.min(1, (tipWrist - mcpWrist * 0.95) / 0.95));

      return +(angleScore * 0.65 + distScore * 0.35).toFixed(3);
    };

    // Thumb extension uses CMC(1)-MCP(2)-IP(3)-TIP(4) angle + distance from pinky MCP (17) and index MCP (5)
    const thumbIpAngle = jointAngleDeg(lm[2], lm[3], lm[4]);
    const thumbMcpAngle = jointAngleDeg(lm[1], lm[2], lm[3]);
    const thumbPinkyDist = dist2D(lm[4], lm[17]) / palmScale;
    const thumbIndexMcpDist = dist2D(lm[4], lm[5]) / palmScale;
    const thumbAngleScore = Math.max(0, Math.min(1, (thumbIpAngle * 0.5 + thumbMcpAngle * 0.5 - 115) / 55));
    const thumbAbductScore = Math.max(0, Math.min(1, (thumbPinkyDist - 0.85) / 0.85));
    const thumbExt = +Math.max(0, Math.min(1, thumbAngleScore * 0.45 + thumbAbductScore * 0.55)).toFixed(3);

    const ext = {
      thumb: thumbExt,
      index: calcFingerExtension(5, 6, 7, 8),
      middle: calcFingerExtension(9, 10, 11, 12),
      ring: calcFingerExtension(13, 14, 15, 16),
      pinky: calcFingerExtension(17, 18, 19, 20)
    };

    // Key normalized inter-digit distances
    const thumbIndexPinch = dist3D(lm[4], lm[8]) / palmScale;
    const thumbMiddlePinch = dist3D(lm[4], lm[12]) / palmScale;
    const indexMiddleSpread = dist2D(lm[8], lm[12]) / palmScale;

    // Average distance of all 4 fingertips to thumb tip (for "Food" morsel bunch)
    const bunchSpread =
      (dist3D(lm[8], lm[4]) +
        dist3D(lm[12], lm[4]) +
        dist3D(lm[16], lm[4]) +
        dist3D(lm[20], lm[4])) /
      (4 * palmScale);

    // Direction of thumb & index (upward vs downward vs horizontal)
    const thumbPointingUp = lm[4].y < lm[3].y - 0.02 && lm[4].y < lm[5].y - 0.01;
    const thumbPointingDown = lm[4].y > lm[3].y + 0.02 && lm[4].y > lm[5].y + 0.02;
    const indexPointingUp = lm[8].y < lm[6].y - 0.02;
    const fingersPointingUp = lm[8].y < lm[5].y && lm[12].y < lm[9].y;
    const indexHorizontal = Math.abs(lm[8].x - lm[5].x) > Math.abs(lm[8].y - lm[5].y) * 1.15;

    // Normalized 21-point template vector (centered on wrist, scaled by palmScale) for custom sign training
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
      normalizedCoords
    };
  }

  /**
   * Tracks 12-frame wrist & fingertip trajectory to detect waves, nods, and circular motion.
   */
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
    if (horizWave > 0.65 && horizWave > vertNod * 1.25) label = "Horizontal Wave ⇄";
    else if (vertNod > 0.55 && vertNod > horizWave * 1.2) label = "Vertical Nod ⇅";
    else if (speed > 0.25) label = "Active Motion ↻";

    return { horizWave, vertNod, speed, label };
  }

  /**
   * Computes fuzzy similarity [0..1] between live 5-finger extension vector and a target [t, i, m, r, p] pattern.
   */
  function matchFingerPattern(liveArr, targetArr, weights = [0.9, 1.2, 1.2, 1.1, 1.1]) {
    let weightedDiff = 0;
    let totalWeight = 0;
    for (let i = 0; i < 5; i++) {
      const w = weights[i] || 1;
      const diff = Math.abs(liveArr[i] - targetArr[i]);
      weightedDiff += diff * w;
      totalWeight += w;
    }
    const meanDiff = weightedDiff / totalWeight;
    return Math.max(0, 1 - meanDiff * 1.35);
  }

  /**
   * High-Precision Multi-Feature Classifier for 32+ Conversational Signs, Numbers 1–9, and User Custom Signs.
   */
  function classifyHandLandmarks(smoothedHands, featuresList, motion) {
    const f1 = featuresList[0];
    if (!f1) return null;

    const candidates = [];
    const addCandidate = (signId, score) => {
      if (score <= 0.55) return;
      const signObj = window.ISL_SIGNS.find((s) => s.id === signId);
      if (!signObj) return;

      // Filter by user's selected recognition scope
      if (state.recognitionScope === "numbers" && signObj.category !== "numbers") return;
      if (state.recognitionScope === "conversational" && signObj.category === "numbers") return;

      candidates.push({
        signId,
        word: signObj.word,
        confidence: Math.min(0.99, +score.toFixed(3))
      });
    };

    // -----------------------------------------------------------------------
    // 1. EVALUATE USER-TRAINED CUSTOM SIGNS FIRST
    // -----------------------------------------------------------------------
    state.customSigns.forEach((customSign) => {
      const needsTwo = (customSign.hands || "").includes("2");
      if (needsTwo && featuresList.length < 2) return;
      if (!needsTwo && featuresList.length === 2) return;

      let score = matchFingerPattern(f1.fingerArray, customSign.fingerState || [1, 1, 0, 0, 0]);

      // If custom sign also has a captured 3D normalized landmark template, blend geometric similarity
      if (customSign.capturedCoords && customSign.capturedCoords.length === 21) {
        let coordErr = 0;
        for (let i = 1; i < 21; i++) {
          coordErr += dist2D(f1.normalizedCoords[i], customSign.capturedCoords[i]);
        }
        const avgCoordErr = coordErr / 20;
        const templateSim = Math.max(0, 1 - avgCoordErr * 0.55);
        score = score * 0.45 + templateSim * 0.55;
      }

      if (score >= 0.74) {
        addCandidate(customSign.id, Math.min(0.98, score + 0.06));
      }
    });

    // -----------------------------------------------------------------------
    // 2. TWO-HANDED ISL GESTURE CLASSIFICATION
    // -----------------------------------------------------------------------
    if (featuresList.length === 2) {
      const f2 = featuresList[1];
      const lm1 = smoothedHands[0];
      const lm2 = smoothedHands[1];
      const avgScale = (f1.palmScale + f2.palmScale) * 0.5;
      const palmDist = dist2D(f1.palmCenter, f2.palmCenter) / avgScale;
      const wristDist = dist2D(f1.wrist, f2.wrist) / avgScale;
      const indexTipsDist = dist2D(lm1[8], lm2[8]) / avgScale;

      const bothOpen =
        matchFingerPattern(f1.fingerArray, [1, 1, 1, 1, 1]) > 0.68 &&
        matchFingerPattern(f2.fingerArray, [1, 1, 1, 1, 1]) > 0.68;

      const bothFists =
        matchFingerPattern(f1.fingerArray, [0, 0, 0, 0, 0]) > 0.65 &&
        matchFingerPattern(f2.fingerArray, [0, 0, 0, 0, 0]) > 0.65;

      // A. Emergency: Both hands open and raised high or waving rapidly
      if (bothOpen && f1.palmCenter.y < 0.46 && f2.palmCenter.y < 0.46 && palmDist > 1.35) {
        addCandidate("emergency", 0.91 + (motion.speed > 0.2 ? 0.06 : 0));
      }

      // B. Namaste / Hello: Both open hands close together vertically in front of chest
      if (bothOpen && palmDist < 1.45 && f1.fingersPointingUp && f2.fingersPointingUp) {
        addCandidate("hello", 0.95);
      }

      // C. Home / House: Both flat hands angled so index/middle fingertips touch like a roof peak
      if (bothOpen && indexTipsDist < 0.65 && wristDist > indexTipsDist * 1.45) {
        addCandidate("home", 0.92);
      }

      // D. Help: One hand flat open palm, other hand closed fist / thumb-up resting near/on it
      const hand1OpenHand2Fist =
        matchFingerPattern(f1.fingerArray, [1, 1, 1, 1, 1]) > 0.65 &&
        matchFingerPattern(f2.fingerArray, [0.8, 0, 0, 0, 0]) > 0.62;
      const hand2OpenHand1Fist =
        matchFingerPattern(f2.fingerArray, [1, 1, 1, 1, 1]) > 0.65 &&
        matchFingerPattern(f1.fingerArray, [0.8, 0, 0, 0, 0]) > 0.62;
      if ((hand1OpenHand2Fist || hand2OpenHand1Fist) && palmDist < 1.65) {
        addCandidate("help", 0.93);
      }

      // E. Doctor / Pulse: Dominant index+middle touching opposite wrist
      const tip1ToWrist2 = dist2D(lm1[8], lm2[0]) / avgScale;
      const tip2ToWrist1 = dist2D(lm2[8], lm1[0]) / avgScale;
      if (tip1ToWrist2 < 0.95 || tip2ToWrist1 < 0.95) {
        const activeHand = tip1ToWrist2 < tip2ToWrist1 ? f1 : f2;
        if (activeHand.ext.index > 0.6 && activeHand.ext.middle > 0.55) {
          addCandidate("doctor", 0.92);
        } else if (activeHand.ext.index > 0.6 && activeHand.ext.middle < 0.45) {
          addCandidate("time", 0.91);
        }
      }

      // F. Name: Both hands with index+middle extended (H shape) close together
      const bothTwoFingers =
        matchFingerPattern(f1.fingerArray, [0, 1, 1, 0, 0]) > 0.68 &&
        matchFingerPattern(f2.fingerArray, [0, 1, 1, 0, 0]) > 0.68;
      if (bothTwoFingers && palmDist < 1.6) {
        addCandidate("name", 0.93);
      }

      // G. Pain / Hurt: Both hands with only index finger extended pointing toward each other
      const bothIndexOnly =
        matchFingerPattern(f1.fingerArray, [0, 1, 0, 0, 0]) > 0.68 &&
        matchFingerPattern(f2.fingerArray, [0, 1, 0, 0, 0]) > 0.68;
      if (bothIndexOnly && indexTipsDist < 1.4) {
        addCandidate("pain", 0.91);
      }

      // H. Friend: Two hands clasped closely or index fingers hooked
      if (palmDist < 1.15 && !bothOpen) {
        addCandidate("friend", 0.90);
      }

      // I. Transport / Bus / Train: Two closed fists near chest
      if (bothFists && palmDist >= 1.0 && palmDist < 2.2) {
        addCandidate("transport", 0.88);
      }

      // J. Repeat / Slow / Where with two open hands
      if (bothOpen && palmDist >= 1.45 && f1.palmCenter.y >= 0.42) {
        addCandidate("where", 0.89);
      }
    }

    // -----------------------------------------------------------------------
    // 3. SINGLE-HANDED ISL GESTURE & NUMBER (1–9) CLASSIFICATION
    // -----------------------------------------------------------------------
    const ext = f1.ext;
    const arr = f1.fingerArray;

    // 1. Care / I Love You: Thumb + Index + Pinky extended, Middle + Ring curled [1, 1, 0, 0, 1]
    const ilyScore = matchFingerPattern(arr, [1, 1, 0, 0, 1], [1.1, 1.3, 1.4, 1.4, 1.3]);
    if (ilyScore > 0.76) {
      addCandidate("iloveyou", ilyScore + 0.08);
    }

    // 2. Call / Phone: Thumb + Pinky extended, Index + Middle + Ring curled [1, 0, 0, 0, 1]
    const callScore = matchFingerPattern(arr, [1, 0, 0, 0, 1], [1.2, 1.3, 1.3, 1.3, 1.3]);
    if (callScore > 0.76) {
      addCandidate("call", callScore + 0.08);
    }

    // 3. Restroom / Number 6: Only Pinky extended [0, 0, 0, 0, 1]
    const pinkyOnlyScore = matchFingerPattern(arr, [0, 0, 0, 0, 1], [1.1, 1.2, 1.2, 1.2, 1.4]);
    if (pinkyOnlyScore > 0.76) {
      addCandidate("bathroom", pinkyOnlyScore + 0.07);
      addCandidate("num_6", pinkyOnlyScore + 0.05);
    }

    // 4. Good / OK Sign: Thumb & Index tips pinched in circle, Middle + Ring + Pinky extended
    if (
      f1.thumbIndexPinch < 0.48 &&
      ext.middle > 0.68 &&
      ext.ring > 0.65 &&
      ext.pinky > 0.62
    ) {
      addCandidate("good", 0.94);
    }

    // 5. Food / Eat: All 5 fingertips bunched tightly together near thumb tip
    if (f1.bunchSpread < 0.56 && ext.index < 0.75 && ext.pinky < 0.72) {
      const heightBoost = f1.indexTip.y < 0.55 ? 0.06 : 0;
      addCandidate("food", 0.87 + heightBoost);
    }

    // 6. Money / Pay: Thumb rubbing index & middle tips while ring & pinky are curled
    if (
      f1.thumbIndexPinch < 0.52 &&
      f1.thumbMiddlePinch < 0.58 &&
      ext.ring < 0.42 &&
      ext.pinky < 0.42
    ) {
      addCandidate("money", 0.89);
    }

    // 7. Yes (Thumb Up) vs Bad (Thumb Down) vs Sorry (Closed Fist on Chest)
    const fourCurled = ext.index < 0.35 && ext.middle < 0.35 && ext.ring < 0.35 && ext.pinky < 0.35;
    if (fourCurled) {
      if (ext.thumb > 0.58 && f1.thumbPointingUp) {
        addCandidate("yes", 0.94);
      } else if (ext.thumb > 0.52 && f1.thumbPointingDown) {
        addCandidate("bad", 0.92);
      } else if (ext.thumb <= 0.58 && f1.palmCenter.y > 0.45) {
        addCandidate("sorry", 0.86);
      }
    }

    // 8. Water / C-Cup: Fingers moderately curved (0.32..0.72) forming a tumbler C-shape
    const isCCup =
      ext.index >= 0.32 &&
      ext.index <= 0.74 &&
      ext.middle >= 0.32 &&
      ext.middle <= 0.74 &&
      ext.ring >= 0.28 &&
      ext.ring <= 0.74 &&
      f1.thumbIndexPinch >= 0.55 &&
      f1.thumbIndexPinch <= 1.25;
    if (isCCup) {
      addCandidate("water", 0.86);
    }

    // 9. All 5 Digits Extended [1, 1, 1, 1, 1]: Hello vs Father vs Mother vs Thank You vs Please vs Stop/Wait vs Number 5
    const fiveOpenScore = matchFingerPattern(arr, [1, 1, 1, 1, 1]);
    if (fiveOpenScore > 0.75) {
      if (motion.horizWave > 0.6) {
        addCandidate("hello", fiveOpenScore + 0.08);
      } else if (f1.thumbTip.y < 0.34) {
        addCandidate("father", fiveOpenScore + 0.06);
      } else if (f1.indexTip.y < 0.46 && f1.indexMiddleSpread < 0.34) {
        addCandidate("thankyou", fiveOpenScore + 0.06);
      } else if (f1.palmCenter.y > 0.58 && motion.speed > 0.15) {
        addCandidate("please", fiveOpenScore + 0.05);
      } else if (f1.indexMiddleSpread > 0.42) {
        addCandidate("wait", fiveOpenScore + 0.05);
        addCandidate("num_5", fiveOpenScore + 0.06);
      } else {
        addCandidate("hello", fiveOpenScore + 0.04);
      }
    }

    // 10. Only Index Extended [0, 1, 0, 0, 0]: No (waving) vs Understand (high at temple) vs Deaf vs Number 1
    const indexOnlyScore = matchFingerPattern(arr, [0, 1, 0, 0, 0], [1.0, 1.4, 1.3, 1.2, 1.2]);
    if (indexOnlyScore > 0.75) {
      if (motion.horizWave > 0.52) {
        addCandidate("no", indexOnlyScore + 0.09);
      } else if (f1.indexTip.y < 0.34) {
        addCandidate("understand", indexOnlyScore + 0.07);
      } else if (f1.indexHorizontal) {
        addCandidate("deaf", indexOnlyScore + 0.05);
      } else {
        addCandidate("num_1", indexOnlyScore + 0.07);
        addCandidate("no", indexOnlyScore + 0.04);
      }
    }

    // 11. Index + Middle Extended [0, 1, 1, 0, 0]: Blind (near eyes) vs Thank You vs Number 2
    const twoFingerScore = matchFingerPattern(arr, [0, 1, 1, 0, 0], [1.1, 1.3, 1.3, 1.2, 1.2]);
    if (twoFingerScore > 0.75) {
      if (f1.indexTip.y < 0.42) {
        addCandidate("blind", twoFingerScore + 0.08);
      } else {
        addCandidate("num_2", twoFingerScore + 0.07);
        addCandidate("blind", twoFingerScore + 0.03);
      }
    }

    // 12. Dedicated ISL Numbers (3, 4, 7, 8, 9)
    const num3Score = matchFingerPattern(arr, [0, 1, 1, 1, 0]);
    if (num3Score > 0.76) addCandidate("num_3", num3Score + 0.07);

    const num4Score = matchFingerPattern(arr, [0, 1, 1, 1, 1], [1.3, 1.1, 1.1, 1.1, 1.1]);
    if (num4Score > 0.76 && ext.thumb < 0.45) addCandidate("num_4", num4Score + 0.07);

    const num7Score = matchFingerPattern(arr, [0, 0.55, 0, 0, 0], [1.0, 1.4, 1.2, 1.2, 1.2]);
    if (num7Score > 0.78 && ext.index >= 0.35 && ext.index <= 0.72) {
      addCandidate("num_7", num7Score + 0.06);
    }

    const num8Score = matchFingerPattern(arr, [1, 1, 1, 0, 0], [1.3, 1.2, 1.2, 1.2, 1.2]);
    if (num8Score > 0.77 && ext.thumb > 0.65) addCandidate("num_8", num8Score + 0.06);

    const num9Score = matchFingerPattern(arr, [1, 1, 1, 1, 0], [1.2, 1.1, 1.1, 1.1, 1.3]);
    if (num9Score > 0.77 && ext.pinky < 0.42) addCandidate("num_9", num9Score + 0.06);

    if (!candidates.length) return null;

    // Sort descending by confidence
    candidates.sort((a, b) => b.confidence - a.confidence);
    return {
      signId: candidates[0].signId,
      word: candidates[0].word,
      confidence: candidates[0].confidence,
      runnerUp: candidates[1] || null
    };
  }

  /**
   * Draws color-coded 3D biomechanical skeleton & joint markers on the camera canvas.
   */
  function drawBiomechanicalHand(ctx, canvasEl, landmarks, features) {
    if (window.drawConnectors && window.HAND_CONNECTIONS) {
      window.drawConnectors(ctx, landmarks, window.HAND_CONNECTIONS, {
        color: "#38bdf8",
        lineWidth: 3.5
      });
    }

    // Color-code fingertips by extension state (green = extended, amber = curved, slate = curled)
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
        ctx.fillStyle = tipMatch.val >= 0.7 ? "#22c55e" : tipMatch.val >= 0.35 ? "#f59e0b" : "#64748b";
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

  /**
   * Draws a circular stability progress ring around the wrist as a sign locks in.
   */
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
        bar.style.background = pct >= 70 ? "#22c55e" : pct >= 35 ? "#f59e0b" : "#64748b";
      }
      if (val) val.textContent = `${pct}%`;
    });

    const motionBadge = document.getElementById("telemetry-motion-badge");
    if (motionBadge) {
      motionBadge.textContent = `Scale: ${Math.round(features.palmScale * 100)}% • ${motion.label}`;
    }

    if (detection && detection.confidence >= state.minConfidence) {
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

  function handleLiveGestureCandidate(signId, confidence) {
    if (state.candidateSignId === signId) {
      state.candidateFrames += 1;
    } else {
      state.candidateSignId = signId;
      state.candidateFrames = 1;
    }

    const now = Date.now();
    if (
      state.candidateFrames >= state.requiredStableFrames &&
      (state.lastSignId !== signId || now - state.lastSignTime > 2600)
    ) {
      const signObj = window.ISL_SIGNS.find((s) => s.id === signId);
      if (signObj) {
        state.lastSignId = signId;
        state.lastSignTime = now;
        triggerDetectedSign(signObj, confidence, "Live 3D Camera");
      }
    }
  }

  function triggerDetectedSign(signObj, confidence = 0.95, source = "Camera") {
    document.getElementById("detected-visual").textContent = signObj.emoji || "🤟";
    document.getElementById("detected-sign-name").textContent = signObj.word;
    document.getElementById("detected-sign-spoken").textContent = `"${signObj.spokenPhrase}"`;
    document.getElementById("detected-sign-tactile").textContent = `Tactile Pose: ${signObj.tactileGuide}`;
    document.getElementById("hud-confidence").textContent = `Confidence: ${Math.round(confidence * 100)}% (${source})`;

    window.audioEngine.playEarcon("sign_detected");
    const autoSpeak = document.getElementById("chk-auto-speak-sign").checked;
    if (autoSpeak) {
      window.audioEngine.speak(`${signObj.word}. ${signObj.spokenPhrase}`, {
        interrupt: true,
        assertive: true
      });
    }

    state.accumulatedSentence.push(signObj.word);
    renderSentenceDisplay();

    const timeStr = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    state.signHistory.unshift({
      word: signObj.word,
      emoji: signObj.emoji,
      phrase: signObj.spokenPhrase,
      time: timeStr,
      source: `${source} (${Math.round(confidence * 100)}%)`
    });
    if (state.signHistory.length > 12) state.signHistory.pop();
    renderSignHistory();
  }

  function renderSentenceDisplay() {
    const box = document.getElementById("sentence-display");
    if (!state.accumulatedSentence.length) {
      box.innerHTML = `<span class="placeholder-muted">Signed words will accumulate here into a full sentence...</span>`;
      return;
    }
    box.innerHTML = state.accumulatedSentence
      .map((w) => `<span class="sentence-token">${w}</span>`)
      .join(" ");
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

        renderSimulatorButtons();
        renderDictionaryGrid();
        renderSavedCustomSignsList();

        form.reset();
        document.getElementById("custom-sign-emoji").value = "🤟";
        state.capturedNormalizedLandmarks = null;
        modal.hidden = true;

        window.audioEngine.playEarcon("quiz_correct");
        window.audioEngine.speak(
          `Saved new Indian Sign Language sign: ${word}. It is now active in the live camera detector, simulator, translator, and dictionary.`
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
        renderSimulatorButtons();
        renderDictionaryGrid();
        renderSavedCustomSignsList();
        window.audioEngine.speak(`Removed custom sign ${cs.word}.`);
      });
      listEl.appendChild(pill);
    });
  }

  // =========================================================================
  // MODULE 2: HIGH-PRECISION SPEECH-TO-ISL TRANSLATOR
  // =========================================================================
  function initTranslatorModule() {
    const inputEl = document.getElementById("isl-text-input");
    const btnTranslate = document.getElementById("btn-translate-text");

    btnTranslate.addEventListener("click", () => {
      translateTextToISL(inputEl.value, { speakConfirmation: true });
    });

    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        translateTextToISL(inputEl.value, { speakConfirmation: true });
      }
    });

    document.querySelectorAll(".chip-btn").forEach((chip) => {
      chip.addEventListener("click", () => {
        const sentence = chip.dataset.sentence;
        inputEl.value = sentence;
        translateTextToISL(sentence, { speakConfirmation: true });
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
        window.audioEngine.speak(
          `${current.word} (${current.hands}). ${current.tactileGuide}`
        );
      }
    });
  }

  /**
   * Normalizes inflected English words (plurals, -ing, -ed) to base stems for accurate ISL sign lookup.
   */
  function normalizeWordStem(word) {
    if (word.length <= 3) return word;
    if (word.endsWith("ing") && word.length > 5) return word.slice(0, -3);
    if (word.endsWith("ed") && word.length > 4) return word.slice(0, -2);
    if (word.endsWith("es") && word.length > 4) return word.slice(0, -2);
    if (word.endsWith("s") && !word.endsWith("ss") && word.length > 3) return word.slice(0, -1);
    return word;
  }

  function translateTextToISL(rawText, { speakConfirmation = true } = {}) {
    const cleaned = (rawText || "").trim();
    if (!cleaned) {
      window.audioEngine.speak("Please speak or type a message to translate into Indian Sign Language.");
      return;
    }

    let normalizedSentence = cleaned
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    const conversationalSigns = window.ISL_SIGNS.filter(
      (s) => s.category !== "alphabet" && s.category !== "numbers"
    );

    // Step 1: Replace multi-word ISL idioms with token placeholders
    const idioms = window.ISL_PHRASE_IDIOMS || [];
    idioms.forEach((idiom, idx) => {
      const regex = new RegExp(`\\b${idiom.phrase}\\b`, "g");
      normalizedSentence = normalizedSentence.replace(regex, `__idiom_${idx}__`);
    });

    const tokens = normalizedSentence.split(/\s+/).filter(Boolean);
    const sequence = [];

    const stopWords = new Set([
      "a", "an", "the", "is", "am", "are", "was", "were", "to", "for", "of",
      "in", "on", "at", "very", "much", "my", "me", "i", "you", "your", "can", "could", "would"
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

      // Check exact or stemmed match in conversational & custom signs
      const matchedSign = conversationalSigns.find(
        (s) => s.keywords.includes(token) || s.keywords.includes(stem)
      );
      if (matchedSign) {
        sequence.push(matchedSign);
        return;
      }

      // Skip filler grammar words in multi-word sentences
      if (tokens.length > 1 && stopWords.has(token)) {
        return;
      }

      // Otherwise finger-spell word using ISL 2-Handed Alphabet / Numbers
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
      for (const ch of tokens[0] || "hi") {
        const letterSign = window.ISL_SIGNS.find((s) => s.keywords.includes(ch));
        if (letterSign) sequence.push(letterSign);
      }
    }

    state.translatedSequence = sequence;
    state.currentStageIndex = 0;

    renderSequenceStrip();
    renderActiveStageSign({ speakTactile: false });

    if (speakConfirmation) {
      window.audioEngine.playEarcon("sign_detected");
      const signNames = sequence.map((s) => s.word).join(", then ");
      window.audioEngine.speak(
        `Translated "${cleaned}" into ${sequence.length} Indian Sign Language signs: ${signNames}.`
      );
      playStageSequence();
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
      card.setAttribute("aria-label", `Sign ${idx + 1}: ${signObj.word}. Click to inspect and hear tactile guide.`);
      card.innerHTML = `
        <span class="seq-card-emoji" aria-hidden="true">${signObj.emoji}</span>
        <span class="seq-card-label">${signObj.word}</span>
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

    document.getElementById("stage-current-token").textContent =
      `Sign ${state.currentStageIndex + 1} of ${state.translatedSequence.length}: ${signObj.word}`;
    document.getElementById("stage-svg-container").innerHTML = window.renderISLSignSVG(signObj);
    document.getElementById("stage-type-badge").textContent =
      signObj.category === "alphabet" ? "ISL Finger-Spell" : signObj.isCustom ? "Custom ISL Sign" : "ISL Sign";
    document.getElementById("stage-hands-badge").textContent = signObj.hands;
    document.getElementById("stage-sign-title").textContent = signObj.word;
    document.getElementById("stage-sign-meaning").textContent = `Spoken meaning: "${signObj.spokenPhrase}"`;
    document.getElementById("stage-tactile-desc").textContent = signObj.tactileGuide;

    const cards = document.querySelectorAll(".seq-card");
    cards.forEach((c, idx) => {
      c.classList.toggle("active", idx === state.currentStageIndex);
    });

    if (speakTactile) {
      window.audioEngine.playEarcon("focus");
      window.audioEngine.speak(`${signObj.word}. ${signObj.tactileGuide}`);
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
      const card = document.createElement("article");
      card.className = "dict-card";
      card.setAttribute("role", "listitem");
      card.innerHTML = `
        <div>
          <div class="dict-card-top">
            <div class="dict-svg-thumb" aria-hidden="true">${window.renderISLSignSVG(sign)}</div>
            <div>
              <span class="badge-hands">${sign.isCustom ? "✨ Custom • " : ""}${sign.hands}</span>
              <h3 class="dict-card-title">${sign.emoji} ${sign.word}</h3>
              <p class="stage-meaning">"${sign.spokenPhrase}"</p>
            </div>
          </div>
          <p class="dict-tactile-text"><strong>✋ Tactile Guide:</strong> ${sign.tactileGuide}</p>
        </div>
        <div class="dict-card-actions">
          <button type="button" class="btn-primary btn-sm btn-hear-guide" aria-label="Listen to tactile hand guide for ${sign.word}">
            🔊 Hear Tactile Guide
          </button>
          <button type="button" class="btn-outline btn-sm btn-open-stage" aria-label="Show ${sign.word} on large translator stage">
            🤟 View Large
          </button>
        </div>
      `;

      card.querySelector(".btn-hear-guide").addEventListener("click", () => {
        window.audioEngine.playEarcon("sign_detected");
        window.audioEngine.speak(
          `${sign.word}. ${sign.hands}. Physical hand guide: ${sign.tactileGuide}`
        );
      });

      card.querySelector(".btn-open-stage").addEventListener("click", () => {
        state.translatedSequence = [sign];
        state.currentStageIndex = 0;
        switchTab("translator", { announce: false });
        renderSequenceStrip();
        renderActiveStageSign({ speakTactile: true });
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
      const card = document.createElement("button");
      card.type = "button";
      card.className = "quick-card";
      card.setAttribute(
        "aria-label",
        `${item.title}. Shortcut key ${item.key}. Speaks message aloud and displays ISL sign.`
      );
      card.innerHTML = `
        <div class="quick-card-header">
          <span class="quick-card-emoji" aria-hidden="true">${item.emoji}</span>
          <kbd>Key ${item.key}</kbd>
        </div>
        <h3>${item.title}</h3>
        <p>"${item.spoken}"</p>
      `;
      card.addEventListener("click", () => {
        activateQuickBoardItem(item);
      });
      grid.appendChild(card);
    });
  }

  function activateQuickBoardItem(item) {
    window.audioEngine.playEarcon("sign_detected");
    window.audioEngine.speak(item.spoken, { interrupt: true, assertive: true });

    const signObj = window.ISL_SIGNS.find((s) => s.id === item.signId);
    if (signObj) {
      state.translatedSequence = [signObj];
      state.currentStageIndex = 0;
      renderSequenceStrip();
      renderActiveStageSign({ speakTactile: false });
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
    document.getElementById("sos-svg-holder").innerHTML = window.renderISLSignSVG(helpSign);
    modal.hidden = false;

    window.audioEngine.playEarcon("sos");
    window.audioEngine.speak(
      "Emergency SOS Alert Activated! Showing high-contrast Indian Sign Language Help beacon on screen and announcing: I am visually impaired and need assistance.",
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
          "Please type your message in the text box and press Enter to translate into Indian Sign Language."
        );
      });
      return;
    }

    // 1. Global Voice Command Listener
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

    // 2. Translator Dictation Listener (with Interim Live Preview)
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
        translateTextToISL(finalText.trim(), { speakConfirmation: true });
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
        window.audioEngine.speak(`${found.word} (${found.hands}): ${found.tactileGuide}`);
        return;
      }
    }
    if (cmd.startsWith("translate ")) {
      const phrase = cmd.replace("translate ", "").trim();
      switchTab("translator", { announce: false });
      document.getElementById("isl-text-input").value = phrase;
      translateTextToISL(phrase, { speakConfirmation: true });
      return;
    }
    if (cmd.includes("translate") || cmd.includes("speech to sign")) {
      switchTab("translator");
      return;
    }

    switchTab("translator", { announce: false });
    document.getElementById("isl-text-input").value = cmd;
    translateTextToISL(cmd, { speakConfirmation: true });
  }

  // =========================================================================
  // KEYBOARD SHORTCUTS & FOCUS AUTO-NARRATION FOR BLIND USERS
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
        case "h":
        case "H":
          e.preventDefault();
          speakOrientationGuide();
          break;
        case "c":
        case "C":
          e.preventDefault();
          toggleUltraContrast();
          break;
        case "s":
        case "S":
          e.preventDefault();
          speakCurrentContextSummary();
          break;
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

  function speakCurrentContextSummary() {
    if (state.activeTab === "camera") {
      const name = document.getElementById("detected-sign-name").textContent;
      const phrase = document.getElementById("detected-sign-spoken").textContent;
      window.audioEngine.speak(`Current detected sign: ${name}. ${phrase}`);
    } else if (state.activeTab === "translator") {
      const current = state.translatedSequence[state.currentStageIndex];
      if (current) {
        window.audioEngine.speak(
          `Active ISL Sign on Stage: ${current.word}. ${current.tactileGuide}`
        );
      }
    } else {
      speakOrientationGuide();
    }
  }

  function initFocusNarration() {
    document.addEventListener("focusin", (e) => {
      const el = e.target;
      if (!el || el === document.body) return;
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
