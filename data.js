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

// ============================================================================
// MULTI-LANGUAGE REGIONAL SIGN OUTPUT ENGINE
// (Hindi, Maithili, Bhojpuri, Marathi, Bengali, Tamil, Telugu, Gujarati, Punjabi, Kannada, Urdu & English)
// ============================================================================
window.SIGN_LANGUAGES = [
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳", voiceLang: "hi-IN" },
  { code: "mai", name: "Maithili", nativeName: "मैथिली", flag: "🇮🇳", voiceLang: "mai-IN", fallbackVoice: "hi-IN" },
  { code: "bho", name: "Bhojpuri", nativeName: "भोजपुरी", flag: "🇮🇳", voiceLang: "bho-IN", fallbackVoice: "hi-IN" },
  { code: "mr", name: "Marathi", nativeName: "मराठी", flag: "🇮🇳", voiceLang: "mr-IN", fallbackVoice: "hi-IN" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", flag: "🇮🇳", voiceLang: "bn-IN" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்", flag: "🇮🇳", voiceLang: "ta-IN" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు", flag: "🇮🇳", voiceLang: "te-IN" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી", flag: "🇮🇳", voiceLang: "gu-IN" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", flag: "🇮🇳", voiceLang: "pa-IN" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ", flag: "🇮🇳", voiceLang: "kn-IN" },
  { code: "ur", name: "Urdu", nativeName: "اردو", flag: "🇮🇳", voiceLang: "ur-IN", fallbackVoice: "hi-IN" },
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧", voiceLang: "en-IN" }
];

