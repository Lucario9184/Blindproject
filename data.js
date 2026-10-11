/**
 * data.js — Indian Sign Language (ISL) Dataset, 6-Dot Braille Translation Engine,
 * Expressive On-Screen ISL Signing Avatar, and Articulated 5-Finger SVG Hand Pose Generator.
 */

window.ISL_SIGNS = [
  // ================= GREETINGS & SOCIAL =================
  {
    id: "hello",
    word: "Hello / Namaste",
    keywords: ["hello", "hi", "namaste", "greetings", "hey", "welcome"],
    category: "greetings",
    emoji: "🙏",
    hands: "2-Handed ISL Sign",
    spokenPhrase: "Hello! Namaste, nice to meet you.",
    tactileGuide: "Bring both open palms together vertically in front of your chest with fingers pointing upward (the traditional Indian Namaste posture), or raise your open right hand to the side of your forehead in a gentle salute.",
    poseType: "namaste",
    simLabel: "👋 Hello / Namaste"
  },
  {
    id: "thankyou",
    word: "Thank You",
    keywords: ["thank", "thanks", "thankyou", "grateful", "appreciate"],
    category: "greetings",
    emoji: "🤲",
    hands: "1-Handed ISL Sign",
    spokenPhrase: "Thank you very much.",
    tactileGuide: "Keep your dominant hand flat with fingers together. Touch the fingertips to your chin, then move your hand forward and slightly down toward the person you are thanking.",
    poseType: "chin_forward",
    simLabel: "🤲 Thank You"
  },
  {
    id: "yes",
    word: "Yes",
    keywords: ["yes", "agree", "okay", "ok", "sure", "correct", "right", "yeah"],
    category: "greetings",
    emoji: "👍",
    hands: "1-Handed ISL Sign",
    spokenPhrase: "Yes, I agree.",
    tactileGuide: "Form a closed fist with your dominant hand and raise your thumb straight upward, then nod both your head and your wrist slightly up and down.",
    poseType: "thumb_up",
    simLabel: "👍 Yes"
  },
  {
    id: "no",
    word: "No",
    keywords: ["no", "not", "never", "disagree", "nope", "dont"],
    category: "greetings",
    emoji: "☝️",
    hands: "1-Handed ISL Sign",
    spokenPhrase: "No, I do not agree.",
    tactileGuide: "Extend your index finger upright at chest or shoulder height and wave it side-to-side from left to right while gently shaking your head.",
    poseType: "wave_no",
    simLabel: "☝️ No"
  },
  {
    id: "please",
    word: "Please",
    keywords: ["please", "kindly", "request", "favor"],
    category: "greetings",
    emoji: "🫱",
    hands: "1-Handed ISL Sign",
    spokenPhrase: "Please, if you don't mind.",
    tactileGuide: "Place your open palm flat over the center of your chest and rub it in a gentle clockwise circular motion, or join palms lightly at chin level.",
    poseType: "chest_circle",
    simLabel: "🫱 Please"
  },
  {
    id: "sorry",
    word: "Sorry / Excuse Me",
    keywords: ["sorry", "apologize", "excuse", "pardon", "forgive", "mistake"],
    category: "greetings",
    emoji: "✊",
    hands: "1-Handed ISL Sign",
    spokenPhrase: "I am sorry. Excuse me.",
    tactileGuide: "Make a closed fist with your thumb resting across the front of your fingers, place the fist against the center of your chest, and move it in a small circular motion.",
    poseType: "fist_chest",
    simLabel: "✊ Sorry"
  },
  {
    id: "friend",
    word: "Friend",
    keywords: ["friend", "friends", "buddy", "companion", "partner", "mate"],
    category: "greetings",
    emoji: "🤝",
    hands: "2-Handed ISL Sign",
    spokenPhrase: "You are my friend.",
    tactileGuide: "In Indian Sign Language, clasp both hands together in a warm handshake in front of your body, or hook your two index fingers together and reverse them.",
    poseType: "clasp_hands",
    simLabel: "🤝 Friend"
  },
  {
    id: "good",
    word: "Good / Fine",
    keywords: ["good", "fine", "well", "great", "nice", "awesome", "better"],
    category: "greetings",
    emoji: "👌",
    hands: "1-Handed ISL Sign",
    spokenPhrase: "Good! Everything is fine.",
    tactileGuide: "Touch the tip of your index finger to the tip of your thumb to form a crisp circle while extending your middle, ring, and pinky fingers straight up.",
    poseType: "ok_sign",
    simLabel: "👌 Good / Fine"
  },
  {
    id: "bad",
    word: "Bad / Not Good",
    keywords: ["bad", "worse", "wrong", "unhappy", "dislike", "poor"],
    category: "greetings",
    emoji: "👎",
    hands: "1-Handed ISL Sign",
    spokenPhrase: "Not good. Something is wrong.",
    tactileGuide: "Curl your four fingers into a fist and point your thumb straight downward toward the floor with a slight downward wrist motion.",
    poseType: "thumb_down",
    simLabel: "👎 Bad"
  },
  {
    id: "iloveyou",
    word: "Love / Care",
    keywords: ["love", "care", "family", "heart", "iloveyou", "affection"],
    category: "greetings",
    emoji: "🤟",
    hands: "1-Handed Sign",
    spokenPhrase: "Love. I love you and care about you.",
    tactileGuide: "Extend your thumb, index finger, and pinky finger straight out while keeping your middle and ring fingers curled tightly into your palm.",
    poseType: "ily_hand",
    simLabel: "🤟 Love / Care"
  },
  {
    id: "name",
    word: "Name",
    keywords: ["name", "called", "who", "introduce", "identity"],
    category: "greetings",
    emoji: "🪪",
    hands: "2-Handed ISL Sign",
    spokenPhrase: "What is your name? My name is...",
    tactileGuide: "Extend and join the index and middle fingers of both hands, then tap the two fingers of your dominant hand crosswise on top of the two fingers of your base hand.",
    poseType: "two_finger_cross",
    simLabel: "🪪 Name"
  },
  {
    id: "understand",
    word: "Understand / Got It",
    keywords: ["understand", "know", "got", "clear", "comprehend", "idea"],
    category: "greetings",
    emoji: "💡",
    hands: "1-Handed ISL Sign",
    spokenPhrase: "I understand clearly.",
    tactileGuide: "Raise your dominant hand near the side of your forehead and flick your index finger straight upward as if a light bulb just turned on.",
    poseType: "temple_point",
    simLabel: "💡 Understand"
  },
  {
    id: "mother",
    word: "Mother / Mom",
    keywords: ["mother", "mom", "mama", "amma", "mummy"],
    category: "greetings",
    emoji: "👩",
    hands: "1-Handed ISL Sign",
    spokenPhrase: "Mother. Meaning: Mother, Mom.",
    tactileGuide: "Spread all five fingers of your dominant hand open and tap the tip of your thumb gently against the side of your chin.",
    poseType: "chin_thumb",
    simLabel: "👩 Mother"
  },
  {
    id: "father",
    word: "Father / Dad",
    keywords: ["father", "dad", "papa", "abba", "daddy"],
    category: "greetings",
    emoji: "👨",
    hands: "1-Handed ISL Sign",
    spokenPhrase: "Father. Meaning: Father, Dad.",
    tactileGuide: "Spread all five fingers of your dominant hand open and tap the tip of your thumb gently against the center or side of your forehead.",
    poseType: "forehead_thumb",
    simLabel: "👨 Father"
  },

  // ================= DAILY NEEDS & ASSISTANCE =================
  {
    id: "help",
    word: "Help",
    keywords: ["help", "assist", "support", "aid", "helping", "guide"],
    category: "needs",
    emoji: "🆘",
    hands: "2-Handed ISL Sign",
    spokenPhrase: "Please help me.",
    tactileGuide: "Hold your non-dominant hand flat with palm facing up. Place the closed fist of your dominant hand (thumb pointing up) on top of the flat palm, and lift both hands upward together.",
    poseType: "help_lift",
    simLabel: "🆘 Help"
  },
  {
    id: "blind",
    word: "Blind / Visually Impaired",
    keywords: ["blind", "vision", "see", "sight", "eyes", "visually", "impaired"],
    category: "needs",
    emoji: "🦯",
    hands: "1-Handed ISL Sign",
    spokenPhrase: "I am blind / visually impaired.",
    tactileGuide: "Extend your index and middle fingers in a 'V' shape, raise your hand to eye level, and point the two fingertips toward your eyes.",
    poseType: "eyes_point",
    simLabel: "🦯 I Am Blind"
  },
  {
    id: "deaf",
    word: "Deaf / Hard of Hearing",
    keywords: ["deaf", "hearing", "ear", "listen", "hear", "signer"],
    category: "needs",
    emoji: "🦻",
    hands: "1-Handed ISL Sign",
    spokenPhrase: "Deaf / communicates in Indian Sign Language.",
    tactileGuide: "Extend your index finger and touch just below your ear, then arc the fingertip forward to touch the corner of your closed mouth.",
    poseType: "ear_to_mouth",
    simLabel: "🦻 Deaf"
  },
  {
    id: "water",
    word: "Water / Drink",
    keywords: ["water", "drink", "thirsty", "drinking", "glass", "tea", "coffee"],
    category: "needs",
    emoji: "💧",
    hands: "1-Handed ISL Sign",
    spokenPhrase: "I need water to drink.",
    tactileGuide: "Curve your fingers and thumb into a rounded 'C' cup shape as if holding a tumbler, and bring it near your mouth.",
    poseType: "drink_cup",
    simLabel: "💧 Water"
  },
  {
    id: "food",
    word: "Food / Eat",
    keywords: ["food", "eat", "hungry", "meal", "lunch", "dinner", "breakfast", "eating"],
    category: "needs",
    emoji: "🍲",
    hands: "1-Handed ISL Sign",
    spokenPhrase: "Food / I would like to eat.",
    tactileGuide: "Bring the fingertips of all four fingers and your thumb tightly together into a bunched morsel point and tap them toward your mouth twice.",
    poseType: "eat_bunch",
    simLabel: "🍲 Food"
  },
  {
    id: "where",
    word: "Where / Question",
    keywords: ["where", "how", "what", "question", "direction", "location", "place"],
    category: "needs",
    emoji: "❓",
    hands: "2-Handed ISL Sign",
    spokenPhrase: "Where is it? Can you guide me?",
    tactileGuide: "Hold both hands out at chest height with palms facing upward and gently rock your open hands side to side in an inquiring gesture.",
    poseType: "palms_up_query",
    simLabel: "❓ Where?"
  },
  {
    id: "wait",
    word: "Stop / Wait",
    keywords: ["stop", "wait", "hold", "pause", "halt", "moment"],
    category: "needs",
    emoji: "🛑",
    hands: "1-Handed ISL Sign",
    spokenPhrase: "Please stop and wait a moment.",
    tactileGuide: "Extend your dominant arm forward at chest level with your palm open and flat, all five digits straight and facing the other person.",
    poseType: "open_palm_stop",
    simLabel: "🛑 Stop / Wait"
  },
  {
    id: "repeat",
    word: "Repeat / Again",
    keywords: ["repeat", "again", "once", "more", "replay"],
    category: "needs",
    emoji: "🔁",
    hands: "2-Handed ISL Sign",
    spokenPhrase: "Could you please repeat that again?",
    tactileGuide: "Hold your non-dominant palm flat facing up, bend the four fingers of your dominant hand at the knuckles, and arc them down into the center of your open palm.",
    poseType: "repeat_arc",
    simLabel: "🔁 Repeat"
  },
  {
    id: "slow",
    word: "Slow Down",
    keywords: ["slow", "slowly", "slower", "careful", "easy"],
    category: "needs",
    emoji: "🐢",
    hands: "2-Handed ISL Sign",
    spokenPhrase: "Please sign or speak more slowly.",
    tactileGuide: "Extend your non-dominant hand flat with palm facing down, and draw your dominant open palm slowly backward from the fingertips up to the wrist.",
    poseType: "slow_stroke",
    simLabel: "🐢 Slow Down"
  },
  {
    id: "bathroom",
    word: "Restroom / Toilet",
    keywords: ["bathroom", "toilet", "restroom", "washroom", "loo"],
    category: "needs",
    emoji: "🚻",
    hands: "1-Handed ISL Sign",
    spokenPhrase: "Where is the restroom / washroom?",
    tactileGuide: "In Indian grammar, raise your pinky (little) finger straight up while keeping your index, middle, ring fingers and thumb curled into a fist.",
    poseType: "pinky_up",
    simLabel: "🚻 Restroom"
  },
  {
    id: "home",
    word: "Home / House",
    keywords: ["home", "house", "room", "address", "shelter", "stay"],
    category: "needs",
    emoji: "🏠",
    hands: "2-Handed ISL Sign",
    spokenPhrase: "Please help me get home.",
    tactileGuide: "Hold both hands flat and angle them inward so the fingertips of your left and right hands touch at a 45-degree peak like the pitched roof of a house.",
    poseType: "roof_hands",
    simLabel: "🏠 Home"
  },
  {
    id: "money",
    word: "Money / Pay",
    keywords: ["money", "pay", "cost", "price", "cash", "rupees", "buy"],
    category: "needs",
    emoji: "₹",
    hands: "1-Handed ISL Sign",
    spokenPhrase: "How much money does this cost?",
    tactileGuide: "Touch the pad of your thumb against the pads of your index and middle fingers and rub them together, or tap the back of a curled hand into your open palm.",
    poseType: "money_rub",
    simLabel: "₹ Money / Pay"
  },
  {
    id: "time",
    word: "Time / When",
    keywords: ["time", "when", "clock", "hour", "today", "now", "late"],
    category: "needs",
    emoji: "⌚",
    hands: "2-Handed ISL Sign",
    spokenPhrase: "What time is it? When will it arrive?",
    tactileGuide: "Hold your non-dominant forearm horizontally and tap the back of your wrist twice with the tip of your dominant index finger as if pointing to a wristwatch.",
    poseType: "wrist_watch",
    simLabel: "⌚ Time / When"
  },
  {
    id: "transport",
    word: "Bus / Train / Travel",
    keywords: ["bus", "train", "metro", "cab", "taxi", "auto", "station", "travel", "go"],
    category: "needs",
    emoji: "🚌",
    hands: "2-Handed ISL Sign",
    spokenPhrase: "I need to catch the bus, train, or metro.",
    tactileGuide: "Form two closed fists in front of your chest and roll them over each other in a forward circular wheel motion.",
    poseType: "wheel_roll",
    simLabel: "🚌 Bus / Train"
  },

  // ================= HEALTH & EMERGENCY =================
  {
    id: "emergency",
    word: "Emergency / Danger",
    keywords: ["emergency", "danger", "urgent", "sos", "police", "fire", "alert"],
    category: "emergency",
    emoji: "🚨",
    hands: "2-Handed ISL Sign",
    spokenPhrase: "Emergency! I need urgent help right now!",
    tactileGuide: "Raise both hands above shoulder height, spreading all fingers wide open and waving both palms rapidly like an emergency beacon.",
    poseType: "alarm_wave",
    simLabel: "🚨 Emergency"
  },
  {
    id: "doctor",
    word: "Doctor / Hospital",
    keywords: ["doctor", "hospital", "medicine", "sick", "medical", "clinic", "nurse", "ambulance"],
    category: "emergency",
    emoji: "🩺",
    hands: "2-Handed ISL Sign",
    spokenPhrase: "Please call a doctor or take me to a hospital.",
    tactileGuide: "Rest the index and middle fingertips of your dominant hand gently on the inside wrist of your non-dominant arm, just like a doctor feeling a patient's pulse.",
    poseType: "wrist_pulse",
    simLabel: "🩺 Doctor"
  },
  {
    id: "pain",
    word: "Pain / Hurt",
    keywords: ["pain", "hurt", "injury", "injured", "ache", "headache", "bleeding"],
    category: "emergency",
    emoji: "🤕",
    hands: "2-Handed ISL Sign",
    spokenPhrase: "I am in pain / hurt and need medical attention.",
    tactileGuide: "Extend both index fingers pointing directly at each other a few inches apart and jab them inward toward each other twice.",
    poseType: "index_pain",
    simLabel: "🤕 Pain / Hurt"
  },
  {
    id: "call",
    word: "Phone / Call",
    keywords: ["call", "phone", "mobile", "contact", "dial", "telephone"],
    category: "emergency",
    emoji: "📞",
    hands: "1-Handed ISL Sign",
    spokenPhrase: "Please make a phone call for me.",
    tactileGuide: "Extend your thumb and pinky finger while curling your index, middle, and ring fingers into your palm. Hold the thumb near your ear and the pinky near your mouth like a telephone receiver.",
    poseType: "phone_hand",
    simLabel: "📞 Call / Phone"
  }
];

