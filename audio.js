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
    this.autoNarrate = false;
    this.earconsEnabled = true;
    this.speechRate = 1.0;
    this.speechPitch = 1.0;
    this.humanVoiceStyle = "warm_female"; // "warm_female" | "natural_male" | "gentle_elder" | "expressive_friend"
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
    this._playbackSessionId = 0;
    window.__sanketActiveUtterances = this._activeUtterances;

    this.initVoices();
    this._initGestureUnlock();
  }

  setHumanVoiceStyle(style) {
    this.humanVoiceStyle = style || "warm_female";
    this.pickDefaultVoices();
  }

  /**
   * Connects a WebAudio AudioBufferSourceNode through a 3-stage Human Vocal Warmth & Presence
   * Mastering Chain (Chest Warmth Low-Shelf + Vocal Presence Peaking + Digital De-Harsh High-Shelf)
   * and applies natural human persona pitch/cadence shaping so output sounds like a real human.
   */
  _connectHumanWarmthChain(source) {
    const baseRate = this.speechRate || 1.0;
    let rateMult = 1.0;
    let chestGain = 1.6;
    let presenceFreq = 2800;
    let presenceGain = 1.4;
    let shelfFreq = 175;

    if (this.humanVoiceStyle === "natural_male") {
      rateMult = 0.96;
      chestGain = 3.6;
      shelfFreq = 140;
      presenceFreq = 2200;
      presenceGain = 1.25;
      if (source.detune) {
        try {
          source.detune.value = -380; // Authentic male baritone pitch formants (~3.8 semitones lower)
        } catch (e) {}
      }
    } else if (this.humanVoiceStyle === "gentle_elder") {
      rateMult = 0.90;
      chestGain = 2.4;
      shelfFreq = 160;
      presenceFreq = 2500;
      presenceGain = 1.4;
      if (source.detune) {
        try {
          source.detune.value = -180;
        } catch (e) {}
      }
    } else if (this.humanVoiceStyle === "expressive_friend") {
      rateMult = 1.04;
      chestGain = 1.4;
      shelfFreq = 185;
      presenceFreq = 3100;
      presenceGain = 1.6;
      if (source.detune) {
        try {
          source.detune.value = 120;
        } catch (e) {}
      }
    } else {
      // warm_female
      if (source.detune) {
        try {
          source.detune.value = 0;
        } catch (e) {}
      }
    }

    source.playbackRate.value = Math.max(0.7, Math.min(1.5, baseRate * rateMult));

    try {
      const lowShelf = this.audioCtx.createBiquadFilter();
      lowShelf.type = "lowshelf";
      lowShelf.frequency.value = shelfFreq;
      lowShelf.gain.value = chestGain;

      const presence = this.audioCtx.createBiquadFilter();
      presence.type = "peaking";
      presence.frequency.value = presenceFreq;
      presence.Q.value = 1.0;
      presence.gain.value = presenceGain;

      const deHarsh = this.audioCtx.createBiquadFilter();
      deHarsh.type = "highshelf";
      deHarsh.frequency.value = 9000;
      deHarsh.gain.value = -1.5;

      const gainNode = this.audioCtx.createGain();
      gainNode.gain.value = 1.05;

      source.connect(lowShelf);
      lowShelf.connect(presence);
      presence.connect(deHarsh);
      deHarsh.connect(gainNode);
      gainNode.connect(this.audioCtx.destination);
    } catch (e) {
      const gainNode = this.audioCtx.createGain();
      gainNode.gain.value = 1.0;
      source.connect(gainNode);
      gainNode.connect(this.audioCtx.destination);
    }
  }

  _getMimeTypeForBase64(b64Data) {
    if (!b64Data) return "audio/mpeg";
    if (b64Data.startsWith("//") || b64Data.startsWith("SUQz")) return "audio/mpeg";
    if (b64Data.startsWith("AAAA")) return "audio/mp4";
    return window.SIGN_AUDIO_MIME || "audio/mpeg";
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

  pickDefaultVoices() {
    if (!this.voices || !this.voices.length) return;
    const isMale = this.humanVoiceStyle === "natural_male";

    if (!this.userSelectedVoice) {
      if (isMale) {
        this.selectedVoice =
          this.voices.find((v) => v.name === "Alex" || v.name === "Daniel") ||
          this.voices.find(
            (v) =>
              v.name.includes("Google UK English Male") ||
              v.name.includes("Google US English Male")
          ) ||
          this.voices.find(
            (v) =>
              v.name.includes("Microsoft David") ||
              v.name.includes("Microsoft Mark") ||
              v.name.includes("Microsoft George")
          ) ||
          this.voices.find((v) => {
            const n = v.name.toLowerCase();
            return (
              (n.includes("male") ||
                n.includes("david") ||
                n.includes("alex") ||
                n.includes("daniel") ||
                n.includes("george") ||
                n.includes("mark") ||
                n.includes("guy")) &&
              !n.includes("female")
            );
          }) ||
          this.voices.find(
            (v) =>
              v.lang.startsWith("en") &&
              !v.name.toLowerCase().includes("female") &&
              !v.name.toLowerCase().includes("samantha") &&
              !v.name.toLowerCase().includes("zira") &&
              !v.name.toLowerCase().includes("aria") &&
              !v.name.toLowerCase().includes("victoria")
          ) ||
          this.voices.find((v) => v.lang.startsWith("en")) ||
          this.voices[0];
      } else {
        this.selectedVoice =
          this.voices.find((v) => v.name === "Samantha") ||
          this.voices.find((v) => v.name.includes("Samantha")) ||
          this.voices.find((v) => v.name.includes("Google US English")) ||
          this.voices.find((v) => v.name.includes("Google UK English Female")) ||
          this.voices.find(
            (v) => v.name.includes("Microsoft Zira") || v.name.includes("Microsoft Aria")
          ) ||
          this.voices.find((v) => v.name === "Victoria" || v.name === "Karen") ||
          this.voices.find((v) => v.default && v.lang.startsWith("en")) ||
          this.voices.find((v) => v.lang === "en-US") ||
          this.voices.find((v) => v.lang.startsWith("en")) ||
          this.voices[0];
      }
    }

    if (isMale) {
      this.hindiVoice =
        this.voices.find((v) => {
          const l = (v.lang || "").toLowerCase();
          const n = (v.name || "").toLowerCase();
          return (
            (l.startsWith("hi") || l.startsWith("mai")) &&
            (n.includes("male") ||
              n.includes("hemant") ||
              n.includes("rishi") ||
              n.includes("madhav") ||
              (!n.includes("female") && !n.includes("lekha") && !n.includes("kalpana")))
          );
        }) ||
        this.voices.find((v) => (v.lang || "").toLowerCase().startsWith("hi")) ||
        null;
    } else {
      this.hindiVoice =
        this.voices.find((v) => {
          const l = (v.lang || "").toLowerCase();
          const n = (v.name || "").toLowerCase();
          return (
            (l.startsWith("hi") || l.startsWith("mai")) &&
            (n.includes("Google") ||
              n.includes("Microsoft") ||
              n.includes("Lekha") ||
              n.includes("Kalpana"))
          );
        }) ||
        this.voices.find((v) => (v.lang || "").toLowerCase().startsWith("hi")) ||
        null;
    }
  }

  getEffectiveVoice(lang = "en", preferredVoice = null) {
    if (preferredVoice) {
      if (this.humanVoiceStyle === "natural_male") {
        const n = (preferredVoice.name || "").toLowerCase();
        if (
          (n.includes("female") ||
            n.includes("samantha") ||
            n.includes("lekha") ||
            n.includes("zira") ||
            n.includes("aria")) &&
          !this.userSelectedVoice
        ) {
          // Fall through to choose real male voice
        } else {
          return preferredVoice;
        }
      } else {
        return preferredVoice;
      }
    }

    if (this.userSelectedVoice && this.selectedVoice) {
      return this.selectedVoice;
    }

    if (!this.voices || !this.voices.length) {
      return this.selectedVoice || null;
    }

    this.pickDefaultVoices();
    const isHindi =
      (lang || "").toLowerCase().startsWith("hi") || (lang || "").toLowerCase().startsWith("mai");
    return isHindi ? this.hindiVoice || this.selectedVoice : this.selectedVoice;
  }

  initVoices() {
    if (!("speechSynthesis" in window)) return;
    const pickVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices.length) return;
      this.voices = voices;
      this.pickDefaultVoices();

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

  playBraillePulses() {
    // Braille pulses disabled
    return;
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
        skipClipLookup: true,
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
        const mime = this._getMimeTypeForBase64(clips[clipKey]);
        const audio = new Audio(`data:${mime};base64,${clips[clipKey]}`);
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
            skipClipLookup: true,
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
              skipClipLookup: true,
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
          this._connectHumanWarmthChain(source);
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
    const altKey = clipKey.startsWith("letter_")
      ? "alpha_" + clipKey.slice(7)
      : clipKey.startsWith("alpha_")
      ? "letter_" + clipKey.slice(6)
      : clipKey;

    if (window.SIGN_AUDIO_CLIPS_LANG && window.SIGN_AUDIO_CLIPS_LANG[langCode]) {
      const langClips = window.SIGN_AUDIO_CLIPS_LANG[langCode];
      if (langClips[clipKey]) return langClips[clipKey];
      if (langClips[altKey]) return langClips[altKey];
    }
    if (langCode === "en" && window.SIGN_AUDIO_CLIPS) {
      return window.SIGN_AUDIO_CLIPS[clipKey] || window.SIGN_AUDIO_CLIPS[altKey] || null;
    }
    // Only for alphabet letters (A-Z) or system prompts, fall back to Hindi/English neural clip if needed
    const isAlphabetOrSys =
      clipKey.startsWith("letter_") || clipKey.startsWith("alpha_") || clipKey.startsWith("_");
    if (isAlphabetOrSys && window.SIGN_AUDIO_CLIPS_LANG && window.SIGN_AUDIO_CLIPS_LANG.hi) {
      return (
        window.SIGN_AUDIO_CLIPS_LANG.hi[clipKey] ||
        window.SIGN_AUDIO_CLIPS_LANG.hi[altKey] ||
        null
      );
    }
    return null;
  }

  /**
   * Plays any base64-encoded 24kHz Google WaveNet Neural Human Voice clip (across all 22 Indian State Languages)
   * via Web Audio API AudioContext + Human Vocal Warmth EQ Chain, with HTML5 <audio> and speechSynthesis fallbacks.
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
        const mime = this._getMimeTypeForBase64(b64Data);
        const audio = new Audio(`data:${mime};base64,${b64Data}`);
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
          this._connectHumanWarmthChain(source);
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

    if (!skipClipLookup && window.SIGN_AUDIO_CLIPS && window.SIGN_AUDIO_CLIPS._camera_active) {
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

    const isMale = this.humanVoiceStyle === "natural_male";
    const isElder = this.humanVoiceStyle === "gentle_elder";
    const isFriend = this.humanVoiceStyle === "expressive_friend";

    let effectivePitch = typeof pitch === "number" && pitch !== 1.0 ? pitch : this.speechPitch;
    let effectiveRate = typeof rate === "number" ? rate : this.speechRate;

    if (isMale) {
      effectivePitch = 0.78; // Authentic deep masculine baritone pitch across all platforms
      effectiveRate = Math.max(0.75, effectiveRate * 0.96);
    } else if (isElder) {
      effectivePitch = 0.88;
      effectiveRate = Math.max(0.75, effectiveRate * 0.90);
    } else if (isFriend) {
      effectivePitch = 1.08;
      effectiveRate = effectiveRate * 1.04;
    } else {
      if (effectivePitch === 1.0) effectivePitch = 1.02;
    }

    const utterance = new SpeechSynthesisUtterance(spokenText);
    const chosenVoice = this.getEffectiveVoice(lang || "en", voice);
    if (chosenVoice) {
      utterance.voice = chosenVoice;
      utterance.lang = lang || chosenVoice.lang || "en-US";
    } else {
      utterance.lang = lang || "en-US";
    }

    utterance.rate = effectiveRate;
    utterance.pitch = effectivePitch;
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
    const isMale = this.humanVoiceStyle === "natural_male";

    if (prefix === "en") {
      return { voice: this.getEffectiveVoice("en"), isNativeScriptSupported: true };
    }

    // 1. Prefer an exact installed OS/browser regional voice
    const direct =
      this.voices.find((v) => {
        const l = (v.lang || "").toLowerCase();
        const n = (v.name || "").toLowerCase();
        const matches = l === (voiceLang || "").toLowerCase() || l.startsWith(prefix + "-");
        if (!matches) return false;
        if (isMale) return !n.includes("female") && !n.includes("lekha") && !n.includes("kalpana");
        return true;
      }) ||
      this.voices.find((v) => v.lang.toLowerCase() === (voiceLang || "").toLowerCase()) ||
      this.voices.find((v) => v.lang.toLowerCase().startsWith(prefix + "-"));
    if (direct) return { voice: direct, isNativeScriptSupported: true };

    // 2. For Devanagari-script regional languages, use native Hindi voice which reads Devanagari perfectly
    const devanagariPrefixes = ["hi", "mai", "bho", "mag", "raj", "bgc", "hne", "mr", "ne", "kok", "doi"];
    const effectiveHi = this.getEffectiveVoice("hi");
    if (devanagariPrefixes.includes(prefix) && effectiveHi) {
      return { voice: effectiveHi, isNativeScriptSupported: true };
    }

    if (fallbackLang && fallbackLang.startsWith("hi") && effectiveHi) {
      return { voice: effectiveHi, isNativeScriptSupported: devanagariPrefixes.includes(prefix) };
    }

    return { voice: effectiveHi || this.getEffectiveVoice("en") || null, isNativeScriptSupported: false };
  }

  /**
   * Streams live 24kHz Google WaveNet Neural Human Voice for custom signs or sentences,
   * falling back to Web Speech API if offline.
   */
  playLiveWaveNetStream(ttsLang = "hi", text = "", fallbackText = "", { voice = null, lang = "hi-IN", onComplete = null } = {}) {
    if (!text) {
      if (typeof onComplete === "function") onComplete();
      return;
    }
    this._stopActiveClipAudio();
    const statusDot = document.getElementById("audio-status-dot");
    if (statusDot) statusDot.classList.add("speaking");

    try {
      const url = `https://translate.googleapis.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${encodeURIComponent(
        ttsLang
      )}&q=${encodeURIComponent(text.slice(0, 195))}`;
      const audio = new Audio();
      audio.referrerPolicy = "no-referrer";
      // Do NOT set audio.crossOrigin = "anonymous" as translate_tts does not send CORS headers
      audio.src = url;
      const baseRate = this.speechRate || 1.0;
      const rateMult =
        this.humanVoiceStyle === "natural_male"
          ? 0.98
          : this.humanVoiceStyle === "gentle_elder"
          ? 0.92
          : this.humanVoiceStyle === "expressive_friend"
          ? 1.02
          : 1.0;
      audio.playbackRate = Math.max(0.7, Math.min(1.5, baseRate * rateMult));
      audio.volume = 1.0;
      this._activeHtmlAudio = audio;
      audio.onended = () => {
        if (this._activeHtmlAudio === audio) this._activeHtmlAudio = null;
        if (statusDot) statusDot.classList.remove("speaking");
        if (typeof onComplete === "function") onComplete();
      };
      audio.onerror = () => {
        if (this._activeHtmlAudio === audio) this._activeHtmlAudio = null;
        this._dispatchUtterance(fallbackText || text, {
          voice: voice || this.hindiVoice || this.selectedVoice,
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
          this._dispatchUtterance(fallbackText || text, {
            voice: voice || this.hindiVoice || this.selectedVoice,
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
      this._dispatchUtterance(fallbackText || text, {
        voice: voice || this.hindiVoice || this.selectedVoice,
        lang,
        rate: this.speechRate,
        pitch: this.speechPitch,
        interrupt: true,
        skipClipLookup: true,
        onComplete
      });
    }
  }

  /**
   * Speaks any ISL sign in the selected regional state language mode using guaranteed pre-rendered
   * 24kHz Neural Human Voice clips across all 22 Indian State & Local Speaking Languages
   * (with WebAudio Human Vocal Warmth EQ Chain + Live WaveNet Stream fallback for custom signs).
   */
  speakSignInLang(signObj, langSetting = "hi", { interrupt = true, assertive = true, onComplete = null } = {}) {
    if (!signObj || !window.getSignTranslation) return;

    let codesToSpeak = [];
    if (langSetting === "en_hi") {
      codesToSpeak = ["hi", "en"];
    } else if (langSetting === "en_mai") {
      codesToSpeak = ["mai", "en"];
    } else if (langSetting === "multi_top") {
      codesToSpeak = ["hi", "mai", "en"];
    } else if (langSetting === "all") {
      codesToSpeak = (window.SIGN_LANGUAGES || []).map((l) => l.code);
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
    const sessionId = this._playbackSessionId;

    const personaLabels = {
      warm_female: "👩 Didi (Warm Female Human)",
      natural_male: "👨 Bhaiya (Natural Male Human)",
      gentle_elder: "👵 Elder (Gentle Respectful Tone)",
      expressive_friend: "🧑 Mitra (Expressive Friend)"
    };
    const personaTag = personaLabels[this.humanVoiceStyle] || personaLabels.warm_female;

    const resetStatus = () => {
      if (this._playbackSessionId !== sessionId) return;
      if (statusDot) statusDot.classList.remove("speaking");
      if (statusText) {
        statusText.innerHTML =
          'Human Voice Ready (Press <strong>Space</strong> for Voice, <strong>L</strong> to Cycle State Language, or <strong>S</strong> to Read Screen)';
      }
      if (typeof onComplete === "function") onComplete();
    };

    const playAtIndex = (idx) => {
      if (this._playbackSessionId !== sessionId) return;
      if (idx >= translations.length) {
        resetStatus();
        return;
      }
      const tr = translations[idx];
      if (statusDot) statusDot.classList.add("speaking");
      if (statusText) {
        statusText.textContent = `🗣️ ${personaTag} • ${tr.flag} ${tr.shortName || tr.langName} (${tr.nativeName}): "${tr.phrase}"`;
      }

      const clipB64 = this.getRegionalClipBase64(tr.langCode, signObj.id);
      const { voice, isNativeScriptSupported } = this.findRegionalVoice(tr.voiceLang, tr.fallbackVoice);
      const fallbackText =
        tr.langCode === "en"
          ? `${signObj.word.replace(/\/.*/g, "")}. ${tr.phrase}`
          : isNativeScriptSupported
          ? `${tr.ttsText || tr.phrase}`
          : `${tr.langName}: ${tr.phonetic}`;

      if (clipB64) {
        this.playBase64AudioClip(clipB64, `${tr.langCode}_${signObj.id}`, fallbackText, {
          voice,
          lang: tr.voiceLang || "hi-IN",
          onComplete: () => {
            if (this._playbackSessionId === sessionId) playAtIndex(idx + 1);
          }
        });
      } else {
        this.playLiveWaveNetStream(tr.ttsLang || "hi", tr.ttsText || tr.phrase, fallbackText, {
          voice,
          lang: isNativeScriptSupported ? tr.voiceLang : "hi-IN",
          onComplete: () => {
            if (this._playbackSessionId === sessionId) playAtIndex(idx + 1);
          }
        });
      }
    };

    playAtIndex(0);
  }

  /**
   * Chains pre-rendered neural human voice clips for an array of ISL sign objects (or sign words)
   * in the user's selected regional language so multi-sign sentences, Text-to-ISL translations,
   * and Two-Way Chat messages speak with real native human voices instead of robotic speechSynthesis.
   */
  speakSignSequenceInLang(signItems, langSetting = "hi", { interrupt = true, onComplete = null } = {}) {
    if (!signItems || !signItems.length) {
      if (typeof onComplete === "function") onComplete();
      return;
    }

    const resolvedSigns = signItems
      .map((item) => {
        if (!item) return null;
        if (typeof item === "object" && item.id) return item;
        const raw = String(item).trim();
        const clean = raw.replace(/\/.*/g, "").trim().toLowerCase();
        return (window.ISL_SIGNS || []).find(
          (s) =>
            s.id === clean ||
            s.word.toLowerCase() === raw.toLowerCase() ||
            s.word.toLowerCase().startsWith(clean)
        );
      })
      .filter(Boolean);

    if (!resolvedSigns.length) {
      if (typeof onComplete === "function") onComplete();
      return;
    }

    if (interrupt) {
      this.stopSpeaking();
    }
    const seqSessionId = this._playbackSessionId;

    let primaryLang = langSetting;
    if (langSetting === "en_hi" || langSetting === "multi_top" || langSetting === "all") {
      primaryLang = "hi";
    } else if (langSetting === "en_mai") {
      primaryLang = "mai";
    }

    const playNextSign = (idx) => {
      if (this._playbackSessionId !== seqSessionId) return;
      if (idx >= resolvedSigns.length) {
        if (typeof onComplete === "function") onComplete();
        return;
      }
      this.speakSignInLang(resolvedSigns[idx], primaryLang, {
        interrupt: false,
        assertive: idx === 0,
        onComplete: () => {
          if (this._playbackSessionId === seqSessionId) playNextSign(idx + 1);
        }
      });
    };

    playNextSign(0);
  }

  stopSpeaking() {
    this._playbackSessionId++;
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