window.SIGN_TRANSLATIONS = {
  hello: {
    hi: { word: "नमस्ते / हेलो", phrase: "नमस्ते! आपसे मिलकर बहुत खुशी हुई।", phonetic: "Namaste! Aapse milkar bahut khushi hui." },
    mai: { word: "प्रणाम / नमस्कार", phrase: "प्रणाम! अहाँ सँ मिलिकय बहुत खुशी भेल।", phonetic: "Pranaam! Ahaan san milikai bahut khushi bhel." },
    bho: { word: "प्रणाम / राउर स्वागत", phrase: "प्रणाम! रउआ से मिलके बहुत खुशी भइल।", phonetic: "Pranaam! Raua se milke bahut khushi bhail." },
    mr: { word: "नमस्कार", phrase: "नमस्कार! तुम्हाला भेटून खूप आनंद झाला.", phonetic: "Namaskar! Tumhala bhetun khup anand jhala." },
    bn: { word: "নমস্কার / হ্যালো", phrase: "নমস্কার! আপনার সাথে দেখা করে খুব ভালো লাগলো।", phonetic: "Nomoshkar! Apnar sathe dekha kore khub bhalo laglo." },
    ta: { word: "வணக்கம்", phrase: "வணக்கம்! உங்களை சந்தித்ததில் மிக்க மகிழ்ச்சி.", phonetic: "Vanakkam! Ungalai santhithathil mikka magizhchi." },
    te: { word: "నమస్కారం", phrase: "నమస్కారం! మిమ్మల్ని కలవడం చాలా సంతోషంగా ఉంది.", phonetic: "Namaskaram! Mimmalni kalavadam chala santhoshanga undi." },
    gu: { word: "નમસ્તે", phrase: "નમસ્તે! તમને મળીને ખૂબ આનંદ થયો.", phonetic: "Namaste! Tamne maline khub anand thayo." },
    pa: { word: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", phrase: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਤੁਹਾਨੂੰ ਮਿਲ ਕੇ ਬਹੁਤ ਖੁਸ਼ੀ ਹੋਈ।", phonetic: "Sat Sri Akaal! Tuhanu mil ke bahut khushi hoyi." },
    kn: { word: "ನಮಸ್ಕಾರ", phrase: "ನಮಸ್ಕಾರ! ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿದ್ದು ತುಂಬಾ ಸಂತೋಷ.", phonetic: "Namaskara! Nimmannu bhetiyagiddu tumba santhosha." },
    ur: { word: "آداب / سلام", phrase: "آداب! آپ سے مل کر بہت خوشی ہوئی۔", phonetic: "Aadaab! Aap se mil kar bahut khushi hui." }
  },
  thankyou: {
    hi: { word: "धन्यवाद / शुक्रिया", phrase: "आपका बहुत-बहुत धन्यवाद।", phonetic: "Aapka bahut-bahut dhanyavaad." },
    mai: { word: "धन्यवाद", phrase: "अहाँक बहुत-बहुत धन्यवाद।", phonetic: "Ahaank bahut-bahut dhanyavaad." },
    bho: { word: "धन्यवाद", phrase: "रउआ के बहुत-बहुत धन्यवाद।", phonetic: "Raua ke bahut-bahut dhanyavaad." },
    mr: { word: "धन्यवाद / आभार", phrase: "तुमचे मनापासून खूप खूप आभार.", phonetic: "Tumche manapasun khup khup aabhar." },
    bn: { word: "ধন্যবাদ", phrase: "আপনাকে অনেক অনেক ধন্যবাদ।", phonetic: "Apnake onek onek dhonyobad." },
    ta: { word: "நன்றி", phrase: "உங்களுக்கு மிக்க நன்றி.", phonetic: "Ungalukku mikka nandri." },
    te: { word: "ధన్యవాదాలు", phrase: "మీకు చాలా ధన్యవాదాలు.", phonetic: "Meeku chala dhanyavadalu." },
    gu: { word: "આભાર / ધન્યવાદ", phrase: "તમારો ખૂબ ખૂબ આભાર.", phonetic: "Tamaro khub khub aabhar." },
    pa: { word: "ਧੰਨਵਾਦ / ਸ਼ੁਕਰੀਆ", phrase: "ਤੁਹਾਡਾ ਬਹੁਤ-ਬਹੁਤ ਧੰਨਵਾਦ।", phonetic: "Tuhada bahut-bahut dhanvaad." },
    kn: { word: "ಧನ್ಯವಾದಗಳು", phrase: "ನಿಮಗೆ ತುಂಬಾ ಧನ್ಯವಾದಗಳು.", phonetic: "Nimage tumba dhanyavadagalu." },
    ur: { word: "شکریہ", phrase: "آپ کا بہت بہت شکریہ۔", phonetic: "Aap ka bahut bahut shukriya." }
  },
  yes: {
    hi: { word: "हाँ / जी हाँ", phrase: "हाँ, मैं सहमत हूँ।", phonetic: "Haan, main sahmat hoon." },
    mai: { word: "हँ", phrase: "हँ, हम सहमत छी।", phonetic: "Han, ham sahmat chhi." },
    bho: { word: "हँ / ठीक बा", phrase: "हँ, हम सहमत बानी।", phonetic: "Han, ham sahmat baani." },
    mr: { word: "हो / नक्कीच", phrase: "हो, मी सहमत आहे.", phonetic: "Ho, mi sahmat aahe." },
    bn: { word: "হ্যাঁ", phrase: "হ্যাঁ, আমি একমত।", phonetic: "Hyan, ami ekmot." },
    ta: { word: "ஆம்", phrase: "ஆம், நான் ஒப்புக்கொள்கிறேன்.", phonetic: "Aam, naan oppukkolgiren." },
    te: { word: "అవును", phrase: "అవును, నేను అంగీకరిస్తున్నాను.", phonetic: "Avunu, nenu angeekaristhunnanu." },
    gu: { word: "હા", phrase: "હા, હું સંમત છું.", phonetic: "Haa, hu sanmat chhu." },
    pa: { word: "ਹਾਂ ਜੀ", phrase: "ਹਾਂ ਜੀ, ਮੈਂ ਸਹਿਮਤ ਹਾਂ।", phonetic: "Haan ji, main sahmat haan." },
    kn: { word: "ಹೌದು", phrase: "ಹೌದು, ನಾನು ಒಪ್ಪುತ್ತೇನೆ.", phonetic: "Haudu, naanu opputtene." },
    ur: { word: "جی ہاں", phrase: "جی ہاں، میں متفق ہوں۔", phonetic: "Jee haan, main muttafiq hoon." }
  },
  no: {
    hi: { word: "नहीं", phrase: "नहीं, मैं सहमत नहीं हूँ।", phonetic: "Nahi, main sahmat nahi hoon." },
    mai: { word: "नहि", phrase: "नहि, हम सहमत नहि छी।", phonetic: "Nahi, ham sahmat nahi chhi." },
    bho: { word: "ना / नइखे", phrase: "ना, ई ठीक नइखे।", phonetic: "Na, ee theek naikhe." },
    mr: { word: "नाही", phrase: "नाही, मला हे मान्य नाही.", phonetic: "Nahi, mala he manya nahi." },
    bn: { word: "না", phrase: "না, আমি একমত নই।", phonetic: "Na, ami ekmot noi." },
    ta: { word: "இல்லை", phrase: "இல்லை, நான் ஒப்புக்கொள்ளவில்லை.", phonetic: "Illai, naan oppukkollavillai." },
    te: { word: "కాదు / వద్దు", phrase: "కాదు, నేను అంగీకరించను.", phonetic: "Kaadu, nenu angeekarinchanu." },
    gu: { word: "ના", phrase: "ના, હું સંમત નથી.", phonetic: "Naa, hu sanmat nathi." },
    pa: { word: "ਨਹੀਂ", phrase: "ਨਹੀਂ, ਮੈਂ ਸਹਿਮਤ ਨਹੀਂ ਹਾਂ।", phonetic: "Nahi, main sahmat nahi haan." },
    kn: { word: "ಇಲ್ಲ", phrase: "ಇಲ್ಲ, ನಾನು ಒಪ್ಪುವುದಿಲ್ಲ.", phonetic: "Illa, naanu oppuvudilla." },
    ur: { word: "نہیں", phrase: "نہیں، میں متفق نہیں ہوں۔", phonetic: "Nahi, main muttafiq nahi hoon." }
  },
  please: {
    hi: { word: "कृपया", phrase: "कृपया मेरी बात सुनिए।", phonetic: "Kripaya meri baat suniye." },
    mai: { word: "कृपया", phrase: "कृपया हमर बात सुनू।", phonetic: "Kripaya hamar baat sunu." },
    bho: { word: "कृपया / निहोरा", phrase: "कृपया हमार बात सुनीं।", phonetic: "Kripaya hamaar baat sunin." },
    mr: { word: "कृपया", phrase: "कृपया मला सहकार्य करा.", phonetic: "Kripaya mala sahakarya kara." },
    bn: { word: "দয়া করে", phrase: "দয়া করে আমার কথা শুনুন।", phonetic: "Doya kore amar kotha shunun." },
    ta: { word: "தயவுசெய்து", phrase: "தயவுசெய்து எனக்கு உதவுங்கள்.", phonetic: "Thayavuseithu enakku uthavungal." },
    te: { word: "దయచేసి", phrase: "దయచేసి నా మాట వినండి.", phonetic: "Dayachesi naa maata vinandi." },
    gu: { word: "કૃપા કરીને", phrase: "કૃપા કરીને મારી વાત સાંભળો.", phonetic: "Krupa karine mari vaat sambhalo." },
    pa: { word: "ਕਿਰਪਾ ਕਰਕੇ", phrase: "ਕਿਰਪਾ ਕਰਕੇ ਮੇਰੀ ਗੱਲ ਸੁਣੋ।", phonetic: "Kirpa karke meri gal suno." },
    kn: { word: "ದಯವಿಟ್ಟು", phrase: "ದಯವಿಟ್ಟು ನನ್ನ ಮಾತು ಕೇಳಿ.", phonetic: "Dayavittu nanna maathu keli." },
    ur: { word: "براہ کرم", phrase: "براہ کرم میری بات سنیے۔", phonetic: "Bara-e-karam meri baat suniye." }
  },
  sorry: {
    hi: { word: "क्षमा करें / माफ़ कीजिए", phrase: "मुझे माफ़ कीजिए, क्षमा करें।", phonetic: "Mujhe maaf kijiye, kshama karein." },
    mai: { word: "क्षमा करू / माफ करू", phrase: "हमरा क्षमा करू।", phonetic: "Hamra kshama karu." },
    bho: { word: "माफ करीं", phrase: "हमरा के माफ करीं।", phonetic: "Hamra ke maaf karin." },
    mr: { word: "क्षमस्व / माफ करा", phrase: "मला माफ करा.", phonetic: "Mala maaf kara." },
    bn: { word: "দুঃখিত / ক্ষমা করবেন", phrase: "আমি দুঃখিত, আমায় ক্ষমা করবেন।", phonetic: "Ami dukkhito, amay khoma korben." },
    ta: { word: "மன்னிக்கவும்", phrase: "என்னை மன்னிக்கவும்.", phonetic: "Ennai mannikkavum." },
    te: { word: "క్షమించండి", phrase: "నన్ను క్షమించండి.", phonetic: "Nannu kshaminchandi." },
    gu: { word: "માફ કરશો", phrase: "મને માફ કરશો.", phonetic: "Mane maaf karsho." },
    pa: { word: "ਮਾਫ਼ ਕਰਨਾ", phrase: "ਮੈਨੂੰ ਮਾਫ਼ ਕਰਨਾ ਜੀ।", phonetic: "Mainu maaf karna ji." },
    kn: { word: "ಕ್ಷಮಿಸಿ", phrase: "ದಯವಿಟ್ಟು ನನ್ನನ್ನು ಕ್ಷಮಿಸಿ.", phonetic: "Dayavittu nannannu kshamisi." },
    ur: { word: "معاف کیجیے", phrase: "مجھے معاف کیجیے۔", phonetic: "Mujhe maaf kijiye." }
  },
  friend: {
    hi: { word: "दोस्त / मित्र", phrase: "आप मेरे अच्छे दोस्त हैं।", phonetic: "Aap mere achhe dost hain." },
    mai: { word: "मित्र / संगी", phrase: "अहाँ हमर नीक मित्र छी।", phonetic: "Ahaan hamar neek mitra chhi." },
    bho: { word: "दोस्त / संघाती", phrase: "रउआ हमार बढ़िया दोस्त बानी।", phonetic: "Raua hamaar badhiya dost baani." },
    mr: { word: "मित्र / मैत्रीण", phrase: "तू माझा चांगला मित्र आहेस.", phonetic: "Tu majha changla mitra aahes." },
    bn: { word: "বন্ধু", phrase: "আপনি আমার ভালো বন্ধু।", phonetic: "Apni amar bhalo bondhu." },
    ta: { word: "நண்பர்", phrase: "நீங்கள் என் நல்ல நண்பர்.", phonetic: "Neengal en nalla nanbar." },
    te: { word: "స్నేహితుడు", phrase: "మీరు నా మంచి స్నేహితులు.", phonetic: "Meeru naa manchi snehithulu." },
    gu: { word: "મિત્ર / દોસ્ત", phrase: "તમે મારા સારા મિત્ર છો.", phonetic: "Tame mara sara mitra chho." },
    pa: { word: "ਦੋਸਤ / ਮਿੱਤਰ", phrase: "ਤੁਸੀਂ ਮੇਰੇ ਚੰਗੇ ਦੋਸਤ ਹੋ।", phonetic: "Tusi mere change dost ho." },
    kn: { word: "ಸ್ನೇಹಿತ", phrase: "ನೀವು ನನ್ನ ಒಳ್ಳೆಯ ಸ್ನೇಹಿತ.", phonetic: "Neevu nanna olleya snehitha." },
    ur: { word: "دوست", phrase: "آپ میرے اچھے دوست ہیں۔", phonetic: "Aap mere achhe dost hain." }
  },
  good: {
    hi: { word: "अच्छा / बढ़िया", phrase: "अच्छा! सब कुछ ठीक है।", phonetic: "Achha! Sab kuch theek hai." },
    mai: { word: "नीक / बढ़िया", phrase: "नीक! सब किछु ठीक अछि।", phonetic: "Neek! Sab kichhu theek achhi." },
    bho: { word: "बढ़िया / नीमन", phrase: "बढ़िया! सब कुछ ठीक बा।", phonetic: "Badhiya! Sab kuch theek ba." },
    mr: { word: "छान / उत्तम", phrase: "छान! सर्व काही ठीक आहे.", phonetic: "Chhan! Sarva kahi theek aahe." },
    bn: { word: "ভালো", phrase: "ভালো! সবকিছু ঠিক আছে।", phonetic: "Bhalo! Shobkichu thik ache." },
    ta: { word: "நல்லது", phrase: "நல்லது! எல்லாம் சரியாக உள்ளது.", phonetic: "Nallathu! Ellam sariyaga ullathu." },
    te: { word: "మంచిది / బాగుంది", phrase: "బాగుంది! అంతా బాగానే ఉంది.", phonetic: "Bagundi! Antha bagane undi." },
    gu: { word: "સારું / સરસ", phrase: "સરસ! બધું બરાબર છે.", phonetic: "Saras! Badhu barabar chhe." },
    pa: { word: "ਵਧੀਆ / ਚੰਗਾ", phrase: "ਵਧੀਆ! ਸਭ ਕੁਝ ਠੀਕ ਹੈ।", phonetic: "Vadhiya! Sabh kujh theek hai." },
    kn: { word: "ಒಳ್ಳೆಯದು / ಚೆನ್ನಾಗಿದೆ", phrase: "ಚೆನ್ನಾಗಿದೆ! ಎಲ್ಲವೂ ಸರಿಯಾಗಿದೆ.", phonetic: "Chennagide! Ellavu sariyagide." },
    ur: { word: "اچھا / بہتر", phrase: "اچھا! سب کچھ ٹھیک ہے۔", phonetic: "Achha! Sab kuch theek hai." }
  },
  bad: {
    hi: { word: "बुरा / ठीक नहीं", phrase: "ठीक नहीं है। कुछ गड़बड़ है।", phonetic: "Theek nahi hai. Kuch gadbad hai." },
    mai: { word: "खराब / ठीक नहि", phrase: "ठीक नहि अछि। किछु गड़बड़ अछि।", phonetic: "Theek nahi achhi. Kichhu gadbad achhi." },
    bho: { word: "खराब / ठीक नइखे", phrase: "ठीक नइखे। कुछ गड़बड़ बा।", phonetic: "Theek naikhe. Kuch gadbad ba." },
    mr: { word: "वाईट / बरे नाही", phrase: "बरे नाही. काहीतरी चूक आहे.", phonetic: "Bare nahi. Kahitari chuk aahe." },
    bn: { word: "খারাপ / ভালো নয়", phrase: "ভালো নয়, কিছু সমস্যা হয়েছে।", phonetic: "Bhalo noy, kichu shomossha hoyeche." },
    ta: { word: "சரியில்லை", phrase: "சரியில்லை, ஏதோ தவறு நடந்துள்ளது.", phonetic: "Sariyillai, etho thavaru nadanthullathu." },
    te: { word: "బాగోలేదు", phrase: "బాగోలేదు, ఏదో సమస్య ఉంది.", phonetic: "Bagoledhu, edho samasya undi." },
    gu: { word: "બરાબર નથી", phrase: "બરાબર નથી, કંઈક તકલીફ છે.", phonetic: "Barabar nathi, kaik takleef chhe." },
    pa: { word: "ਠੀਕ ਨਹੀਂ", phrase: "ਠੀਕ ਨਹੀਂ ਹੈ, ਕੋਈ ਮੁਸ਼ਕਿਲ ਹੈ।", phonetic: "Theek nahi hai, koi mushkil hai." },
    kn: { word: "ಸರಿಯಿಲ್ಲ", phrase: "ಸರಿಯಿಲ್ಲ, ಏನೋ ತೊಂದರೆ ಇದೆ.", phonetic: "Sariyilla, eno tondare ide." },
    ur: { word: "ٹھیک نہیں", phrase: "ٹھیک نہیں ہے، کچھ مسئلہ ہے۔", phonetic: "Theek nahi hai, kuch masla hai." }
  },
  iloveyou: {
    hi: { word: "स्नेह / अपनापन", phrase: "मुझे आपकी परवाह है।", phonetic: "Mujhe aapki parvah hai." },
    mai: { word: "स्नेह / दुलार", phrase: "हमरा अहाँक चिन्ता अछि।", phonetic: "Hamra ahaank chinta achhi." },
    bho: { word: "दुलार / नेह", phrase: "हमरा रउआ के फिकिर बा।", phonetic: "Hamra raua ke fikir ba." },
    mr: { word: "प्रेम / काळजी", phrase: "मला तुमची काळजी आहे.", phonetic: "Mala tumchi kalji aahe." },
    bn: { word: "ভালোবাসা / যত্ন", phrase: "আমি আপনার প্রতি যত্নশীল।", phonetic: "Ami apnar proti jotnoshil." },
    ta: { word: "அன்பு / அக்கறை", phrase: "நான் உங்கள் மீது அக்கறை கொண்டுள்ளேன்.", phonetic: "Naan ungal meethu akkarai kondullen." },
    te: { word: "ప్రేమ / అభిమానం", phrase: "నాకు మీ పట్ల అభిమానం ఉంది.", phonetic: "Naaku mee patla abhimanam undi." },
    gu: { word: "પ્રેમ / કાળજી", phrase: "મને તમારી કાળજી છે.", phonetic: "Mane tamari kalji chhe." },
    pa: { word: "ਪਿਆਰ / ਸਤਿਕਾਰ", phrase: "ਮੈਨੂੰ ਤੁਹਾਡੀ ਪਰਵਾਹ ਹੈ।", phonetic: "Mainu tuhadi parvah hai." },
    kn: { word: "ಪ್ರೀತಿ / ಕಾಳಜಿ", phrase: "ನನಗೆ ನಿಮ್ಮ ಬಗ್ಗೆ ಕಾಳಜಿ ಇದೆ.", phonetic: "Nanage nimma bagge kalaji ide." },
    ur: { word: "محبت / خیال", phrase: "مجھے آپ کا خیال ہے۔", phonetic: "Mujhe aap ka khayal hai." }
  },
  name: {
    hi: { word: "नाम", phrase: "आपका नाम क्या है? मेरा नाम...", phonetic: "Aapka naam kya hai? Mera naam..." },
    mai: { word: "नाम", phrase: "अहाँक नाम की अछि?", phonetic: "Ahaank naam ki achhi?" },
    bho: { word: "नाँव", phrase: "राउर नाँव का हटे?", phonetic: "Raur naav ka hate?" },
    mr: { word: "नाव", phrase: "तुमचे नाव काय आहे?", phonetic: "Tumche naav kay aahe?" },
    bn: { word: "নাম", phrase: "আপনার নাম কী?", phonetic: "Apnar naam ki?" },
    ta: { word: "பெயர்", phrase: "உங்கள் பெயர் என்ன?", phonetic: "Ungal peyar enna?" },
    te: { word: "పేరు", phrase: "మీ పేరు ఏమిటి?", phonetic: "Mee peru emiti?" },
    gu: { word: "નામ", phrase: "તમારું નામ શું છે?", phonetic: "Tamaru naam shu chhe?" },
    pa: { word: "ਨਾਮ", phrase: "ਤੁਹਾਡਾ ਨਾਮ ਕੀ ਹੈ?", phonetic: "Tuhada naam ki hai?" },
    kn: { word: "ಹೆಸರು", phrase: "ನಿಮ್ಮ ಹೆಸರೇನು?", phonetic: "Nimma hesarenu?" },
    ur: { word: "نام", phrase: "آپ کا نام کیا ہے؟", phonetic: "Aap ka naam kya hai?" }
  },
  understand: {
    hi: { word: "समझ गया", phrase: "मैं अच्छी तरह समझ गया।", phonetic: "Main achhi tarah samajh gaya." },
    mai: { word: "बुझि गेलहुँ", phrase: "हम नीक जकाँ बुझि गेलहुँ।", phonetic: "Ham neek jakaan bujhi gelahun." },
    bho: { word: "बुझा गइल", phrase: "हम बढ़िया से समझ गइनी।", phonetic: "Ham badhiya se samajh gaini." },
    mr: { word: "समजले", phrase: "मला स्पष्टपणे समजले.", phonetic: "Mala spashtapane samajle." },
    bn: { word: "বুঝতে পেরেছি", phrase: "আমি পরিষ্কার বুঝতে পেরেছি।", phonetic: "Ami porishkar bujhte perechi." },
    ta: { word: "புரிந்தது", phrase: "எனக்குத் தெளிவாகப் புரிந்தது.", phonetic: "Enakkuth thelivagap purinthathu." },
    te: { word: "అర్థమైంది", phrase: "నాకు స్పష్టంగా అర్థమైంది.", phonetic: "Naaku spashtanga arthamaimdi." },
    gu: { word: "સમજાઈ ગયું", phrase: "મને બરાબર સમજાઈ ગયું.", phonetic: "Mane barabar samjai gayu." },
    pa: { word: "ਸਮਝ ਗਿਆ", phrase: "ਮੈਂ ਚੰਗੀ ਤਰ੍ਹਾਂ ਸਮਝ ਗਿਆ ਹਾਂ।", phonetic: "Main changi tarhan samajh gaya haan." },
    kn: { word: "ಅರ್ಥವಾಯಿತು", phrase: "ನನಗೆ ಸ್ಪಷ್ಟವಾಗಿ ಅರ್ಥವಾಯಿತು.", phonetic: "Nanage spashtavagi arthavayitu." },
    ur: { word: "سمجھ گیا", phrase: "میں اچھی طرح سمجھ گیا۔", phonetic: "Main achhi tarah samajh gaya." }
  },
  mother: {
    hi: { word: "माँ / माता", phrase: "मेरी माँ।", phonetic: "Meri Maa." },
    mai: { word: "माय / माता", phrase: "हमर माय।", phonetic: "Hamar Maay." },
    bho: { word: "माई", phrase: "हमार माई।", phonetic: "Hamaar Maai." },
    mr: { word: "आई", phrase: "माझी आई.", phonetic: "Majhi Aai." },
    bn: { word: "মা", phrase: "আমার মা।", phonetic: "Amar Maa." },
    ta: { word: "அம்மா", phrase: "என் அம்மா.", phonetic: "En Amma." },
    te: { word: "అమ్మ", phrase: "మా అమ్మ.", phonetic: "Maa Amma." },
    gu: { word: "માતા / બા", phrase: "મારી માતા.", phonetic: "Mari Mata." },
    pa: { word: "ਮਾਂ / ਮਾਤਾ", phrase: "ਮੇਰੀ ਮਾਂ।", phonetic: "Meri Maa." },
    kn: { word: "ಅಮ್ಮ / ತಾಯಿ", phrase: "ನನ್ನ ತಾಯಿ.", phonetic: "Nanna Thaayi." },
    ur: { word: "امی / والدہ", phrase: "میری امی۔", phonetic: "Meri Ammi." }
  },
  father: {
    hi: { word: "पिता / पापा", phrase: "मेरे पिताजी।", phonetic: "Mere Pitaji." },
    mai: { word: "बाबूजी / पिता", phrase: "हमर बाबूजी।", phonetic: "Hamar Babuji." },
    bho: { word: "बाबूजी", phrase: "हमार बाबूजी।", phonetic: "Hamaar Babuji." },
    mr: { word: "वडील / बाबा", phrase: "माझे बाबा.", phonetic: "Majhe Baba." },
    bn: { word: "বাবা", phrase: "আমার বাবা।", phonetic: "Amar Baba." },
    ta: { word: "அப்பா", phrase: "என் அப்பா.", phonetic: "En Appa." },
    te: { word: "నాన్న", phrase: "మా నాన్న.", phonetic: "Maa Nanna." },
    gu: { word: "પિતા / પપ્પા", phrase: "મારા પિતાજી.", phonetic: "Mara Pitaji." },
    pa: { word: "ਪਿਤਾ / ਪਾਪਾ", phrase: "ਮੇਰੇ ਪਿਤਾ ਜੀ।", phonetic: "Mere Pita ji." },
    kn: { word: "ಅಪ್ಪ / ತಂದೆ", phrase: "ನನ್ನ ತಂದೆ.", phonetic: "Nanna Thande." },
    ur: { word: "ابو / والد", phrase: "میرے والد۔", phonetic: "Mere Walid." }
  },
  help: {
    hi: { word: "मदद / सहायता", phrase: "कृपया मेरी मदद करें।", phonetic: "Kripaya meri madad karein." },
    mai: { word: "मददि / सहायता", phrase: "कृपया हमर मददि करू।", phonetic: "Kripaya hamar madadi karu." },
    bho: { word: "मदद / सहारा", phrase: "कृपया हमार मदद करीं।", phonetic: "Kripaya hamaar madad karin." },
    mr: { word: "मदत", phrase: "कृपया मला मदत करा.", phonetic: "Kripaya mala madat kara." },
    bn: { word: "সাহায্য", phrase: "দয়া করে আমাকে সাহায্য করুন।", phonetic: "Doya kore amake shahajjo korun." },
    ta: { word: "உதவி", phrase: "தயவுசெய்து எனக்கு உதவுங்கள்.", phonetic: "Thayavuseithu enakku uthavungal." },
    te: { word: "సహాయం", phrase: "దయచేసి నాకు సహాయం చేయండి.", phonetic: "Dayachesi naaku sahayam cheyandi." },
    gu: { word: "મદદ", phrase: "કૃપા કરીને મને મદદ કરો.", phonetic: "Krupa karine mane madad karo." },
    pa: { word: "ਮਦਦ", phrase: "ਕਿਰਪਾ ਕਰਕੇ ਮੇਰੀ ਮਦਦ ਕਰੋ।", phonetic: "Kirpa karke meri madad karo." },
    kn: { word: "ಸಹಾಯ", phrase: "ದಯವಿಟ್ಟು ನನಗೆ ಸಹಾಯ ಮಾಡಿ.", phonetic: "Dayavittu nanage sahaya maadi." },
    ur: { word: "مدد", phrase: "براہ کرم میری مدد کریں۔", phonetic: "Bara-e-karam meri madad karein." }
  },
  blind: {
    hi: { word: "नेत्रहीन / दृष्टिबाधित", phrase: "मैं नेत्रहीन हूँ / देख नहीं सकता।", phonetic: "Main netraheen hoon, dekh nahi sakta." },
    mai: { word: "नेत्रहीन / देख नहि सकैत", phrase: "हम नेत्रहीन छी, देख नहि सकैत छी।", phonetic: "Ham netraheen chhi, dekh nahi sakait chhi." },
    bho: { word: "नेत्रहीन", phrase: "हम देख नइखीं सकत, हमरा राह दिखाईं।", phonetic: "Ham dekh naikhin sakat, hamra raah dikhain." },
    mr: { word: "अंध / दृष्टीहीन", phrase: "मी अंध आहे, कृपया मला मार्गदर्शन करा.", phonetic: "Mi andha aahe, kripaya mala margadarshan kara." },
    bn: { word: "দৃষ্টিহীন", phrase: "আমি দৃষ্টিহীন, আমাকে পথ দেখাতে সাহায্য করুন।", phonetic: "Ami drishtihin, amake poth dekhate shahajjo korun." },
    ta: { word: "பார்வையற்றவர்", phrase: "நான் பார்வையற்றவன், தயவுசெய்து வழிகாட்டுங்கள்.", phonetic: "Naan paarvaiyatravan, thayavuseithu vazhikaattungal." },
    te: { word: "దృష్టి లోపం", phrase: "నాకు కళ్ళు కనిపించవు, దయచేసి సహాయం చేయండి.", phonetic: "Naaku kallu kanipinchavu, dayachesi sahayam cheyandi." },
    gu: { word: "પ્રજ્ઞાચક્ષુ / અંધ", phrase: "હું જોઈ શકતો નથી, કૃપા કરીને મને રસ્તો બતાવો.", phonetic: "Hu joi shakto nathi, krupa karine mane rasto batavo." },
    pa: { word: "ਨੇਤਰਹੀਣ", phrase: "ਮੈਂ ਦੇਖ ਨਹੀਂ ਸਕਦਾ, ਕਿਰਪਾ ਕਰਕੇ ਮੇਰੀ ਮਦਦ ਕਰੋ।", phonetic: "Main dekh nahi sakda, kirpa karke meri madad karo." },
    kn: { word: "ದೃಷ್ಟಿಹೀನ", phrase: "ನನಗೆ ಕಣ್ಣು ಕಾಣಿಸುವುದಿಲ್ಲ, ದಯವಿಟ್ಟು ಸಹಾಯ ಮಾಡಿ.", phonetic: "Nanage kannu kanisuvudilla, dayavittu sahaya maadi." },
    ur: { word: "نابینا", phrase: "میں نابینا ہوں، براہ کرم میری رہنمائی کریں۔", phonetic: "Main nabeena hoon, bara-e-karam meri rehnumai karein." }
  },
  deaf: {
    hi: { word: "बधिर / सांकेतिक भाषा", phrase: "मैं सुन नहीं सकता और सांकेतिक भाषा में बात करता हूँ।", phonetic: "Main sun nahi sakta aur Sign Language mein baat karta hoon." },
    mai: { word: "बधिर / सांकेतिक भाषा", phrase: "हम सुनु नहि सकैत छी, सांकेतिक भाषामे बात करैत छी।", phonetic: "Ham sunu nahi sakait chhi, Sign Language mein baat karait chhi." },
    bho: { word: "बधिर / इशारा भाषा", phrase: "हम सुन नइखीं सकत, इशारा में बात करीं।", phonetic: "Ham sun naikhin sakat, ishara mein baat karin." },
    mr: { word: "कर्णबधिर", phrase: "मी कर्णबधिर आहे आणि सांकेतिक भाषेत बोलतो.", phonetic: "Mi karnabadhir aahe aani sanketik bhashet bolto." },
    bn: { word: "বধির / ইশারা ভাষা", phrase: "আমি শুনতে পাই না, ইশারা ভাষায় কথা বলি।", phonetic: "Ami shunte pai na, ishara bhashay kotha boli." },
    ta: { word: "காது கேளாதவர்", phrase: "எனக்கு காது கேட்காது, சைகை மொழியில் பேசுகிறேன்.", phonetic: "Enakku kaathu ketkaathu, saigai mozhiyil pesugiren." },
    te: { word: "বധിరులు / సైగ భాష", phrase: "నాకు వినిపించదు, సైగ భాషలో మాట్లాడతాను.", phonetic: "Naaku vinipinchadu, saiga bhashalo matladathanu." },
    gu: { word: "મૂક-બધિર", phrase: "હું સાંભળી શકતો નથી, સાંકેતિક ભાષામાં વાત કરું છું.", phonetic: "Hu sambhali shakto nathi, sanketik bhashama vaat karu chhu." },
    pa: { word: "ਬਧਿਰ / ਇਸ਼ਾਰਿਆਂ ਦੀ ਭਾਸ਼ਾ", phrase: "ਮੈਂ ਸੁਣ ਨਹੀਂ ਸਕਦਾ, ਇਸ਼ਾਰਿਆਂ ਦੀ ਭਾਸ਼ਾ ਵਰਤਦਾ ਹਾਂ।", phonetic: "Main sun nahi sakda, ishareyan di bhasha vartda haan." },
    kn: { word: "ಶ್ರವಣದೋಷವುಳ್ಳವರು", phrase: "ನನಗೆ ಕಿವಿ ಕೇಳಿಸುವುದಿಲ್ಲ, ಸಂಜ್ಞೆ ಭಾಷೆಯಲ್ಲಿ ಮಾತನಾಡುತ್ತೇನೆ.", phonetic: "Nanage kivi kelisuvudilla, sanjne bhasheyalli ಮಾತನಾಡುತ್ತೇನೆ." },
    ur: { word: "سماعت سے محروم", phrase: "میں سن نہیں سکتا اور اشاروں کی زبان میں بات کرتا ہوں۔", phonetic: "Main sun nahi sakta aur isharon ki zaban mein baat karta hoon." }
  },
  water: {
    hi: { word: "पानी / जल", phrase: "मुझे पीने के लिए पानी चाहिए।", phonetic: "Mujhe peene ke liye paani chahiye." },
    mai: { word: "पानि / जल", phrase: "हमरा पीबाक लेल पानि चाही।", phonetic: "Hamra peebaak lel paani chahi." },
    bho: { word: "पानी", phrase: "हमरा पीये खातिर पानी चाहीं।", phonetic: "Hamra peeye khatir paani chahin." },
    mr: { word: "पाणी", phrase: "मला पिण्यासाठी पाणी हवे आहे.", phonetic: "Mala pinyasathi paani have aahe." },
    bn: { word: "জল / পানি", phrase: "আমার খাবার জল চাই।", phonetic: "Amar khabar jol chai." },
    ta: { word: "தண்ணீர்", phrase: "எனக்கு குடிக்க தண்ணீர் வேண்டும்.", phonetic: "Enakku kudikka thanneer vendum." },
    te: { word: "నీళ్ళు / మంచినీరు", phrase: "నాకు తాగడానికి మంచినీళ్ళు కావాలి.", phonetic: "Naaku thagadaniki manchineellu kavali." },
    gu: { word: "પાણી", phrase: "મારે પીવા માટે પાણી જોઈએ છે.", phonetic: "Mare peeva mate paani joiye chhe." },
    pa: { word: "ਪਾਣੀ", phrase: "ਮੈਨੂੰ ਪੀਣ ਲਈ ਪਾਣੀ ਚਾਹੀਦਾ ਹੈ।", phonetic: "Mainu peen layi paani chahida hai." },
    kn: { word: "ನೀರು", phrase: "ನನಗೆ ಕುಡಿಯಲು ನೀರು ಬೇಕು.", phonetic: "Nanage kudiyalu neeru beku." },
    ur: { word: "پانی", phrase: "مجھے پینے کے لیے پانی چاہیے۔", phonetic: "Mujhe peene ke liye paani chahiye." }
  },
  food: {
    hi: { word: "भोजन / खाना", phrase: "मुझे खाने के लिए भोजन चाहिए।", phonetic: "Mujhe khaane ke liye bhojan chahiye." },
    mai: { word: "भोजन / खाना", phrase: "हमरा खाय लेल भोजन चाही।", phonetic: "Hamra khaay lel bhojan chahi." },
    bho: { word: "खाना / भोजन", phrase: "हमरा खाये खातिर खाना चाहीं।", phonetic: "Hamra khaye khatir khana chahin." },
    mr: { word: "जेवण / अन्न", phrase: "मला खाण्यासाठी जेवण हवे आहे.", phonetic: "Mala khanyasathi jevan have aahe." },
    bn: { word: "খাবার", phrase: "আমি কিছু খাবার খেতে চাই।", phonetic: "Ami kichu khabar khete chai." },
    ta: { word: "உணவு / சாப்பாடு", phrase: "எனக்கு சாப்பிட உணவு வேண்டும்.", phonetic: "Enakku saappida unavu vendum." },
    te: { word: "ఆహారం / భోజనం", phrase: "నాకు తినడానికి ఆహారం కావాలి.", phonetic: "Naaku thinadaniki aaharam kavali." },
    gu: { word: "ભોજન / જમવાનું", phrase: "મારે જમવા માટે ખોરાક જોઈએ છે.", phonetic: "Mare jamva mate khorak joiye chhe." },
    pa: { word: "ਖਾਣਾ / ਭੋਜਨ", phrase: "ਮੈਨੂੰ ਖਾਣ ਲਈ ਭੋਜਨ ਚਾਹੀਦਾ ਹੈ।", phonetic: "Mainu khaan layi bhojan chahida hai." },
    kn: { word: "ಊಟ / ಆಹಾರ", phrase: "ನನಗೆ ತಿನ್ನಲು ಆಹಾರ ಬೇಕು.", phonetic: "Nanage thinnalu aahara beku." },
    ur: { word: "کھانا", phrase: "مجھے کھانے کے لیے کھانا چاہیے۔", phonetic: "Mujhe khaane ke liye khana chahiye." }
  },
  where: {
    hi: { word: "कहाँ / किधर", phrase: "यह कहाँ है? क्या आप रास्ता बता सकते हैं?", phonetic: "Yah kahan hai? Kya aap raasta bata sakte hain?" },
    mai: { word: "कतय / केम्हर", phrase: "ई कतय अछि? की अहाँ बाट बता सकैत छी?", phonetic: "Ee katay achhi? Ki ahaan baat bata sakait chhi?" },
    bho: { word: "कहाँ / केने", phrase: "ई कहाँ बा? रउआ रास्ता बता सकीलें?", phonetic: "Ee kahan ba? Raua raasta bata sakilen?" },
    mr: { word: "कुठे", phrase: "हे कुठे आहे? तुम्ही मला मार्ग दाखवाल का?", phonetic: "He kuthe aahe? Tumhi mala marga dakhaval ka?" },
    bn: { word: "কোথায়", phrase: "এটি কোথায়? আপনি কি পথ দেখাতে পারবেন?", phonetic: "Eti kothay? Apni ki poth dekhate parben?" },
    ta: { word: "எங்கே", phrase: "இது எங்கே உள்ளது? வழி சொல்ல முடியுமா?", phonetic: "Ithu enge ullathu? Vazhi solla mudiyuma?" },
    te: { word: "ఎక్కడ", phrase: "ఇది ఎక్కడ ఉంది? దయచేసి దారి చెబుతారా?", phonetic: "Idi ekkada undi? Dayachesi daari chebuthara?" },
    gu: { word: "ક્યાં", phrase: "આ ક્યાં છે? શું તમે મને રસ્તો બતાવશો?", phonetic: "Aa kya chhe? Shu tame mane rasto batavsho?" },
    pa: { word: "ਕਿੱਥੇ", phrase: "ਇਹ ਕਿੱਥੇ ਹੈ? ਕੀ ਤੁਸੀਂ ਮੈਨੂੰ ਰਸਤਾ ਦੱਸੋਗੇ?", phonetic: "Eh kitthe hai? Ki tusi mainu rasta dassoge?" },
    kn: { word: "ಎಲ್ಲಿ", phrase: "ಇದು ಎಲ್ಲಿದೆ? ದಯವಿಟ್ಟು ದಾರಿ ತೋರಿಸುತ್ತೀರಾ?", phonetic: "Idu ellide? Dayavittu daari thorisuttira?" },
    ur: { word: "کہاں", phrase: "یہ کہاں ہے؟ کیا آپ راستہ بتا سکتے ہیں؟", phonetic: "Yeh kahan hai? Kya aap raasta bata sakte hain?" }
  },
  wait: {
    hi: { word: "रुकिए / प्रतीक्षा करें", phrase: "कृपया थोड़ा रुकिए और प्रतीक्षा करें।", phonetic: "Kripaya thoda rukiye aur pratiksha karein." },
    mai: { word: "रुकू / ठहरू", phrase: "कृपया कनी रुकू आ प्रतीक्षा करू।", phonetic: "Kripaya kani ruku aa pratiksha karu." },
    bho: { word: "रुकीं / ठहरीं", phrase: "कृपया तनी रुकीं।", phonetic: "Kripaya tani rukin." },
    mr: { word: "थांबा", phrase: "कृपया थोडा वेळ थांबा.", phonetic: "Kripaya thoda vel thamba." },
    bn: { word: "থামুন / অপেক্ষা করুন", phrase: "দয়া করে একটু দাঁড়ান এবং অপেক্ষা করুন।", phonetic: "Doya kore ektu daran ebong opekha korun." },
    ta: { word: "நில்லுங்கள் / காத்திருங்கள்", phrase: "தயவுசெய்து சற்று நின்று காத்திருங்கள்.", phonetic: "Thayavuseithu satru nindru kaathirungal." },
    te: { word: "ఆగండి / వేచి ఉండండి", phrase: "దయచేసి కాసేపు ఆగండి.", phonetic: "Dayachesi kasepu aagandi." },
    gu: { word: "થોભો / રાહ જુઓ", phrase: "કૃપા કરીને થોડીવાર થોભો.", phonetic: "Krupa karine thodivaar thobho." },
    pa: { word: "ਰੁਕੋ / ਉਡੀਕ ਕਰੋ", phrase: "ਕਿਰਪਾ ਕਰਕੇ ਥੋੜ੍ਹਾ ਰੁਕੋ ਅਤੇ ਉਡੀਕ ਕਰੋ।", phonetic: "Kirpa karke thoda ruko ate udeek karo." },
    kn: { word: "ನಿಲ್ಲಿರಿ / ಕಾಯಿರಿ", phrase: "ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ನಿಲ್ಲಿರಿ.", phonetic: "Dayavittu svalpa nilliri." },
    ur: { word: "رکیے / انتظار کریں", phrase: "براہ کرم تھوڑا رکیے اور انتظار کریں۔", phonetic: "Bara-e-karam thoda rukiye aur intezar karein." }
  },
  repeat: {
    hi: { word: "दोहराएँ / फिर से कहें", phrase: "कृपया उसे एक बार फिर से दोहराएँ।", phonetic: "Kripaya use ek baar phir se dohorayein." },
    mai: { word: "फेर सँ कहू", phrase: "कृपया एक बेर फेर सँ कहू।", phonetic: "Kripaya ek ber pher san kahu." },
    bho: { word: "फेर से कहीं", phrase: "कृपया एक बेर अउरी कहीं।", phonetic: "Kripaya ek ber auri kahin." },
    mr: { word: "पुन्हा सांगा", phrase: "कृपया ते पुन्हा एकदा सांगा.", phonetic: "Kripaya te punha ekda sanga." },
    bn: { word: "আবার বলুন", phrase: "দয়া করে আরেকবার বলুন।", phonetic: "Doya kore arekbar bolun." },
    ta: { word: "மீண்டும் சொல்லுங்கள்", phrase: "தயவுசெய்து அதை மீண்டும் ஒருமுறை சொல்லுங்கள்.", phonetic: "Thayavuseithu athai meendum orumurai sollungal." },
    te: { word: "మళ్ళీ చెప్పండి", phrase: "దయచేసి మళ్ళీ ఒకసారి చెప్పండి.", phonetic: "Dayachesi malli okasari cheppandi." },
    gu: { word: "ફરીથી કહો", phrase: "કૃપા કરીને તે ફરીથી કહો.", phonetic: "Krupa karine te farithi kaho." },
    pa: { word: "ਦੁਬਾਰਾ ਕਹੋ", phrase: "ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਵਾਰ ਫਿਰ ਦੱਸੋ।", phonetic: "Kirpa karke ik vaar phir dasso." },
    kn: { word: "ಮತ್ತೆ ಹೇಳಿ", phrase: "ದಯವಿಟ್ಟು ಅದನ್ನು ಮತ್ತೊಮ್ಮೆ ಹೇಳಿ.", phonetic: "Dayavittu adannu mattomme heli." },
    ur: { word: "دوبارہ کہیں", phrase: "براہ کرم ایک بار پھر دہرائیں۔", phonetic: "Bara-e-karam ek baar phir dohrayein." }
  },
  slow: {
    hi: { word: "धीरे बोलें / संकेत करें", phrase: "कृपया थोड़ा धीरे बोलें या संकेत करें।", phonetic: "Kripaya thoda dheere bolein ya sanket karein." },
    mai: { word: "धीरे बाजू", phrase: "कृपया कनी धीरे बाजू वा संकेत करू।", phonetic: "Kripaya kani dheere baaju va sanket karu." },
    bho: { word: "धीरे बोलीं", phrase: "कृपया तनी धीरे-धीरे बोलीं।", phonetic: "Kripaya tani dheere-dheere bolin." },
    mr: { word: "हळू बोला", phrase: "कृपया थोडे हळू बोला किंवा खाणाखुणा करा.", phonetic: "Kripaya thode halu bola kinva khana-khuna kara." },
    bn: { word: "ধীরে বলুন", phrase: "দয়া করে একটু ধীরে কথা বলুন বা ইশারা করুন।", phonetic: "Doya kore ektu dhire kotha bolun ba ishara korun." },
    ta: { word: "மெதுவாகப் பேசுங்கள்", phrase: "தயவுசெய்து சற்று மெதுவாகப் பேசுங்கள்.", phonetic: "Thayavuseithu satru methuvagap pesungal." },
    te: { word: "నెమ్మదిగా మాట్లాడండి", phrase: "దయచేసి కొంచెం నెమ్మదిగా మాట్లాడండి.", phonetic: "Dayachesi konchem nemmadiga matladandi." },
    gu: { word: "ધીમે બોલો", phrase: "કૃપા કરીને થોડું ધીમે બોલો.", phonetic: "Krupa karine thodu dhime bolo." },
    pa: { word: "ਹੌਲੀ ਬੋਲੋ", phrase: "ਕਿਰਪਾ ਕਰਕੇ ਥੋੜ੍ਹਾ ਹੌਲੀ ਬੋਲੋ।", phonetic: "Kirpa karke thoda hauli bolo." },
    kn: { word: "ನಿಧಾನವಾಗಿ ಮಾತನಾಡಿ", phrase: "ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ನಿಧಾನವಾಗಿ ಮಾತನಾಡಿ.", phonetic: "Dayavittu svalpa nidhanavagi matanadi." },
    ur: { word: "آہستہ بولیں", phrase: "براہ کرم تھوڑا آہستہ بولیں۔", phonetic: "Bara-e-karam thoda aahista bolein." }
  },
  bathroom: {
    hi: { word: "शौचालय / वॉशरूम", phrase: "शौचालय या वॉशरूम कहाँ है?", phonetic: "Shauchalay ya washroom kahan hai?" },
    mai: { word: "शौचालय", phrase: "शौचालय कतय अछि?", phonetic: "Shauchalay katay achhi?" },
    bho: { word: "शौचालय / बाथरूम", phrase: "बाथरूम कहाँ बा?", phonetic: "Bathroom kahan ba?" },
    mr: { word: "स्वच्छतागृह / शौचालय", phrase: "स्वच्छतागृह कुठे आहे?", phonetic: "Swachhatagriha kuthe aahe?" },
    bn: { word: "শৌচালয় / বাথরুম", phrase: "বাথরুম বা শৌচালয় কোথায়?", phonetic: "Bathroom ba shouchaloy kothay?" },
    ta: { word: "கழிப்பறை", phrase: "கழிப்பறை எங்கே உள்ளது?", phonetic: "Kazhipparai enge ullathu?" },
    te: { word: "బాత్రూమ్ / শৌచాలయం", phrase: "బాత్రూమ్ ఎక్కడ ఉంది?", phonetic: "Bathroom ekkada undi?" },
    gu: { word: "શૌચાલય / બાથરૂમ", phrase: "શૌચાલય ક્યાં છે?", phonetic: "Shauchalay kya chhe?" },
    pa: { word: "ਪਖਾਨਾ / ਵਾਸ਼ਰੂਮ", phrase: "ਵਾਸ਼ਰੂਮ ਕਿੱਥੇ ਹੈ?", phonetic: "Washroom kitthe hai?" },
    kn: { word: "ಶೌಚಾಲಯ", phrase: "ಶೌಚಾಲಯ ಎಲ್ಲಿದೆ?", phonetic: "Shauchalaya ellide?" },
    ur: { word: "بیت الخلا / واش روم", phrase: "واش روم کہاں ہے؟", phonetic: "Washroom kahan hai?" }
  },
  home: {
    hi: { word: "घर / मकान", phrase: "कृपया मुझे घर पहुँचने में मदद करें।", phonetic: "Kripaya mujhe ghar pahunchne mein madad karein." },
    mai: { word: "घर / डेरा", phrase: "कृपया हमरा घर पहुँचबामे मददि करू।", phonetic: "Kripaya hamra ghar pahunchba mein madadi karu." },
    bho: { word: "घर", phrase: "हमरा घरे पहुँचे में मदद करीं।", phonetic: "Hamra ghare pahunche mein madad karin." },
    mr: { word: "घर", phrase: "कृपया मला घरी पोहोचण्यास मदत करा.", phonetic: "Kripaya mala ghari pohochnyas madat kara." },
    bn: { word: "বাড়ি / ঘর", phrase: "আমাকে বাড়ি পৌঁছাতে সাহায্য করুন।", phonetic: "Amake bari pouchate shahajjo korun." },
    ta: { word: "வீடு", phrase: "நான் வீட்டிற்குச் செல்ல உதவுங்கள்.", phonetic: "Naan veettirkuch sella uthavungal." },
    te: { word: "ఇల్లు", phrase: "నేను ఇంటికి వెళ్ళడానికి సహాయం చేయండి.", phonetic: "Nenu intiki velladaniki sahayam cheyandi." },
    gu: { word: "ઘર", phrase: "મને ઘરે પહોંચવામાં મદદ કરો.", phonetic: "Mane ghare pahonchvama madad karo." },
    pa: { word: "ਘਰ", phrase: "ਮੈਨੂੰ ਘਰ ਪਹੁੰਚਣ ਵਿੱਚ ਮਦਦ ਕਰੋ।", phonetic: "Mainu ghar pahunchan vich madad karo." },
    kn: { word: "ಮನೆ", phrase: "ನಾನು ಮನೆಗೆ ತಲುಪಲು ಸಹಾಯ ಮಾಡಿ.", phonetic: "Naanu manege thalupalu sahaya maadi." },
    ur: { word: "گھر", phrase: "براہ کرم مجھے گھر پہنچنے میں مدد کریں۔", phonetic: "Bara-e-karam mujhe ghar pahunchne mein madad karein." }
  },
  money: {
    hi: { word: "पैसे / कीमत", phrase: "इसकी कीमत कितने रुपये है?", phonetic: "Iski keemat kitne rupaye hai?" },
    mai: { word: "टाका / पाइ", phrase: "एकर दाम कतेक टाका अछि?", phonetic: "Ekar daam katek taaka achhi?" },
    bho: { word: "पइसा / दाम", phrase: "एकर दाम केतना रुपया बा?", phonetic: "Ekar daam ketna rupya ba?" },
    mr: { word: "पैसे / किंमत", phrase: "याची किंमत किती रुपये आहे?", phonetic: "Yachi kimmat kiti rupaye aahe?" },
    bn: { word: "টাকা / দাম", phrase: "এটার দাম কত টাকা?", phonetic: "Etar daam koto taka?" },
    ta: { word: "பணம் / விலை", phrase: "இதன் விலை எவ்வளவு?", phonetic: "Ithan vilai evvalavu?" },
    te: { word: "డబ్బు / ధర", phrase: "దీని ధర ఎంత?", phonetic: "Deeni dhara entha?" },
    gu: { word: "પૈસા / કિંમત", phrase: "આની કિંમત કેટલા રૂપિયા છે?", phonetic: "Aani kimmat ketla rupiya chhe?" },
    pa: { word: "ਪੈਸੇ / ਕੀਮਤ", phrase: "ਇਸ ਦੀ ਕੀਮਤ ਕਿੰਨੇ ਰੁਪਏ ਹੈ?", phonetic: "Is di keemat kinne rupaye hai?" },
    kn: { word: "ಹಣ / ಬೆಲೆ", phrase: "ಇದರ ಬೆಲೆ ಎಷ್ಟು?", phonetic: "Idara bele eshtu?" },
    ur: { word: "پیسے / قیمت", phrase: "اس کی قیمت کتنے روپے ہے؟", phonetic: "Is ki qeemat kitne rupaye hai?" }
  },
  time: {
    hi: { word: "समय / कब", phrase: "अभी क्या समय हुआ है?", phonetic: "Abhi kya samay hua hai?" },
    mai: { word: "समय / कखन", phrase: "अखन कतेक समय भेल अछि?", phonetic: "Akhan katek samay bhel achhi?" },
    bho: { word: "समय / केतना बजल", phrase: "अभी केतना समय भइल बा?", phonetic: "Abhi ketna samay bhail ba?" },
    mr: { word: "वेळ / किती वाजले", phrase: "आता किती वाजले आहेत?", phonetic: "Aata kiti vajle aahet?" },
    bn: { word: "সময় / কটা বাজে", phrase: "এখন কটা বাজে?", phonetic: "Ekhon kota baje?" },
    ta: { word: "நேரம் / எப்போது", phrase: "இப்போது மணி என்ன?", phonetic: "Ippothu mani enna?" },
    te: { word: "సమయం / ఎప్పుడు", phrase: "ఇప్పుడు సమయం ఎంత అయింది?", phonetic: "Ippudu samayam entha ayindi?" },
    gu: { word: "સમય / ક્યારે", phrase: "અત્યારે કેટલા વાગ્યા છે?", phonetic: "Atyare ketla vagya chhe?" },
    pa: { word: "ਸਮਾਂ / ਕਦੋਂ", phrase: "ਹੁਣ ਕੀ ਸਮਾਂ ਹੋਇਆ ਹੈ?", phonetic: "Hun ki samaa hoya hai?" },
    kn: { word: "ಸಮಯ / ಯಾವಾಗ", phrase: "ಈಗ ಸಮಯ ಎಷ್ಟು?", phonetic: "Eega samaya eshtu?" },
    ur: { word: "وقت / کب", phrase: "ابھی کیا وقت ہوا ہے؟", phonetic: "Abhi kya waqt hua hai?" }
  },
  transport: {
    hi: { word: "बस / ट्रेन / यात्रा", phrase: "मुझे बस या ट्रेन पकड़नी है।", phonetic: "Mujhe bus ya train pakadni hai." },
    mai: { word: "बस / रेलगाड़ी", phrase: "हमरा बस वा ट्रेन पकड़बाक अछि।", phonetic: "Hamra bus va train pakadbaak achhi." },
    bho: { word: "बस / रेलगाड़ी", phrase: "हमरा बस चाहे ट्रेन पकड़े के बा।", phonetic: "Hamra bus chahe train pakde ke ba." },
    mr: { word: "बस / रेल्वे", phrase: "मला बस किंवा ट्रेन पकडायची आहे.", phonetic: "Mala bus kinva train pakdaychi aahe." },
    bn: { word: "বাস / ট্রেন", phrase: "আমাকে বাস বা ট্রেন ধরতে হবে।", phonetic: "Amake bus ba train dhorte hobe." },
    ta: { word: "பேருந்து / ரயில்", phrase: "நான் பேருந்து அல்லது ரயிலைப் பிடிக்க வேண்டும்.", phonetic: "Naan perunthu allathu rayilaip pidikka vendum." },
    te: { word: "బస్సు / రైలు", phrase: "నేను బస్సు లేదా రైలు ఎక్కాలి.", phonetic: "Nenu bassu leda railu ekkali." },
    gu: { word: "બસ / ટ્રેન", phrase: "મારે બસ કે ટ્રેન પકડવી છે.", phonetic: "Mare bus ke train pakadvi chhe." },
    pa: { word: "ਬੱਸ / ਟ੍ਰੇਨ", phrase: "ਮੈਂ ਬੱਸ ਜਾਂ ਟ੍ਰੇਨ ਫੜਨੀ ਹੈ।", phonetic: "Main bus jaan train phadni hai." },
    kn: { word: "ಬಸ್ / ರೈಲು", phrase: "ನಾನು ಬಸ್ ಅಥವಾ ರೈಲು ಹಿಡಿಯಬೇಕು.", phonetic: "Naanu bus athava railu hidiyabeku." },
    ur: { word: "بس / ٹرین", phrase: "مجھے بس یا ٹرین پکڑنی ہے۔", phonetic: "Mujhe bus ya train pakadni hai." }
  },
  emergency: {
    hi: { word: "आपातकाल / खतरा", phrase: "आपातकाल! मुझे तुरंत मदद की ज़रूरत है!", phonetic: "Aapaatkaal! Mujhe turant madad ki zaroorat hai!" },
    mai: { word: "आपातकाल / संकट", phrase: "आपातकाल! हमरा तुरन्त मददिक आवश्यकता अछि!", phonetic: "Aapaatkaal! Hamra turant madadik aavashyakta achhi!" },
    bho: { word: "इमरजेंसी / खतरा", phrase: "इमरजेंसी! हमरा तुरंत मदद चाहीं!", phonetic: "Emergency! Hamra turant madad chahin!" },
    mr: { word: "आणीबाणी / संकट", phrase: "आणीबाणी! मला ताबडतोब मदतीची गरज आहे!", phonetic: "Aanibani! Mala tabadtob madatichi garaj aahe!" },
    bn: { word: "জরুরি অবস্থা / বিপদ", phrase: "জরুরি অবস্থা! আমার এখনই সাহায্য দরকার!", phonetic: "Joruri obostha! Amar ekhoni shahajjo dorkar!" },
    ta: { word: "அவசரம் / ஆபத்து", phrase: "அவசரம்! எனக்கு உடனடியாக உதவி தேவை!", phonetic: "Avasaram! Enakku udanadiyaga uthavi thevai!" },
    te: { word: "అత్యవసరం / ప్రమాదం", phrase: "అత్యవసరం! నాకు వెంటనే సహాయం కావాలి!", phonetic: "Athyavasaram! Naaku ventane sahayam kavali!" },
    gu: { word: "કટોકટી / તાત્કાલિક મદદ", phrase: "કટોકટી! મને તાત્કાલિક મદદની જરૂર છે!", phonetic: "Katokati! Mane tatkalik madadni jarur chhe!" },
    pa: { word: "ਐਮਰਜੈਂਸੀ / ਖ਼ਤਰਾ", phrase: "ਐਮਰਜੈਂਸੀ! ਮੈਨੂੰ ਤੁਰੰਤ ਮਦਦ ਦੀ ਲੋੜ ਹੈ!", phonetic: "Emergency! Mainu turant madad di lod hai!" },
    kn: { word: "ತುರ್ತು ಪರಿಸ್ಥಿತಿ", phrase: "ತುರ್ತು ಪರಿಸ್ಥಿತಿ! ನನಗೆ ತಕ್ಷಣ ಸಹಾಯ ಬೇಕು!", phonetic: "Thurtu paristhithi! Nanage thakshana sahaya beku!" },
    ur: { word: "ہنگامی صورتحال", phrase: "ہنگامی صورتحال! مجھے فوری مدد کی ضرورت ہے!", phonetic: "Hangami soorathal! Mujhe fori madad ki zaroorat hai!" }
  },
  doctor: {
    hi: { word: "डॉक्टर / अस्पताल", phrase: "कृपया डॉक्टर को बुलाएँ या मुझे अस्पताल ले चलें।", phonetic: "Kripaya doctor ko bulayein ya mujhe aspataal le chalein." },
    mai: { word: "डॉक्टर / अस्पताल", phrase: "कृपया डॉक्टर केँ बोलाउ वा हमरा अस्पताल लऽ चलू।", phonetic: "Kripaya doctor ken bolau va hamra aspataal la chalu." },
    bho: { word: "डॉक्टर / अस्पताल", phrase: "कृपया डॉक्टर के बोलाईं चाहे अस्पताल ले चलीं।", phonetic: "Kripaya doctor ke bolain chahe aspataal le chalin." },
    mr: { word: "डॉक्टर / रुग्णालय", phrase: "कृपया डॉक्टरांना बोलवा किंवा मला रुग्णालयात न्या.", phonetic: "Kripaya doctoranna bolva kinva mala rugnalayat nya." },
    bn: { word: "ডাক্তার / হাসপাতাল", phrase: "দয়া করে ডাক্তার ডাকুন বা আমাকে হাসপাতালে নিয়ে চলুন।", phonetic: "Doya kore daktar dakun ba amake haspatale niye cholun." },
    ta: { word: "மருத்துவர் / மருத்துவமனை", phrase: "தயவுசெய்து மருத்துவரை அழையுங்கள்.", phonetic: "Thayavuseithu maruthuvarai azhaiyungal." },
    te: { word: "డాక్టర్ / ఆసుపత్రి", phrase: "దయచేసి డాక్టర్‌ని పిలవండి లేదా ఆసుపత్రికి తీసుకెళ్ళండి.", phonetic: "Dayachesi doctor ni pilavandi leda aasupathriki theesukellandi." },
    gu: { word: "ડૉક્ટર / હોસ્પિટલ", phrase: "કૃપા કરીને ડૉક્ટરને બોલાવો અથવા હોસ્પિટલ લઈ જાઓ.", phonetic: "Krupa karine doctor ne bolavo athava hospital lai jao." },
    pa: { word: "ਡਾਕਟਰ / ਹਸਪਤਾਲ", phrase: "ਕਿਰਪਾ ਕਰਕੇ ਡਾਕਟਰ ਨੂੰ ਬੁਲਾਓ ਜਾਂ ਹਸਪਤਾਲ ਲੈ ਚੱਲੋ।", phonetic: "Kirpa karke doctor nu bulao jaan haspatal lai challo." },
    kn: { word: "ವೈದ್ಯರು / ಆಸ್ಪತ್ರೆ", phrase: "ದಯವಿಟ್ಟು ವೈದ್ಯರನ್ನು ಕರೆಯಿರಿ ಅಥವಾ ಆಸ್ಪತ್ರೆಗೆ ಕರೆದೊಯ್ಯಿರಿ.", phonetic: "Dayavittu vaidyarannu kareyiri athava aaspathrege karedoyyiri." },
    ur: { word: "ڈاکٹر / ہسپتال", phrase: "براہ کرم ڈاکٹر کو بلائیں یا مجھے ہسپتال لے چلیں۔", phonetic: "Bara-e-karam doctor ko bulayein ya mujhe haspatal le chalein." }
  },
  pain: {
    hi: { word: "दर्द / चोट", phrase: "मुझे दर्द हो रहा है और चिकित्सा सहायता चाहिए।", phonetic: "Mujhe dard ho raha hai aur chikitsa sahayata chahiye." },
    mai: { word: "दर्द / पीड़ा", phrase: "हमरा बहुत दर्द भऽ रहल अछि।", phonetic: "Hamra bahut dard bha rahal achhi." },
    bho: { word: "दरद / चोट", phrase: "हमरा बहुत दरद हो रहल बा।", phonetic: "Hamra bahut darad ho rahal ba." },
    mr: { word: "वेदना / दुखापत", phrase: "मला खूप वेदना होत आहेत, वैद्यकीय मदत हवी आहे.", phonetic: "Mala khup vedana hot aahet, vaidyakiy madat havi aahe." },
    bn: { word: "ব্যথা / যন্ত্রণা", phrase: "আমার খুব ব্যথা হচ্ছে, চিকিৎসা সাহায্য দরকার।", phonetic: "Amar khub byatha hocche, chikitsha shahajjo dorkar." },
    ta: { word: "வலி / காயம்", phrase: "எனக்கு வலி ஏற்படுகிறது, மருத்துவ உதவி தேவை.", phonetic: "Enakku vali erpadugirathu, maruthuva uthavi thevai." },
    te: { word: "నొప్పి / గాయం", phrase: "నాకు చాలా నొప్పిగా ఉంది, వైద్య సహాయం కావాలి.", phonetic: "Naaku chala noppiga undi, vaidya sahayam kavali." },
    gu: { word: "દુખાવો / ઈજા", phrase: "મને દુખાવો થાય છે, સારવારની જરૂર છે.", phonetic: "Mane dukhavo thay chhe, sarvarni jarur chhe." },
    pa: { word: "ਦਰਦ / ਸੱਟ", phrase: "ਮੈਨੂੰ ਬਹੁਤ ਦਰਦ ਹੋ ਰਿਹਾ ਹੈ।", phonetic: "Mainu bahut dard ho riha hai." },
    kn: { word: "ನೋವು / ಗಾಯ", phrase: "ನನಗೆ ತುಂಬಾ ನೋವಾಗುತ್ತಿದೆ, ಚಿಕಿತ್ಸೆ ಬೇಕು.", phonetic: "Nanage tumba novaguttide, chikithse beku." },
    ur: { word: "درد / تکلیف", phrase: "مجھے شدید درد ہو رہا ہے اور طبی امداد چاہیے۔", phonetic: "Mujhe shadeed dard ho raha hai aur tibbi imdaad chahiye." }
  },
  call: {
    hi: { word: "फ़ोन / कॉल", phrase: "कृपया मेरे लिए एक फ़ोन कॉल कर दीजिए।", phonetic: "Kripaya mere liye ek phone call kar dijiye." },
    mai: { word: "फोन / कॉल", phrase: "कृपया हमरा लेल एकटा फोन कॉल कऽ दियौ।", phonetic: "Kripaya hamra lel ekta phone call ka diyau." },
    bho: { word: "फोन कॉल", phrase: "कृपया हमरा खातिर एगो फोन लगा दीं।", phonetic: "Kripaya hamra khatir ego phone laga din." },
    mr: { word: "फोन कॉल", phrase: "कृपया माझ्यासाठी एक फोन कॉल करा.", phonetic: "Kripaya majhyasathi ek phone call kara." },
    bn: { word: "ফোন কল", phrase: "দয়া করে আমার জন্য একটি ফোন কল করুন।", phonetic: "Doya kore amar jonno ekti phone call korun." },
    ta: { word: "தொலைபேசி அழைப்பு", phrase: "தயவுசெய்து எனக்காக ஒரு தொலைபேசி அழைப்பு செய்யுங்கள்.", phonetic: "Thayavuseithu enakkaga oru tholaipesi azhaippu seyyungal." },
    te: { word: "ఫోన్ కాల్", phrase: "దయచేసి నా కోసం ఒక ఫోన్ కాల్ చేయండి.", phonetic: "Dayachesi naa kosam oka phone call cheyandi." },
    gu: { word: "ફોન કૉલ", phrase: "કૃપા કરીને મારા માટે એક ફોન કૉલ કરો.", phonetic: "Krupa karine mara mate ek phone call karo." },
    pa: { word: "ਫ਼ੋਨ ਕਾਲ", phrase: "ਕਿਰਪਾ ਕਰਕੇ ਮੇਰੇ ਲਈ ਇੱਕ ਫ਼ੋਨ ਕਾਲ ਕਰੋ।", phonetic: "Kirpa karke mere layi ik phone call karo." },
    kn: { word: "ಫೋನ್ ಕರೆ", phrase: "ದಯವಿಟ್ಟು ನನಗಾಗಿ ಒಂದು ಫೋನ್ ಕರೆ ಮಾಡಿ.", phonetic: "Dayavittu nanagagi ondu phone kare maadi." },
    ur: { word: "فون کال", phrase: "براہ کرم میرے لیے ایک فون کال کر دیں۔", phonetic: "Bara-e-karam mere liye ek phone call kar dein." }
  }
};