// Multi-word phrase idioms mapped directly to sign IDs for high-precision NLP translation
window.ISL_PHRASE_IDIOMS = [
  { phrase: "thank you very much", signIds: ["thankyou", "good"] },
  { phrase: "thank you", signIds: ["thankyou"] },
  { phrase: "excuse me", signIds: ["sorry"] },
  { phrase: "i am sorry", signIds: ["sorry"] },
  { phrase: "i am blind", signIds: ["blind"] },
  { phrase: "visually impaired", signIds: ["blind"] },
  { phrase: "cannot see", signIds: ["no", "blind"] },
  { phrase: "hard of hearing", signIds: ["deaf"] },
  { phrase: "i love you", signIds: ["iloveyou"] },
  { phrase: "take care", signIds: ["iloveyou"] },
  { phrase: "how are you", signIds: ["where", "good"] },
  { phrase: "what is your name", signIds: ["where", "name"] },
  { phrase: "my name is", signIds: ["name"] },
  { phrase: "slow down", signIds: ["slow"] },
  { phrase: "say again", signIds: ["repeat"] },
  { phrase: "one more time", signIds: ["repeat"] },
  { phrase: "phone call", signIds: ["call"] },
  { phrase: "drinking water", signIds: ["water"] },
  { phrase: "how much", signIds: ["where", "money"] },
  { phrase: "what time", signIds: ["time"] },
  { phrase: "not good", signIds: ["bad"] }
];

