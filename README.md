# SanketSetu — Indian Sign Language (ISL) ⇄ Braille ⇄ Blind Audio Bridge

**SanketSetu** is a two-way assistive web platform connecting **Deaf / Hard-of-Hearing Indian Sign Language (ISL) signers** and **Blind / Visually Impaired users**, combining **3D Biomechanical ISL Hand Recognition**, **Real-Time Sign-to-Text & Natural Speech Generation**, **6-Dot Tactile & Sonic Braille Translation**, an **Expressive On-Screen ISL Signing Avatar**, and a **Live Two-Way Communication Hub**.

## Key Features

1. **All-India 22 State & Local Speaking Languages with Real Human Voice (`sign_audio.js` + `audio.js`)**
   - **22 State & Regional Languages with Authentic Local Touch**: Speaks every detected or clicked ISL sign with warm, culturally authentic regional idioms across **Hindi** (*"अरे नमस्ते जी!"*), **Maithili** (*"प्रणाम यौ!"*), **Bhojpuri** (*"प्रणाम रउआ के!"*), **Magahi** (*"प्रणाम भैया!"*), **Rajasthani / Marwari** (*"खम्मा घणी सा!"*), **Haryanvi** (*"राम-राम जी!"*), **Chhattisgarhi** (*"जय जोहार संगवारी!"*), **Marathi** (*"नमस्कार मंडळी!"*), **Gujarati** (*"નમસ્તે, કેમ છો ભાઈ!"*), **Punjabi** (*"ਸਤ ਸ੍ਰੀ ਅਕਾਲ ਜੀ!"*), **Bengali** (*"নমস্কার দাদা!"*), **Assamese** (*"নমস্কাৰ দেই!"*), **Odia** (*"ନମସ୍କାର, ଜୟ ଜଗନ୍ନାଥ!"*), **Tamil** (*"வணக்கம்ங்க!"*), **Telugu** (*"నమస్కారం అండీ!"*), **Kannada** (*"ನಮಸ್ಕಾರ ರೀ!"*), **Malayalam** (*"നമസ്കാരം ചേട്ടാ!"*), **Urdu / Kashmiri** (*"آداب جناب!"*), **Nepali / Gorkhali** (*"नमस्ते हजुर!"*), **Konkani** (*"देव बरे करूं!"*), **Dogri / Pahadi** (*"जय देवा जी!"*), and **Indian English**.
   - **Real 24kHz WaveNet Neural Human Voice + WebAudio Warmth EQ**: Pre-bundled with **818 24,000 Hz neural human voice clips** plus a 3-stage WebAudio **Human Vocal Warmth & Presence Mastering Chain** and **4 Human Voice Personas** (`👩 Didi`, `👨 Bhaiya`, `👵 Dadi / Baba`, `🧑 Mitra`).

2. **Live ISL Sign-to-Text, 6-Dot Braille & Natural Speech Generator (Tab 1)**
   - **Scale-Invariant 3D Landmark Engine**: Normalizes all 21 MediaPipe 3D hand landmarks by palm scale (`wrist` to `middle MCP`) with **Exponential Moving Average (EMA) smoothing**, **true 3D joint angles**, and **12-frame temporal motion tracking**.
   - **Natural Speech Synthesis (`naturalizeISLGloss`)**: Converts sequences of detected ISL sign glosses into grammatically fluent spoken sentences in any of the 22 Indian state languages or English.
   - **Live 6-Dot Tactile & Sonic Braille Translation (`BrailleEngine`)**: Automatically translates detected signs and sentences into Unicode Braille (`⠓⠑⠇⠇⠕`) and interactive **2×3 raised 6-dot Braille cells**, with **Spoken Dot Guides** (`🔊 Read Braille Dots`) and **Web Audio + Haptic Sonic Braille Pulses** (`📳 Sonic Braille Pulses` / `B` key).

3. **Two-Way Deaf ⇄ Blind Communication System, On-Screen ISL Avatar & Braille Composer (Tab 2)**
   - **Expressive On-Screen ISL Signing Avatar (`renderISLAvatarSVG`)**: Upper-body avatar with dynamic facial expressions (smile, questioning brows, urgent alert) and articulated hands positioned at exact anatomical landmarks (forehead, eyes, ear, chin, chest, wrist) alongside the 5-finger close-up diagram.
   - **On-Screen Text & Avatar Audio Reader (`🔊 Read Text & Avatar` / `S` Key)**: Reads aloud the active text on screen, a step-by-step description of what the on-screen ISL Avatar is currently signing, and the 6-dot Braille dot breakdown.
   - **Interactive 6-Dot Perkins-Style Braille Keyer**: Toggle Dots 1–6 to compose text directly in 6-dot Braille with live character preview and audio feedback.
   - **Live Two-Way Conversation Hub**: Full dialogue log between **🤟 Deaf Signer** (via Camera signs, quick-reply chips, or typed replies) and **🦯 Blind Speaker** (via voice dictation, text, or 6-dot Braille), where every message includes an ISL Avatar, English text, 6-dot Braille, and one-tap audio narration.

4. **Tactile Audio ISL Dictionary, Quiz & Custom Sign Calibration Studio (Tab 3)**
   - **67+ Built-In Signs** (32 Conversational/Daily/Emergency signs, 26 Two-Handed ISL Alphabet letters A–Z, and 9 ISL Numbers 1–9), each displaying its ISL Avatar, 6-dot Braille, and spoken tactile guide.
   - **Custom ISL Sign Studio (`➕ Add / Train New Sign`)**: Capture a live 21-point 3D hand pose from your webcam or configure 5-finger extension states manually.

5. **100% Eyes-Free Navigation, Musical Earcons & Ultra High-Contrast Mode (Tab 4)**
   - **Keyboard Shortcuts**: `1`–`4` (Switch Modes), `L` (Cycle State Output Language), `W` (Speak Bilingual Welcome), `S` (Read Screen Text & Avatar Aloud), `B` (Play Sonic Braille Pulses & Read Dots), `Space` / `Alt+V` (Voice Command), `H` (Orientation Guide), `Q`–`P` (Quick-Board Phrases).

## How to Run Locally

Open [`index.html`](./index.html) directly in any modern browser (Chrome, Edge, Safari), or serve the folder over `localhost`:

```bash
python3 -m http.server 8080
```

Then open **`http://localhost:8080`** in your browser.
