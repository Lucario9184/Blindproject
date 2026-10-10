# SanketSetu — Indian Sign Language (ISL) ⇄ Blind Accessibility Bridge

**SanketSetu** is a two-way assistive web platform connecting **Deaf / Hard-of-Hearing Indian Sign Language (ISL) signers** and **Blind / Visually Impaired users**, while also serving as an eyes-free **Tactile Audio ISL Learning Portal**.

## Key Features (Precision 1 Upgrade)

1. **High-Precision 3D Biomechanical ISL Sign-to-Speech (Camera → Audio for Blind Users)**
   - **Scale-Invariant 3D Landmark Engine**: Normalizes all 21 MediaPipe 3D hand landmarks by palm scale (`wrist` to `middle MCP`) and applies **Exponential Moving Average (EMA) smoothing** to eliminate webcam jitter at any camera distance.
   - **True 3D Joint Angle & Curl Telemetry**: Computes real-time 3D joint angles (`0%–100%` extension) for all five digits (*Thumb, Index, Middle, Ring, Pinky*) with live visual telemetry meters and a circular **Hold-to-Lock Stability Progress Ring**.
   - **12-Frame Temporal Motion Tracking**: Detects horizontal wave (`No`, `Hello`, `Where`), vertical nod (`Yes`, `Help`), and rapid beacon motion (`Emergency`), while rejecting neutral/transitioning poses to prevent false positives.
   - **Adjustable Precision Modes & Scope**: Choose between **Strict (85% Conf • 12 Frames)**, **High Precision (78% Conf • 8 Frames)**, or **Fast (70% Conf • 5 Frames)**, and filter detection between **All Signs + Numbers (41+)**, **Conversational & Custom Only**, or **ISL Numbers (1–9) Only**.

2. **Interactive Custom ISL Sign Calibration & Training Studio (`➕ Add / Train New Sign`)**
   - Train and add your own custom ISL signs directly from the UI.
   - **Capture Live 3D Hand Pose from Webcam** to record a normalized 21-point 3D landmark template, or configure the 5-finger extension states manually.
   - Custom signs persist in `localStorage` and work immediately across Live Camera Detection, Instant Simulator, Speech-to-ISL Translator, and Tactile Dictionary.

3. **Expanded 67+ Built-In ISL Vocabulary & Articulated 5-Finger SVG Diagrams**
   - **32 Conversational, Daily Need, Family, Travel & Emergency Signs** (*Hello/Namaste, Thank You, Yes, No, Please, Sorry, Friend, Good, Bad, Care/Love, Name, Understand, Mother, Father, Help, Blind, Deaf, Water, Food, Where, Stop/Wait, Repeat, Slow Down, Restroom/Toilet, Home, Money/Pay, Time/When, Bus/Train, Emergency, Doctor, Pain/Hurt, Phone/Call*).
   - **26 Two-Handed ISL Alphabet Letters (A–Z)** and **9 ISL Numbers (1–9)**.
   - **Articulated 5-Finger SVG Hand Pose Renderer** displaying exact per-finger extension, thumb angle, and motion cues.

4. **High-Precision Speech-to-ISL Translator (Blind Speaker → Deaf Viewer)**
   - Multi-word ISL idiom recognizer (*"thank you"*, *"i am blind"*, *"how are you"*, *"slow down"*, *"excuse me"*, etc.) + morphological word stemmer and live interim speech transcription.

5. **100% Eyes-Free Navigation, Musical Earcons & Ultra High-Contrast Mode**
   - **Web Audio API Synthesized Earcons**, **Auto-Narrate on Focus**, **Ultra High-Contrast Yellow-on-Black Mode** (`C` key), and **Emergency SOS Beacon**.

## How to Run Locally

Open [`index.html`](./index.html) directly in any modern browser (Chrome, Edge, Safari), or serve the folder over `localhost` so webcam and microphone permissions persist cleanly:

```bash
python3 -m http.server 8080
```

Then open **`http://localhost:8080`** in your browser.