// ================= ISL ALPHABET (A-Z) & NUMBERS (1-9) =================
const ISL_ALPHABET_DATA = [
  { letter: "A", hands: "2-Handed ISL", guide: "Point your right index finger onto the tip of your open left thumb." },
  { letter: "B", hands: "2-Handed ISL", guide: "Curve the thumb and index finger of both hands into two 'C' circles and touch their tips together like spectacles." },
  { letter: "C", hands: "1-Handed ISL", guide: "Curve your dominant thumb and four fingers into the shape of the letter C." },
  { letter: "D", hands: "2-Handed ISL", guide: "Hold your left index finger straight up; curve your right index finger and thumb into a half-circle touching the top and bottom of the left index finger." },
  { letter: "E", hands: "2-Handed ISL", guide: "Point your right index finger against the tip of your left index finger." },
  { letter: "F", hands: "2-Handed ISL", guide: "Place the index and middle fingers of your right hand horizontally across the index and middle fingers of your left hand." },
  { letter: "G", hands: "2-Handed ISL", guide: "Make two closed fists and stack your right fist on top of your left fist." },
  { letter: "H", hands: "2-Handed ISL", guide: "Hold your left palm open facing up and brush your flat right palm forward across it." },
  { letter: "I", hands: "2-Handed ISL", guide: "Point your right index finger onto the tip of your left middle finger." },
  { letter: "J", hands: "2-Handed ISL", guide: "Trace a hook shape from the tip of your left middle finger down into your left palm using your right index finger." },
  { letter: "K", hands: "2-Handed ISL", guide: "Hold your left index finger upright and hook the bent knuckle of your right index finger against its middle." },
  { letter: "L", hands: "1-Handed ISL", guide: "Place the flat edge of your right index finger across your open left palm, or extend thumb and index finger in an L shape." },
  { letter: "M", hands: "2-Handed ISL", guide: "Press three fingers (index, middle, ring) of your right hand flat against your open left palm." },
  { letter: "N", hands: "2-Handed ISL", guide: "Press two fingers (index and middle) of your right hand flat against your open left palm." },
  { letter: "O", hands: "2-Handed ISL", guide: "Point your right index finger onto the tip of your left ring finger, or form a circle with all fingertips touching thumb." },
  { letter: "P", hands: "2-Handed ISL", guide: "Touch the thumb and index finger of your right hand in a small circle against the tip of your upright left index finger." },
  { letter: "Q", hands: "2-Handed ISL", guide: "Form a circle with your left thumb and index finger, and hook your right index finger onto its bottom rim." },
  { letter: "R", hands: "2-Handed ISL", guide: "Curl your right index finger slightly and rest it on the center of your open left palm." },
  { letter: "S", hands: "2-Handed ISL", guide: "Hook your two pinky fingers together in front of your chest." },
  { letter: "T", hands: "2-Handed ISL", guide: "Hold your left palm flat vertically and touch the tip of your right index finger perpendicular to its bottom edge." },
  { letter: "U", hands: "2-Handed ISL", guide: "Point your right index finger onto the tip of your left pinky (little) finger." },
  { letter: "V", hands: "2-Handed ISL", guide: "Extend your right index and middle fingers in a V shape and rest them on your open left palm." },
  { letter: "W", hands: "2-Handed ISL", guide: "Interlace the fingers of both open hands together forming a W shape." },
  { letter: "X", hands: "2-Handed ISL", guide: "Cross both index fingers over each other like an X." },
  { letter: "Y", hands: "2-Handed ISL", guide: "Spread your left thumb and index finger into a V, and rest the edge of your right index finger into the web between them." },
  { letter: "Z", hands: "2-Handed ISL", guide: "Hold your left palm upright and touch the fingertips of your bent right hand against the center of the left palm." }
];

ISL_ALPHABET_DATA.forEach((item) => {
  window.ISL_SIGNS.push({
    id: `letter_${item.letter.toLowerCase()}`,
    word: `Letter ${item.letter}`,
    keywords: [item.letter.toLowerCase()],
    category: "alphabet",
    emoji: "🔤",
    hands: item.hands,
    spokenPhrase: `Letter ${item.letter}`,
    tactileGuide: `Indian Sign Language for Letter ${item.letter} (${item.hands}): ${item.guide}`,
    poseType: "letter",
    letterChar: item.letter
  });
});

// Numbers 1-9
const NUMBER_GUIDES = [
  { num: "1", guide: "Extend your index finger straight up while keeping middle, ring, pinky, and thumb curled in your palm.", fingerState: [0, 1, 0, 0, 0] },
  { num: "2", guide: "Extend your index and middle fingers upward in a clear V shape while curling ring, pinky, and thumb.", fingerState: [0, 1, 1, 0, 0] },
  { num: "3", guide: "Extend your index, middle, and ring fingers straight upward while holding your pinky down with your thumb.", fingerState: [0, 1, 1, 1, 0] },
  { num: "4", guide: "Extend all four fingers (index, middle, ring, pinky) straight upward while folding your thumb across your palm.", fingerState: [0, 1, 1, 1, 1] },
  { num: "5", guide: "Spread all five digits—four fingers and thumb—wide open facing forward.", fingerState: [1, 1, 1, 1, 1] },
  { num: "6", guide: "Extend your pinky finger straight upward while curling index, middle, ring, and thumb into a fist.", fingerState: [0, 0, 0, 0, 1] },
  { num: "7", guide: "Curve your index finger forward like a hook while keeping thumb, middle, ring, and pinky closed.", fingerState: [0, 0.5, 0, 0, 0] },
  { num: "8", guide: "Extend your thumb, index, and middle fingers outward while curling ring and pinky.", fingerState: [1, 1, 1, 0, 0] },
  { num: "9", guide: "Extend your thumb, index, middle, and ring fingers or fold thumb into palm and curve all four fingers slightly forward.", fingerState: [1, 1, 1, 1, 0] }
];

NUMBER_GUIDES.forEach((n) => {
  window.ISL_SIGNS.push({
    id: `num_${n.num}`,
    word: `Number ${n.num}`,
    keywords: [n.num],
    category: "numbers",
    emoji: "🔢",
    hands: "1-Handed ISL Number",
    spokenPhrase: `Number ${n.num}`,
    tactileGuide: `Indian Sign Language for Number ${n.num}: ${n.guide}`,
    poseType: `num_${n.num}`,
    letterChar: n.num,
    fingerState: n.fingerState
  });
});

// ================= QUICK-BOARD CARDS FOR BLIND ASSIST TAB =================
window.QUICK_BOARD_ITEMS = [
  {
    key: "Q",
    signId: "blind",
    title: "I am Blind — Please Speak or Tap",
    spoken: "Excuse me, I am visually impaired. Please speak to me or use this screen to communicate in Indian Sign Language.",
    emoji: "🦯"
  },
  {
    key: "W",
    signId: "help",
    title: "Can You Guide Me?",
    spoken: "Hello, could you please help guide me to my destination?",
    emoji: "🆘"
  },
  {
    key: "E",
    signId: "hello",
    title: "Hello / Namaste Friend",
    spoken: "Namaste! Hello friend, how are you doing today?",
    emoji: "🙏"
  },
  {
    key: "R",
    signId: "water",
    title: "Where is Drinking Water?",
    spoken: "Excuse me, where can I find drinking water?",
    emoji: "💧"
  },
  {
    key: "T",
    signId: "food",
    title: "Looking for Food / Cafe",
    spoken: "Could you direct me to the nearest food counter or restaurant?",
    emoji: "🍲"
  },
  {
    key: "Y",
    signId: "thankyou",
    title: "Thank You Very Much!",
    spoken: "Thank you so much for your kindness and assistance!",
    emoji: "🤲"
  },
  {
    key: "U",
    signId: "doctor",
    title: "Medical Help / Doctor",
    spoken: "I need medical assistance or directions to a doctor or pharmacy.",
    emoji: "🩺"
  },
  {
    key: "I",
    signId: "call",
    title: "Please Call My Contact",
    spoken: "Could you please help me make a phone call?",
    emoji: "📞"
  },
  {
    key: "O",
    signId: "bathroom",
    title: "Where is the Restroom?",
    spoken: "Excuse me, could you guide me to the nearest restroom or washroom?",
    emoji: "🚻"
  },
  {
    key: "P",
    signId: "slow",
    title: "Please Sign / Speak Slowly",
    spoken: "Please communicate slowly so we can understand each other clearly.",
    emoji: "🐢"
  }
];