// Number translations (1-9) across all regional languages
const REGIONAL_NUMBERS = {
  "1": { hi: "एक (१)", mai: "एक (१)", bho: "एक (१)", mr: "एक (१)", bn: "এক (১)", ta: "ஒன்று (1)", te: "ఒకటి (1)", gu: "એક (૧)", pa: "ਇੱਕ (੧)", kn: "ಒಂದು (1)", ur: "ایک (1)", phonetic: "Ek" },
  "2": { hi: "दो (२)", mai: "दू (२)", bho: "दू (२)", mr: "दोन (२)", bn: "দুই (২)", ta: "இரண்டு (2)", te: "రెండు (2)", gu: "બે (૨)", pa: "ਦੋ (੨)", kn: "ಎರಡು (2)", ur: "دو (2)", phonetic: "Do" },
  "3": { hi: "तीन (३)", mai: "तीन (३)", bho: "तीन (३)", mr: "तीन (३)", bn: "তিন (৩)", ta: "மூன்று (3)", te: "మూడు (3)", gu: "ત્રણ (૩)", pa: "ਤਿੰਨ (੩)", kn: "ಮೂರು (3)", ur: "تین (3)", phonetic: "Teen" },
  "4": { hi: "चार (४)", mai: "चारि (४)", bho: "चार (४)", mr: "चार (४)", bn: "চার (৪)", ta: "நான்கு (4)", te: "నాలుగు (4)", gu: "ચાર (૪)", pa: "ਚਾਰ (੪)", kn: "ನಾಲ್ಕು (4)", ur: "چار (4)", phonetic: "Chaar" },
  "5": { hi: "पाँच (५)", mai: "पाँच (५)", bho: "पाँच (५)", mr: "पाच (५)", bn: "পাঁচ (৫)", ta: "ஐந்து (5)", te: "ఐదు (5)", gu: "પાંચ (૫)", pa: "ਪੰਜ (੫)", kn: "ಐದು (5)", ur: "پانچ (5)", phonetic: "Paanch" },
  "6": { hi: "छह (६)", mai: "छओ (६)", bho: "छव (६)", mr: "सहा (६)", bn: "ছয় (৬)", ta: "ஆறு (6)", te: "ఆరు (6)", gu: "છ (૬)", pa: "ਛੇ (੬)", kn: "ಆರು (6)", ur: "چھ (6)", phonetic: "Chhah" },
  "7": { hi: "सात (७)", mai: "सात (७)", bho: "सात (७)", mr: "सात (७)", bn: "সাত (৭)", ta: "ஏழு (7)", te: "ఏడు (7)", gu: "સાત (૭)", pa: "ਸੱਤ (੭)", kn: "ಏಳು (7)", ur: "سات (7)", phonetic: "Saat" },
  "8": { hi: "आठ (८)", mai: "आठ (८)", bho: "आठ (८)", mr: "आठ (८)", bn: "আট (৮)", ta: "எட்டு (8)", te: "ఎనిమిది (8)", gu: "આઠ (૮)", pa: "ਅੱਠ (੮)", kn: "ಎಂಟು (8)", ur: "آٹھ (8)", phonetic: "Aath" },
  "9": { hi: "नौ (९)", mai: "नओ (९)", bho: "नौ (९)", mr: "नऊ (९)", bn: "নয় (৯)", ta: "ஒன்பது (9)", te: "తొమ్మిది (9)", gu: "નવ (૯)", pa: "ਨੌਂ (੯)", kn: "ಒಂಬತ್ತು (9)", ur: "نو (9)", phonetic: "Nau" }
};

