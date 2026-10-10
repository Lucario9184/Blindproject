/**
 * audio.js — Blind Accessibility Audio, Speech Generation & Sonic Braille Engine
 * Includes Web Audio API Synthesized Earcons, Sonic/Haptic 6-Dot Braille Pulse Player,
 * Multi-Voice Text-to-Speech (en-IN / hi-IN / en-US), ARIA Live Region Announcements,
 * and On-Screen Text / Avatar Narration.
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
    this.hindiVoice = null;
    this.hasSpokenStartupWelcome = false;
    this._speakTimer = null;
    this.initVoices();
  }

  initVoices() {
    if (!("speechSynthesis" in window)) return;
    const pickVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices.length) return;
      this.voices = voices;

      // Use the system/browser verified default voice (e.g. Samantha / Google US English)
      // Avoid forcing un-downloaded macOS stub voices (like Rishi/Lekha) that can mute speechSynthesis
      if (!this.selectedVoice) {
        this.selectedVoice =
          voices.find((v) => v.default && v.lang.startsWith("en")) ||
          voices.find((v) => v.name.includes("Google US English")) ||
          voices.find((v) => v.name.includes("Samantha")) ||
          voices.find((v) => v.default) ||
          voices.find((v) => v.lang.startsWith("en")) ||
          voices[0];
      }

      // Prefer verified Google/Microsoft Hindi voice if available
      if (!this.hindiVoice) {
        this.hindiVoice =
          voices.find(
            (v) =>
              (v.lang === "hi-IN" || v.lang.toLowerCase().startsWith("hi")) &&
              (v.name.includes("Google") || v.name.includes("Microsoft") || v.default)
          ) ||
          voices.find((v) => v.lang === "hi-IN") ||
          null;
      }

      // Populate voice selector dropdown if present in DOM
      const voiceSelect = document.getElementById("speech-voice-select");
      if (voiceSelect && voiceSelect.options.length <= 1) {
        voiceSelect.innerHTML = '<option value="">Voice: Browser Default (Recommended)</option>';
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
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
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
          playTone(523.25, 0, 0.1, "sine", 0.15); // C5
          playTone(659.25, 0.08, 0.1, "sine", 0.15); // E5
          playTone(783.99, 0.16, 0.2, "sine", 0.18); // G5
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
          playTone(440, 0, 0.11, "sine", 0.14); // A4
          playTone(554.37, 0.09, 0.11, "sine", 0.14); // C#5
          playTone(659.25, 0.18, 0.14, "sine", 0.16); // E5
          playTone(880, 0.28, 0.25, "triangle", 0.18); // A5
          break;
      }
    } catch (e) {
      // Ignore audio context autoplay restrictions prior to first gesture
    }
  }

  /**
   * Plays sonic & haptic 6-dot Braille rhythm pulses for a word or phrase, then speaks the dot guide.
   * Dots 1-6 are mapped to a pentatonic/hexatonic scale so blind users can hear the raised dot geometry.
   */
  playBraillePulses(rawText, { speakAfter = true } = {}) {
    if (!window.BrailleEngine) return;
    const braille = window.BrailleEngine.translate(rawText);
    const cells = braille.cells.filter((c) => !c.isSpace).slice(0, 8);

    try {
      this.ensureAudioContext();
      if (this.audioCtx && cells.length) {
        const dotFreqs = [440, 493.88, 554.37, 659.25, 739.99, 880]; // A4, B4, C#5, E5, F#5, A5
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
          offset += 0.14; // inter-character pause
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
    } catch (e) {
      // Fallback to direct speech
    }

    if (speakAfter) {
      this.speak(braille.spokenGuide, { interrupt: true, assertive: true });
    }
  }

  /**
   * Speaks a bilingual statement in English AND Hindi aloud reliably across all browsers.
   * Combines English + phonetic Hindi in a primary guaranteed utterance so Hindi is always audible
   * even on systems without a downloaded Devanagari TTS pack, and also uses native hi-IN when available.
   */
  speakBilingual(
    englishText,
    hindiText,
    { hindiPhonetic = "", interrupt = true, assertive = true, onStart = null, onComplete = null } = {}
  ) {
    const combinedAria = `${englishText} | हिंदी: ${hindiText}`;
    const srEl = document.getElementById(assertive ? "sr-assertive" : "sr-polite");
    if (srEl) {
      srEl.textContent = "";
      setTimeout(() => {
        srEl.textContent = combinedAria;
      }, 20);
    }

    const statusText = document.getElementById("audio-status-text");
    const statusDot = document.getElementById("audio-status-dot");
    if (statusText) {
      statusText.textContent = `Speaking (EN + हिंदी): "${englishText.slice(0, 48)}..." | "${(hindiText || "").slice(0, 42)}..."`;
    }

    if (!("speechSynthesis" in window)) return;

    if (this._speakTimer) {
      clearTimeout(this._speakTimer);
      this._speakTimer = null;
    }

    if (interrupt) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }

    const spokenHindi = hindiPhonetic || hindiText || "";
    const fullBilingualSpeech = spokenHindi
      ? `${englishText} ... ${spokenHindi}`
      : `${englishText}`;

    this._speakTimer = setTimeout(() => {
      try {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
      } catch (e) {}

      const utterance = new SpeechSynthesisUtterance(fullBilingualSpeech);
      if (this.userSelectedVoice && this.selectedVoice) {
        utterance.voice = this.selectedVoice;
      }
      utterance.rate = this.speechRate;
      utterance.pitch = this.speechPitch;

      const resetStatus = () => {
        if (statusDot) statusDot.classList.remove("speaking");
        if (statusText) {
          statusText.innerHTML =
            'Audio Guide Ready (Press <strong>Space</strong> for Voice, <strong>W</strong> for Welcome EN/हिंदी, or <strong>S</strong> to Read Screen)';
        }
        if (typeof onComplete === "function") onComplete();
      };

      utterance.onstart = () => {
        this.hasSpokenStartupWelcome = true;
        if (statusDot) statusDot.classList.add("speaking");
        if (typeof onStart === "function") onStart();
      };
      utterance.onend = resetStatus;
      utterance.onerror = resetStatus;

      window.speechSynthesis.speak(utterance);
    }, 45);
  }

  /**
   * Speaks Hindi statement aloud (uses verified hi-IN voice if available + phonetic Hindi so it is always audible).
   */
  speakHindi(hindiText, hindiPhonetic = "", { interrupt = true, assertive = true } = {}) {
    const statusText = document.getElementById("audio-status-text");
    const statusDot = document.getElementById("audio-status-dot");
    if (statusText) {
      statusText.textContent = `Speaking (हिंदी): "${hindiText.slice(0, 75)}"`;
    }

    if (!("speechSynthesis" in window)) return;

    if (this._speakTimer) {
      clearTimeout(this._speakTimer);
      this._speakTimer = null;
    }

    if (interrupt) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }

    this._speakTimer = setTimeout(() => {
      try {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
      } catch (e) {}

      const liveVoices = window.speechSynthesis.getVoices() || [];
      const verifiedHindiVoice = liveVoices.find(
        (v) =>
          (v.lang === "hi-IN" || v.lang.toLowerCase().startsWith("hi")) &&
          (v.name.includes("Google") || v.name.includes("Microsoft"))
      );

      const textToSpeak = verifiedHindiVoice
        ? hindiText
        : hindiPhonetic || hindiText;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      if (verifiedHindiVoice) {
        utterance.voice = verifiedHindiVoice;
        utterance.lang = "hi-IN";
      }
      utterance.rate = Math.max(0.85, this.speechRate * 0.95);
      utterance.pitch = this.speechPitch;

      const resetStatus = () => {
        if (statusDot) statusDot.classList.remove("speaking");
        if (statusText) {
          statusText.innerHTML =
            'Audio Guide Ready (Press <strong>Space</strong> for Voice, <strong>W</strong> for Welcome EN/हिंदी, or <strong>S</strong> to Read Screen)';
        }
      };

      utterance.onstart = () => {
        this.hasSpokenStartupWelcome = true;
        if (statusDot) statusDot.classList.add("speaking");
      };
      utterance.onend = resetStatus;
      utterance.onerror = resetStatus;

      window.speechSynthesis.speak(utterance);
    }, 45);
  }

  /**
   * Speaks text aloud using Web Speech API and updates screen reader live region.
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
    const statusDot = document.getElementById("audio-status-dot");
    if (statusText) {
      statusText.textContent = `Speaking: "${text.slice(0, 85)}${text.length > 85 ? "..." : ""}"`;
    }

    if (!("speechSynthesis" in window)) return;

    if (this._speakTimer) {
      clearTimeout(this._speakTimer);
      this._speakTimer = null;
    }

    if (interrupt) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }

    this._speakTimer = setTimeout(() => {
      try {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
      } catch (e) {}

      const utterance = new SpeechSynthesisUtterance(text);
      if (this.userSelectedVoice && this.selectedVoice) {
        utterance.voice = this.selectedVoice;
      }
      utterance.rate = this.speechRate;
      utterance.pitch = this.speechPitch;

      utterance.onstart = () => {
        if (statusDot) statusDot.classList.add("speaking");
      };

      const resetStatus = () => {
        if (statusDot) statusDot.classList.remove("speaking");
        if (statusText) {
          statusText.innerHTML = 'Audio Guide Ready (Press <strong>Space</strong> for Voice or <strong>S</strong> to Read Screen/Avatar)';
        }
      };

      utterance.onend = resetStatus;
      utterance.onerror = resetStatus;

      window.speechSynthesis.speak(utterance);
    }, 45);
  }

  stopSpeaking() {
    if (this._speakTimer) {
      clearTimeout(this._speakTimer);
      this._speakTimer = null;
    }
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