// ============================================================================
// 6-DOT BRAILLE TRANSLATION ENGINE (Grade 1 / Unified & Bharati Braille)
// ============================================================================
// Standard 6-dot positions:
//   (1) (4)
//   (2) (5)
//   (3) (6)
const BRAILLE_MAP = {
  a: [1, 0, 0, 0, 0, 0],
  b: [1, 1, 0, 0, 0, 0],
  c: [1, 0, 0, 1, 0, 0],
  d: [1, 0, 0, 1, 1, 0],
  e: [1, 0, 0, 0, 1, 0],
  f: [1, 1, 0, 1, 0, 0],
  g: [1, 1, 0, 1, 1, 0],
  h: [1, 1, 0, 0, 1, 0],
  i: [0, 1, 0, 1, 0, 0],
  j: [0, 1, 0, 1, 1, 0],
  k: [1, 0, 1, 0, 0, 0],
  l: [1, 1, 1, 0, 0, 0],
  m: [1, 0, 1, 1, 0, 0],
  n: [1, 0, 1, 1, 1, 0],
  o: [1, 0, 1, 0, 1, 0],
  p: [1, 1, 1, 1, 0, 0],
  q: [1, 1, 1, 1, 1, 0],
  r: [1, 1, 1, 0, 1, 0],
  s: [0, 1, 1, 1, 0, 0],
  t: [0, 1, 1, 1, 1, 0],
  u: [1, 0, 1, 0, 0, 1],
  v: [1, 1, 1, 0, 0, 1],
  w: [0, 1, 0, 1, 1, 1],
  x: [1, 0, 1, 1, 0, 1],
  y: [1, 0, 1, 1, 1, 1],
  z: [1, 0, 1, 0, 1, 1],
  "1": [1, 0, 0, 0, 0, 0],
  "2": [1, 1, 0, 0, 0, 0],
  "3": [1, 0, 0, 1, 0, 0],
  "4": [1, 0, 0, 1, 1, 0],
  "5": [1, 0, 0, 0, 1, 0],
  "6": [1, 1, 0, 1, 0, 0],
  "7": [1, 1, 0, 1, 1, 0],
  "8": [1, 1, 0, 0, 1, 0],
  "9": [0, 1, 0, 1, 0, 0],
  "0": [0, 1, 0, 1, 1, 0],
  ",": [0, 1, 0, 0, 0, 0],
  ".": [0, 1, 0, 0, 1, 1],
  "?": [0, 1, 1, 0, 0, 1],
  "!": [0, 1, 1, 0, 1, 0],
  "-": [0, 0, 1, 0, 0, 1],
  " ": [0, 0, 0, 0, 0, 0]
};

function dotsToUnicode(dots) {
  let mask = 0;
  for (let i = 0; i < 6; i++) {
    if (dots[i]) mask |= 1 << i;
  }
  return String.fromCharCode(0x2800 + mask);
}

function getActiveDotNumbers(dots) {
  const nums = [];
  for (let i = 0; i < 6; i++) {
    if (dots[i]) nums.push(i + 1);
  }
  return nums;
}

window.BrailleEngine = {
  /**
   * Translates any English / ISL text string into Unicode Braille, 6-dot cell arrays, and spoken dot guides.
   */
  translate(rawText) {
    const cleaned = (rawText || "")
      .replace(/\/.*/g, "") // e.g., "Hello / Namaste" -> "Hello"
      .trim();
    if (!cleaned) {
      return { unicode: "⠀", cells: [], spokenGuide: "Empty Braille line." };
    }

    const cells = [];
    let unicode = "";
    const spokenParts = [];

    for (const ch of cleaned) {
      const lower = ch.toLowerCase();
      const isDigit = /^[0-9]$/.test(lower);
      const dots = BRAILLE_MAP[lower] || [0, 0, 0, 0, 0, 0];
      const uChar = dotsToUnicode(dots);
      const activeNums = getActiveDotNumbers(dots);

      if (isDigit) {
        // Add Braille Number Indicator (dots 3-4-5-6 = ⠼)
        const numSignDots = [0, 0, 1, 1, 1, 1];
        unicode += dotsToUnicode(numSignDots);
      }

      unicode += uChar;
      cells.push({
        char: ch === " " ? "␣" : ch.toUpperCase(),
        unicode: uChar,
        dots,
        activeNums,
        isSpace: ch === " "
      });

      if (ch === " ") {
        spokenParts.push("Space");
      } else if (activeNums.length) {
        spokenParts.push(`${ch.toUpperCase()} (dots ${activeNums.join("-")})`);
      }
    }

    return {
      sourceText: cleaned,
      unicode,
      cells,
      spokenGuide: `Braille for "${cleaned}": ${spokenParts.slice(0, 18).join(", ")}.`
    };
  },

  /**
   * Renders visual & accessible 6-dot tactile Braille cells HTML for a given text.
   */
  renderBrailleCellsHTML(rawText, { maxCells = 16 } = {}) {
    const result = this.translate(rawText);
    const subset = result.cells.slice(0, maxCells);

    if (!subset.length) {
      return `<span class="placeholder-muted">Braille cells will appear here...</span>`;
    }

    return subset
      .map((cell) => {
        if (cell.isSpace) {
          return `
            <div class="braille-cell braille-space" role="img" aria-label="Braille Space">
              <div class="braille-dots-grid">
                <span class="b-dot"></span><span class="b-dot"></span>
                <span class="b-dot"></span><span class="b-dot"></span>
                <span class="b-dot"></span><span class="b-dot"></span>
              </div>
              <span class="braille-char-label">␣</span>
            </div>
          `;
        }
        // Grid order in 2 columns x 3 rows: (d1, d4), (d2, d5), (d3, d6)
        const d = cell.dots;
        const dotOrder = [
          { on: d[0], num: 1 },
          { on: d[3], num: 4 },
          { on: d[1], num: 2 },
          { on: d[4], num: 5 },
          { on: d[2], num: 3 },
          { on: d[5], num: 6 }
        ];
        return `
          <div class="braille-cell" tabindex="0" role="img" aria-label="Character ${cell.char}, Braille dots ${cell.activeNums.join(" ")}">
            <div class="braille-dots-grid">
              ${dotOrder
                .map(
                  (dot) =>
                    `<span class="b-dot ${dot.on ? "raised" : ""}" title="Dot ${dot.num}"></span>`
                )
                .join("")}
            </div>
            <span class="braille-char-label">${cell.char}</span>
            <span class="braille-dot-nums">${cell.activeNums.join("") || "-"}</span>
          </div>
        `;
      })
      .join("");
  }
};

/**
 * Converts a sequence of ISL Sign Glosses into a natural, grammatically fluent sentence for Speech Generation.
 */
window.naturalizeISLGloss = function (signWordsArray) {
  if (!signWordsArray || !signWordsArray.length) return "";
  const cleanWords = signWordsArray.map((w) =>
    w
      .replace(/\/.*/g, "")
      .replace(/^Letter\s+/i, "")
      .replace(/^Number\s+/i, "")
      .trim()
  );

  // Combine consecutive single letters into a spelled word
  const merged = [];
  let letterBuffer = "";
  cleanWords.forEach((w) => {
    if (w.length === 1 && /^[A-Za-z0-9]$/.test(w)) {
      letterBuffer += w;
    } else {
      if (letterBuffer) {
        merged.push(letterBuffer);
        letterBuffer = "";
      }
      merged.push(w);
    }
  });
  if (letterBuffer) merged.push(letterBuffer);

  // If only 1 sign, use its full spokenPhrase if available
  if (merged.length === 1) {
    const match = window.ISL_SIGNS.find(
      (s) => s.word.toLowerCase().startsWith(merged[0].toLowerCase())
    );
    if (match && match.category !== "alphabet" && match.category !== "numbers") {
      return match.spokenPhrase;
    }
  }

  // Construct natural English sentence from ISL gloss sequence
  const phraseMap = {
    hello: "Hello",
    "thank you": "thank you",
    yes: "yes",
    no: "no",
    please: "please",
    sorry: "excuse me, I am sorry",
    friend: "my friend",
    good: "everything is good",
    bad: "something is wrong",
    love: "I love you",
    care: "I care about you",
    name: "what is your name",
    understand: "I understand",
    mother: "mother",
    father: "father",
    help: "please help me",
    blind: "I am visually impaired",
    deaf: "I am deaf",
    water: "I need drinking water",
    food: "I would like food to eat",
    where: "where is",
    stop: "please wait a moment",
    repeat: "please repeat that again",
    "slow down": "please communicate slowly",
    restroom: "the restroom",
    home: "home",
    money: "how much does it cost",
    time: "what time is it",
    bus: "the bus or train",
    emergency: "Emergency! I need urgent help",
    doctor: "please call a doctor",
    pain: "I am in pain",
    phone: "please make a phone call"
  };

  const parts = merged.map((w) => {
    const key = w.toLowerCase();
    return phraseMap[key] || w;
  });

  const rawJoined = parts.join(", ");
  return rawJoined.charAt(0).toUpperCase() + rawJoined.slice(1) + ".";
};