// Enrich ISL_SIGNS keywords with Hindi, Maithili & phonetic words so users can search or speak in regional languages
window.ISL_SIGNS.forEach((sign) => {
  const tr = window.SIGN_TRANSLATIONS[sign.id];
  if (tr) {
    Object.values(tr).forEach((entry) => {
      const words = (entry.word + " " + entry.phonetic)
        .toLowerCase()
        .replace(/[\/!,?.]/g, " ")
        .split(/\s+/)
        .filter((w) => w.length >= 2);
      words.forEach((w) => {
        if (!sign.keywords.includes(w)) sign.keywords.push(w);
      });
    });
  }
});

/**
 * Returns localized translation { langCode, langName, nativeName, flag, word, phrase, phonetic, voiceLang, fallbackVoice }
 * for any ISL sign (conversational, alphabet letter, number, or custom sign).
 */
window.getSignTranslation = function (signObj, langCode = "hi") {
  if (!signObj) return null;
  const langMeta =
    window.SIGN_LANGUAGES.find((l) => l.code === langCode) ||
    window.SIGN_LANGUAGES[0];

  if (langCode === "en") {
    return {
      langCode: "en",
      langName: "English",
      nativeName: "English",
      flag: "🇬🇧",
      word: signObj.word,
      phrase: signObj.spokenPhrase,
      phonetic: signObj.spokenPhrase,
      voiceLang: "en-IN",
      fallbackVoice: "en-IN"
    };
  }

  // 1. Direct match in SIGN_TRANSLATIONS
  const direct = window.SIGN_TRANSLATIONS[signObj.id];
  if (direct && direct[langCode]) {
    return {
      langCode,
      langName: langMeta.name,
      nativeName: langMeta.nativeName,
      flag: langMeta.flag,
      word: direct[langCode].word,
      phrase: direct[langCode].phrase,
      phonetic: direct[langCode].phonetic,
      voiceLang: langMeta.voiceLang,
      fallbackVoice: langMeta.fallbackVoice || "hi-IN"
    };
  }

  // 2. ISL Numbers (1-9)
  if (signObj.category === "numbers" && signObj.letterChar) {
    const numEntry = REGIONAL_NUMBERS[signObj.letterChar];
    if (numEntry && numEntry[langCode]) {
      const numWord = numEntry[langCode];
      return {
        langCode,
        langName: langMeta.name,
        nativeName: langMeta.nativeName,
        flag: langMeta.flag,
        word: `${numWord}`,
        phrase: `${numWord} (${signObj.spokenPhrase})`,
        phonetic: `Number ${signObj.letterChar}, ${numEntry.phonetic}`,
        voiceLang: langMeta.voiceLang,
        fallbackVoice: langMeta.fallbackVoice || "hi-IN"
      };
    }
  }

  // 3. ISL Alphabet Letters (A-Z)
  if (signObj.category === "alphabet" && signObj.letterChar) {
    const ch = signObj.letterChar;
    const letterLabels = {
      hi: { w: `अक्षर ${ch}`, p: `सांकेतिक अक्षर ${ch}`, ph: `Akshar ${ch}` },
      mai: { w: `अक्षर ${ch}`, p: `सांकेतिक अक्षर ${ch}`, ph: `Akshar ${ch}` },
      bho: { w: `अक्षर ${ch}`, p: `इशारा अक्षर ${ch}`, ph: `Akshar ${ch}` },
      mr: { w: `अक्षर ${ch}`, p: `सांकेतिक अक्षर ${ch}`, ph: `Akshar ${ch}` },
      bn: { w: `অক্ষর ${ch}`, p: `ইশারা অক্ষর ${ch}`, ph: `Okkhor ${ch}` },
      ta: { w: `எழுத்து ${ch}`, p: `சைகை எழுத்து ${ch}`, ph: `Ezhuthu ${ch}` },
      te: { w: `అక్షరం ${ch}`, p: `సైగ అక్షరం ${ch}`, ph: `Aksharam ${ch}` },
      gu: { w: `અક્ષર ${ch}`, p: `સાંકેતિક અક્ષર ${ch}`, ph: `Akshar ${ch}` },
      pa: { w: `ਅੱਖਰ ${ch}`, p: `ਇਸ਼ਾਰਾ ਅੱਖਰ ${ch}`, ph: `Akkhar ${ch}` },
      kn: { w: `ಅಕ್ಷರ ${ch}`, p: `ಸಂಜ್ಞೆ ಅಕ್ಷರ ${ch}`, ph: `Akshara ${ch}` },
      ur: { w: `حرف ${ch}`, p: `اشارتی حرف ${ch}`, ph: `Harf ${ch}` }
    };
    const lObj = letterLabels[langCode] || { w: signObj.word, p: signObj.spokenPhrase, ph: signObj.spokenPhrase };
    return {
      langCode,
      langName: langMeta.name,
      nativeName: langMeta.nativeName,
      flag: langMeta.flag,
      word: lObj.w,
      phrase: lObj.p,
      phonetic: lObj.ph,
      voiceLang: langMeta.voiceLang,
      fallbackVoice: langMeta.fallbackVoice || "hi-IN"
    };
  }

  // 4. Custom Signs
  return {
    langCode,
    langName: langMeta.name,
    nativeName: langMeta.nativeName,
    flag: langMeta.flag,
    word: signObj.word,
    phrase: signObj.spokenPhrase,
    phonetic: signObj.spokenPhrase,
    voiceLang: langMeta.voiceLang,
    fallbackVoice: langMeta.fallbackVoice || "hi-IN"
  };
};

