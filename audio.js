/**
 * audio.js — Blind Accessibility Audio Engine
 * Includes Web Audio API Synthesized Earcons, Text-to-Speech (en-IN/en-US),
 * ARIA Live Region Announcements, and Voice Command Speech Recognition.
 */

class BlindAudioEngine {
  constructor() {
    this.autoNarrate = true;
    this.earconsEnabled = true;
    this.speechRate = 1.0;
    this.audioCtx = null;
    this.selectedVoice = null;
    this.initVoices();
  }

  initVoices() {
    if (!("speechSynthesis" in window)) return;
    const pickVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices.length) return;
      // Prefer Indian English voice for ISL context, fallback to any clear English voice
      this.selectedVoice =
        voices.find((v) => v.lang === "en-IN") ||
        voices.find((v) => v.lang.startsWith("en-") && v.name.includes("Natural")) ||
        voices.find((v) => v.lang.startsWith("en")) ||
        voices[0];
    };
    pickVoice();
    window.speechSynthesis.onvoiceschanged = pickVoice;
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
      }
    } catch (e) {
      // Ignore audio context autoplay restrictions prior to first gesture
    }
  }

  /**
   * Speaks text aloud using Web Speech API and updates screen reader live region.
   */
  speak(text, { interrupt = true, assertive = false } = {}) {
    if (!text) return;

    // Update ARIA Live region for external Screen Readers
    const srEl = document.getElementById(assertive ? "sr-assertive" : "sr-polite");
    if (srEl) {
      srEl.textContent = "";
      setTimeout(() => {
        srEl.textContent = text;
      }, 20);
    }

    // Update visual audio status bar
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
    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
    }
    utterance.rate = this.speechRate;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      if (statusDot) statusDot.classList.add("speaking");
    };

    const resetStatus = () => {
      if (statusDot) statusDot.classList.remove("speaking");
      if (statusText) {
        statusText.innerHTML = 'Audio Guide Ready (Press <strong>Space</strong> to Speak Command)';
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