// ============================================================================
// MEANINGFUL HINDI ISL DICTIONARY & BILINGUAL SENTENCE GENERATOR
// ============================================================================
const HINDI_ISL_DICTIONARY = {
  hello: {
    hindiWord: "नमस्ते",
    hindiPhrase: "नमस्ते! आपसे मिलकर बहुत खुशी हुई।",
    hindiPhonetic: "Namaste! Aapse milkar bahut khushi hui.",
    keywords: ["नमस्ते", "प्रणाम", "स्वागत", "namaste", "pranam", "swagat"]
  },
  thankyou: {
    hindiWord: "धन्यवाद / शुक्रिया",
    hindiPhrase: "आपकी सहायता के लिए बहुत-बहुत धन्यवाद।",
    hindiPhonetic: "Aapki sahayata ke liye bahut-bahut dhanyawad.",
    keywords: ["धन्यवाद", "शुक्रिया", "dhanyawad", "shukriya"]
  },
  yes: {
    hindiWord: "हाँ",
    hindiPhrase: "जी हाँ, मैं पूरी तरह सहमत हूँ।",
    hindiPhonetic: "Jee haan, main poori tarah sahmat hoon.",
    keywords: ["हाँ", "जी", "haan", "han"]
  },
  no: {
    hindiWord: "नहीं",
    hindiPhrase: "जी नहीं, मुझे इसकी आवश्यकता नहीं है।",
    hindiPhonetic: "Jee nahi, mujhe iski aavashyakta nahi hai.",
    keywords: ["नहीं", "मत", "nahi", "na"]
  },
  please: {
    hindiWord: "कृपया",
    hindiPhrase: "कृपया मेरी बात ध्यान से सुनिए।",
    hindiPhonetic: "Kripya meri baat dhyan se suniye.",
    keywords: ["कृपया", "प्लीज", "kripya"]
  },
  sorry: {
    hindiWord: "क्षमा करें / माफ़ी",
    hindiPhrase: "मुझे क्षमा कीजिए, असुविधा के लिए खेद है।",
    hindiPhonetic: "Mujhe kshama keejiye, asuvidha ke liye khed hai.",
    keywords: ["माफ़", "क्षमा", "सॉरी", "maaf", "kshama"]
  },
  friend: {
    hindiWord: "मित्र / दोस्त",
    hindiPhrase: "आप मेरे बहुत अच्छे मित्र हैं।",
    hindiPhonetic: "Aap mere bahut acche mitra hain.",
    keywords: ["दोस्त", "मित्र", "साथी", "dost", "mitra"]
  },
  good: {
    hindiWord: "अच्छा / ठीक है",
    hindiPhrase: "सब कुछ बहुत अच्छा और ठीक है।",
    hindiPhonetic: "Sab kuch bahut accha aur theek hai.",
    keywords: ["अच्छा", "ठीक", "बढ़िया", "accha", "theek", "badhiya"]
  },
  bad: {
    hindiWord: "बुरा / ठीक नहीं",
    hindiPhrase: "मुझे अच्छा महसूस नहीं हो रहा है, कुछ गड़बड़ है।",
    hindiPhonetic: "Mujhe accha mehsoos nahi ho raha hai, kuch gadbad hai.",
    keywords: ["बुरा", "खराब", "bura", "kharab"]
  },
  iloveyou: {
    hindiWord: "प्यार / स्नेह",
    hindiPhrase: "मैं आपसे प्यार और स्नेह करता हूँ।",
    hindiPhonetic: "Main aapse pyar aur sneh karta hoon.",
    keywords: ["प्यार", "स्नेह", "pyar", "prem", "sneh"]
  },
  name: {
    hindiWord: "नाम",
    hindiPhrase: "आपका शुभ नाम क्या है?",
    hindiPhonetic: "Aapka shubh naam kya hai?",
    keywords: ["नाम", "naam"]
  },
  understand: {
    hindiWord: "समझ गया",
    hindiPhrase: "जी हाँ, मैं आपकी बात अच्छी तरह समझ गया हूँ।",
    hindiPhonetic: "Jee haan, main aapki baat acchi tarah samajh gaya hoon.",
    keywords: ["समझ", "samajh"]
  },
  mother: {
    hindiWord: "माँ / माताजी",
    hindiPhrase: "कृपया मेरी माताजी से बात कराएँ।",
    hindiPhonetic: "Kripya meri mataji se baat karayein.",
    keywords: ["माँ", "माता", "मम्मी", "maa", "mata", "mummy"]
  },
  father: {
    hindiWord: "पिताजी / पापा",
    hindiPhrase: "कृपया मेरे पिताजी को सूचित करें।",
    hindiPhonetic: "Kripya mere pitaji ko soochit karein.",
    keywords: ["पिता", "पापा", "बाबूजी", "pita", "papa"]
  },
  help: {
    hindiWord: "मदद / सहायता",
    hindiPhrase: "कृपया मेरी मदद कीजिए, मुझे आपकी सहायता चाहिए।",
    hindiPhonetic: "Kripya meri madad keejiye, mujhe aapki sahayata chahiye.",
    keywords: ["मदद", "सहायता", "बचाओ", "madad", "sahayata", "bachao"]
  },
  blind: {
    hindiWord: "नेत्रहीन / दृष्टिबाधित",
    hindiPhrase: "मैं दृष्टिबाधित हूँ, कृपया मुझसे बोलकर या ब्रेल के माध्यम से बात करें।",
    hindiPhonetic: "Main drishtibadhit hoon, kripya mujhse bolkar ya Braille ke madhyam se baat karein.",
    keywords: ["नेत्रहीन", "दृष्टिबाधित", "अंधा", "netraheen", "drishtibadhit"]
  },
  deaf: {
    hindiWord: "बधिर / सांकेतिक भाषा उपयोगकर्ता",
    hindiPhrase: "मैं सुन नहीं सकता, कृपया भारतीय सांकेतिक भाषा या स्क्रीन का प्रयोग करें।",
    hindiPhonetic: "Main sun nahi sakta, kripya Bharatiya Sign Language ya screen ka prayog karein.",
    keywords: ["बधिर", "सांकेतिक", "badhir", "sanketik"]
  },
  water: {
    hindiWord: "पानी / जल",
    hindiPhrase: "मुझे प्यास लगी है, कृपया मुझे पीने का पानी दीजिए।",
    hindiPhonetic: "Mujhe pyas lagi hai, kripya mujhe peene ka paani deejiye.",
    keywords: ["पानी", "जल", "प्यास", "paani", "pani", "jal", "pyas"]
  },
  food: {
    hindiWord: "खाना / भोजन",
    hindiPhrase: "मुझे भूख लगी है, मुझे भोजन कहाँ मिल सकता है?",
    hindiPhonetic: "Mujhe bhookh lagi hai, mujhe bhojan kahan mil sakta hai?",
    keywords: ["खाना", "भोजन", "भूख", "khana", "bhojan", "bhookh"]
  },
  where: {
    hindiWord: "कहाँ है?",
    hindiPhrase: "कृपया मुझे बताइए कि यह स्थान कहाँ पर है?",
    hindiPhonetic: "Kripya mujhe bataiye ki yah sthan kahan par hai?",
    keywords: ["कहाँ", "किधर", "kahan", "kidhar"]
  },
  wait: {
    hindiWord: "रुकिए / प्रतीक्षा करें",
    hindiPhrase: "कृपया थोड़ा रुकिए और प्रतीक्षा कीजिए।",
    hindiPhonetic: "Kripya thoda rukiye aur pratiksha keejiye.",
    keywords: ["रुकिए", "रुको", "इंतज़ार", "rukiye", "ruko", "intezar"]
  },
  repeat: {
    hindiWord: "दोहराएँ / फिर से कहें",
    hindiPhrase: "कृपया अपनी बात एक बार फिर से दोहराएँ।",
    hindiPhonetic: "Kripya apni baat ek baar phir se dohrayein.",
    keywords: ["दोहराएँ", "फिर", "dobara", "phir"]
  },
  slow: {
    hindiWord: "धीरे बोलें / संकेत करें",
    hindiPhrase: "कृपया धीरे-धीरे बात या संकेत करें ताकि मैं समझ सकूँ।",
    hindiPhonetic: "Kripya dheere-dheere baat ya sanket karein taaki main samajh sakoon.",
    keywords: ["धीरे", "dheere", "dheeme"]
  },
  bathroom: {
    hindiWord: "शौचालय / वॉशरूम",
    hindiPhrase: "कृपया मुझे नज़दीकी शौचालय का रास्ता बताइए।",
    hindiPhonetic: "Kripya mujhe nazdeeki shauchalay ka rasta bataiye.",
    keywords: ["शौचालय", "बाथरूम", "टॉयलेट", "shauchalay"]
  },
  home: {
    hindiWord: "घर / निवास",
    hindiPhrase: "मुझे सुरक्षित रूप से अपने घर पहुँचना है।",
    hindiPhonetic: "Mujhe surakshit roop se apne ghar pahunchna hai.",
    keywords: ["घर", "मकान", "ghar", "makan"]
  },
  money: {
    hindiWord: "पैसे / भुगतान",
    hindiPhrase: "इसका कुल कितना शुल्क या पैसा देना होगा?",
    hindiPhonetic: "Iska kul kitna shulk ya paisa dena hoga?",
    keywords: ["पैसा", "पैसे", "रुपये", "paisa", "paise", "rupaye"]
  },
  time: {
    hindiWord: "समय / कितने बजे",
    hindiPhrase: "अभी क्या समय हुआ है?",
    hindiPhonetic: "Abhi kya samay hua hai?",
    keywords: ["समय", "वक्त", "बजे", "samay", "waqt", "baje"]
  },
  transport: {
    hindiWord: "बस / ट्रेन / यात्रा",
    hindiPhrase: "बस स्टैंड या रेलवे स्टेशन किस तरफ़ है?",
    hindiPhonetic: "Bus stand ya railway station kis taraf hai?",
    keywords: ["बस", "ट्रेन", "गाड़ी", "स्टेशन", "gadi", "yatra"]
  },
  emergency: {
    hindiWord: "आपातकाल / ख़तरा",
    hindiPhrase: "यह एक आपातकालीन स्थिति है! कृपया तुरंत मेरी रक्षा और सहायता करें!",
    hindiPhonetic: "Yah ek aapatkaleen sthiti hai! Kripya turant meri raksha aur sahayata karein!",
    keywords: ["आपातकाल", "ख़तरा", "बचाओ", "aapatkal", "khatra"]
  },
  doctor: {
    hindiWord: "डॉक्टर / अस्पताल",
    hindiPhrase: "मेरी तबीयत ठीक नहीं है, कृपया तुरंत डॉक्टर को बुलाएँ या अस्पताल ले चलें।",
    hindiPhonetic: "Meri tabiyat theek nahi hai, kripya turant doctor ko bulayein ya aspatal le chalein.",
    keywords: ["डॉक्टर", "अस्पताल", "दवाई", "इलाज", "aspatal", "dawai", "ilaj"]
  },
  pain: {
    hindiWord: "दर्द / तकलीफ़",
    hindiPhrase: "मुझे शरीर में तेज़ दर्द और तकलीफ़ हो रही है।",
    hindiPhonetic: "Mujhe shareer mein tez dard aur takleef ho rahi hai.",
    keywords: ["दर्द", "पीड़ा", "तकलीफ़", "dard", "peeda", "takleef"]
  },
  call: {
    hindiWord: "फ़ोन कॉल / संपर्क",
    hindiPhrase: "कृपया मेरे परिवार को फ़ोन करने में मेरी सहायता करें।",
    hindiPhonetic: "Kripya mere parivar ko phone karne mein meri sahayata karein.",
    keywords: ["फ़ोन", "कॉल", "संपर्क", "sampark"]
  }
};

