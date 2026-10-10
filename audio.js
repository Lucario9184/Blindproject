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
    this.initVoices();
  }

  initVoices() {
    if (!("speechSynthesis" in window)) return;
    const pickVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices.length) return;
      this.voices = voices;

      // Prefer Indian English voice for ISL context, fallback to any clear English voice
      if (!this.selectedVoice) {
        this.selectedVoice =
          voices.find((v) => v.lang === "en-IN") ||
          voices.find((v) => v.lang.startsWith("en-") && v.name.includes("Natural")) ||
          voices.find((v) => v.lang.startsWith("en")) ||
          voices[0];
      }

      // Detect Hindi (hi-IN) voice for bilingual English + Hindi welcome and guidance
      if (!this.hindiVoice) {
        this.hindiVoice =
          voices.find((v) => v.lang === "hi-IN") ||
          voices.find((v) => v.lang.toLowerCase().startsWith("hi")) ||
          null;
      }

      // Populate voice selector dropdown if present in DOM
      const voiceSelect = document.getElementById("speech-voice-select");
      if (voiceSelect && voiceSelect.options.length <= 1) {
        voiceSelect.innerHTML = "";
        const prioritized = voices.filter(
          (v) => v.lang.startsWith("en") || v.lang.startsWith("hi")
        );
        const list = prioritized.length ? prioritized : voices;
        list.slice(0, 18).forEach((v) => {
          const opt = document.createElement("option");
          opt.value = v.name;
          opt.textContent = `Voice: ${v.name.slice(0, 22)} (${v.lang})`;
          if (this.selectedVoice && v.name === this.selectedVoice.name) {
            opt.selected = true;
          }
          voiceSelect.appendChild(opt);
        });
      }
    };
    pickVoice();
    window.speechSynthesis.onvoiceschanged = pickVoice;
  }

  setVoiceByName(name) {
    if (!this.voices || !this.voices.length) return;
    const found = this.voices.find((v) => v.name === name);
    if (found) {
      this.selectedVoice = found;
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
   * Speaks a bilingual statement in English first and then in Hindi (hi-IN),
   * with automatic phonetic Hindi fallback if the system does not have a native Devanagari voice installed.
   */
  speakBilingual(
    englishText,
    hindiText,
    { hindiPhonetic = "", interrupt = true, assertive = true, onStart = null, onComplete = null } = {}
  ) {
    const combinedAria = `${englishText} | ${hindiText}`;
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
      statusText.textContent = `Speaking (EN + HI): "${englishText.slice(0, 55)}..."`;
    }

    if (!("speechSynthesis" in window)) return;

    if (interrupt) {
      window.speechSynthesis.cancel();
    }

    // Refresh voice list if needed
    if (!this.voices || !this.voices.length) {
      this.initVoices();
    }

    const enUtterance = new SpeechSynthesisUtterance(englishText);
    if (this.selectedVoice) {
      enUtterance.voice = this.selectedVoice;
      enUtterance.lang = this.selectedVoice.lang || "en-IN";
    } else {
      enUtterance.lang = "en-IN";
    }
    enUtterance.rate = this.speechRate;
    enUtterance.pitch = this.speechPitch;

    // Prepare Hindi utterance (use native hi-IN voice for Devanagari, or phonetic Hindi fallback so every browser speaks Hindi aloud)
    const hasNativeHindiVoice = Boolean(this.hindiVoice);
    const spokenHindiStr = hasNativeHindiVoice ? hindiText : (hindiPhonetic || hindiText);
    const hiUtterance = new SpeechSynthesisUtterance(spokenHindiStr);
    if (hasNativeHindiVoice) {
      hiUtterance.voice = this.hindiVoice;
      hiUtterance.lang = this.hindiVoice.lang || "hi-IN";
    } else if (this.selectedVoice) {
      hiUtterance.voice = this.selectedVoice;
      hiUtterance.lang = "en-IN";
    } else {
      hiUtterance.lang = "hi-IN";
    }
    hiUtterance.rate = Math.max(0.85, this.speechRate * 0.96);
    hiUtterance.pitch = this.speechPitch;

    const resetStatus = () => {
      if (statusDot) statusDot.classList.remove("speaking");
      if (statusText) {
        statusText.innerHTML =
          'Audio Guide Ready (Press <strong>Space</strong> for Voice, <strong>W</strong> for Welcome EN/HI, or <strong>S</strong> to Read Screen)';
      }
      if (typeof onComplete === "function") onComplete();
    };

    enUtterance.onstart = () => {
      this.hasSpokenStartupWelcome = true;
      if (statusDot) statusDot.classList.add("speaking");
      if (typeof onStart === "function") onStart();
    };

    enUtterance.onend = () => {
      if (statusText) {
        statusText.textContent = `Speaking (हिंदी): "${hindiText.slice(0, 65)}..."`;
      }
    };

    hiUtterance.onstart = () => {
      if (statusDot) statusDot.classList.add("speaking");
    };
    hiUtterance.onend = resetStatus;
    hiUtterance.onerror = resetStatus;
    enUtterance.onerror = resetStatus;

    window.speechSynthesis.speak(enUtterance);
    window.speechSynthesis.speak(hiUtterance);
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

    if (interrupt) {
      window.speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    // Auto-select Hindi voice if text contains Devanagari characters
    const hasDevanagari = /[\u0900-\u097F]/.test(text);
    if (hasDevanagari && this.hindiVoice) {
      utterance.voice = this.hindiVoice;
      utterance.lang = this.hindiVoice.lang || "hi-IN";
    } else if (this.selectedVoice) {
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
  }

  stopSpeaking() {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    const statusDot = document.getElementById("audio-status-dot");
    if (statusDot) statusDot.classList.remove("speaking");
  }
}

window.audioEngine = new BlindAudioEngine();