/**
 * Returns an array of translations for a sign across all 12 supported languages.
 */
window.getSignAllTranslations = function (signObj) {
  if (!signObj) return [];
  return window.SIGN_LANGUAGES.map((l) => window.getSignTranslation(signObj, l.code));
};

/**
 * Renders interactive Multi-Language Translation Cards HTML for any detected or selected sign.
 */
window.renderMultiLangCardsHTML = function (signObj, activeLangSetting = "en_hi") {
  if (!signObj) return "";
  const all = window.getSignAllTranslations(signObj);
  return all
    .map((tr) => {
      const isHighlighted =
        activeLangSetting === tr.langCode ||
        (activeLangSetting === "en_hi" && (tr.langCode === "hi" || tr.langCode === "en")) ||
        (activeLangSetting === "en_mai" && (tr.langCode === "mai" || tr.langCode === "en")) ||
        (activeLangSetting === "multi_top" && ["hi", "mai", "en"].includes(tr.langCode));
      return `
        <button type="button" class="multilang-chip ${isHighlighted ? "active-lang" : ""}" data-lang="${tr.langCode}" aria-label="Listen to ${signObj.word} in ${tr.langName} (${tr.nativeName}): ${tr.phrase}">
          <div class="multilang-chip-top">
            <span class="multilang-name">${tr.flag} <strong>${tr.langName}</strong> <small>(${tr.nativeName})</small></span>
            <span class="multilang-play-icon" aria-hidden="true">🔊</span>
          </div>
          <div class="multilang-word">${tr.word}</div>
          <div class="multilang-phrase">"${tr.phrase}"</div>
        </button>
      `;
    })
    .join("");
};