// Enrich every ISL sign with meaningful Hindi word, phrase, phonetic text, and Hindi keywords
window.ISL_SIGNS.forEach((sign) => {
  const hiEntry = HINDI_ISL_DICTIONARY[sign.id];
  if (hiEntry) {
    sign.hindiWord = hiEntry.hindiWord;
    sign.hindiPhrase = hiEntry.hindiPhrase;
    sign.hindiPhonetic = hiEntry.hindiPhonetic;
    hiEntry.keywords.forEach((kw) => {
      if (!sign.keywords.includes(kw)) sign.keywords.push(kw);
    });
  } else if (sign.category === "alphabet") {
    sign.hindiWord = `अक्षर ${sign.letterChar}`;
    sign.hindiPhrase = `अंग्रेजी वर्णमाला का अक्षर ${sign.letterChar}।`;
    sign.hindiPhonetic = `Angrezi varnamala ka akshar ${sign.letterChar}.`;
  } else if (sign.category === "numbers") {
    sign.hindiWord = `संख्या ${sign.letterChar}`;
    sign.hindiPhrase = `संख्या ${sign.letterChar}।`;
    sign.hindiPhonetic = `Sankhya ${sign.letterChar}.`;
  } else {
    sign.hindiWord = sign.word;
    sign.hindiPhrase = `${sign.spokenPhrase}`;
    sign.hindiPhonetic = `${sign.spokenPhrase}`;
  }
});

/**
 * Converts a sequence of ISL Sign Glosses into a meaningful, natural Hindi sentence
 * (returns { hi, hiPhonetic }).
 */
window.naturalizeISLGlossHindi = function (signWordsArray) {
  if (!signWordsArray || !signWordsArray.length) {
    return { hi: "", hiPhonetic: "" };
  }

  const matchedSigns = signWordsArray
    .map((w) => {
      const clean = w.replace(/\/.*/g, "").trim().toLowerCase();
      return window.ISL_SIGNS.find(
        (s) =>
          s.word.toLowerCase().startsWith(clean) ||
          s.id.toLowerCase() === clean ||
          (s.hindiWord && s.hindiWord.includes(clean))
      );
    })
    .filter(Boolean);

  if (matchedSigns.length === 1) {
    return {
      hi: matchedSigns[0].hindiPhrase || matchedSigns[0].hindiWord,
      hiPhonetic: matchedSigns[0].hindiPhonetic || matchedSigns[0].spokenPhrase
    };
  }

  if (matchedSigns.length > 1) {
    const hiClauses = matchedSigns.map((s) => s.hindiWord || s.word);
    const lastPhrase = matchedSigns[matchedSigns.length - 1].hindiPhrase || "";
    const hiText = `${hiClauses.join(" + ")} — ${lastPhrase}`;
    const phonParts = matchedSigns.map((s) => s.hindiPhonetic || s.spokenPhrase);
    return {
      hi: hiText,
      hiPhonetic: phonParts.join(" ")
    };
  }

  return {
    hi: `${signWordsArray.join(" ")}`,
    hiPhonetic: `${signWordsArray.join(" ")}`
  };
};

/**
 * Helper to draw an articulated 5-finger SVG hand given finger extension states [thumb, index, middle, ring, pinky]
 */
