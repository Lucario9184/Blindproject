/**
 * data.js — Indian Sign Language (ISL) Dataset & Custom SVG Hand Pose Generator
 * Tailored for both Deaf Visual Comprehension and Blind Tactile Audio Descriptions.
 * Includes 32 Conversational & Daily Signs, 26 Two-Handed Alphabet Letters (A-Z),
 * and 9 ISL Numbers (1-9), plus support for User-Trained Custom Signs.
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
    word: "Care / Love",
    keywords: ["love", "care", "family", "heart", "iloveyou", "affection"],
    category: "greetings",
    emoji: "🤟",
    hands: "1-Handed Sign",
    spokenPhrase: "I care about you.",
    tactileGuide: "Extend your thumb, index finger, and pinky finger straight out while keeping your middle and ring fingers curled tightly into your palm.",
    poseType: "ily_hand",
    simLabel: "🤟 Care / Love"
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
    spokenPhrase: "Mother.",
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
    spokenPhrase: "Father.",
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
// Note: Indian Sign Language (ISL) uses distinctive TWO-HANDED finger-spelling for most letters!
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

/**
 * Helper to draw an articulated 5-finger SVG hand given finger extension states [thumb, index, middle, ring, pinky]
 */
function renderArticulatedHandSVG(fingerStates, { x = 100, y = 105, scale = 1, mirror = false, highlightColor = "#fde047" } = {}) {
  const [th, idx, mid, rng, pnk] = fingerStates;
  const flip = mirror ? -1 : 1;

  // Finger X offsets relative to palm center
  const fConfigs = [
    { val: idx, dx: -16, baseLen: 36, label: "I" },
    { val: mid, dx: -5, baseLen: 41, label: "M" },
    { val: rng, dx: 6, baseLen: 37, label: "R" },
    { val: pnk, dx: 17, baseLen: 29, label: "P" }
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

  // Thumb geometry
  const thumbAngle = th >= 0.75 ? -38 * flip : th >= 0.35 ? -18 * flip : 12 * flip;
  const thumbLen = th >= 0.75 ? 28 : 18;
  const thumbStroke = th >= 0.75 ? highlightColor : "#64748b";
  const thumbX = -24 * flip;

  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <!-- Wrist & Palm -->
      <rect x="-14" y="16" width="28" height="16" rx="4" fill="#0f172a" stroke="#475569" stroke-width="2"/>
      <rect x="-23" y="-20" width="46" height="40" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
      <!-- 4 Fingers -->
      ${fingersSvg}
      <!-- Thumb -->
      <g transform="translate(${thumbX}, 0) rotate(${thumbAngle})">
        <rect x="-5" y="${-thumbLen}" width="10" height="${thumbLen + 6}" rx="5" fill="#1e293b" stroke="${thumbStroke}" stroke-width="2.5"/>
      </g>
    </g>
  `;
}

/**
 * Map a sign's poseType / fingerState to articulated finger arrays & motion annotations
 */
function getPoseVisualSpec(signObj) {
  if (signObj.fingerState && Array.isArray(signObj.fingerState)) {
    return { hands: [signObj.fingerState], motion: "Hold Steady" };
  }
  const p = signObj.poseType || "";
  switch (p) {
    case "namaste":
      return { hands: [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1]], motion: "Join Palms (Namaste)" };
    case "chin_forward":
      return { hands: [[1, 1, 1, 1, 1]], motion: "Chin ➔ Forward" };
    case "thumb_up":
      return { hands: [[1, 0, 0, 0, 0]], motion: "Thumb Up + Nod" };
    case "thumb_down":
      return { hands: [[1, 0, 0, 0, 0]], motion: "Thumb Down" };
    case "ok_sign":
      return { hands: [[0.5, 0.5, 1, 1, 1]], motion: "Index+Thumb Circle" };
    case "wave_no":
      return { hands: [[0, 1, 0, 0, 0]], motion: "Wave Left ⇄ Right" };
    case "chest_circle":
    case "fist_chest":
      return { hands: [p === "fist_chest" ? [0, 0, 0, 0, 0] : [1, 1, 1, 1, 1]], motion: "Circular on Chest ↻" };
    case "clasp_hands":
      return { hands: [[0.5, 1, 0, 0, 0], [0.5, 1, 0, 0, 0]], motion: "Clasp / Hook Hands" };
    case "ily_hand":
      return { hands: [[1, 1, 0, 0, 1]], motion: "Thumb + Index + Pinky" };
    case "help_lift":
      return { hands: [[1, 1, 1, 1, 1], [1, 0, 0, 0, 0]], motion: "Lift Both Upward ↑" };
    case "eyes_point":
      return { hands: [[0, 1, 1, 0, 0]], motion: "V-Fingers at Eyes" };
    case "ear_to_mouth":
    case "temple_point":
      return { hands: [[0, 1, 0, 0, 0]], motion: p === "ear_to_mouth" ? "Ear ➔ Mouth" : "Flick at Temple ↑" };
    case "drink_cup":
      return { hands: [[0.5, 0.5, 0.5, 0.5, 0.5]], motion: "C-Cup to Mouth" };
    case "eat_bunch":
    case "money_rub":
      return { hands: [[0.5, 0.5, 0.5, 0, 0]], motion: p === "eat_bunch" ? "Bunched Tips to Mouth" : "Rub Thumb & Tips" };
    case "palms_up_query":
    case "alarm_wave":
    case "roof_hands":
      return { hands: [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1]], motion: p === "roof_hands" ? "Fingertips Touch /\\" : "Both Hands Active" };
    case "open_palm_stop":
    case "chin_thumb":
    case "forehead_thumb":
      return { hands: [[1, 1, 1, 1, 1]], motion: "5 Digits Extended" };
    case "pinky_up":
    case "num_6":
      return { hands: [[0, 0, 0, 0, 1]], motion: "Pinky Extended Up" };
    case "phone_hand":
      return { hands: [[1, 0, 0, 0, 1]], motion: "Thumb + Pinky (Phone)" };
    case "wrist_pulse":
    case "two_finger_cross":
      return { hands: [[0, 1, 1, 0, 0], [0, 1, 1, 0, 0]], motion: "2-Finger Contact" };
    case "index_pain":
    case "wrist_watch":
      return { hands: [[0, 1, 0, 0, 0], [0, 1, 0, 0, 0]], motion: "Index Point / Tap" };
    case "num_1":
      return { hands: [[0, 1, 0, 0, 0]], motion: "Index Straight Up" };
    case "num_2":
      return { hands: [[0, 1, 1, 0, 0]], motion: "Index + Middle V" };
    case "num_3":
      return { hands: [[0, 1, 1, 1, 0]], motion: "3 Fingers Up" };
    case "num_4":
      return { hands: [[0, 1, 1, 1, 1]], motion: "4 Fingers Up" };
    case "num_5":
      return { hands: [[1, 1, 1, 1, 1]], motion: "All 5 Digits Open" };
    case "num_7":
      return { hands: [[0, 0.5, 0, 0, 0]], motion: "Hooked Index" };
    case "num_8":
      return { hands: [[1, 1, 1, 0, 0]], motion: "Thumb + Index + Middle" };
    case "num_9":
      return { hands: [[1, 1, 1, 1, 0]], motion: "4 Digits Extended" };
    default: {
      const isTwo = (signObj.hands || "").includes("2");
      return {
        hands: isTwo ? [[1, 1, 0, 0, 0], [1, 1, 1, 1, 1]] : [[1, 1, 1, 1, 1]],
        motion: signObj.hands || "ISL Posture"
      };
    }
  }
}

/**
 * Generates a high-contrast, anatomically articulated Deaf-friendly SVG illustration for any ISL sign or letter.
 */
window.renderISLSignSVG = function (signObj) {
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