/**
 * Converts a sequence of ISL Sign Glosses into a natural sentence in any supported regional language.
 */
const _originalNaturalizeEnglish = window.naturalizeISLGloss;
window.naturalizeISLGloss = function (signWordsArray, langCode = "en") {
  if (!signWordsArray || !signWordsArray.length) return "";
  if (!langCode || langCode === "en") {
    return _originalNaturalizeEnglish(signWordsArray);
  }
  if (langCode === "en_hi") {
    return `${_originalNaturalizeEnglish(signWordsArray)} | ${window.naturalizeISLGloss(signWordsArray, "hi")}`;
  }
  if (langCode === "en_mai") {
    return `${_originalNaturalizeEnglish(signWordsArray)} | ${window.naturalizeISLGloss(signWordsArray, "mai")}`;
  }
  if (langCode === "multi_top") {
    return `${_originalNaturalizeEnglish(signWordsArray)} | ${window.naturalizeISLGloss(signWordsArray, "hi")} | ${window.naturalizeISLGloss(signWordsArray, "mai")}`;
  }

  // Match each word in signWordsArray back to its ISL_SIGNS object and extract regional phrase/word
  const matchedSigns = signWordsArray.map((w) => {
    const clean = w.replace(/\/.*/g, "").trim().toLowerCase();
    return window.ISL_SIGNS.find(
      (s) => s.word.toLowerCase() === w.toLowerCase() || s.word.toLowerCase().startsWith(clean)
    );
  });

  if (matchedSigns.length === 1 && matchedSigns[0]) {
    const tr = window.getSignTranslation(matchedSigns[0], langCode);
    return tr ? tr.phrase : _originalNaturalizeEnglish(signWordsArray);
  }

  const parts = signWordsArray.map((w, idx) => {
    const sign = matchedSigns[idx];
    if (sign) {
      const tr = window.getSignTranslation(sign, langCode);
      return tr ? tr.word.replace(/\/.*/g, "").trim() : w;
    }
    return w;
  });

  return parts.join(" • ");
};