function renderArticulatedHandSVG(fingerStates, { x = 100, y = 105, scale = 1, mirror = false, highlightColor = "#fde047" } = {}) {
  const [th, idx, mid, rng, pnk] = fingerStates;
  const flip = mirror ? -1 : 1;

  const fConfigs = [
    { val: idx, dx: -16, baseLen: 36 },
    { val: mid, dx: -5, baseLen: 41 },
    { val: rng, dx: 6, baseLen: 37 },
    { val: pnk, dx: 17, baseLen: 29 }
  ];

  const fingersSvg = fConfigs
    .map((f) => {
      const extLen = f.val >= 0.75 ? f.baseLen : f.val >= 0.35 ? f.baseLen * 0.55 : 10;
      const strokeCol = f.val >= 0.75 ? highlightColor : f.val >= 0.35 ? "#38bdf8" : "#64748b";
      const fillCol = f.val >= 0.75 ? "#1e293b" : "#0f172a";
      const fx = f.dx;
      const fy = -18 - extLen;
      return `
        <rect x="${fx - 4.5}" y="${fy}" width="9" height="${extLen + 6}" rx="4.5" fill="${fillCol}" stroke="${strokeCol}" stroke-width="2.5"/>
        ${f.val >= 0.75 ? `<circle cx="${fx}" cy="${fy + 4}" r="2.2" fill="${highlightColor}"/>` : ""}
      `;
    })
    .join("");

  const thumbAngle = th >= 0.75 ? -38 * flip : th >= 0.35 ? -18 * flip : 12 * flip;
  const thumbLen = th >= 0.75 ? 28 : 18;
  const thumbStroke = th >= 0.75 ? highlightColor : "#64748b";
  const thumbX = -24 * flip;

  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <rect x="-14" y="16" width="28" height="16" rx="4" fill="#0f172a" stroke="#475569" stroke-width="2"/>
      <rect x="-23" y="-20" width="46" height="40" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
      ${fingersSvg}
      <g transform="translate(${thumbX}, 0) rotate(${thumbAngle})">
        <rect x="-5" y="${-thumbLen}" width="10" height="${thumbLen + 6}" rx="5" fill="#1e293b" stroke="${thumbStroke}" stroke-width="2.5"/>
      </g>
    </g>
  `;
}

/**
 * Map a sign's poseType / fingerState to articulated finger arrays, avatar hand coordinates, facial expression & motion cues
 */
function getPoseVisualSpec(signObj) {
  if (signObj.fingerState && Array.isArray(signObj.fingerState)) {
    return {
      hands: [signObj.fingerState],
      motion: "Hold Steady",
      avatarPos: [{ x: 142, y: 112 }],
      expression: "friendly",
      avatarAction: `Avatar raises dominant hand at chest level showing ${signObj.word}.`
    };
  }
  const p = signObj.poseType || "";
  switch (p) {
    case "namaste":
      return {
        hands: [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1]],
        motion: "Join Palms (Namaste)",
        avatarPos: [{ x: 86, y: 122 }, { x: 114, y: 122 }],
        expression: "smile",
        avatarAction: "Avatar brings both open palms together at heart level in a respectful Indian Namaste with a warm smile."
      };
    case "chin_forward":
      return {
        hands: [[1, 1, 1, 1, 1]],
        motion: "Chin ➔ Forward",
        avatarPos: [{ x: 118, y: 92 }],
        expression: "smile",
        avatarAction: "Avatar touches flat right fingertips to the chin and extends the hand forward toward you in gratitude."
      };
    case "thumb_up":
      return {
        hands: [[1, 0, 0, 0, 0]],
        motion: "Thumb Up + Nod",
        avatarPos: [{ x: 142, y: 112 }],
        expression: "smile",
        avatarAction: "Avatar nods head affirmatively while holding a crisp thumbs-up gesture at chest height."
      };
    case "thumb_down":
      return {
        hands: [[1, 0, 0, 0, 0]],
        motion: "Thumb Down",
        avatarPos: [{ x: 142, y: 126 }],
        expression: "serious",
        avatarAction: "Avatar points thumb downward with a concerned expression."
      };
    case "ok_sign":
      return {
        hands: [[0.5, 0.5, 1, 1, 1]],
        motion: "Index+Thumb Circle",
        avatarPos: [{ x: 142, y: 108 }],
        expression: "smile",
        avatarAction: "Avatar forms a precise circle with thumb and index finger while extending middle, ring, and pinky fingers."
      };
    case "wave_no":
      return {
        hands: [[0, 1, 0, 0, 0]],
        motion: "Wave Left ⇄ Right",
        avatarPos: [{ x: 142, y: 105 }],
        expression: "serious",
        avatarAction: "Avatar extends the right index finger upright and waves it side-to-side while shaking the head No."
      };
    case "chest_circle":
    case "fist_chest":
      return {
        hands: [p === "fist_chest" ? [0, 0, 0, 0, 0] : [1, 1, 1, 1, 1]],
        motion: "Circular on Chest ↻",
        avatarPos: [{ x: 104, y: 124 }],
        expression: "friendly",
        avatarAction: "Avatar places the dominant hand over the center of the chest and moves it in a gentle clockwise circle."
      };
    case "clasp_hands":
      return {
        hands: [[0.5, 1, 0, 0, 0], [0.5, 1, 0, 0, 0]],
        motion: "Clasp / Hook Hands",
        avatarPos: [{ x: 84, y: 125 }, { x: 116, y: 125 }],
        expression: "smile",
        avatarAction: "Avatar clasps both hands warmly together in front of the torso to sign Friend."
      };
    case "ily_hand":
      return {
        hands: [[1, 1, 0, 0, 1]],
        motion: "Thumb + Index + Pinky",
        avatarPos: [{ x: 144, y: 106 }],
        expression: "smile",
        avatarAction: "Avatar extends the thumb, index finger, and pinky finger outward while curling the middle and ring fingers."
      };
    case "help_lift":
      return {
        hands: [[1, 1, 1, 1, 1], [1, 0, 0, 0, 0]],
        motion: "Lift Both Upward ↑",
        avatarPos: [{ x: 84, y: 126 }, { x: 116, y: 116 }],
        expression: "urgent",
        avatarAction: "Avatar supports the right thumb-up fist on top of the flat left palm and lifts both hands upward."
      };
    case "eyes_point":
      return {
        hands: [[0, 1, 1, 0, 0]],
        motion: "V-Fingers at Eyes",
        avatarPos: [{ x: 124, y: 68 }],
        expression: "friendly",
        avatarAction: "Avatar raises index and middle fingers in a V-shape directly beside the eyes to indicate Vision / Blindness."
      };
    case "ear_to_mouth":
    case "temple_point":
      return {
        hands: [[0, 1, 0, 0, 0]],
        motion: p === "ear_to_mouth" ? "Ear ➔ Mouth" : "Flick at Temple ↑",
        avatarPos: [{ x: 132, y: 66 }],
        expression: "friendly",
        avatarAction:
          p === "ear_to_mouth"
            ? "Avatar touches the index fingertip near the ear and arcs it toward the mouth to sign Deaf."
            : "Avatar raises the index finger beside the forehead temple to sign Understand."
      };
    case "drink_cup":
      return {
        hands: [[0.5, 0.5, 0.5, 0.5, 0.5]],
        motion: "C-Cup to Mouth",
        avatarPos: [{ x: 116, y: 86 }],
        expression: "friendly",
        avatarAction: "Avatar curves the right hand into a C-cup tumbler shape and tilts it toward the mouth as if drinking water."
      };
    case "eat_bunch":
    case "money_rub":
      return {
        hands: [[0.5, 0.5, 0.5, 0, 0]],
        motion: p === "eat_bunch" ? "Bunched Tips to Mouth" : "Rub Thumb & Tips",
        avatarPos: [{ x: p === "eat_bunch" ? 114 : 140, y: p === "eat_bunch" ? 86 : 114 }],
        expression: "friendly",
        avatarAction:
          p === "eat_bunch"
            ? "Avatar brings bunched fingertips to the mouth to sign Food / Eat."
            : "Avatar rubs the thumb across the index and middle fingertips at chest level to sign Money."
      };
    case "palms_up_query":
    case "alarm_wave":
    case "roof_hands":
      return {
        hands: [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1]],
        motion: p === "roof_hands" ? "Fingertips Touch /\\" : p === "alarm_wave" ? "Wave Overhead 🚨" : "Palms Up Query",
        avatarPos:
          p === "alarm_wave"
            ? [{ x: 52, y: 68 }, { x: 148, y: 68 }]
            : p === "roof_hands"
            ? [{ x: 82, y: 102 }, { x: 118, y: 102 }]
            : [{ x: 60, y: 122 }, { x: 140, y: 122 }],
        expression: p === "alarm_wave" ? "urgent" : p === "palms_up_query" ? "question" : "friendly",
        avatarAction:
          p === "alarm_wave"
            ? "Avatar raises both open hands high above the shoulders, waving urgently for Emergency."
            : p === "roof_hands"
            ? "Avatar angles both flat hands together so the fingertips meet in a pitched house roof peak."
            : "Avatar holds both open palms out with raised questioning eyebrows to ask Where."
      };
    case "open_palm_stop":
    case "chin_thumb":
    case "forehead_thumb":
      return {
        hands: [[1, 1, 1, 1, 1]],
        motion: "5 Digits Extended",
        avatarPos: [
          {
            x: p === "open_palm_stop" ? 142 : 122,
            y: p === "forehead_thumb" ? 56 : p === "chin_thumb" ? 88 : 110
          }
        ],
        expression: "friendly",
        avatarAction:
          p === "forehead_thumb"
            ? "Avatar taps the open thumb tip against the forehead to sign Father."
            : p === "chin_thumb"
            ? "Avatar taps the open thumb tip against the chin to sign Mother."
            : "Avatar extends a flat open palm forward to sign Stop / Wait."
      };
    case "pinky_up":
    case "num_6":
      return {
        hands: [[0, 0, 0, 0, 1]],
        motion: "Pinky Extended Up",
        avatarPos: [{ x: 142, y: 110 }],
        expression: "friendly",
        avatarAction: "Avatar raises the pinky finger straight upward while curling the other fingers."
      };
    case "phone_hand":
      return {
        hands: [[1, 0, 0, 0, 1]],
        motion: "Thumb + Pinky (Phone)",
        avatarPos: [{ x: 132, y: 78 }],
        expression: "friendly",
        avatarAction: "Avatar holds the thumb near the ear and pinky near the mouth like a telephone receiver."
      };
    case "wrist_pulse":
    case "two_finger_cross":
      return {
        hands: [[0, 1, 1, 0, 0], [0, 1, 1, 0, 0]],
        motion: "2-Finger Contact",
        avatarPos: [{ x: 82, y: 122 }, { x: 118, y: 118 }],
        expression: "friendly",
        avatarAction:
          p === "wrist_pulse"
            ? "Avatar rests two fingertips of the right hand on the left wrist as if checking a patient's pulse for Doctor."
            : "Avatar taps the extended index and middle fingers of both hands crosswise to sign Name."
      };
    case "index_pain":
    case "wrist_watch":
      return {
        hands: [[0, 1, 0, 0, 0], [0, 1, 0, 0, 0]],
        motion: "Index Point / Tap",
        avatarPos: [{ x: 80, y: 120 }, { x: 120, y: 120 }],
        expression: p === "index_pain" ? "urgent" : "question",
        avatarAction:
          p === "index_pain"
            ? "Avatar points both index fingers inward toward each other with a pained expression."
            : "Avatar taps the back of the left wrist with the right index finger like pointing to a watch for Time."
      };
    default: {
      const isTwo = (signObj.hands || "").includes("2");
      return {
        hands: isTwo ? [[1, 1, 0, 0, 0], [1, 1, 1, 1, 1]] : [[1, 1, 1, 1, 1]],
        motion: signObj.hands || "ISL Posture",
        avatarPos: isTwo ? [{ x: 74, y: 118 }, { x: 126, y: 118 }] : [{ x: 138, y: 112 }],
        expression: "friendly",
        avatarAction: `Avatar performs ${signObj.word} (${signObj.hands}).`
      };
    }
  }
}

window.getAvatarDescription = function (signObj) {
  if (!signObj) return "Avatar is standing ready in neutral posture.";
  const spec = getPoseVisualSpec(signObj);
  return `On-Screen ISL Avatar is signing "${signObj.word}" (${signObj.hands}): ${spec.avatarAction} Physical guide: ${signObj.tactileGuide}`;
};

/**
 * Generates an expressive On-Screen ISL Signing Avatar SVG (Upper Body + Facial Expression + Articulated Hands)
 */
window.renderISLAvatarSVG = function (signObj) {
  const label = signObj.letterChar || signObj.word.split(" ")[0].toUpperCase();
  const spec = getPoseVisualSpec(signObj);
  const isTwoHanded = spec.hands.length === 2;

  // Facial mouth & eyebrow geometry based on expression
  let mouthPath = "M 92 72 Q 100 79 108 72"; // warm smile
  let browLeft = "M 85 52 Q 90 49 95 52";
  let browRight = "M 105 52 Q 110 49 115 52";
  if (spec.expression === "question") {
    mouthPath = "M 95 73 Q 100 70 105 73";
    browLeft = "M 85 49 Q 90 44 95 49";
    browRight = "M 105 49 Q 110 44 115 49";
  } else if (spec.expression === "urgent") {
    mouthPath = "M 93 75 Q 100 69 107 75";
    browLeft = "M 85 48 L 95 52";
    browRight = "M 115 48 L 105 52";
  }

  const pos1 = spec.avatarPos[0] || { x: 138, y: 112 };
  const pos2 = spec.avatarPos[1] || { x: 62, y: 112 };

  return `
    <svg viewBox="0 0 200 200" width="100%" height="100%" role="img" aria-label="${window.getAvatarDescription(signObj)}">
      <defs>
        <radialGradient id="avatarHalo" cx="50%" cy="45%" r="52%">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.26"/>
          <stop offset="100%" stop-color="#090d16" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="200" height="200" rx="18" fill="#090d16"/>
      <circle cx="100" cy="92" r="78" fill="url(#avatarHalo)" stroke="#1e293b" stroke-width="1.5"/>

      <!-- Top Motion Banner -->
      <rect x="20" y="6" width="160" height="19" rx="9.5" fill="#121929" stroke="#38bdf8" stroke-width="1"/>
      <text x="100" y="19" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="9.5" fill="#7dd3fc">
        AVATAR: ${spec.motion}
      </text>

      <!-- Avatar Torso & Shoulders -->
      <path d="M 48 152 C 48 112, 72 98, 100 98 C 128 98, 152 112, 152 152 Z" fill="#1e293b" stroke="#475569" stroke-width="2.5"/>
      <!-- Neck & Collar -->
      <rect x="91" y="84" width="18" height="16" rx="6" fill="#cbd5e1"/>
      <path d="M 84 98 L 100 114 L 116 98" fill="none" stroke="#38bdf8" stroke-width="2"/>

      <!-- Avatar Head -->
      <circle cx="100" cy="62" r="24" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>
      <!-- Hair / Headband Accent -->
      <path d="M 77 56 C 80 36, 120 36, 123 56" fill="none" stroke="#fde047" stroke-width="3" stroke-linecap="round"/>
      <!-- Eyebrows & Eyes -->
      <path d="${browLeft}" fill="none" stroke="#fde047" stroke-width="2" stroke-linecap="round"/>
      <path d="${browRight}" fill="none" stroke="#fde047" stroke-width="2" stroke-linecap="round"/>
      <circle cx="90" cy="58" r="2.8" fill="#f8fafc"/>
      <circle cx="110" cy="58" r="2.8" fill="#f8fafc"/>
      <!-- Mouth -->
      <path d="${mouthPath}" fill="none" stroke="#fde047" stroke-width="2.2" stroke-linecap="round"/>

      <!-- Arm Guides from Shoulders to Active Hand Positions -->
      ${
        isTwoHanded
          ? `
            <path d="M 62 118 Q 66 134 ${pos1.x} ${pos1.y}" fill="none" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" stroke-dasharray="3 2"/>
            <path d="M 138 118 Q 134 134 ${pos2.x} ${pos2.y}" fill="none" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" stroke-dasharray="3 2"/>
            ${renderArticulatedHandSVG(spec.hands[0], { x: pos1.x, y: pos1.y, scale: 0.56, mirror: true })}
            ${renderArticulatedHandSVG(spec.hands[1], { x: pos2.x, y: pos2.y, scale: 0.56, mirror: false })}
          `
          : `
            <path d="M 138 118 Q 146 128 ${pos1.x} ${pos1.y}" fill="none" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" stroke-dasharray="3 2"/>
            ${renderArticulatedHandSVG(spec.hands[0], { x: pos1.x, y: pos1.y, scale: 0.62, mirror: false })}
          `
      }

      <!-- Bottom High-Contrast ISL Label -->
      <rect x="12" y="156" width="176" height="32" rx="8" fill="#38bdf8"/>
      <text x="100" y="177" text-anchor="middle" font-family="sans-serif" font-weight="900" font-size="14" fill="#000000">
        ${signObj.emoji || "🤟"} ISL: ${label}
      </text>
    </svg>
  `;
};

/**
 * Generates a high-contrast, anatomically articulated Deaf-friendly SVG illustration for any ISL sign or letter.
 */
window.renderISLSignSVG = function (signObj, { mode = "hand" } = {}) {
  if (mode === "avatar") {
    return window.renderISLAvatarSVG(signObj);
  }
  const label = signObj.letterChar || signObj.word.split(" ")[0].toUpperCase();
  const emoji = signObj.emoji || "🤟";
  const spec = getPoseVisualSpec(signObj);
  const isTwoHanded = spec.hands.length === 2;

  return `
    <svg viewBox="0 0 200 200" width="100%" height="100%" role="img" aria-label="Articulated ISL Hand Diagram for ${signObj.word}">
      <defs>
        <radialGradient id="glowGrad" cx="50%" cy="46%" r="50%">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.28"/>
          <stop offset="100%" stop-color="#090d16" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="200" height="200" rx="18" fill="#090d16"/>
      <circle cx="100" cy="88" r="74" fill="url(#glowGrad)" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 4"/>

      <!-- Top Motion Cue Pill -->
      <rect x="24" y="8" width="152" height="20" rx="10" fill="#121929" stroke="#38bdf8" stroke-width="1"/>
      <text x="100" y="22" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="10" fill="#7dd3fc">
        ${spec.motion}
      </text>

      <!-- Articulated Hand(s) -->
      ${
        isTwoHanded
          ? `
            ${renderArticulatedHandSVG(spec.hands[0], { x: 64, y: 106, scale: 0.78, mirror: true })}
            ${renderArticulatedHandSVG(spec.hands[1], { x: 136, y: 106, scale: 0.78, mirror: false })}
            <path d="M 82 62 Q 100 48 118 62" fill="none" stroke="#fde047" stroke-width="2.5" stroke-dasharray="3 3"/>
          `
          : `
            ${renderArticulatedHandSVG(spec.hands[0], { x: 100, y: 106, scale: 0.92, mirror: false })}
          `
      }

      <!-- Corner Gesture Badge -->
      <circle cx="168" cy="126" r="18" fill="#121929" stroke="#fde047" stroke-width="2"/>
      <text x="168" y="133" text-anchor="middle" font-size="20">${emoji}</text>

      <!-- Bottom High-Contrast Banner -->
      <rect x="12" y="154" width="176" height="34" rx="8" fill="#38bdf8"/>
      <text x="100" y="176" text-anchor="middle" font-family="sans-serif" font-weight="900" font-size="15" fill="#000000">
        ISL: ${label}
      </text>
    </svg>
  `;
};
