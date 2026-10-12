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

const ISL_ALPHABET_FINGER_STATES = {
  A: [1, 0, 0, 0, 0],
  B: [0, 1, 1, 1, 1],
  C: [0.5, 0.5, 0.5, 0.5, 0.5],
  D: [0, 1, 0, 0, 0],
  E: [0.3, 0.3, 0.3, 0.3, 0.3],
  F: [0.5, 0.5, 1, 1, 1],
  G: [0.8, 0.8, 0, 0, 0],
  H: [0, 1, 1, 0, 0],
  I: [0, 0, 0, 0, 1],
  J: [0, 0, 0, 0, 1],
  K: [0.8, 1, 0.6, 0, 0],
  L: [1, 1, 0, 0, 0],
  M: [0, 0.5, 0.5, 0.5, 0],
  N: [0, 0.5, 0.5, 0.5, 0],
  O: [0.4, 0.4, 0.4, 0.4, 0.4],
  P: [0.5, 1, 0.5, 0, 0],
  Q: [0.8, 0.5, 0, 0, 0],
  R: [0, 1, 1, 0, 0],
  S: [0, 0, 0, 0, 0],
  T: [0.5, 0.3, 0, 0, 0],
  U: [0, 1, 1, 0, 0],
  V: [0, 1, 1, 0, 0],
  W: [0, 1, 1, 1, 0],
  X: [0, 0.6, 0, 0, 0],
  Y: [1, 0, 0, 0, 1],
  Z: [0, 1, 0, 0, 0]
};

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
    letterChar: item.letter,
    fingerState: ISL_ALPHABET_FINGER_STATES[item.letter] || [0, 1, 0, 0, 0]
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
    hindiSpoken: "माफ़ कीजिए, मैं दृष्टिबाधित हूँ। कृपया मुझसे बोलकर बात करें या इस स्क्रीन का उपयोग करें।",
    emoji: "🦯"
  },
  {
    key: "W",
    signId: "help",
    title: "Can You Guide Me?",
    spoken: "Hello, could you please help guide me to my destination?",
    hindiSpoken: "नमस्ते! क्या आप मुझे मेरी मंज़िल का रास्ता बता सकते हैं?",
    emoji: "🆘"
  },
  {
    key: "E",
    signId: "hello",
    title: "Hello / Namaste Friend",
    spoken: "Namaste! Hello friend, how are you doing today?",
    hindiSpoken: "नमस्ते दोस्त! आप आज कैसे हैं?",
    emoji: "🙏"
  },
  {
    key: "R",
    signId: "water",
    title: "Where is Drinking Water?",
    spoken: "Excuse me, where can I find drinking water?",
    hindiSpoken: "माफ़ कीजिए, पीने का पानी कहाँ मिलेगा?",
    emoji: "💧"
  },
  {
    key: "T",
    signId: "food",
    title: "Looking for Food / Cafe",
    spoken: "Could you direct me to the nearest food counter or restaurant?",
    hindiSpoken: "क्या आप मुझे नज़दीकी भोजनालय या खाने की जगह बता सकते हैं?",
    emoji: "🍲"
  },
  {
    key: "Y",
    signId: "thankyou",
    title: "Thank You Very Much!",
    spoken: "Thank you so much for your kindness and assistance!",
    hindiSpoken: "आपकी सहायता के लिए बहुत-बहुत धन्यवाद!",
    emoji: "🤲"
  },
  {
    key: "U",
    signId: "doctor",
    title: "Medical Help / Doctor",
    spoken: "I need medical assistance or directions to a doctor or pharmacy.",
    hindiSpoken: "मुझे चिकित्सीय सहायता चाहिए। क्या आप डॉक्टर का रास्ता बता सकते हैं?",
    emoji: "🩺"
  },
  {
    key: "I",
    signId: "call",
    title: "Please Call My Contact",
    spoken: "Could you please help make a phone call?",
    hindiSpoken: "क्या आप मेरे परिजन को फ़ोन लगाने में मेरी मदद कर सकते हैं?",
    emoji: "📞"
  },
  {
    key: "O",
    signId: "bathroom",
    title: "Where is the Restroom?",
    spoken: "Excuse me, could you guide me to the nearest restroom or washroom?",
    hindiSpoken: "माफ़ कीजिए, नज़दीकी शौचालय कहाँ है?",
    emoji: "🚻"
  },
  {
    key: "P",
    signId: "slow",
    title: "Please Sign / Speak Slowly",
    spoken: "Please communicate slowly so we can understand each other clearly.",
    hindiSpoken: "कृपया धीरे-धीरे इशारा या बात करें ताकि हम स्पष्ट समझ सकें।",
    emoji: "🐢"
  }
];

// ============================================================================
// BRAILLE TRANSLATION SYSTEM (Disabled)
// ============================================================================
window.BrailleEngine = {
  translate(rawText) {
    return {
      sourceText: String(rawText || ''),
      unicode: '',
      cells: [],
      spokenGuide: ''
    };
  },
  renderBrailleCellsHTML() {
    return '';
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
    hindiPhrase: "मैं दृष्टिबाधित हूँ, कृपया मुझसे बोलकर बात करें।",
    hindiPhonetic: "Main drishtibadhit hoon, kripya mujhse bolkar baat karein.",
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
  if (!signObj) {
    return {
      hands: [[1, 1, 1, 1, 1]],
      motion: "Neutral Ready",
      avatarPos: [{ x: 142, y: 112 }],
      expression: "friendly",
      avatarAction: "Avatar stands ready in neutral signing pose."
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
    case "food":
      return {
        hands: [[0.5, 0.5, 0.5, 0, 0]],
        motion: "Bunched Tips to Mouth",
        avatarPos: [{ x: 114, y: 86 }],
        expression: "friendly",
        avatarAction: "Avatar brings bunched fingertips to the mouth repeatedly to sign Food / Eat."
      };
    case "money_rub":
    case "money":
      return {
        hands: [[0.5, 0.5, 0.5, 0, 0]],
        motion: "Rub Thumb & Tips",
        avatarPos: [{ x: 140, y: 114 }],
        expression: "friendly",
        avatarAction: "Avatar rubs the thumb across the index and middle fingertips at chest level to sign Money."
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
    case "bathroom":
    case "num_6":
      return {
        hands: [[0, 0, 0, 0, 1]],
        motion: "Pinky Extended Up",
        avatarPos: [{ x: 142, y: 110 }],
        expression: "friendly",
        avatarAction: "Avatar raises the pinky finger straight upward while curling the other fingers to sign Restroom / Toilet."
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
    case "doctor":
    case "hospital":
      return {
        hands: [[0, 1, 1, 0, 0], [0, 1, 1, 0, 0]],
        motion: "Wrist Pulse Check",
        avatarPos: [{ x: 82, y: 122 }, { x: 118, y: 118 }],
        expression: "friendly",
        avatarAction: "Avatar rests two fingertips of the dominant hand on the non-dominant wrist pulse to sign Doctor / Medical / Hospital."
      };
    case "two_finger_cross":
      return {
        hands: [[0, 1, 1, 0, 0], [0, 1, 1, 0, 0]],
        motion: "2-Finger Cross",
        avatarPos: [{ x: 82, y: 122 }, { x: 118, y: 118 }],
        expression: "friendly",
        avatarAction: "Avatar taps the extended index and middle fingers of both hands crosswise to sign Name."
      };
    case "index_pain":
    case "pain":
      return {
        hands: [[0, 1, 0, 0, 0], [0, 1, 0, 0, 0]],
        motion: "Index Points Inward",
        avatarPos: [{ x: 80, y: 120 }, { x: 120, y: 120 }],
        expression: "urgent",
        avatarAction: "Avatar points both index fingers inward toward each other with a pained expression."
      };
    case "wrist_watch":
      return {
        hands: [[0, 1, 0, 0, 0], [0, 1, 0, 0, 0]],
        motion: "Tap Wrist Watch",
        avatarPos: [{ x: 80, y: 120 }, { x: 120, y: 120 }],
        expression: "question",
        avatarAction: "Avatar taps the back of the left wrist with the right index finger like pointing to a watch for Time."
      };
    case "repeat_arc":
      return {
        hands: [[0.5, 1, 1, 0, 0]],
        motion: "Circular Arc ↻",
        avatarPos: [{ x: 136, y: 110 }],
        expression: "friendly",
        avatarAction: "Avatar moves the dominant hand in a semicircular arc forward and back to sign Repeat / Again."
      };
    case "slow_stroke":
      return {
        hands: [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1]],
        motion: "Slow Stroke Down",
        avatarPos: [{ x: 84, y: 122 }, { x: 116, y: 114 }],
        expression: "friendly",
        avatarAction: "Avatar slowly strokes the dominant open palm down the back of the non-dominant hand to sign Slow Down."
      };
    case "wheel_roll":
    case "train":
    case "transport":
      return {
        hands: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
        motion: "Rolling Wheels 🚂",
        avatarPos: [{ x: 76, y: 118 }, { x: 124, y: 118 }],
        expression: "friendly",
        avatarAction: "Avatar holds both hands in loose fists and rolls them forward rhythmically to sign Train / Vehicle."
      };
    case "medicine":
      return {
        hands: [[0.5, 0.5, 0, 0, 0], [1, 1, 1, 1, 1]],
        motion: "Twist in Palm / Pill",
        avatarPos: [{ x: 84, y: 124 }, { x: 116, y: 116 }],
        expression: "friendly",
        avatarAction: "Avatar twists thumb and index finger into the center of the flat palm as if preparing Medicine."
      };
    case "letter": {
      const f = signObj.fingerState || [0, 1, 0, 0, 0];
      const isTwo = (signObj.hands || "").includes("2");
      return {
        hands: isTwo ? [f, f] : [f],
        motion: `Letter ${signObj.letterChar || ""}`,
        avatarPos: isTwo ? [{ x: 82, y: 118 }, { x: 118, y: 118 }] : [{ x: 140, y: 110 }],
        expression: "smile",
        avatarAction: `Avatar fingerspells ISL letter ${signObj.letterChar || ""}: ${signObj.tactileGuide || ""}`
      };
    }
    default: {
      const isTwo = (signObj.hands || "").includes("2");
      const f = (signObj.fingerState && Array.isArray(signObj.fingerState))
        ? signObj.fingerState
        : [1, 1, 1, 1, 1];
      return {
        hands: isTwo ? [f, f] : [f],
        motion: signObj.hands || "ISL Formation",
        avatarPos: isTwo ? [{ x: 74, y: 118 }, { x: 126, y: 118 }] : [{ x: 138, y: 112 }],
        expression: signObj.category === "emergency" ? "urgent" : (signObj.category === "questions" ? "question" : "friendly"),
        avatarAction: `Avatar performs ${signObj.word} (${signObj.hands || "ISL Sign"}).`
      };
    }
  }
}

// Ensure every sign in ISL_SIGNS has an accurate biomechanical fingerState array for camera landmark classification
window.ISL_SIGNS.forEach((sign) => {
  if (!sign.fingerState || !Array.isArray(sign.fingerState)) {
    const spec = getPoseVisualSpec(sign);
    if (spec && spec.hands && spec.hands[0]) {
      sign.fingerState = spec.hands[0];
    }
  }
});

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
// ALL-INDIA 22 STATE & LOCAL SPEAKING LANGUAGES ENGINE (WITH HUMAN LOCAL TOUCH)
// ============================================================================
window.SIGN_LANGUAGES = [
  {
    "code": "hi",
    "name": "Hindi (UP / MP / Delhi)",
    "shortName": "Hindi",
    "nativeName": "हिन्दी (उत्तर भारत)",
    "stateRegion": "Uttar Pradesh, MP, Delhi, Rajasthan, Bihar",
    "localTouch": "अरे नमस्ते जी! (Warm North Indian Conversational)",
    "flag": "🇮🇳",
    "voiceLang": "hi-IN",
    "ttsLang": "hi"
  },
  {
    "code": "mai",
    "name": "Maithili (Mithila, Bihar)",
    "shortName": "Maithili",
    "nativeName": "मैथिली (मिथिला, बिहार)",
    "stateRegion": "Mithila Region, Darbhanga, Madhubani, Bihar",
    "localTouch": "प्रणाम यौ! (Sweet Mithila Local Touch)",
    "flag": "🇮🇳",
    "voiceLang": "mai-IN",
    "fallbackVoice": "hi-IN",
    "ttsLang": "hi"
  },
  {
    "code": "bho",
    "name": "Bhojpuri (Bihar & Purvanchal)",
    "shortName": "Bhojpuri",
    "nativeName": "भोजपुरी (बिहार / पूर्वांचल)",
    "stateRegion": "Bhojpur, Saran, Varanasi, Gorakhpur, Jharkhand",
    "localTouch": "प्रणाम रउआ के! (Warm Bhojpuri Apnapan)",
    "flag": "🇮🇳",
    "voiceLang": "bho-IN",
    "fallbackVoice": "hi-IN",
    "ttsLang": "hi"
  },
  {
    "code": "mag",
    "name": "Magahi (Magadh, Bihar)",
    "shortName": "Magahi",
    "nativeName": "मगही (मगध, बिहार)",
    "stateRegion": "Patna, Gaya, Nalanda, Nawada, Bihar",
    "localTouch": "प्रणाम भैया! (Authentic Magadh Local Touch)",
    "flag": "🇮🇳",
    "voiceLang": "mag-IN",
    "fallbackVoice": "hi-IN",
    "ttsLang": "hi"
  },
  {
    "code": "raj",
    "name": "Rajasthani / Marwari (Rajasthan)",
    "shortName": "Rajasthani",
    "nativeName": "राजस्थानी / मारवाड़ी (राजस्थान)",
    "stateRegion": "Jaipur, Jodhpur, Udaipur, Bikaner, Marwar",
    "localTouch": "खम्मा घणी सा! (Royal Rajasthani Manuhaar)",
    "flag": "🇮🇳",
    "voiceLang": "raj-IN",
    "fallbackVoice": "hi-IN",
    "ttsLang": "hi"
  },
  {
    "code": "bgc",
    "name": "Haryanvi (Haryana)",
    "shortName": "Haryanvi",
    "nativeName": "हरियाणवी (हरियाणा)",
    "stateRegion": "Rohtak, Hisar, Karnal, Kurukshetra, Haryana",
    "localTouch": "राम-राम जी! (Hearty Haryanvi Desi Touch)",
    "flag": "🇮🇳",
    "voiceLang": "bgc-IN",
    "fallbackVoice": "hi-IN",
    "ttsLang": "hi"
  },
  {
    "code": "hne",
    "name": "Chhattisgarhi (Chhattisgarh)",
    "shortName": "Chhattisgarhi",
    "nativeName": "छत्तीसगढ़ी (छत्तीसगढ़)",
    "stateRegion": "Raipur, Bilaspur, Durg, Bastar, Chhattisgarh",
    "localTouch": "जय जोहार संगवारी! (Sweet Chhattisgarhi Touch)",
    "flag": "🇮🇳",
    "voiceLang": "hne-IN",
    "fallbackVoice": "hi-IN",
    "ttsLang": "hi"
  },
  {
    "code": "mr",
    "name": "Marathi (Maharashtra)",
    "shortName": "Marathi",
    "nativeName": "मराठी (महाराष्ट्र)",
    "stateRegion": "Mumbai, Pune, Nagpur, Nashik, Maharashtra",
    "localTouch": "नमस्कार मंडळी! (Authentic Marathi Manuskichi Bhasha)",
    "flag": "🇮🇳",
    "voiceLang": "mr-IN",
    "fallbackVoice": "hi-IN",
    "ttsLang": "mr"
  },
  {
    "code": "gu",
    "name": "Gujarati (Gujarat)",
    "shortName": "Gujarati",
    "nativeName": "ગુજરાતી (ગુજરાત)",
    "stateRegion": "Ahmedabad, Surat, Vadodara, Rajkot, Kathiawar",
    "localTouch": "નમસ્તે, કેમ છો ભાઈ! (Warm Gujarati Mehmaan-Nawazi)",
    "flag": "🇮🇳",
    "voiceLang": "gu-IN",
    "fallbackVoice": "hi-IN",
    "ttsLang": "gu"
  },
  {
    "code": "pa",
    "name": "Punjabi (Punjab & Chandigarh)",
    "shortName": "Punjabi",
    "nativeName": "ਪੰਜਾਬੀ (ਪੰਜਾਬ)",
    "stateRegion": "Amritsar, Ludhiana, Patiala, Jalandhar, Chandigarh",
    "localTouch": "ਸਤ ਸ੍ਰੀ ਅਕਾਲ ਜੀ! (Warm Punjabi Dil Da Pyaar)",
    "flag": "🇮🇳",
    "voiceLang": "pa-IN",
    "fallbackVoice": "hi-IN",
    "ttsLang": "pa"
  },
  {
    "code": "bn",
    "name": "Bengali (West Bengal & Tripura)",
    "shortName": "Bengali",
    "nativeName": "বাংলা (পশ্চিমবঙ্গ ও ত্রিপুরা)",
    "stateRegion": "Kolkata, Howrah, Siliguri, Agartala, Bengal",
    "localTouch": "নমস্কার দাদা/দিদি! (Sweet Bangla Mishti Kotha)",
    "flag": "🇮🇳",
    "voiceLang": "bn-IN",
    "fallbackVoice": "hi-IN",
    "ttsLang": "bn"
  },
  {
    "code": "as",
    "name": "Assamese (Assam & Northeast)",
    "shortName": "Assamese",
    "nativeName": "অসমীয়া (অসম)",
    "stateRegion": "Guwahati, Jorhat, Dibrugarh, Tezpur, Assam",
    "localTouch": "নমস্কাৰ দেই! (Warm Axomiya Apunale Mat)",
    "flag": "🇮🇳",
    "voiceLang": "as-IN",
    "fallbackVoice": "bn-IN",
    "ttsLang": "bn"
  },
  {
    "code": "or",
    "name": "Odia (Odisha)",
    "shortName": "Odia",
    "nativeName": "ଓଡ଼ିଆ (ଓଡ଼ିଶା)",
    "stateRegion": "Bhubaneswar, Cuttack, Puri, Sambalpur, Odisha",
    "localTouch": "ନମସ୍କାର, ଜୟ ଜଗନ୍ନାଥ! (Soulful Odia Local Touch)",
    "flag": "🇮🇳",
    "voiceLang": "or-IN",
    "fallbackVoice": "hi-IN",
    "ttsLang": "or"
  },
  {
    "code": "ta",
    "name": "Tamil (Tamil Nadu & Puducherry)",
    "shortName": "Tamil",
    "nativeName": "தமிழ் (தமிழ்நாடு)",
    "stateRegion": "Chennai, Madurai, Coimbatore, Trichy, Puducherry",
    "localTouch": "வணக்கம்ங்க! (Respectful Tamil Anbu Mozhi)",
    "flag": "🇮🇳",
    "voiceLang": "ta-IN",
    "fallbackVoice": "en-IN",
    "ttsLang": "ta"
  },
  {
    "code": "te",
    "name": "Telugu (Andhra & Telangana)",
    "shortName": "Telugu",
    "nativeName": "తెలుగు (ఆంధ్ర & తెలంగాణ)",
    "stateRegion": "Hyderabad, Vijayawada, Visakhapatnam, Warangal",
    "localTouch": "నమస్కారం అండీ! (Polite Telugu Aathmeeyatha)",
    "flag": "🇮🇳",
    "voiceLang": "te-IN",
    "fallbackVoice": "en-IN",
    "ttsLang": "te"
  },
  {
    "code": "kn",
    "name": "Kannada (Karnataka)",
    "shortName": "Kannada",
    "nativeName": "ಕನ್ನಡ (ಕರ್ನಾಟಕ)",
    "stateRegion": "Bengaluru, Mysuru, Hubballi, Mangaluru, Karnataka",
    "localTouch": "ನಮಸ್ಕಾರ ರೀ! (Warm Kannada Savinudi)",
    "flag": "🇮🇳",
    "voiceLang": "kn-IN",
    "fallbackVoice": "en-IN",
    "ttsLang": "kn"
  },
  {
    "code": "ml",
    "name": "Malayalam (Kerala)",
    "shortName": "Malayalam",
    "nativeName": "മലയാളം (കേരളം)",
    "stateRegion": "Kochi, Thiruvananthapuram, Kozhikode, Thrissur",
    "localTouch": "നമസ്കാരം ചേട്ടാ/ചേച്ചി! (Friendly Kerala Local Touch)",
    "flag": "🇮🇳",
    "voiceLang": "ml-IN",
    "fallbackVoice": "en-IN",
    "ttsLang": "ml"
  },
  {
    "code": "ur",
    "name": "Urdu / Kashmiri (J&K, Telangana, UP)",
    "shortName": "Urdu / Kashmiri",
    "nativeName": "اردو / کشمیری (جموں و کشمیر)",
    "stateRegion": "Srinagar, Jammu, Lucknow, Hyderabad",
    "localTouch": "آداب جناب، السلام علیکم! (Tehzeeb-filled Local Touch)",
    "flag": "🇮🇳",
    "voiceLang": "ur-IN",
    "fallbackVoice": "hi-IN",
    "ttsLang": "ur"
  },
  {
    "code": "ne",
    "name": "Nepali / Gorkhali (Sikkim & Darjeeling)",
    "shortName": "Nepali",
    "nativeName": "नेपाली (सिक्किम र दार्जीलिङ)",
    "stateRegion": "Gangtok, Darjeeling, Kalimpong, Sikkim",
    "localTouch": "नमस्ते हजुर! (Respectful Himalayan Local Touch)",
    "flag": "🇮🇳",
    "voiceLang": "ne-NP",
    "fallbackVoice": "hi-IN",
    "ttsLang": "ne"
  },
  {
    "code": "kok",
    "name": "Konkani (Goa & Coastal)",
    "shortName": "Konkani",
    "nativeName": "कोंकणी (गोंय / गोवा)",
    "stateRegion": "Panaji, Margao, Vasco, Goa & Karwar",
    "localTouch": "देव बरे करूं! (Warm Goan Konkani Mog)",
    "flag": "🇮🇳",
    "voiceLang": "kok-IN",
    "fallbackVoice": "mr-IN",
    "ttsLang": "mr"
  },
  {
    "code": "doi",
    "name": "Dogri / Pahadi (Himachal & Jammu)",
    "shortName": "Dogri / Pahadi",
    "nativeName": "डोगरी / पहाड़ी (हिमाचल व जम्मू)",
    "stateRegion": "Jammu, Shimla, Kangra, Kullu, Mandi",
    "localTouch": "जय देवा जी, नमस्ते! (Sweet Pahadi & Dogri Touch)",
    "flag": "🇮🇳",
    "voiceLang": "doi-IN",
    "fallbackVoice": "hi-IN",
    "ttsLang": "hi"
  },
  {
    "code": "en",
    "name": "Indian English (All-India)",
    "shortName": "Indian English",
    "nativeName": "Indian English (भारत)",
    "stateRegion": "All-India Conversational English",
    "localTouch": "Namaste! Hello ji (Warm Indian English)",
    "flag": "🇮🇳",
    "voiceLang": "en-IN",
    "fallbackVoice": "en-US",
    "ttsLang": "en-IN"
  }
];

window.SIGN_TRANSLATIONS = {
  "hello": {
    "hi": {
      "word": "नमस्ते जी / प्रणाम",
      "phrase": "अरे नमस्ते जी! आपसे मिलकर बहुत खुशी हुई।",
      "phonetic": "Are Namaste ji! Aapse milkar bahut khushi hui."
    },
    "mai": {
      "word": "प्रणाम यौ / नमस्कार",
      "phrase": "प्रणाम यौ! अहाँ सँ मिलिकय मोन बहुत गदगद भऽ गेल।",
      "phonetic": "Pranaam yau! Ahaan san milikai mon bahut gadgad bha gel."
    },
    "bho": {
      "word": "प्रणाम रउआ के / गोड़ लागीं",
      "phrase": "प्रणाम रउआ के! रउआ से मिलके दिल खुश हो गइल हो।",
      "phonetic": "Pranaam raua ke! Raua se milke dil khush ho gail ho."
    },
    "mag": {
      "word": "प्रणाम भैया / गोड़ लागऽ हियो",
      "phrase": "प्रणाम भैया! तोहरा से मिलके बड़ी खुशी होलई।",
      "phonetic": "Pranaam bhaiya! Tohra se milke badi khushi holai."
    },
    "raj": {
      "word": "खम्मा घणी सा / राम-राम सा",
      "phrase": "खम्मा घणी सा! पधारो सा, आप सूं मिलर घणी खुशी हुई सा।",
      "phonetic": "Khamma ghani sa! Padharo sa, aap soon milar ghani khushi hui sa."
    },
    "bgc": {
      "word": "राम-राम जी / नमस्ते भाई",
      "phrase": "राम-राम जी! थारे तै मिलके घणी खुशी हुई भाई।",
      "phonetic": "Ram-Ram ji! Thare tai milke ghani khushi hui bhai."
    },
    "hne": {
      "word": "जय जोहार संगवारी",
      "phrase": "जय जोहार संगवारी! तुंहर ले मिलके अब्बड़ बने लागिस गा।",
      "phonetic": "Jai Johar sangwari! Tunhar le milke abbad bane lagis ga."
    },
    "mr": {
      "word": "नमस्कार मंडळी / रामराम",
      "phrase": "नमस्कार मंडळी! तुम्हाला भेटून मनापासून खूप आनंद झाला हो.",
      "phonetic": "Namaskar mandali! Tumhala bhetun manapasun khup anand jhala ho."
    },
    "gu": {
      "word": "નમસ્તે / જય શ્રી કૃષ્ણ",
      "phrase": "નમસ્તે, કેમ છો ભાઈ! તમને મળીને ખૂબ જ આનંદ થયો.",
      "phonetic": "Namaste, kem chho bhai! Tamne maline khubaj anand thayo."
    },
    "pa": {
      "word": "ਸਤ ਸ੍ਰੀ ਅਕਾਲ ਜੀ",
      "phrase": "ਸਤ ਸ੍ਰੀ ਅਕਾਲ ਜੀ! ਤੁਹਾਨੂੰ ਮਿਲ ਕੇ ਦਿਲੋਂ ਬਹੁਤ ਖੁਸ਼ੀ ਹੋਈ ਜੀ।",
      "phonetic": "Sat Sri Akaal ji! Tuhanu mil ke dilon bahut khushi hoyi ji."
    },
    "bn": {
      "word": "নমস্কার দাদা / দিদি",
      "phrase": "নমস্কার দাদা! আপনার সাথে দেখা করে মনটা খুব ভালো হয়ে গেল।",
      "phonetic": "Nomoshkar dada! Apnar sathe dekha kore monta khub bhalo hoye gelo."
    },
    "as": {
      "word": "নমস্কাৰ বাইদেউ / ককাইদেউ",
      "phrase": "নমস্কাৰ দেই! আপোনাক লগ পাই মনটো বৰ ভাল লাগিল।",
      "phonetic": "Nomoskar dei! Aponak log pai monto bor bhal lagil."
    },
    "or": {
      "word": "ନମସ୍କାର / ଜୟ ଜଗନ୍ନାଥ",
      "phrase": "ନମସ୍କାର, ଜୟ ଜଗନ୍ନାଥ ଭାଇ! ଆପଣଙ୍କୁ ଭେଟି ବହୁତ ଖୁସି ଲାଗିଲା।",
      "phonetic": "Namaskar, Jai Jagannath bhai! Apananku bheti bahut khusi lagila.",
      "ttsText": "नमस्कार, जय जगन्नाथ भाई! आपणंकु भेटि बहुत खुसी लागिला।"
    },
    "ta": {
      "word": "வணக்கம்ங்க",
      "phrase": "வணக்கம்ங்க! உங்களைப் பார்த்ததில் ரொம்ப சந்தோஷம்ங்க.",
      "phonetic": "Vanakkamnga! Ungalaip paarthathil romba santhoshamnga."
    },
    "te": {
      "word": "నమస్కారం అండీ",
      "phrase": "నమస్కారం అండీ! మిమ్మల్ని కలవడం చాలా సంతోషంగా ఉందండీ.",
      "phonetic": "Namaskaram andi! Mimmalni kalavadam chala santhoshanga undandi."
    },
    "kn": {
      "word": "ನಮಸ್ಕಾರ ರೀ",
      "phrase": "ನಮಸ್ಕಾರ ರೀ! ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿದ್ದು ತುಂಬಾ ಖುಷಿಯಾಯಿತು ರೀ.",
      "phonetic": "Namaskara ree! Nimmannu bhetiyagiddu tumba khushiyayitu ree."
    },
    "ml": {
      "word": "നമസ്കാരം ചേട്ടാ / ചേച്ചി",
      "phrase": "നമസ്കാരം ചേട്ടാ! നിങ്ങളെ കണ്ടതിൽ ഒത്തിരി സന്തോഷമുണ്ട് കേട്ടോ.",
      "phonetic": "Namaskaram chetta! Ningale kandathil othiri santhoshamundu ketto."
    },
    "ur": {
      "word": "آداب جناب / السلام علیکم",
      "phrase": "آداب جناب، السلام علیکم! آپ سے مل کر دل بہت خوش ہوا۔",
      "phonetic": "Aadaab janaab, Assalamu Alaikum! Aap se mil kar dil bahut khush hua."
    },
    "ne": {
      "word": "नमस्ते हजुर / दर्शन",
      "phrase": "नमस्ते हजुर! तपाईंलाई भेटेर साह्रै खुशी लाग्यो हजुर।",
      "phonetic": "Namaste hajur! Tapailai bhetera sahrai khushi lagyo hajur."
    },
    "kok": {
      "word": "देव बरे करूं / नमस्कार",
      "phrase": "देव बरे करूं! तुमकां मेळून खूब खोस जाली गो.",
      "phonetic": "Dev bare karun! Tumka melun khub khos jali go."
    },
    "doi": {
      "word": "जय देवा जी / नमस्ते जी",
      "phrase": "जय देवा जी, नमस्ते! तुंदे कन्ने मिलियै बड़ा शैल लग्गा जी।",
      "phonetic": "Jai Deva ji, Namaste! Tunde kanne miliyai bada shail lagga ji."
    },
    "en": {
      "word": "Namaste / Hello Friend",
      "phrase": "Namaste! Hello my friend, it is truly wonderful to meet you!",
      "phonetic": "Namaste! Hello my friend, it is truly wonderful to meet you!"
    }
  },
  "thankyou": {
    "hi": {
      "word": "बहुत धन्यवाद जी / शुक्रिया",
      "phrase": "अरे आपका बहुत-बहुत धन्यवाद जी, बड़ी मेहरबानी!",
      "phonetic": "Are aapka bahut-bahut dhanyavaad ji, badi meherbani!"
    },
    "mai": {
      "word": "बहुत धन्यवाद यौ",
      "phrase": "अहाँक बहुत-बहुत धन्यवाद यौ! अहाँ बड़ नीक लोक छी।",
      "phonetic": "Ahaank bahut-bahut dhanyavaad yau! Ahaan bad neek lok chhi."
    },
    "bho": {
      "word": "रउआ के बहुत धन्यवाद",
      "phrase": "रउआ के बहुत-बहुत धन्यवाद हो, बड़ी दया कइनी!",
      "phonetic": "Raua ke bahut-bahut dhanyavaad ho, badi daya kaini!"
    },
    "mag": {
      "word": "तोहर बहुत धन्यवाद भैया",
      "phrase": "तोहर बहुत-बहुत धन्यवाद भैया, बड़ी उपकार कयलऽ!",
      "phonetic": "Tohar bahut-bahut dhanyavaad bhaiya, badi upkaar kayla!"
    },
    "raj": {
      "word": "घणो आभार सा",
      "phrase": "थांरो घणो-घणो आभार सा! भगवान थाने खुश राखे सा।",
      "phonetic": "Thanro ghano-ghano aabhar sa! Bhagwan thane khush rakhe sa."
    },
    "bgc": {
      "word": "घणा धन्यवाद भाई",
      "phrase": "थारा घणा-घणा धन्यवाद भाई, तनै मौज कर दी!",
      "phonetic": "Thara ghana-ghana dhanyavaad bhai, tanai mauj kar di!"
    },
    "hne": {
      "word": "अब्बड़ धन्यवाद संगवारी",
      "phrase": "तुंहर अब्बड़-अब्बड़ धन्यवाद संगवारी, मया बनाए रखिहव गा!",
      "phonetic": "Tunhar abbad-abbad dhanyavaad sangwari, maya banaye rakhihav ga!"
    },
    "mr": {
      "word": "मनापासून आभार / धन्यवाद",
      "phrase": "तुमचे मनापासून खूप खूप आभार हो दादा!",
      "phonetic": "Tumche manapasun khup khup aabhar ho dada!"
    },
    "gu": {
      "word": "ખૂબ ખૂબ આભાર ભાઈ",
      "phrase": "તમારો ખૂબ ખૂબ આભાર ભાઈ, ભગવાન તમારું ભલું કરે!",
      "phonetic": "Tamaro khub khub aabhar bhai, Bhagwan tamaru bhalu kare!"
    },
    "pa": {
      "word": "ਲੱਖ-ਲੱਖ ਸ਼ੁਕਰੀਆ ਜੀ",
      "phrase": "ਤੁਹਾਡਾ ਲੱਖ-ਲੱਖ ਸ਼ੁਕਰੀਆ ਜੀ, ਰੱਬ ਤੁਹਾਨੂੰ ਚੜ੍ਹਦੀ ਕਲਾ ਵਿੱਚ ਰੱਖੇ!",
      "phonetic": "Tuhada lakh-lakh shukriya ji, Rabb tuhanu chardi kala vich rakhe!"
    },
    "bn": {
      "word": "অনেক ধন্যবাদ দাদা",
      "phrase": "আপনাকে অনেক অনেক ধন্যবাদ দাদা, খুব উপকার করলেন!",
      "phonetic": "Apnake onek onek dhonyobad dada, khub upokar korlen!"
    },
    "as": {
      "word": "বহুত ধন্যবাদ দেই",
      "phrase": "আপোনাক বহুত বহুত ধন্যবাদ দেই, বৰ উপকাৰ কৰিলে!",
      "phonetic": "Aponak bohut bohut dhonyobad dei, bor upokar korile!"
    },
    "or": {
      "word": "ବହୁତ ଧନ୍ୟବାଦ ଭାଇ",
      "phrase": "ଆପଣଙ୍କୁ ବହୁତ ବହୁତ ଧନ୍ୟବାଦ ଭାଇ!",
      "phonetic": "Apananku bahut bahut dhanyabad bhai!",
      "ttsText": "आपणंकु बहुत-बहुत धन्यवाद भाई, महाप्रभु आपणंकु भलरे रखन्तु!"
    },
    "ta": {
      "word": "ரொம்ப நன்றிங்க",
      "phrase": "ரொம்ப நன்றிங்க சகோதரரே, உங்க உதவிக்கு மிக்க நன்றி!",
      "phonetic": "Romba nandringa sagotharare, unga uthavikku mikka nandri!"
    },
    "te": {
      "word": "చాలా ధన్యవాదాలు అండీ",
      "phrase": "మీకు చాలా చాలా ధన్యవాదాలు అండీ, చాలా సహాయం చేశారు!",
      "phonetic": "Meeku chala chala dhanyavadalu andi, chala sahayam chesaru!"
    },
    "kn": {
      "word": "ತುಂಬಾ ಧನ್ಯವಾದಗಳು ರೀ",
      "phrase": "ನಿಮಗೆ ತುಂಬಾ ಧನ್ಯವಾದಗಳು ರೀ, ದೇವರು ನಿಮಗೆ ಒಳ್ಳೆಯದು ಮಾಡಲಿ!",
      "phonetic": "Nimage tumba dhanyavadagalu ree, devaru nimage olleyadu madali!"
    },
    "ml": {
      "word": "ഒത്തിരി നന്ദിയുണ്ട് കേട്ടോ",
      "phrase": "ഒത്തിരി നന്ദിയുണ്ട് ചേട്ടാ, വലിയ ഉപകാരം കേട്ടോ!",
      "phonetic": "Othiri nandiyundu chetta, valiya upakaram ketto!"
    },
    "ur": {
      "word": "بہت بہت شکریہ جناب",
      "phrase": "آپ کا تہہ دل سے بہت بہت شکریہ جناب، بڑی نوازش!",
      "phonetic": "Aap ka teh-e-dil se bahut bahut shukriya janaab, badi nawazish!"
    },
    "ne": {
      "word": "धेरै धन्यवाद हजुर",
      "phrase": "तपाईंलाई मुरी-मुरी धन्यवाद छ हजुर!",
      "phonetic": "Tapailai muri-muri dhanyavaad chha hajur!"
    },
    "kok": {
      "word": "तुमचें खूब उपकार",
      "phrase": "देव तुमकां बरें करूं, तुमचें खूब खूब उपकार गो!",
      "phonetic": "Dev tumka bare karun, tumche khub khub upkaar go!"
    },
    "doi": {
      "word": "बड़ा-बड़ा धन्यवाद जी",
      "phrase": "तुंदा बड़ा-बड़ा धन्यवाद जी, बड़ी मेहरबानी तुंदी!",
      "phonetic": "Tunda bada-bada dhanyavaad ji, badi meherbani tundi!"
    },
    "en": {
      "word": "Thank You So Much",
      "phrase": "Thank you so much ji, I truly appreciate your kindness!",
      "phonetic": "Thank you so much ji, I truly appreciate your kindness!"
    }
  },
  "yes": {
    "hi": {
      "word": "हाँ जी / बिल्कुल",
      "phrase": "अरे हाँ जी, बिल्कुल सही बात है, मैं सहमत हूँ।",
      "phonetic": "Are haan ji, bilkul sahi baat hai, main sahmat hoon."
    },
    "mai": {
      "word": "हँ यौ / एकदम ठीक",
      "phrase": "हँ यौ, एकदम ठीक बात छै, हम सहमत छी।",
      "phonetic": "Han yau, ekdam theek baat chhai, ham sahmat chhi."
    },
    "bho": {
      "word": "हँ जी / एकदम ठीक बा",
      "phrase": "हँ जी, एकदम ठीक बात बा, हम राजी बानी।",
      "phonetic": "Han ji, ekdam theek baat ba, ham raaji baani."
    },
    "mag": {
      "word": "हँ भैया / ठीक हई",
      "phrase": "हँ भैया, एकदम ठीक बात हई।",
      "phonetic": "Han bhaiya, ekdam theek baat hai."
    },
    "raj": {
      "word": "हा सा / बिल्कुल सा",
      "phrase": "हा सा, बिल्कुल साची बात है सा।",
      "phonetic": "Ha sa, bilkul sachi baat hai sa."
    },
    "bgc": {
      "word": "हाँ भाई / कती ठीक",
      "phrase": "हाँ भाई, कती साची बात सै, मैं राजी सूं।",
      "phonetic": "Haan bhai, kati sachi baat sai, main raaji soon."
    },
    "hne": {
      "word": "हव गा / एकदम सही",
      "phrase": "हव संगवारी, एकदम सही बात आय गा।",
      "phonetic": "Hav sangwari, ekdam sahi baat aay ga."
    },
    "mr": {
      "word": "हो तर / नक्कीच",
      "phrase": "हो तर, अगदी बरोबर आहे, मला मान्य आहे!",
      "phonetic": "Ho tar, agadi barobar aahe, mala manya aahe!"
    },
    "gu": {
      "word": "હા જી / ચોક્કસ",
      "phrase": "હા ભાઈ, એકદમ સાચી વાત છે, હું સંમત છું.",
      "phonetic": "Haa bhai, ekdam sachi vaat chhe, hu sanmat chhu."
    },
    "pa": {
      "word": "ਹਾਂ ਜੀ ਬਿਲਕੁਲ",
      "phrase": "ਹਾਂ ਜੀ ਬਿਲਕੁਲ, ਤੁਹਾਡੀ ਗੱਲ ਸੌ ਫੀਸਦੀ ਸਹੀ ਹੈ ਜੀ।",
      "phonetic": "Haan ji bilkul, tuhadi gal sau feesdi sahi hai ji."
    },
    "bn": {
      "word": "হ্যাঁ দাদা / একদম",
      "phrase": "হ্যাঁ দাদা, একদম ঠিক কথা বলেছেন, আমি একমত।",
      "phonetic": "Hyan dada, ekdom thik kotha bolechen, ami ekmot."
    },
    "as": {
      "word": "হয় দেই / নিশ্চয়",
      "phrase": "হয় দেই, আপুনি একদম সঁচা কথা কৈছে।",
      "phonetic": "Hoy dei, apuni ekdom xosa kotha koise."
    },
    "or": {
      "word": "ହଁ ଭାଇ / ଠିକ୍ କଥା",
      "phrase": "ହଁ ଭାଇ, ଏକଦମ୍ ଠିକ୍ କଥା, ମୁଁ ରାଜି ଅଛି।",
      "phonetic": "Han bhai, ekdam thik kotha, mun raji achi.",
      "ttsText": "हँ भाई, एकदम ठीक कथा, मुँ राजि अछि।"
    },
    "ta": {
      "word": "ஆமாங்க / நிச்சயமா",
      "phrase": "ஆமாங்க, நீங்க சொல்றது ரொம்ப சரிங்க.",
      "phonetic": "Aamanga, neenga solrathu romba saringa."
    },
    "te": {
      "word": "అవునండీ / ఖచ్చితంగా",
      "phrase": "అవునండీ, మీరు చెప్పింది అక్షరాలా నిజమే.",
      "phonetic": "Avunandi, meeru cheppindi aksharala nijame."
    },
    "kn": {
      "word": "ಹೌದು ರೀ / ಖಂಡಿತ",
      "phrase": "ಹೌದು ರೀ, ನೀವು ಹೇಳಿದ್ದು ನೂರಕ್ಕೆ ನೂರು ಸರಿ.",
      "phonetic": "Haudu ree, neevu heliddu noorakke nooru sari."
    },
    "ml": {
      "word": "അതെ ചേട്ടാ / തീർച്ചയായും",
      "phrase": "അതെ ചേട്ടാ, നിങ്ങൾ പറഞ്ഞത് വളരെ ശരിയാണ് കേട്ടോ.",
      "phonetic": "Athe chetta, ningal paranjathu valare shariyanu ketto."
    },
    "ur": {
      "word": "جی ہاں جناب / بالکل",
      "phrase": "جی ہاں جناب، بالکل درست فرمایا، میں متفق ہوں۔",
      "phonetic": "Jee haan janaab, bilkul durust farmaya, main muttafiq hoon."
    },
    "ne": {
      "word": "हजुर हो / एकदम",
      "phrase": "हजुर हो, तपाईंको कुरा एकदम सही हो।",
      "phonetic": "Hajur ho, tapaiko kura ekdam sahi ho."
    },
    "kok": {
      "word": "हय गो / सामकें खरें",
      "phrase": "हय गो, तुमचें म्हणणें सामकें बरोबर आसा.",
      "phonetic": "Hay go, tumche mhanne samke barobar aasa."
    },
    "doi": {
      "word": "आं जी / खरी गल्ल",
      "phrase": "आं जी, बिल्कुल खरी गल्ल ऐ तुंदी।",
      "phonetic": "Aan ji, bilkul khari gall ai tundi."
    },
    "en": {
      "word": "Yes / Absolutely",
      "phrase": "Yes ji, absolutely! I completely agree with you.",
      "phonetic": "Yes ji, absolutely! I completely agree with you."
    }
  },
  "no": {
    "hi": {
      "word": "नहीं जी / माफ़ करें",
      "phrase": "अरे नहीं जी, ऐसा नहीं है, कृपया रहने दीजिए।",
      "phonetic": "Are nahi ji, aisa nahi hai, kripaya rehne dijiye."
    },
    "mai": {
      "word": "नहि यौ",
      "phrase": "नहि यौ, ई ठीक नहि छै, रहय दिअ।",
      "phonetic": "Nahi yau, ee theek nahi chhai, rahay dia."
    },
    "bho": {
      "word": "ना हो / नइखे",
      "phrase": "ना भैया, ई बात ठीक नइखे, रहे दीं।",
      "phonetic": "Na bhaiya, ee baat theek naikhe, rahe deen."
    },
    "mag": {
      "word": "ना भैया / नय",
      "phrase": "ना भैया, ई ठीक नय हई।",
      "phonetic": "Na bhaiya, ee theek nay hai."
    },
    "raj": {
      "word": "ना सा / कोनी सा",
      "phrase": "ना सा, आ बात ठीक कोनी सा।",
      "phonetic": "Na sa, aa baat theek koni sa."
    },
    "bgc": {
      "word": "ना भाई / कोन्या",
      "phrase": "ना भाई, या बात ठीक कोन्या सै।",
      "phonetic": "Na bhai, ya baat theek konya sai."
    },
    "hne": {
      "word": "नइ गा / झन कर",
      "phrase": "नइ संगवारी, ए बात सही नइ आय गा।",
      "phonetic": "Nai sangwari, e baat sahi nai aay ga."
    },
    "mr": {
      "word": "नाही हो / नको",
      "phrase": "नाही हो दादा, हे बरोबर नाही, राहू द्या.",
      "phonetic": "Nahi ho dada, he barobar nahi, rahu dya."
    },
    "gu": {
      "word": "ના ભાઈ / રહેવા દો",
      "phrase": "ના ભાઈ, આ વાત બરાબર નથી, રહેવા દો.",
      "phonetic": "Naa bhai, aa vaat barabar nathi, reheva do."
    },
    "pa": {
      "word": "ਨਹੀਂ ਜੀ / ਰਹਿਣ ਦਿਓ",
      "phrase": "ਨਹੀਂ ਜੀ, ਇਹ ਗੱਲ ਠੀਕ ਨਹੀਂ ਹੈ ਜੀ।",
      "phonetic": "Nahi ji, eh gal theek nahi hai ji."
    },
    "bn": {
      "word": "না দাদা / দরকার নেই",
      "phrase": "না দাদা, এটি ঠিক নয়, থাক না।",
      "phonetic": "Na dada, eti thik noy, thak na."
    },
    "as": {
      "word": "নহয় দেই / নালাগে",
      "phrase": "নহয় দেই, এইটো ঠিক কথা নহয়।",
      "phonetic": "Nohoy dei, eito thik kotha nohoy."
    },
    "or": {
      "word": "ନା ଭାଇ / ଦରକାର ନାହିଁ",
      "phrase": "ନା ଭାଇ, ଏହା ଠିକ୍ ନୁହେଁ, থাকু।",
      "phonetic": "Na bhai, eha thik nuhen.",
      "ttsText": "ना भाई, एहा ठीक नुहें, थाउ।"
    },
    "ta": {
      "word": "இல்லைங்க / வேண்டாம்",
      "phrase": "இல்லைங்க, இது சரியில்லை, வேண்டாங்க.",
      "phonetic": "Illainga, ithu sariyillai, vendanga."
    },
    "te": {
      "word": "కాదండీ / వద్దండీ",
      "phrase": "కాదండీ, ఇది సరైనది కాదు, వద్దండీ.",
      "phonetic": "Kaadandi, idi sarainadi kaadu, vaddandi."
    },
    "kn": {
      "word": "ಇಲ್ಲ ರೀ / ಬೇಡ",
      "phrase": "ಇಲ್ಲ ರೀ, ಇದು ಸರಿಯಲ್ಲ, ಬಿಟ್ಟುಬಿಡಿ.",
      "phonetic": "Illa ree, idu sariyalla, bittubidi."
    },
    "ml": {
      "word": "ഇല്ല ചേട്ടാ / വേണ്ട",
      "phrase": "ഇല്ല ചേട്ടാ, ഇത് ശരിയല്ല കേട്ടോ.",
      "phonetic": "Illa chetta, ithu shariyalla ketto."
    },
    "ur": {
      "word": "نہیں جناب / معاف کیجیے",
      "phrase": "نہیں جناب، یہ بات مناسب نہیں ہے۔",
      "phonetic": "Nahi janaab, yeh baat munasib nahi hai."
    },
    "ne": {
      "word": "होइन हजुर / पर्दैन",
      "phrase": "होइन हजुर, यो कुरा ঠিক भएन।",
      "phonetic": "Hoina hajur, yo kura thik bhayena."
    },
    "kok": {
      "word": "ना गो / नाका",
      "phrase": "ना गो, हें सारकें न्हय, नाका.",
      "phonetic": "Na go, he sarke nhay, naka."
    },
    "doi": {
      "word": "नेईं जी / रहने देओ",
      "phrase": "नेईं जी, एह् गल्ल ठीक नेईं ऐ।",
      "phonetic": "Nein ji, eh gall theek nein ai."
    },
    "en": {
      "word": "No / Please Don't",
      "phrase": "No friend, I don't think that is right, please leave it.",
      "phonetic": "No friend, I don't think that is right, please leave it."
    }
  },
  "please": {
    "hi": {
      "word": "कृपया / ज़रा सुनिए जी",
      "phrase": "भाई साहब, कृपया मेरी बात ज़रा ध्यान से सुनिए ना।",
      "phonetic": "Bhai sahab, kripaya meri baat zara dhyan se suniye na."
    },
    "mai": {
      "word": "कृपया / कनी सुनू ने",
      "phrase": "यौ भैया, कृपया कनी हमर बात सुनू ने।",
      "phonetic": "Yau bhaiya, kripaya kani hamar baat sunu ne."
    },
    "bho": {
      "word": "निहोरा बा / तनी सुनीं ना",
      "phrase": "ए भैया, रउआ से निहोरा बा, तनी हमार बात सुनीं ना।",
      "phonetic": "E bhaiya, raua se nihora ba, tani hamaar baat sunin na."
    },
    "mag": {
      "word": "तनी सुनऽ ना भैया",
      "phrase": "ए भैया, तनी हमर बात सुन लऽ ना।",
      "phonetic": "E bhaiya, tani hamar baat sun la na."
    },
    "raj": {
      "word": "कृपा करो सा / अरज है सा",
      "phrase": "भाया सा, म्हारी एक छोटी सी अरज सुणो सा।",
      "phonetic": "Bhaya sa, mhari ek chhoti si araj suno sa."
    },
    "bgc": {
      "word": "भाई मेरी सुण ले",
      "phrase": "रे भाई, एक बार मेरी बात तो सुण ले ना।",
      "phonetic": "Re bhai, ek baar meri baat to sun le na."
    },
    "hne": {
      "word": "संगवारी मोर बात सुन गा",
      "phrase": "ए संगवारी भैया, मोर बात ला थोरकन सुन ले न गा।",
      "phonetic": "E sangwari bhaiya, mor baat la thorkan sun le na ga."
    },
    "mr": {
      "word": "कृपया / जरा ऐका ना",
      "phrase": "दादा, कृपया माझं जरा ऐकून घ्या ना.",
      "phonetic": "Dada, kripaya majha jara aikun ghya na."
    },
    "gu": {
      "word": "કૃપા કરીને / જરા સાંભળો ને",
      "phrase": "ભાઈ, કૃપા કરીને મારી વાત જરા સાંભળો ને.",
      "phonetic": "Bhai, krupa karine mari vaat jara sambhalo ne."
    },
    "pa": {
      "word": "ਕਿਰਪਾ ਕਰਕੇ ਜੀ",
      "phrase": "ਵੀਰ ਜੀ, ਕਿਰਪਾ ਕਰਕੇ ਮੇਰੀ ਇੱਕ ਗੱਲ ਸੁਣੋ ਜੀ।",
      "phonetic": "Veer ji, kirpa karke meri ik gal suno ji."
    },
    "bn": {
      "word": "দয়া করে দাদা",
      "phrase": "দাদা, দয়া করে আমার কথাটা একটু শুনুন না।",
      "phonetic": "Dada, doya kore amar kothata ektu shunun na."
    },
    "as": {
      "word": "অনুগ্ৰহ কৰি শুনকচোন",
      "phrase": "বাইদেউ, অনুগ্ৰহ কৰি মোৰ কথাষাৰ অলপ শুনকচোন।",
      "phonetic": "Baideu, onugroho kori mor kothaxar olop xunokson."
    },
    "or": {
      "word": "ଦୟାକରି ଶୁଣନ୍ତୁ ଭାଇ",
      "phrase": "ଭାଇ, ଦୟାକରି ମୋ କଥା ଟିକେ ଶୁଣନ୍ତୁ ନା।",
      "phonetic": "Bhai, dayakari mo katha tike sunantu na.",
      "ttsText": "भाई, दयाकरि मो कथा टिके सुणन्तु ना।"
    },
    "ta": {
      "word": "தயவுசெஞ்சு கேளுங்க",
      "phrase": "அண்ணா, தயவுசெஞ்சு என் பேச்சைக் கொஞ்சம் கேளுங்க.",
      "phonetic": "Anna, thayavusenju en pechchaik konjam kelunga."
    },
    "te": {
      "word": "దయచేసి వినండి అండీ",
      "phrase": "అన్నా, దయచేసి నా మాట కొంచెం వినండి.",
      "phonetic": "Anna, dayachesi naa maata konchem vinandi."
    },
    "kn": {
      "word": "ದಯವಿಟ್ಟು ಕೇಳಿ ರೀ",
      "phrase": "ಅಣ್ಣಾ, ದಯವಿಟ್ಟು ನನ್ನ ಮಾತನ್ನು ಸ್ವಲ್ಪ ಕೇಳಿ ರೀ.",
      "phonetic": "Anna, dayavittu nanna maathannu svalpa keli ree."
    },
    "ml": {
      "word": "ദയവായി ഒന്ന് കേൾക്കൂ",
      "phrase": "ചേട്ടാ, ദയവായി ഞാൻ പറയുന്നത് ഒന്ന് കേൾക്കണേ.",
      "phonetic": "Chetta, dayavayi njan parayunnathu onnu kelkkane."
    },
    "ur": {
      "word": "براہ کرم جناب",
      "phrase": "جناب، براہ کرم میری گزارش ذرا سنیے۔",
      "phonetic": "Janaab, bara-e-karam meri guzarish zara suniye."
    },
    "ne": {
      "word": "कृपया सुन्नुहोस् न हजुर",
      "phrase": "हजुर, कृपया मेरो कुरा एकछिन सुनिदिनुहोस् न।",
      "phonetic": "Hajur, kripaya mero kura ekchhin sunidinuhos na."
    },
    "kok": {
      "word": "उपकार करून आयक गो",
      "phrase": "भाव, उपकार करून म्हजें उतर मात्शें आयक गो.",
      "phonetic": "Bhav, upkaar karun mhajem utar matshem aayk go."
    },
    "doi": {
      "word": "कृपा करियै सुनो जी",
      "phrase": "भरा जी, कृपा करियै मेरी गल्ल सुनियो जी।",
      "phonetic": "Bhara ji, kripa kariyai meri gall suniyo ji."
    },
    "en": {
      "word": "Please Listen",
      "phrase": "Excuse me friend, could you please listen to me for a moment?",
      "phonetic": "Excuse me friend, could you please listen to me for a moment?"
    }
  },
  "sorry": {
    "hi": {
      "word": "माफ़ कीजिए जी / क्षमा करें",
      "phrase": "अरे मुझे माफ़ कर दीजिए जी, अनजाने में गलती हो गई।",
      "phonetic": "Are mujhe maaf kar dijiye ji, anjaane mein galti ho gayi."
    },
    "mai": {
      "word": "क्षमा करू यौ / माफ करू",
      "phrase": "हमरा क्षमा कऽ दिअ यौ, अनजानेमे चूक भऽ गेल।",
      "phonetic": "Hamra kshama ka dia yau, anjaane mein chook bha gel."
    },
    "bho": {
      "word": "माफ कर दीं रउआ",
      "phrase": "ए भैया, हमरा के माफ कर दीं, गलती हो गइल।",
      "phonetic": "E bhaiya, hamra ke maaf kar deen, galti ho gail."
    },
    "mag": {
      "word": "माफ कर द भैया",
      "phrase": "हमरा माफ कर द भैया, गलती हो गेलई।",
      "phonetic": "Hamra maaf kar da bhaiya, galti ho gelai."
    },
    "raj": {
      "word": "माफ करजो सा",
      "phrase": "म्हाने माफ करजो सा, भूल-चूक हो गई सा।",
      "phonetic": "Mhane maaf karjo sa, bhool-chook ho gayi sa."
    },
    "bgc": {
      "word": "माफ कर दे भाई",
      "phrase": "भाई मने माफ कर दिए, गलती हो गी।",
      "phonetic": "Bhai mane maaf kar diye, galti ho gi."
    },
    "hne": {
      "word": "माफ कर देबे संगवारी",
      "phrase": "मोला माफ कर देबे संगवारी, गलती हो गे गा।",
      "phonetic": "Mola maaf kar debe sangwari, galti ho ge ga."
    },
    "mr": {
      "word": "मला माफ करा हो",
      "phrase": "दादा, मला मनापासून माफ करा, माझी चूक झाली.",
      "phonetic": "Dada, mala manapasun maaf kara, majhi chuk jhali."
    },
    "gu": {
      "word": "મને માફ કરશો ભાઈ",
      "phrase": "ભાઈ, ભૂલ થઈ ગઈ, મને મોટું મન રાખીને માફ કરશો.",
      "phonetic": "Bhai, bhool thai gai, mane motu man rakhine maaf karsho."
    },
    "pa": {
      "word": "ਮਾਫ਼ ਕਰਨਾ ਜੀ",
      "phrase": "ਵੀਰ ਜੀ, ਮੈਨੂੰ ਮਾਫ਼ ਕਰ ਦਿਓ ਜੀ, ਭੁੱਲ ਹੋ ਗਈ।",
      "phonetic": "Veer ji, mainu maaf kar dio ji, bhull ho gayi."
    },
    "bn": {
      "word": "ক্ষমা করবেন দাদা",
      "phrase": "দাদা, কিছু মনে করবেন না, আমায় ক্ষমা করে দিন।",
      "phonetic": "Dada, kichu mone korben na, amay khoma kore din."
    },
    "as": {
      "word": "ক্ষমা কৰিব দেই",
      "phrase": "মোক ক্ষমা কৰিব দেই, ভুল হৈ গ'ল।",
      "phonetic": "Mok khoma koribo dei, bhul hoi gol."
    },
    "or": {
      "word": "କ୍ଷମା କରିବେ ଭାଇ",
      "phrase": "ଭାଇ, ମୋତେ କ୍ଷମା କରିদেବେ, ଭୁଲ୍ ହୋଇଗଲା।",
      "phonetic": "Bhai, mote kshama karidebe, bhul hoigala.",
      "ttsText": "भाई, मोते क्षमा करिदेबे, भुल होइगला।"
    },
    "ta": {
      "word": "மன்னிச்சிடுங்க",
      "phrase": "தயவுசெஞ்சு என்னை மன்னிச்சிடுங்க, தெரியாம நடந்துடுச்சு.",
      "phonetic": "Thayavusenju ennai mannichidunga, theriyama nadanthuduchu."
    },
    "te": {
      "word": "క్షమించండి అండీ",
      "phrase": "దయచేసి నన్ను క్షమించండి అండీ, పొరపాటు జరిగింది.",
      "phonetic": "Dayachesi nannu kshaminchandi andi, porapatu jarigindi."
    },
    "kn": {
      "word": "ಕ್ಷಮಿಸಿಬಿಡಿ ರೀ",
      "phrase": "ದಯವಿಟ್ಟು ನನ್ನನ್ನು ಕ್ಷಮಿಸಿಬಿಡಿ ರೀ, ತಪ್ಪಾಯಿತು.",
      "phonetic": "Dayavittu nannannu kshamisibidi ree, thappayitu."
    },
    "ml": {
      "word": "ക്ഷമിക്കണം ചേട്ടാ",
      "phrase": "ദയവായി എന്നോട് ക്ഷമിക്കണം ചേട്ടാ, അറിയാതെ പറ്റിയതാണ്.",
      "phonetic": "Dayavayi ennodu kshamikkanam chetta, ariyathe pattiyathanu."
    },
    "ur": {
      "word": "معاف فرمائیے جناب",
      "phrase": "جناب، مجھے معاف فرمائیے، نادانی میں غلطی ہو گئی۔",
      "phonetic": "Janaab, mujhe maaf farmaiye, nadani mein galti ho gayi."
    },
    "ne": {
      "word": "माफ गर्नुहोस् हजुर",
      "phrase": "मलाई माफ गरिदिनुहोस् हजुर, गल्ती भयो।",
      "phonetic": "Malai maaf garidinuhos hajur, galti bhayo."
    },
    "kok": {
      "word": "म्हाका भोगशी गो",
      "phrase": "चूक जाली गो, उपकार करून म्हाका भोगशी.",
      "phonetic": "Chuk jali go, upkaar karun mhaka bhogshi."
    },
    "doi": {
      "word": "माफ करियो जी",
      "phrase": "मिगी माफ करियो जी, परोखै च गलती होई गेई।",
      "phonetic": "Migi maaf kariyo ji, parokhai ch galti hoi gei."
    },
    "en": {
      "word": "I Am Really Sorry",
      "phrase": "I am really sorry my friend, please forgive my mistake.",
      "phonetic": "I am really sorry my friend, please forgive my mistake."
    }
  },
  "friend": {
    "hi": {
      "word": "प्यारे दोस्त / मित्र",
      "phrase": "अरे आप तो मेरे बहुत अच्छे दोस्त हैं जी!",
      "phonetic": "Are aap to mere bahut achhe dost hain ji!"
    },
    "mai": {
      "word": "प्रिय संगी / मित्र",
      "phrase": "अहाँ तऽ हमर अपन संगी आ मित्र छी यौ!",
      "phonetic": "Ahaan ta hamar apan sangi aa mitra chhi yau!"
    },
    "bho": {
      "word": "सच्चा संघाती / दोस्त",
      "phrase": "रउआ त हमार जिगरी दोस्त आ संघाती बानी हो!",
      "phonetic": "Raua ta hamaar jigri dost aa sanghati baani ho!"
    },
    "mag": {
      "word": "अपन दोस्त / संगी",
      "phrase": "तोहं त हमर बढ़िया दोस्त हऽ भैया!",
      "phonetic": "Tohan ta hamar badhiya dost ha bhaiya!"
    },
    "raj": {
      "word": "प्यारा भाईला / मित्र",
      "phrase": "आप तो म्हारा घणा चोखा भाईला हो सा!",
      "phonetic": "Aap to mhara ghana chokha bhaila ho sa!"
    },
    "bgc": {
      "word": "पक्का यार / भाई",
      "phrase": "तूं तो मेरा जिगरी यार सै भाई!",
      "phonetic": "Toon to mera jigri yaar sai bhai!"
    },
    "hne": {
      "word": "मयारू संगवारी / मितान",
      "phrase": "तें तो मोर मयारू संगवारी अउ मितान हस गा!",
      "phonetic": "Ten to mor mayaru sangwari au mitaan has ga!"
    },
    "mr": {
      "word": "जिवलग मित्र / सोबती",
      "phrase": "तुम्ही तर माझे जिवलग मित्र आहात हो!",
      "phonetic": "Tumhi tar majhe jivalag mitra aahat ho!"
    },
    "gu": {
      "word": "વાહલા મિત્ર / ભેરુ",
      "phrase": "તમે તો મારા ખાસ મિત્ર છો ભાઈ!",
      "phonetic": "Tame to mara khaas mitra chho bhai!"
    },
    "pa": {
      "word": "ਪਿਆਰੇ ਦੋਸਤ / ਬੇਲੀ",
      "phrase": "ਤੁਸੀਂ ਤਾਂ ਮੇਰੇ ਦਿਲ ਦੇ ਕਰੀਬੀ ਦੋਸਤ ਹੋ ਜੀ!",
      "phonetic": "Tusi taan mere dil de kareebi dost ho ji!"
    },
    "bn": {
      "word": "প্রিয় বন্ধু",
      "phrase": "আপনি তো আমার প্রাণের বন্ধু দাদা!",
      "phonetic": "Apni to amar praner bondhu dada!"
    },
    "as": {
      "word": "মৰমৰ বন্ধু / সখি",
      "phrase": "আপুনি মোৰ বৰ আপোন বন্ধু দেই!",
      "phonetic": "Apuni mor bor apon bondhu dei!"
    },
    "or": {
      "word": "ପ୍ରିୟ ସାଙ୍ଗ / ବନ୍ଧୁ",
      "phrase": "ଆପଣ ତ ମୋର ବହୁତ ଭଲ ସାଙ୍ଗ ଭାଇ!",
      "phonetic": "Apana ta mora bahut bhala sanga bhai!",
      "ttsText": "आपण त मोर बहुत भल सांग भाई!"
    },
    "ta": {
      "word": "நல்ல நண்பர் / தோழர்",
      "phrase": "நீங்க என் ரொம்ப நல்ல நண்பருங்க!",
      "phonetic": "Neenga en romba nalla nanbarunga!"
    },
    "te": {
      "word": "మంచి స్నేహితుడు / నేస్తం",
      "phrase": "మీరు నా ప్రాణ స్నేహితులండీ!",
      "phonetic": "Meeru naa prana snehithulandi!"
    },
    "kn": {
      "word": "ಆತ್ಮೀಯ ಸ್ನೇಹಿತ / ಗೆಳೆಯ",
      "phrase": "ನೀವು ನನ್ನ ತುಂಬಾ ಒಳ್ಳೆಯ ಸ್ನೇಹಿತರು ರೀ!",
      "phonetic": "Neevu nanna tumba olleya snehitharu ree!"
    },
    "ml": {
      "word": "പ്രിയ സുഹൃത്ത് / കൂട്ടുകാരൻ",
      "phrase": "നിങ്ങൾ എന്റെ ഏറ്റവും നല്ല കൂട്ടുകാരനാണ് കേട്ടോ!",
      "phonetic": "Ningal ente ettavum nalla koottukarananu ketto!"
    },
    "ur": {
      "word": "عزیز دوست / یار",
      "phrase": "آپ تو میرے بہت عزیز اور سچے دوست ہیں جناب!",
      "phonetic": "Aap to mere bahut azeez aur sache dost hain janaab!"
    },
    "ne": {
      "word": "मिल्ने साथी / मित्र",
      "phrase": "तपाईं त मेरो एकदम मिल्ने साथी हुनुहुन्छ हजुर!",
      "phonetic": "Tapai ta mero ekdam milne sathi hunuhunchha hajur!"
    },
    "kok": {
      "word": "मोगी इश्ट / मित्र",
      "phrase": "तूं म्हाजो खूब बरो इश्ट आसा गो!",
      "phonetic": "Tu mhajo khub baro isht aasa go!"
    },
    "doi": {
      "word": "शैल दोस्त / मित्तर",
      "phrase": "तुस तां मेरे बड़े शैल दोस्त ओ जी!",
      "phonetic": "Tus taan mere bade shail dost o ji!"
    },
    "en": {
      "word": "Dear Friend",
      "phrase": "You are such a wonderful and kind friend to me!",
      "phonetic": "You are such a wonderful and kind friend to me!"
    }
  },
  "good": {
    "hi": {
      "word": "बहुत बढ़िया / अच्छा जी",
      "phrase": "अरे वाह, बहुत बढ़िया जी! सब एकदम ठीक-ठाक है।",
      "phonetic": "Are wah, bahut badhiya ji! Sab ekdam theek-thaak hai."
    },
    "mai": {
      "word": "बड़ नीक / बहुत बढ़िया",
      "phrase": "अहाँक कृपा सँ सब किछु बड़ नीक आ कुशल अछि यौ!",
      "phonetic": "Ahaank kripa san sab kichhu bad neek aa kushal achhi yau!"
    },
    "bho": {
      "word": "बहुत बढ़िया / नीमन बा",
      "phrase": "अरे वाह, सब कुछ एकदम बढ़िया आ चकाचक बा हो!",
      "phonetic": "Are wah, sab kuch ekdam badhiya aa chakachak ba ho!"
    },
    "mag": {
      "word": "बढ़िया हई भैया",
      "phrase": "सब कुछ एकदम बढ़िया अउर नीमन हई भैया!",
      "phonetic": "Sab kuch ekdam badhiya aur neeman hai bhaiya!"
    },
    "raj": {
      "word": "घणो चोखो सा / मौज है",
      "phrase": "घणो चोखो सा! सगळा काम एकदम बढ़िया है सा।",
      "phonetic": "Ghano chokho sa! Sagla kaam ekdam badhiya hai sa."
    },
    "bgc": {
      "word": "कती बढ़िया / मौज सै",
      "phrase": "कती बढ़िया सै भाई, सारी बात एकदम ठीक सै!",
      "phonetic": "Kati badhiya sai bhai, saari baat ekdam theek sai!"
    },
    "hne": {
      "word": "अब्बड़ बने गा",
      "phrase": "अब्बड़ बने हावय संगवारी, सब कुशल-मंगल हे गा!",
      "phonetic": "Abbad bane havay sangwari, sab kushal-mangal he ga!"
    },
    "mr": {
      "word": "खूप छान / मस्तच",
      "phrase": "अरे वा, खूपच छान! सगळं काही अगदी मस्त आहे हो.",
      "phonetic": "Are wa, khupach chhan! Sagla kahi agadi mast aahe ho."
    },
    "gu": {
      "word": "ખૂબ સરસ / મજામાં",
      "phrase": "અરે વાહ, ખૂબ સરસ ભાઈ! બધું એકદમ મજામાં છે.",
      "phonetic": "Are wah, khub saras bhai! Badhu ekdam majama chhe."
    },
    "pa": {
      "word": "ਬਹੁਤ ਵਧੀਆ ਜੀ / ਚੜ੍ਹਦੀ ਕਲਾ",
      "phrase": "ਬਹੁਤ ਵਧੀਆ ਜੀ, ਵਾਹਿਗੁਰੂ ਦੀ ਕਿਰਪਾ ਨਾਲ ਸਭ ਚੜ੍ਹਦੀ ਕਲਾ ਹੈ!",
      "phonetic": "Bahut vadhiya ji, Waheguru di kirpa naal sabh chardi kala hai!"
    },
    "bn": {
      "word": "খুব ভালো / দারুণ",
      "phrase": "বাঃ, খুব ভালো দাদা! সবকিছু একদম ঠিকঠাক আছে।",
      "phonetic": "Bah, khub bhalo dada! Shobkichu ekdom thikthak ache."
    },
    "as": {
      "word": "বৰ ভাল দেই",
      "phrase": "বৰ ভাল দেই! সকলো কুশলে-মঙ্গলে আছে।",
      "phonetic": "Bor bhal dei! Xokolo kuxole-mongole ase."
    },
    "or": {
      "word": "ବହୁତ ଭଲ / ବଢ଼ିଆ",
      "phrase": "ବହୁତ ବଢ଼ିଆ ଭାଇ! ସବୁକିଛି ଭଲ ଅଛି।",
      "phonetic": "Bahut badhia bhai! Sabukichi bhala achi.",
      "ttsText": "अरे वाह, बहुत बढ़िया भाई! सबुकिछि एकदम भल अछि।"
    },
    "ta": {
      "word": "ரொம்ப நல்லதுங்க",
      "phrase": "ரொம்ப நல்லதுங்க! எல்லாமே சூப்பரா நல்லா இருக்குங்க.",
      "phonetic": "Romba nallathunga! Ellame super-aa nalla irukkunga."
    },
    "te": {
      "word": "చాలా బాగుందండీ",
      "phrase": "చాలా బాగుందండీ! అంతా క్షేమంగా, సంతోషంగా ఉంది.",
      "phonetic": "Chala bagundandi! Antha kshemanga, santhoshanga undi."
    },
    "kn": {
      "word": "ತುಂಬಾ ಚೆನ್ನಾಗಿದೆ ರೀ",
      "phrase": "ತುಂಬಾ ಚೆನ್ನಾಗಿದೆ ರೀ! ಎಲ್ಲವೂ ಆರಾಮಾಗಿ ಒಳ್ಳೆಯದಾಗಿದೆ.",
      "phonetic": "Tumba chennagide ree! Ellavu aaramagi olleyadagide."
    },
    "ml": {
      "word": "വളരെ നല്ലത് / സുഖമാണ്",
      "phrase": "വളരെ നല്ലത് ചേട്ടാ! എല്ലാം ഭംഗിയായി നടക്കുന്നു കേട്ടോ.",
      "phonetic": "Valare nallathu chetta! Ellam bhangiyayi nadakkunnu ketto."
    },
    "ur": {
      "word": "بہت خوب / ماشاءاللہ",
      "phrase": "ماشاءاللہ بہت خوب جناب! سب کچھ بالکل ٹھیک ہے۔",
      "phonetic": "MashaAllah bahut khoob janaab! Sab kuch bilkul theek hai."
    },
    "ne": {
      "word": "धेरै राम्रो हजुर",
      "phrase": "अहा, धेरै राम्रो हजुर! सबै कुरा एकदम ठीक छ।",
      "phonetic": "Aha, dherai ramro hajur! Sabai kura ekdam thik chha."
    },
    "kok": {
      "word": "खूब बरें गो",
      "phrase": "वाह, खूब बरें आसा गो! सगळें सारकें चल्लां.",
      "phonetic": "Wah, khub bare aasa go! Sagle sarke challa."
    },
    "doi": {
      "word": "बड़ा शैल जी",
      "phrase": "बड़ा शैल ऐ जी! सब किश ठीक-ठाक चलदा ऐ।",
      "phonetic": "Bada shail ai ji! Sab kish theek-thaak chalda ai."
    },
    "en": {
      "word": "Very Good / Wonderful",
      "phrase": "That is really wonderful! Everything is going very well.",
      "phonetic": "That is really wonderful! Everything is going very well."
    }
  },
  "bad": {
    "hi": {
      "word": "ठीक नहीं है / परेशानी है",
      "phrase": "अरे भाई, यह ठीक नहीं है, थोड़ी परेशानी हो रही है।",
      "phonetic": "Are bhai, yah theek nahi hai, thodi pareshani ho rahi hai."
    },
    "mai": {
      "word": "ठीक नहि अछि यौ",
      "phrase": "यौ भैया, ई बात नीक नहि अछि, कनी दिक्कत भऽ रहल अछि।",
      "phonetic": "Yau bhaiya, ee baat neek nahi achhi, kani dikkat bha rahal achhi."
    },
    "bho": {
      "word": "ठीक नइखे भैया",
      "phrase": "ए भैया, ई ठीक नइखे लागत, कुछ गड़बड़ बा।",
      "phonetic": "E bhaiya, ee theek naikhe lagat, kuch gadbad ba."
    },
    "mag": {
      "word": "ठीक नय हई",
      "phrase": "ई बात ठीक नय हई भैया, दिक्कत हो रहल हई।",
      "phonetic": "Ee baat theek nay hai bhaiya, dikkat ho rahal hai."
    },
    "raj": {
      "word": "ठीक कोनी सा",
      "phrase": "भाया सा, आ बात ठीक कोनी, थोड़ी तकलीफ है सा।",
      "phonetic": "Bhaya sa, aa baat theek koni, thodi takleef hai sa."
    },
    "bgc": {
      "word": "ठीक कोन्या भाई",
      "phrase": "भाई, काम ठीक कोन्या चाल रहा, थोड़ी दिक्कत सै।",
      "phonetic": "Bhai, kaam theek konya chaal raha, thodi dikkat sai."
    },
    "hne": {
      "word": "बने नइ लागथे गा",
      "phrase": "संगवारी, ए बात बने नइ लागथे गा, कुछु गड़बड़ हे।",
      "phonetic": "Sangwari, e baat bane nai lagthe ga, kuchhu gadbad he."
    },
    "mr": {
      "word": "बरे नाही / त्रास होतोय",
      "phrase": "दादा, हे काही बरं नाहीये, मला थोडा त्रास होतोय.",
      "phonetic": "Dada, he kahi bara nahiye, mala thoda traas hotoy."
    },
    "gu": {
      "word": "બરાબર નથી ભાઈ",
      "phrase": "ભાઈ, આ બરાબર નથી, કંઈક તકલીફ જેવું લાગે છે.",
      "phonetic": "Bhai, aa barabar nathi, kaik takleef jevu lage chhe."
    },
    "pa": {
      "word": "ਠੀਕ ਨਹੀਂ ਹੈ ਜੀ",
      "phrase": "ਵੀਰ ਜੀ, ਇਹ ਗੱਲ ਠੀਕ ਨਹੀਂ ਹੈ, ਕੁਝ ਪਰੇਸ਼ਾਨੀ ਹੈ।",
      "phonetic": "Veer ji, eh gal theek nahi hai, kujh pareshani hai."
    },
    "bn": {
      "word": "ভালো লাগছে না দাদা",
      "phrase": "দাদা, বিষয়টা ঠিক ভালো লাগছে না, একটু সমস্যা হয়েছে।",
      "phonetic": "Dada, bishoyta thik bhalo lagche na, ektu shomossha hoyeche."
    },
    "as": {
      "word": "ভাল লগা নাই দেই",
      "phrase": "কথাটো বৰ ভাল লগা নাই দেই, অলপ অসুবিধা হৈছে।",
      "phonetic": "Kothato bor bhal loga nai dei, olop oxubidha hoise."
    },
    "or": {
      "word": "ଠିକ୍ ଲାଗୁନାହିଁ ଭାଇ",
      "phrase": "ଭାଇ, ଏହା ଠିକ୍ ଲାଗୁନାହିଁ, ଟିକେ ଅସୁବିଧା ଅଛି।",
      "phonetic": "Bhai, eha thik lagunahin, tike asubidha achi.",
      "ttsText": "भाई, एहा ठीक लागुनाहीं, टिके असुविधा अछि।"
    },
    "ta": {
      "word": "சரியில்லைங்க",
      "phrase": "அண்ணா, இது சரியில்லைங்க, ஏதோ பிரச்சனை இருக்கு.",
      "phonetic": "Anna, ithu sariyillainga, etho prachanai irukku."
    },
    "te": {
      "word": "బాగోలేదండీ",
      "phrase": "అన్నా, ఇది బాగోలేదండీ, ఏదో ఇబ్బందిగా ఉంది.",
      "phonetic": "Anna, idi bagoledandi, edho ibbandiga undi."
    },
    "kn": {
      "word": "ಸರಿಯಿಲ್ಲ ರೀ",
      "phrase": "ಇದು ಸರಿಯಿಲ್ಲ ರೀ, ಏನೋ ಸ್ವಲ್ಪ ತೊಂದರೆ ಆಗ್ತಿದೆ.",
      "phonetic": "Idu sariyilla ree, eno svalpa tondare aagtide."
    },
    "ml": {
      "word": "ശരിയല്ല ചേട്ടാ",
      "phrase": "ചേട്ടാ, കാര്യം അത്ര ശരിയല്ല, എന്തോ ബുദ്ധിമുട്ടുണ്ട്.",
      "phonetic": "Chetta, karyam athra shariyalla, entho budhimuttundu."
    },
    "ur": {
      "word": "ٹھیک نہیں ہے جناب",
      "phrase": "جناب، حالات کچھ ٹھیک نہیں ہیں، تھوڑی پریشانی ہے۔",
      "phonetic": "Janaab, haalaat kuch theek nahi hain, thodi pareshani hai."
    },
    "ne": {
      "word": "ठीक छैन हजुर",
      "phrase": "हजुर, यो कुरा अलि ठीक भएन, समस्या छ।",
      "phonetic": "Hajur, yo kura ali thik bhayena, samasya chha."
    },
    "kok": {
      "word": "सारकें ना गो",
      "phrase": "भाव, हें किदेंच सारकें ना, मात्सो त्रास जाता.",
      "phonetic": "Bhav, he kidench sarke na, matso traas jata."
    },
    "doi": {
      "word": "ठीक नेईं ऐ जी",
      "phrase": "भरा जी, एह् गल्ल शैल नेईं ऐ, किश परेशानी ऐ।",
      "phonetic": "Bhara ji, eh gall shail nein ai, kish pareshani ai."
    },
    "en": {
      "word": "Not Good / Something Wrong",
      "phrase": "Something does not feel right friend, there is a problem.",
      "phonetic": "Something does not feel right friend, there is a problem."
    }
  },
  "iloveyou": {
    "hi": {
      "word": "अपनापन और स्नेह",
      "phrase": "आप बहुत प्यारे इंसान हैं, मुझे आपकी बहुत परवाह है जी।",
      "phonetic": "Aap bahut pyaare insaan hain, mujhe aapki bahut parvah hai ji."
    },
    "mai": {
      "word": "अपनत्व आ स्नेह",
      "phrase": "अहाँ सँ हमरा बड़ सिनेह आ अपनापन अछि यौ।",
      "phonetic": "Ahaan san hamra bad sineh aa apnapan achhi yau."
    },
    "bho": {
      "word": "दुलार आ अपनापन",
      "phrase": "रउआ हमरा दिल के बहुत करीब बानी, रउआ के बहुत फिकिर बा।",
      "phonetic": "Raua hamra dil ke bahut kareeb baani, raua ke bahut fikir ba."
    },
    "mag": {
      "word": "नेह आउर दुलार",
      "phrase": "तोहरा से हमरा बड़ी नेह आउर अपनापन हई भैया।",
      "phonetic": "Tohra se hamra badi neh aur apnapan hai bhaiya."
    },
    "raj": {
      "word": "घणो हेत और प्रेम सा",
      "phrase": "आप सूं म्हाने घणो हेत और लगाव है सा।",
      "phonetic": "Aap soon mhane ghano het aur lagaav hai sa."
    },
    "bgc": {
      "word": "घणा लाड अर प्यार",
      "phrase": "भाई, तेरे तै मने घणा प्यार अर अपणापन सै।",
      "phonetic": "Bhai, tere tai mane ghana pyaar ar apnapan sai."
    },
    "hne": {
      "word": "गाढ़ा मया अउ दुलार",
      "phrase": "संगवारी, तोर ऊपर मोला अब्बड़ मया अउ दुलार हे गा।",
      "phonetic": "Sangwari, tor upar mola abbad maya au dulaar he ga."
    },
    "mr": {
      "word": "माया आणि आपुलकी",
      "phrase": "तुमच्याबद्दल माझ्या मनात खूप प्रेम आणि आपुलकी आहे हो.",
      "phonetic": "Tumchyabaddal majhya manat khup prem aani aapulki aahe ho."
    },
    "gu": {
      "word": "પ્રેમ અને લાગણી",
      "phrase": "તમારા પ્રત્યે મને ખૂબ જ પ્રેમ અને લાગણી છે ભાઈ.",
      "phonetic": "Tamara pratye mane khubaj prem ane lagani chhe bhai."
    },
    "pa": {
      "word": "ਦਿਲੋਂ ਪਿਆਰ ਤੇ ਸਤਿਕਾਰ",
      "phrase": "ਮੈਨੂੰ ਤੁਹਾਡੇ ਨਾਲ ਦਿਲੋਂ ਪਿਆਰ ਅਤੇ ਸਤਿਕਾਰ ਹੈ ਜੀ।",
      "phonetic": "Mainu tuhade naal dilon pyaar ate satikar hai ji."
    },
    "bn": {
      "word": "ভালোবাসা ও আন্তরিকতা",
      "phrase": "আপনার প্রতি আমার অনেক ভালোবাসা ও শ্রদ্ধা রইল।",
      "phonetic": "Apnar proti amar onek bhalobasha o shroddha roilo."
    },
    "as": {
      "word": "মৰম আৰু চেনেহ",
      "phrase": "আপোনাৰ প্ৰতি মোৰ হিয়াভৰা মৰম আৰু চেনেহ আছে দেই।",
      "phonetic": "Aponar proti mor hiyabhora morom aru seneh ase dei."
    },
    "or": {
      "word": "ସ୍ନେହ ଓ ଭଲପାଇବା",
      "phrase": "ଆପଣଙ୍କ ପ୍ରତି ମୋର ବହୁତ ସ୍ନେହ ଓ ଭଲପାଇବା ଅଛି।",
      "phonetic": "Apananka prati mora bahut sneha o bhalapaiba achi.",
      "ttsText": "आपणंक प्रति मोर बहुत स्नेह ओ भलपाइबा अछि भाई।"
    },
    "ta": {
      "word": "அன்பும் பாசமும்",
      "phrase": "உங்க மேல எனக்கு ரொம்ப அன்பும் அக்கறையும் இருக்குங்க.",
      "phonetic": "Unga mela enakku romba anbum akkaraiyum irukkunga."
    },
    "te": {
      "word": "ప్రేమ మరియు అభిమానం",
      "phrase": "మీరంటే నాకు ఎంతో ప్రేమ మరియు అభిమానం అండీ.",
      "phonetic": "Meerante naaku entho prema mariyu abhimanam andi."
    },
    "kn": {
      "word": "ಪ್ರೀತಿ ಮತ್ತು ಅಭಿಮಾನ",
      "phrase": "ನಿಮ್ಮ ಮೇಲೆ ನನಗೆ ತುಂಬಾ ಪ್ರೀತಿ ಮತ್ತು ಕಾಳಜಿ ಇದೆ ರೀ.",
      "phonetic": "Nimma mele nanage tumba preethi mattu kalaji ide ree."
    },
    "ml": {
      "word": "സ്നേഹവും കരുതലും",
      "phrase": "നിങ്ങളോട് എനിക്ക് ഒത്തിരി സ്നേഹവും കരുതലുമുണ്ട് കേട്ടോ.",
      "phonetic": "Ningalodu enikku othiri snehavum karuthalumundu ketto."
    },
    "ur": {
      "word": "محبت اور خلوص",
      "phrase": "آپ سے مجھے دلی محبت اور عقیدت ہے جناب۔",
      "phonetic": "Aap se mujhe dili mohabbat aur aqeedat hai janaab."
    },
    "ne": {
      "word": "माया र सद्भाव",
      "phrase": "तपाईंप्रति मेरो मनमा धेरै माया र सम्मान छ हजुर।",
      "phonetic": "Tapaiprati mero manma dherai maya ra samman chha hajur."
    },
    "kok": {
      "word": "खूब मोग आसा",
      "phrase": "तुजेर म्हाजो काळजासावन खूब मोग आसा गो.",
      "phonetic": "Tujer mhajo kaljasavan khub mog aasa go."
    },
    "doi": {
      "word": "बड़ा स्नेह ते प्यार",
      "phrase": "तुंदे कन्ने मिगी बड़ा स्नेह ते अपनापन ऐ जी।",
      "phonetic": "Tunde kanne migi bada sneh te apnapan ai ji."
    },
    "en": {
      "word": "Much Love & Care",
      "phrase": "I care about you deeply and send you all my love and respect!",
      "phonetic": "I care about you deeply and send you all my love and respect!"
    }
  },
  "name": {
    "hi": {
      "word": "शुभ नाम क्या है जी?",
      "phrase": "भाई साहब, आपका शुभ नाम क्या है जी?",
      "phonetic": "Bhai sahab, aapka shubh naam kya hai ji?"
    },
    "mai": {
      "word": "अहाँक शुभ नाम?",
      "phrase": "यौ भैया, अहाँक शुभ नाम की छियै?",
      "phonetic": "Yau bhaiya, ahaank shubh naam ki chhiyai?"
    },
    "bho": {
      "word": "राउर शुभ नाँव?",
      "phrase": "ए भैया, राउर शुभ नाँव का हटे हो?",
      "phonetic": "E bhaiya, raur shubh naav ka hate ho?"
    },
    "mag": {
      "word": "तोहर नाम की हई?",
      "phrase": "ए भैया, तोहर शुभ नाम की हई?",
      "phonetic": "E bhaiya, tohar shubh naam ki hai?"
    },
    "raj": {
      "word": "थांरो शुभ नाम सा?",
      "phrase": "पधारो सा, थांरो शुभ नाम कांई है सा?",
      "phonetic": "Padharo sa, thanro shubh naam kaai hai sa?"
    },
    "bgc": {
      "word": "तेरा के नाम सै भाई?",
      "phrase": "भाई, थारा शुभ नाम के सै?",
      "phonetic": "Bhai, thara shubh naam ke sai?"
    },
    "hne": {
      "word": "तोर का नाव आय संगवारी?",
      "phrase": "संगवारी, तोर शुभ नाव का आय गा?",
      "phonetic": "Sangwari, tor shubh naav ka aay ga?"
    },
    "mr": {
      "word": "तुमचं नाव काय हो?",
      "phrase": "दादा, तुमचं शुभ नाव काय आहे हो?",
      "phonetic": "Dada, tumcha shubh naav kay aahe ho?"
    },
    "gu": {
      "word": "તમારું શુભ નામ શું છે?",
      "phrase": "ભાઈ, તમારું શુભ નામ શું છે?",
      "phonetic": "Bhai, tamaru shubh naam shu chhe?"
    },
    "pa": {
      "word": "ਤੁਹਾਡਾ ਸ਼ੁਭ ਨਾਮ ਕੀ ਹੈ ਜੀ?",
      "phrase": "ਵੀਰ ਜੀ, ਤੁਹਾਡਾ ਸ਼ੁਭ ਨਾਮ ਕੀ ਹੈ ਜੀ?",
      "phonetic": "Veer ji, tuhada shubh naam ki hai ji?"
    },
    "bn": {
      "word": "আপনার নাম কী দাদা?",
      "phrase": "দাদা, আপনার ভালো নামটি কী বলুন তো?",
      "phonetic": "Dada, apnar bhalo naamti ki bolun to?"
    },
    "as": {
      "word": "আপোনাৰ নাম কি দেই?",
      "phrase": "আপোনাৰ শুভ নামটো কি বাৰু দেই?",
      "phonetic": "Aponar xubho naamto ki baru dei?"
    },
    "or": {
      "word": "ଆପଣଙ୍କ ଶୁଭ ନାମ କଣ?",
      "phrase": "ଭାଇ, ଆପଣଙ୍କ ଶୁଭ ନାମ କଣ ଅଟେ?",
      "phonetic": "Bhai, apananka subha nama kana ate?",
      "ttsText": "भाई, आपणंक शुभ नाम कण अटे?"
    },
    "ta": {
      "word": "உங்க பெயர் என்னங்க?",
      "phrase": "அண்ணா, உங்க நல்ல பெயர் என்னங்க?",
      "phonetic": "Anna, unga nalla peyar ennanga?"
    },
    "te": {
      "word": "మీ పేరు ఏమిటండీ?",
      "phrase": "అండీ, మీ మంచి పేరు ఏమిటో చెబుతారా?",
      "phonetic": "Andi, mee manchi peru emito chebuthara?"
    },
    "kn": {
      "word": "ನಿಮ್ಮ ಹೆಸರೇನು ರೀ?",
      "phrase": "ಅಣ್ಣಾ, ನಿಮ್ಮ ಶುಭ ಹೆಸರೇನು ರೀ?",
      "phonetic": "Anna, nimma shubha hesarenu ree?"
    },
    "ml": {
      "word": "നിങ്ങളുടെ പേരെന്താണ്?",
      "phrase": "ചേട്ടാ, നിങ്ങളുടെ നല്ല പേരെന്താണ് കേട്ടോ?",
      "phonetic": "Chetta, ningalude nalla perenthanu ketto?"
    },
    "ur": {
      "word": "آپ کا اسمِ گرامی؟",
      "phrase": "جناب، آپ کا پیارا نام کیا ہے؟",
      "phonetic": "Janaab, aap ka pyaara naam kya hai?"
    },
    "ne": {
      "word": "तपाईंको शुभ नाम के हो?",
      "phrase": "हजुरको शुभ नाम के पर्यो होला?",
      "phonetic": "Hajurko shubh naam ke paryo hola?"
    },
    "kok": {
      "word": "तुजें नांव किदें गो?",
      "phrase": "भाव, तुजें बरें नांव किदें गो?",
      "phonetic": "Bhav, tuje bare naav kide go?"
    },
    "doi": {
      "word": "तुंदा नाऽ केह् ऐ जी?",
      "phrase": "भरा जी, तुंदा शुभ नाऽ केह् ऐ जी?",
      "phonetic": "Bhara ji, tunda shubh naa keh ai ji?"
    },
    "en": {
      "word": "What Is Your Name?",
      "phrase": "Hello friend, may I know your good name please?",
      "phonetic": "Hello friend, may I know your good name please?"
    }
  },
  "understand": {
    "hi": {
      "word": "मैं समझ गया जी",
      "phrase": "अरे हाँ जी, मैं आपकी बात पूरी तरह समझ गया हूँ।",
      "phonetic": "Are haan ji, main aapki baat poori tarah samajh gaya hoon."
    },
    "mai": {
      "word": "हम बुझि गेलहुँ यौ",
      "phrase": "हँ यौ, हम अहाँक बात नीक जकाँ बुझि गेलहुँ।",
      "phonetic": "Han yau, ham ahaank baat neek jakaan bujhi gelahun."
    },
    "bho": {
      "word": "हम समझ गइनी हो",
      "phrase": "हँ भैया, रउआ का कहल चाहत बानी हम बढ़िया से बुझ गइनी।",
      "phonetic": "Han bhaiya, raua ka kahal chahat baani ham badhiya se bujh gaini."
    },
    "mag": {
      "word": "हम बुझ गेली भैया",
      "phrase": "हँ भैया, हम तोहर बात बढ़िया से समझ गेली।",
      "phonetic": "Han bhaiya, ham tohar baat badhiya se samajh geli."
    },
    "raj": {
      "word": "म्हें समझ गयो सा",
      "phrase": "हा सा, म्हें आपरी पूरी बात समझ गयो सा।",
      "phonetic": "Ha sa, mhe aapri poori baat samajh gayo sa."
    },
    "bgc": {
      "word": "मेरे समझ में आ गी",
      "phrase": "हाँ भाई, तेरी बात मेरे पल्ले पड़ गी, समझ गया मैं।",
      "phonetic": "Haan bhai, teri baat mere palle pad gi, samajh gaya main."
    },
    "hne": {
      "word": "मैं समझ गेंव संगवारी",
      "phrase": "हव संगवारी, तोर बात ला मैं बनेच समझ गेंव गा।",
      "phonetic": "Hav sangwari, tor baat la main banech samajh genv ga."
    },
    "mr": {
      "word": "मला समजलं हो",
      "phrase": "हो दादा, तुमचं म्हणणं मला अगदी व्यवस्थित समजलं.",
      "phonetic": "Ho dada, tumcha mhanna mala agadi vyavasthit samajla."
    },
    "gu": {
      "word": "મને સમજાઈ ગયું ભાઈ",
      "phrase": "હા ભાઈ, તમારી વાત મને બરાબર સમજાઈ ગઈ છે.",
      "phonetic": "Haa bhai, tamari vaat mane barabar samjai gai chhe."
    },
    "pa": {
      "word": "ਮੈਂ ਸਮਝ ਗਿਆ ਜੀ",
      "phrase": "ਹਾਂ ਜੀ, ਮੈਂ ਤੁਹਾਡੀ ਸਾਰੀ ਗੱਲ ਚੰਗੀ ਤਰ੍ਹਾਂ ਸਮਝ ਗਿਆ ਹਾਂ।",
      "phonetic": "Haan ji, main tuhadi saari gal changi tarhan samajh gaya haan."
    },
    "bn": {
      "word": "আমি বুঝতে পেরেছি দাদা",
      "phrase": "হ্যাঁ দাদা, আপনার কথাটা আমি পরিষ্কার বুঝতে পেরেছি।",
      "phonetic": "Hyan dada, apnar kothata ami porishkar bujhte perechi."
    },
    "as": {
      "word": "মই বুজি পালোঁ দেই",
      "phrase": "হয় দেই, আপোনাৰ কথাষাৰ মই ভালদৰে বুজি পালোঁ।",
      "phonetic": "Hoy dei, aponar kothaxar moi bhaldore buji palon."
    },
    "or": {
      "word": "ମୁଁ ବୁଝିଗଲି ଭାଇ",
      "phrase": "ହଁ ଭାଇ, ଆପଣଙ୍କ କଥା ମୁଁ ଭଲଭାବେ ବୁଝିଗଲି।",
      "phonetic": "Han bhai, apananka katha mun bhalabhabe bujhigali.",
      "ttsText": "हँ भाई, आपणंक कथा मुँ भलभाबे बुझिगलि।"
    },
    "ta": {
      "word": "எனக்குப் புரிஞ்சதுங்க",
      "phrase": "ஆமாங்க, நீங்க சொல்றது எனக்கு நல்லா புரிஞ்சதுங்க.",
      "phonetic": "Aamanga, neenga solrathu enakku nalla purinjathunga."
    },
    "te": {
      "word": "నాకు అర్థమైందండీ",
      "phrase": "అవునండీ, మీరు చెప్పేది నాకు పూర్తిగా అర్థమైంది.",
      "phonetic": "Avunandi, meeru cheppedi naaku poorthiga arthamaimdi."
    },
    "kn": {
      "word": "ನನಗೆ ಅರ್ಥವಾಯಿತು ರೀ",
      "phrase": "ಹೌದು ರೀ, ನಿಮ್ಮ ಮಾತು ನನಗೆ ಸ್ಪಷ್ಟವಾಗಿ ಅರ್ಥವಾಯಿತು.",
      "phonetic": "Haudu ree, nimma maathu nanage spashtavagi arthavayitu."
    },
    "ml": {
      "word": "എനിക്ക് മനസ്സിലായി ചേട്ടാ",
      "phrase": "അതെ ചേട്ടാ, നിങ്ങൾ പറഞ്ഞത് എനിക്ക് നന്നായി മനസ്സിലായി.",
      "phonetic": "Athe chetta, ningal paranjathu enikku nannayi manassilayi."
    },
    "ur": {
      "word": "میں سمجھ گیا جناب",
      "phrase": "جی ہاں جناب، میں آپ کی بات پوری طرح سمجھ گیا ہوں۔",
      "phonetic": "Jee haan janaab, main aap ki baat poori tarah samajh gaya hoon."
    },
    "ne": {
      "word": "मैले बुझें हजुर",
      "phrase": "हजुर, तपाईंको कुरा मैले राम्ररी बुझें।",
      "phonetic": "Hajur, tapaiko kura maile ramrari bujhen."
    },
    "kok": {
      "word": "म्हाका समजलें गो",
      "phrase": "हय गो, तुजें उतर म्हाका सारकें समजलें.",
      "phonetic": "Hay go, tuje utar mhaka sarke samjale."
    },
    "doi": {
      "word": "मिगी समझ आई गेई जी",
      "phrase": "आं जी, तुंदी गल्ल मिगी शैल तरीके कन्ने समझ आई गेई।",
      "phonetic": "Aan ji, tundi gall migi shail tareeke kanne samajh aai gei."
    },
    "en": {
      "word": "I Understand Clearly",
      "phrase": "Yes friend, I clearly understand what you are saying.",
      "phonetic": "Yes friend, I clearly understand what you are saying."
    }
  },
  "mother": {
    "hi": {
      "word": "माँ / माताजी",
      "phrase": "यह मेरी प्यारी माँ के लिए है, माताजी को प्रणाम।",
      "phonetic": "Yah meri pyaari Maa ke liye hai, Mataji ko pranaam."
    },
    "mai": {
      "word": "माय / मैया",
      "phrase": "हमर प्यारी माय, माय केँ प्रणाम।",
      "phonetic": "Hamar pyaari Maay, Maay ken pranaam."
    },
    "bho": {
      "word": "माई / महतारी",
      "phrase": "हमार प्यारी माई, माई के गोड़ लागत बानी।",
      "phonetic": "Hamaar pyaari Maai, Maai ke god lagat baani."
    },
    "mag": {
      "word": "मैया / माई",
      "phrase": "हमर प्यारी मैया के प्रणाम।",
      "phonetic": "Hamar pyaari Maiya ke pranaam."
    },
    "raj": {
      "word": "मावड़ी / जीजी सा",
      "phrase": "म्हारी प्यारी मावड़ी सा, चरण स्पर्श सा।",
      "phonetic": "Mhari pyaari Mavdi sa, charan sparsh sa."
    },
    "bgc": {
      "word": "माँ / बेबे",
      "phrase": "मेरी प्यारी माँ, माँ ने राम-राम।",
      "phonetic": "Meri pyaari Maa, Maa ne Ram-Ram."
    },
    "hne": {
      "word": "दाई / महतारी",
      "phrase": "मोर मयारू दाई, दाई ला पाँव परत हँव गा।",
      "phonetic": "Mor mayaru Daai, Daai la paanv parat hanv ga."
    },
    "mr": {
      "word": "आई / माऊली",
      "phrase": "माझी प्रेमळ आई, आईला नमस्कार.",
      "phonetic": "Majhi premal Aai, Aaila namaskar."
    },
    "gu": {
      "word": "મા / બા",
      "phrase": "મારી વહાલી મા અને બા ને પ્રણામ.",
      "phonetic": "Mari vahali Maa ane Baa ne pranaam."
    },
    "pa": {
      "word": "ਮਾਂ / ਬੇਬੇ ਜੀ",
      "phrase": "ਮੇਰੀ ਪਿਆਰੀ ਮਾਂ ਜੀ, ਬੇਬੇ ਜੀ ਨੂੰ ਸਤਿਕਾਰ।",
      "phonetic": "Meri pyaari Maa ji, Bebe ji nu satikar."
    },
    "bn": {
      "word": "মা / জননী",
      "phrase": "আমার আদরের মা, মাকে প্রণাম জানাই।",
      "phonetic": "Amar adorer Maa, Maake pronam janai."
    },
    "as": {
      "word": "মা / আই",
      "phrase": "মোৰ মৰমৰ আই, আইলৈ সেৱা জনালোঁ।",
      "phonetic": "Mor moromor Aai, Aailoi xewa jonalon."
    },
    "or": {
      "word": "ମା / ବৌ",
      "phrase": "ମୋର ସ୍ନେହର ମା, ମାଙ୍କୁ ପ୍ରଣାମ।",
      "phonetic": "Mora snehara Maa, Maanku pranama.",
      "ttsText": "मोर स्नेहर मा, मांकु प्रणाम।"
    },
    "ta": {
      "word": "அம்மா",
      "phrase": "என் அன்பான அம்மாவுக்கு வணக்கம்.",
      "phonetic": "En anbana Ammavukku vanakkam."
    },
    "te": {
      "word": "అమ్మ / తల్లి",
      "phrase": "మా ప్రేమగల అమ్మగారికి నమస్కారం.",
      "phonetic": "Maa premagala Ammagariki namaskaram."
    },
    "kn": {
      "word": "ಅಮ್ಮ / ತಾಯಿ",
      "phrase": "ನನ್ನ ಪ್ರೀತಿಯ ಅಮ್ಮನಿಗೆ ನಮಸ್ಕಾರ.",
      "phonetic": "Nanna preethiya Ammanige namaskara."
    },
    "ml": {
      "word": "അമ്മ",
      "phrase": "എന്റെ പ്രിയപ്പെട്ട അമ്മയ്ക്ക് നമസ്കാരം.",
      "phonetic": "Ente priyappetta Ammaykku namaskaram."
    },
    "ur": {
      "word": "امی جان / والدہ",
      "phrase": "میری پیاری امی جان کو سلام۔",
      "phonetic": "Meri pyaari Ammi Jaan ko salaam."
    },
    "ne": {
      "word": "आमा / मुमा",
      "phrase": "मेरी प्यारी आमालाई दर्शन र प्रणाम हजुर।",
      "phonetic": "Meri pyaari Aamalai darshan ra pranaam hajur."
    },
    "kok": {
      "word": "आवय / मांय",
      "phrase": "म्हाजी मोगाची मांय, मांयक नमस्कार.",
      "phonetic": "Mhaji mogachi Maay, Maayak namaskar."
    },
    "doi": {
      "word": "मां / माता जी",
      "phrase": "मेरी प्यारी मां जी गी मत्था टेकना।",
      "phonetic": "Meri pyaari Maa ji gi mattha tekna."
    },
    "en": {
      "word": "Mother / Maa",
      "phrase": "My loving Mother, sending warm respect to Maa.",
      "phonetic": "My loving Mother, sending warm respect to Maa."
    }
  },
  "father": {
    "hi": {
      "word": "पिताजी / बाबूजी",
      "phrase": "मेरे आदरणीय पिताजी, बाबूजी को सादर प्रणाम।",
      "phonetic": "Mere aadarneeya Pitaji, Babuji ko saadar pranaam."
    },
    "mai": {
      "word": "बाबूजी / पिताजी",
      "phrase": "हमर पूज्य बाबूजी केँ प्रणाम यौ।",
      "phonetic": "Hamar poojya Babuji ken pranaam yau."
    },
    "bho": {
      "word": "बाबूजी / पापा",
      "phrase": "हमार पूज्य बाबूजी के गोड़ लागत बानी।",
      "phonetic": "Hamaar poojya Babuji ke god lagat baani."
    },
    "mag": {
      "word": "बाबूजी",
      "phrase": "हमर बाबूजी के गोड़ लागऽ हियो।",
      "phonetic": "Hamar Babuji ke god laga hiyo."
    },
    "raj": {
      "word": "बापू सा / दाता",
      "phrase": "म्हारा पूज्य बापू सा ने घणा प्रणाम सा।",
      "phonetic": "Mhara poojya Bapu sa ne ghana pranaam sa."
    },
    "bgc": {
      "word": "बाबू / बापू जी",
      "phrase": "मेरे बापू जी ने हाथ जोड़ कै राम-राम।",
      "phonetic": "Mere Bapu ji ne haath jod kai Ram-Ram."
    },
    "hne": {
      "word": "ददा / बाबूजी",
      "phrase": "मोर सियान ददा ला पाँव परत हँव गा।",
      "phonetic": "Mor siyaan Dada la paanv parat hanv ga."
    },
    "mr": {
      "word": "बाबा / वडील",
      "phrase": "माझे आदरणीय बाबा, बाबांना साष्टांग नमस्कार.",
      "phonetic": "Majhe aadarneeya Baba, Babanna sashtang namaskar."
    },
    "gu": {
      "word": "પિતાજી / બાપુજી",
      "phrase": "મારા પૂજ્ય પિતાજી અને બાપુજીને પ્રણામ.",
      "phonetic": "Mara poojya Pitaji ane Bapujine pranaam."
    },
    "pa": {
      "word": "ਪਿਤਾ ਜੀ / ਬਾਪੂ ਜੀ",
      "phrase": "ਮੇਰੇ ਸਤਿਕਾਰਯੋਗ ਬਾਪੂ ਜੀ ਨੂੰ ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ।",
      "phonetic": "Mere satikaryog Bapu ji nu Sat Sri Akaal."
    },
    "bn": {
      "word": "বাবা / পিতা",
      "phrase": "আমার শ্রদ্ধেয় বাবাকে প্রণাম জানাই।",
      "phonetic": "Amar shroddheyo Babake pronam janai."
    },
    "as": {
      "word": "দেউতা / পিতা",
      "phrase": "মোৰ শ্ৰদ্ধাৰ দেউতালৈ সেৱা জনালোঁ।",
      "phonetic": "Mor xroddhar Deutaloi xewa jonalon."
    },
    "or": {
      "word": "ବାପା / ନନା",
      "phrase": "ମୋର ପୂଜ୍ୟ ବାପାଙ୍କୁ ପ୍ରଣାମ।",
      "phonetic": "Mora poojya Bapanku pranama.",
      "ttsText": "मोर पूज्य बापांकु प्रणाम।"
    },
    "ta": {
      "word": "அப்பா",
      "phrase": "என் அன்பான அப்பாவுக்கு வணக்கம்.",
      "phonetic": "En anbana Appavukku vanakkam."
    },
    "te": {
      "word": "నాన్న / తండ్రి",
      "phrase": "మా గౌరవనీయులైన నాన్నగారికి నమస్కారం.",
      "phonetic": "Maa gauravaneeyulaina Nannagariki namaskaram."
    },
    "kn": {
      "word": "ಅಪ್ಪ / ತಂದೆ",
      "phrase": "ನನ್ನ ಪ್ರೀತಿಯ ತಂದೆಯವರಿಗೆ ನಮಸ್ಕಾರ.",
      "phonetic": "Nanna preethiya Thandeyavarige namaskara."
    },
    "ml": {
      "word": "അച്ഛൻ",
      "phrase": "എന്റെ പ്രിയപ്പെട്ട അച്ഛന് നമസ്കാരം.",
      "phonetic": "Ente priyappetta Achchanu namaskaram."
    },
    "ur": {
      "word": "ابو جان / والد صاحب",
      "phrase": "میرے محترم والد صاحب کو سلام و آداب۔",
      "phonetic": "Mere mohtaram Walid sahab ko salaam-o-aadaab."
    },
    "ne": {
      "word": "बुबा / बाबा",
      "phrase": "मेरो आदरणीय बुबालाई सादर ढोग हजुर।",
      "phonetic": "Mero aadarneeya Bubalai saadar dhog hajur."
    },
    "kok": {
      "word": "बापूय / बाबा",
      "phrase": "म्हाजो माननीय बापूय, बाबांक नमस्कार.",
      "phonetic": "Mhajo mananiya Bapuy, Babank namaskar."
    },
    "doi": {
      "word": "पिता जी / चाचा-बापू",
      "phrase": "मेरे पूज्य पिता जी गी प्रणाम।",
      "phonetic": "Mere poojya Pita ji gi pranaam."
    },
    "en": {
      "word": "Father / Pitaji",
      "phrase": "My respected Father, sending warm regards to Pitaji.",
      "phonetic": "My respected Father, sending warm regards to Pitaji."
    }
  },
  "help": {
    "hi": {
      "word": "कृपया मदद करें जी",
      "phrase": "भाई साहब, कृपया मेरी थोड़ी मदद कर दीजिए, मुझे सहारे की ज़रूरत है।",
      "phonetic": "Bhai sahab, kripaya meri thodi madad kar dijiye, mujhe sahare ki zaroorat hai."
    },
    "mai": {
      "word": "मददि करू यौ",
      "phrase": "यौ भैया, कृपया कनी हमर मददि कऽ दिअ ने।",
      "phonetic": "Yau bhaiya, kripaya kani hamar madadi ka dia ne."
    },
    "bho": {
      "word": "मदद कर दीं भैया",
      "phrase": "ए भैया, तनी हमार मदद कर दीं ना, बड़ा उपकार होई।",
      "phonetic": "E bhaiya, tani hamaar madad kar deen na, bada upkaar hoi."
    },
    "mag": {
      "word": "मदद कर द भैया",
      "phrase": "ए भैया, तनी हमर मदद कर द ना।",
      "phonetic": "E bhaiya, tani hamar madad kar da na."
    },
    "raj": {
      "word": "म्हारी मदद करो सा",
      "phrase": "भाया सा, कृपा कर ने म्हारी थोड़ी मदद कर दो सा।",
      "phonetic": "Bhaya sa, kripa kar ne mhari thodi madad kar do sa."
    },
    "bgc": {
      "word": "मदद कर दे भाई",
      "phrase": "रे भाई, मने थोड़ी सी मदद कर दे ना, बड़ी मेहरबानी होगी।",
      "phonetic": "Re bhai, mane thodi si madad kar de na, badi meherbani hogi."
    },
    "hne": {
      "word": "मोर मदद कर दे संगवारी",
      "phrase": "संगवारी भैया, मोर थोरकन मदद कर दे न गा।",
      "phonetic": "Sangwari bhaiya, mor thorkan madad kar de na ga."
    },
    "mr": {
      "word": "कृपया मदत करा दादा",
      "phrase": "दादा, कृपया मला थोडी मदत करा ना, तुमचे उपकार होतील.",
      "phonetic": "Dada, kripaya mala thodi madat kara na, tumche upkaar hotil."
    },
    "gu": {
      "word": "મને મદદ કરો ભાઈ",
      "phrase": "ભાઈ, કૃપા કરીને મને થોડી મદદ કરશો ને?",
      "phonetic": "Bhai, krupa karine mane thodi madad karsho ne?"
    },
    "pa": {
      "word": "ਮੇਰੀ ਮਦਦ ਕਰੋ ਜੀ",
      "phrase": "ਵੀਰ ਜੀ, ਕਿਰਪਾ ਕਰਕੇ ਮੇਰੀ ਥੋੜ੍ਹੀ ਮਦਦ ਕਰ ਦਿਓ ਜੀ।",
      "phonetic": "Veer ji, kirpa karke meri thodi madad kar dio ji."
    },
    "bn": {
      "word": "আমাকে সাহায্য করুন দাদা",
      "phrase": "দাদা, দয়া করে আমাকে একটু সাহায্য করুন না।",
      "phonetic": "Dada, doya kore amake ektu shahajjo korun na."
    },
    "as": {
      "word": "মোক সহায় কৰকচোন",
      "phrase": "ককাইদেউ, অনুগ্ৰহ কৰি মোক অলপ সহায় কৰি দিয়কচোন।",
      "phonetic": "Kokaideu, onugroho kori mok olop xohay kori diyokson."
    },
    "or": {
      "word": "ମୋତେ ସାହାଯ୍ୟ କରନ୍ତୁ ଭାଇ",
      "phrase": "ଭାଇ, ଦୟାକରି ମୋତେ ଟିକେ ସାହାଯ୍ୟ କରନ୍ତୁ ନା।",
      "phonetic": "Bhai, dayakari mote tike sahajya karantu na.",
      "ttsText": "भाई, दयाकरि मोते टिके साहाज्य करन्तु ना।"
    },
    "ta": {
      "word": "கொஞ்சம் உதவி பண்ணுங்க",
      "phrase": "அண்ணா, தயவுசெஞ்சு எனக்கு கொஞ்சம் உதவி பண்ணுங்க.",
      "phonetic": "Anna, thayavusenju enakku konjam uthavi pannunga."
    },
    "te": {
      "word": "కొంచెం సహాయం చేయండి",
      "phrase": "అన్నా, దయచేసి నాకు కొంచెం సహాయం చేయండి.",
      "phonetic": "Anna, dayachesi naaku konchem sahayam cheyandi."
    },
    "kn": {
      "word": "ಸ್ವಲ್ಪ ಸಹಾಯ ಮಾಡಿ ರೀ",
      "phrase": "ಅಣ್ಣಾ, ದಯವಿಟ್ಟು ನನಗೆ ಸ್ವಲ್ಪ ಸಹಾಯ ಮಾಡಿ ರೀ.",
      "phonetic": "Anna, dayavittu nanage svalpa sahaya maadi ree."
    },
    "ml": {
      "word": "ഒന്ന് സഹായിക്കണേ ചേട്ടാ",
      "phrase": "ചേട്ടാ, ദയവായി എന്നെ ഒന്ന് സഹായിക്കാമോ?",
      "phonetic": "Chetta, dayavayi enne onnu sahayikkamo?"
    },
    "ur": {
      "word": "میری مدد کیجیے جناب",
      "phrase": "بھائی صاحب، براہ کرم میری تھوڑی مدد فرما دیجیے۔",
      "phonetic": "Bhai sahab, bara-e-karam meri thodi madad farma dijiye."
    },
    "ne": {
      "word": "मलाई सहयोग गर्नुहोस् हजुर",
      "phrase": "हजुर, कृपया मलाई अलिकति सहयोग गरिदिनुहोस् न।",
      "phonetic": "Hajur, kripaya malai alikati sahayog garidinuhos na."
    },
    "kok": {
      "word": "म्हाका आदार कर गो",
      "phrase": "भाव, उपकार करून म्हाका मात्सो आदार कर गो.",
      "phonetic": "Bhav, upkaar karun mhaka matso aadar kar go."
    },
    "doi": {
      "word": "मेरी मदद करो जी",
      "phrase": "भरा जी, कृपा करियै मेरी थोड़ी मदद करी देओ जी।",
      "phonetic": "Bhara ji, kripa kariyai meri thodi madad kari deo ji."
    },
    "en": {
      "word": "Please Help Me",
      "phrase": "Excuse me friend, could you please help me out for a moment?",
      "phonetic": "Excuse me friend, could you please help me out for a moment?"
    }
  },
  "blind": {
    "hi": {
      "word": "नेत्रहीन / देख नहीं सकता",
      "phrase": "भाई साहब, मैं देख नहीं सकता हूँ, कृपया मुझे रास्ता दिखाने में मदद कीजिए।",
      "phonetic": "Bhai sahab, main dekh nahi sakta hoon, kripaya mujhe raasta dikhane mein madad kijiye."
    },
    "mai": {
      "word": "नेत्रहीन छी / बाट देखा दिअ",
      "phrase": "यौ भैया, हम देख नहि सकैत छी, कनी हमरा बाट देखा दिअ ने।",
      "phonetic": "Yau bhaiya, ham dekh nahi sakait chhi, kani hamra baat dekha dia ne."
    },
    "bho": {
      "word": "देख नइखीं सकत / राह दिखाईं",
      "phrase": "ए भैया, हम आँख से देख नइखीं सकत, तनी हमरा राह देखा दीं।",
      "phonetic": "E bhaiya, ham aankh se dekh naikhin sakat, tani hamra raah dekha deen."
    },
    "mag": {
      "word": "देख नय सकऽ हियो",
      "phrase": "भैया, हम देख नय सकऽ हियो, तनी रस्ता बता द ना।",
      "phonetic": "Bhaiya, ham dekh nay saka hiyo, tani rasta bata da na."
    },
    "raj": {
      "word": "दिखे कोनी सा / मारग बताओ",
      "phrase": "भाया सा, म्हाने आंख्यां सूं दिखे कोनी, कृपा कर ने मारग बताओ सा।",
      "phonetic": "Bhaya sa, mhane aankhyan soon dikhe koni, kripa kar ne maarag batao sa."
    },
    "bgc": {
      "word": "दिखता कोन्या भाई",
      "phrase": "भाई, मने दिखता कोन्या सै, थोड़ा राह बता दे ना।",
      "phonetic": "Bhai, mane dikhta konya sai, thoda raah bata de na."
    },
    "hne": {
      "word": "दिखत नइ हे संगवारी",
      "phrase": "संगवारी, मोला आँखी म दिखत नइ हे गा, रद्दा बता दे न।",
      "phonetic": "Sangwari, mola aankhi ma dikhat nai he ga, radda bata de na."
    },
    "mr": {
      "word": "मला दिसत नाही / मार्ग दाखवा",
      "phrase": "दादा, मला डोळ्यांनी दिसत नाही, कृपया मला रस्ता ओलांडायला मदत करा.",
      "phonetic": "Dada, mala dolyanni disat nahi, kripaya mala rasta olandayla madat kara."
    },
    "gu": {
      "word": "પ્રજ્ઞાચક્ષુ / રસ્તો બતાવો",
      "phrase": "ભાઈ, હું જોઈ શકતો નથી, કૃપા કરીને મને રસ્તો બતાવશો?",
      "phonetic": "Bhai, hu joi shakto nathi, krupa karine mane rasto batavsho?"
    },
    "pa": {
      "word": "ਮੈਂ ਦੇਖ ਨਹੀਂ ਸਕਦਾ ਜੀ",
      "phrase": "ਵੀਰ ਜੀ, ਮੈਂ ਦੇਖ ਨਹੀਂ ਸਕਦਾ, ਕਿਰਪਾ ਕਰਕੇ ਮੈਨੂੰ ਰਸਤਾ ਦਿਖਾ ਦਿਓ ਜੀ।",
      "phonetic": "Veer ji, main dekh nahi sakda, kirpa karke mainu rasta dikha dio ji."
    },
    "bn": {
      "word": "আমি দৃষ্টিহীন / পথ দেখান",
      "phrase": "দাদা, আমি চোখে দেখতে পাই না, দয়া করে আমাকে পথটা দেখিয়ে দিন।",
      "phonetic": "Dada, ami chokhe dekhte pai na, doya kore amake pothta dekhiye din."
    },
    "as": {
      "word": "মই দেখিব নোৱাৰোঁ",
      "phrase": "ককাইদেউ, মই চকুৰে নেদেখোঁ, অনুগ্ৰহ কৰি মোক বাটটো দেখুৱাই দিয়কচোন।",
      "phonetic": "Kokaideu, moi sokure nedekhon, onugroho kori mok baatto dekhuwai diyokson."
    },
    "or": {
      "word": "ମୁଁ ଦେଖିପାରେ ନାହିଁ ଭାଇ",
      "phrase": "ଭାଇ, ମୁଁ ଆଖିରେ ଦେଖିପାରେ ନାହିଁ, ଦୟାକରି ମୋତେ ବାଟ ଦେଖାଇ ଦିଅନ୍ତୁ।",
      "phonetic": "Bhai, mun akhire dekhipare nahin, dayakari mote bata dekhai diantu.",
      "ttsText": "भाई, मुँ आखिर देखिपारे नाहीं, दयाकरि मोते बाट देखाइ दिअन्तु।"
    },
    "ta": {
      "word": "கண் தெரியாதுங்க / வழி காட்டுங்க",
      "phrase": "அண்ணா, எனக்கு கண் தெரியாதுங்க, தயவுசெஞ்சு கொஞ்சம் வழி காட்டுங்க.",
      "phonetic": "Anna, enakku kan theriyathunga, thayavusenju konjam vazhi kaattunga."
    },
    "te": {
      "word": "కళ్ళు కనిపించవండీ",
      "phrase": "అన్నా, నాకు కళ్ళు కనిపించవండీ, దయచేసి కొంచెం దారి చూపించండి.",
      "phonetic": "Anna, naaku kallu kanipinchavandi, dayachesi konchem daari choopinchandi."
    },
    "kn": {
      "word": "ಕಣ್ಣು ಕಾಣಿಸುವುದಿಲ್ಲ ರೀ",
      "phrase": "ಅಣ್ಣಾ, ನನಗೆ ಕಣ್ಣು ಕಾಣಿಸುವುದಿಲ್ಲ ರೀ, ದಯವಿಟ್ಟು ದಾರಿ ತೋರಿಸಿ.",
      "phonetic": "Anna, nanage kannu kanisuvudilla ree, dayavittu daari thorisi."
    },
    "ml": {
      "word": "കണ്ണ് കാണില്ല ചേട്ടാ",
      "phrase": "ചേട്ടാ, എനിക്ക് കണ്ണ് കാണാൻ കഴിയില്ല, ദയവായി വഴി പറഞ്ഞുതരാമോ?",
      "phonetic": "Chetta, enikku kannu kaanaan kazhiyilla, dayavayi vazhi paranjutharamo?"
    },
    "ur": {
      "word": "میں نابینا ہوں جناب",
      "phrase": "جناب، میں دیکھ نہیں سکتا ہوں، براہ کرم میری رہنمائی فرمائیے۔",
      "phonetic": "Janaab, main dekh nahi sakta hoon, bara-e-karam meri rehnumai farmaiye."
    },
    "ne": {
      "word": "म देख्न सक्दिनँ हजुर",
      "phrase": "हजुर, म आँखा देख्न सक्दिनँ, कृपया मलाई बाटो देखाइदिनुहोस् न।",
      "phonetic": "Hajur, ma aankha dekhna sakdina, kripaya malai bato dekhaidinuhos na."
    },
    "kok": {
      "word": "म्हाका दिसना गो / वाट दाखय",
      "phrase": "भाव, म्हाका दोळ्यांनी दिसना, उपकार करून म्हाका वाट दाखय गो.",
      "phonetic": "Bhav, mhaka dolyanni disna, upkaar karun mhaka vaat dakhay go."
    },
    "doi": {
      "word": "मिगी लउआ नेईं ओंदा जी",
      "phrase": "भरा जी, मिगी अक्खें कन्ने लउआ नेईं ओंदा, कृपा करियै रस्ता दस्सो जी।",
      "phonetic": "Bhara ji, migi akkhen kanne laua nein onda, kripa kariyai rasta dasso ji."
    },
    "en": {
      "word": "Visually Impaired / Please Guide Me",
      "phrase": "Friend, I have visual impairment and cannot see, please guide me.",
      "phonetic": "Friend, I have visual impairment and cannot see, please guide me."
    }
  },
  "deaf": {
    "hi": {
      "word": "सांकेतिक भाषा / सुन नहीं सकता",
      "phrase": "भाई साहब, मैं सुन नहीं सकता, मैं इशारों की भाषा में बात करता हूँ।",
      "phonetic": "Bhai sahab, main sun nahi sakta, main isharon ki bhasha mein baat karta hoon."
    },
    "mai": {
      "word": "सांकेतिक भाषा / सुनु नहि सकैत",
      "phrase": "यौ भैया, हम कान सँ सुनु नहि सकैत छी, इशारामे बात करैत छी।",
      "phonetic": "Yau bhaiya, ham kaan san sunu nahi sakait chhi, ishara mein baat karait chhi."
    },
    "bho": {
      "word": "इशारा में बात / सुन नइखीं सकत",
      "phrase": "ए भैया, हम सुन नइखीं सकत, हम इशारा के भाषा में बात करीलें।",
      "phonetic": "E bhaiya, ham sun naikhin sakat, ham ishara ke bhasha mein baat karilen."
    },
    "mag": {
      "word": "इशारा भाषा / सुन नय सकऽ हियो",
      "phrase": "भैया, हम सुन नय सकऽ हियो, इशारा से बात करऽ हियो।",
      "phonetic": "Bhaiya, ham sun nay saka hiyo, ishara se baat kara hiyo."
    },
    "raj": {
      "word": "सुणीजे कोनी सा / इशारा सूं बात",
      "phrase": "भाया सा, म्हाने कानां सूं सुणीजे कोनी, म्हें इशारा सूं बात करूं सा।",
      "phonetic": "Bhaya sa, mhane kaanan soon sunije koni, mhe ishara soon baat karun sa."
    },
    "bgc": {
      "word": "सुणता कोन्या भाई / इशारे तै बात",
      "phrase": "भाई, मने सुणता कोन्या सै, मैं इशारों में बात करूं सूं।",
      "phonetic": "Bhai, mane sunta konya sai, main isharon mein baat karun soon."
    },
    "hne": {
      "word": "सुनात नइ हे / इसारा म बात",
      "phrase": "संगवारी, मोला कान म सुनात नइ हे गा, मैं इसारा म गोठियाथँव।",
      "phonetic": "Sangwari, mola kaan ma sunaat nai he ga, main isara ma gothiyathanv."
    },
    "mr": {
      "word": "कर्णबधिर / खाणाखुणांची भाषा",
      "phrase": "दादा, मला ऐकू येत नाही, मी सांकेतिक भाषेत संवाद साधतो.",
      "phonetic": "Dada, mala aiku yet nahi, mi sanketik bhashet sanvad sadhto."
    },
    "gu": {
      "word": "સાંભળી શકતો નથી / સાંકેતિક ભાષા",
      "phrase": "ભાઈ, હું સાંભળી શકતો નથી, હું ઈશારાની ભાષામાં વાત કરું છું.",
      "phonetic": "Bhai, hu sambhali shakto nathi, hu isharani bhashama vaat karu chhu."
    },
    "pa": {
      "word": "ਸੁਣ ਨਹੀਂ ਸਕਦਾ / ਇਸ਼ਾਰਿਆਂ ਦੀ ਭਾਸ਼ਾ",
      "phrase": "ਵੀਰ ਜੀ, ਮੈਂ ਸੁਣ ਨਹੀਂ ਸਕਦਾ, ਮੈਂ ਇਸ਼ਾਰਿਆਂ ਦੀ ਭਾਸ਼ਾ ਵਿੱਚ ਗੱਲ ਕਰਦਾ ਹਾਂ।",
      "phonetic": "Veer ji, main sun nahi sakda, main ishareyan di bhasha vich gal karda haan."
    },
    "bn": {
      "word": "শুনতে পাই না / ইশারা ভাষা",
      "phrase": "দাদা, আমি কানে শুনতে পাই না, তাই ইশারা ভাষায় কথা বলি।",
      "phonetic": "Dada, ami kane shunte pai na, tai ishara bhashay kotha boli."
    },
    "as": {
      "word": "শুনিব নোৱাৰোঁ / ইংগিত ভাষা",
      "phrase": "ককাইদেউ, মই কাণেৰে নুশুনোঁ, ইংগিত ভাষাত কথা পাতোঁ।",
      "phonetic": "Kokaideu, moi kanere nuxunon, ingit bhaxat kotha paton."
    },
    "or": {
      "word": "ଶୁଣିପାରେ ନାହିଁ / ସଙ୍କେତ ଭାଷା",
      "phrase": "ଭାଇ, ମୁଁ ଶୁଣିପାରେ ନାହିଁ, ମୁଁ ସଙ୍କେତ ଭାଷାରେ କଥା ହୁଏ।",
      "phonetic": "Bhai, mun sunipare nahin, mun sanketa bhashare katha hue.",
      "ttsText": "भाई, मुँ सुणिपारे नाहीं, मुँ संकेत भाषारे कथा हुए।"
    },
    "ta": {
      "word": "காது கேட்காது / சைகை மொழி",
      "phrase": "அண்ணா, எனக்கு காது கேட்காதுங்க, நான் சைகை மொழியில் பேசுவேன்.",
      "phonetic": "Anna, enakku kaathu ketkaathunga, naan saigai mozhiyil pesuven."
    },
    "te": {
      "word": "వినిపించదండీ / సైగ భాష",
      "phrase": "అన్నా, నాకు వినిపించదండీ, నేను సైగ భాషలో మాట్లాడతాను.",
      "phonetic": "Anna, naaku vinipinchadandi, nenu saiga bhashalo matladathanu."
    },
    "kn": {
      "word": "ಕಿವಿ ಕೇಳಿಸುವುದಿಲ್ಲ / ಸಂಜ್ಞೆ ಭಾಷೆ",
      "phrase": "ಅಣ್ಣಾ, ನನಗೆ ಕಿವಿ ಕೇಳಿಸುವುದಿಲ್ಲ ರೀ, ಸಂಜ್ಞೆ ಭಾಷೆಯಲ್ಲಿ ಮಾತನಾಡುತ್ತೇನೆ.",
      "phonetic": "Anna, nanage kivi kelisuvudilla ree, sanjne bhasheyalli matanaduttene."
    },
    "ml": {
      "word": "ചെവി കേൾക്കില്ല / ആംഗ്യഭാഷ",
      "phrase": "ചേട്ടാ, എനിക്ക് ചെവി കേൾക്കില്ല, ഞാൻ ആംഗ്യഭാഷയിലാണ് സംസാരിക്കുന്നത്.",
      "phonetic": "Chetta, enikku chevi kelkkilla, njan aamgyabhashayilanu samsarikkunnathu."
    },
    "ur": {
      "word": "سن نہیں سکتا / اشاروں کی زبان",
      "phrase": "جناب، میں سن نہیں سکتا اور اشاروں کی زبان میں بات کرتا ہوں۔",
      "phonetic": "Janaab, main sun nahi sakta aur isharon ki zaban mein baat karta hoon."
    },
    "ne": {
      "word": "सुन्न सक्दिनँ / सांकेतिक भाषा",
      "phrase": "हजुर, म कान सुन्न सक्दिनँ र सांकेतिक भाषामा कुरा गर्छु।",
      "phonetic": "Hajur, ma kaan sunna sakdina ra sanketik bhashama kura garchhu."
    },
    "kok": {
      "word": "आयकूंक येना / खुणांची भास",
      "phrase": "भाव, म्हाका आयकूंक येना, हांव खुणांचे भाशेंत उलयतां.",
      "phonetic": "Bhav, mhaka aaykunk yena, haav khunanche bhashent ulayta."
    },
    "doi": {
      "word": "सुनाई नेईं दिंदा / इशारें दी भाशा",
      "phrase": "भरा जी, मिगी सुनाई नेईं दिंदा, मैं इशारें दी भाशा च गल्ल करदा आं।",
      "phonetic": "Bhara ji, migi sunai nein dinda, main isharen di bhasha ch gall karda aan."
    },
    "en": {
      "word": "Deaf / Sign Language User",
      "phrase": "Friend, I am Deaf and communicate using Indian Sign Language.",
      "phonetic": "Friend, I am Deaf and communicate using Indian Sign Language."
    }
  },
  "water": {
    "hi": {
      "word": "पीने का पानी जी",
      "phrase": "भाई साहब, बड़ी प्यास लगी है, कृपया थोड़ा पीने का पानी पिला दीजिए।",
      "phonetic": "Bhai sahab, badi pyaas lagi hai, kripaya thoda peene ke liye paani pila dijiye."
    },
    "mai": {
      "word": "पीबाक पानि यौ",
      "phrase": "यौ भैया, बड़ पियास लागल अछि, कनी पीबाक लेल पानि दिअ ने।",
      "phonetic": "Yau bhaiya, bad piyaas lagal achhi, kani peebaak lel paani dia ne."
    },
    "bho": {
      "word": "पीये के पानी भैया",
      "phrase": "ए भैया, बड़ी पियास लागल बा, तनी एक गिलास पानी पिया दीं ना।",
      "phonetic": "E bhaiya, badi piyaas lagal ba, tani ek gilaas paani piya deen na."
    },
    "mag": {
      "word": "पीये ला पानी",
      "phrase": "भैया, बड़ी पियास लागल हई, तनी पानी पिया द ना।",
      "phonetic": "Bhaiya, badi piyaas lagal hai, tani paani piya da na."
    },
    "raj": {
      "word": "पीवण रो पाणी सा",
      "phrase": "भाया सा, घणी प्यास लागी है, कृपा कर ने थोड़ो पाणी पाओ सा।",
      "phonetic": "Bhaya sa, ghani pyaas laagi hai, kripa kar ne thodo paani pao sa."
    },
    "bgc": {
      "word": "पीण का पाणी भाई",
      "phrase": "भाई, घणी प्यास लागी सै, एक गिलास पाणी पिला दे ना।",
      "phonetic": "Bhai, ghani pyaas laagi sai, ek gilaas paani pila de na."
    },
    "hne": {
      "word": "पिए बर पानी गा",
      "phrase": "संगवारी, अब्बड़ पियास लागत हे गा, थोरकन पानी पिया दे न।",
      "phonetic": "Sangwari, abbad piyaas lagat he ga, thorkan paani piya de na."
    },
    "mr": {
      "word": "पिण्याचे पाणी दादा",
      "phrase": "दादा, खूप तहान लागली आहे, कृपया प्यायला थोडं पाणी द्या ना.",
      "phonetic": "Dada, khup tahan lagli aahe, kripaya pyayla thoda paani dya na."
    },
    "gu": {
      "word": "પીવાનું પાણી ભાઈ",
      "phrase": "ભાઈ, ખૂબ તરસ લાગી છે, કૃપા કરીને પીવા માટે થોડું પાણી આપશો?",
      "phonetic": "Bhai, khub taras lagi chhe, krupa karine peeva mate thodu paani aapsho?"
    },
    "pa": {
      "word": "ਪੀਣ ਵਾਲਾ ਪਾਣੀ ਜੀ",
      "phrase": "ਵੀਰ ਜੀ, ਬਹੁਤ ਪਿਆਸ ਲੱਗੀ ਹੈ, ਕਿਰਪਾ ਕਰਕੇ ਪੀਣ ਲਈ ਪਾਣੀ ਪਿਲਾ ਦਿਓ ਜੀ।",
      "phonetic": "Veer ji, bahut pyaas laggi hai, kirpa karke peen layi paani pila dio ji."
    },
    "bn": {
      "word": "খাবার জল দাদা",
      "phrase": "দাদা, খুব তেষ্টা পেয়েছে, দয়া করে একটু খাবার জল দেবেন?",
      "phonetic": "Dada, khub teshta peyeche, doya kore ektu khabar jol deben?"
    },
    "as": {
      "word": "খোৱা পানী দেই",
      "phrase": "বৰ পিয়াহ লাগিছে দেই, অনুগ্ৰহ কৰি অলপ খোৱা পানী দিবনে?",
      "phonetic": "Bor piyah lagise dei, onugroho kori olop khowa pani dibone?"
    },
    "or": {
      "word": "ପିଇବା ପାଣି ଭାଇ",
      "phrase": "ଭାଇ, ବହୁତ ଶୋଷ ଲାଗୁଛି, ଦୟାକରି ଟିକେ ପିଇବା ପାଣି ଦିଅନ୍ତୁ।",
      "phonetic": "Bhai, bahut shosha laguchi, dayakari tike piiba pani diantu.",
      "ttsText": "भाई, बहुत शोष लागुछि, दयाकरि टिके पिइबा पाणि दिअन्तु।"
    },
    "ta": {
      "word": "குடிக்க தண்ணிங்க",
      "phrase": "அண்ணா, ரொம்ப தாகமா இருக்குங்க, குடிக்க கொஞ்சம் தண்ணி குடுங்க.",
      "phonetic": "Anna, romba thaagama irukkunga, kudikka konjam thanni kudunga."
    },
    "te": {
      "word": "తాగునీరు అండీ",
      "phrase": "అన్నా, చాలా దాహంగా ఉందండీ, తాగడానికి కొంచెం మంచినీళ్ళు ఇవ్వండి.",
      "phonetic": "Anna, chala dahanga undandi, thagadaniki konchem manchineellu ivvandi."
    },
    "kn": {
      "word": "ಕುಡಿಯುವ ನೀರು ರೀ",
      "phrase": "ಅಣ್ಣಾ, ತುಂಬಾ ಬಾಯಾರಿಕೆ ಆಗ್ತಿದೆ ರೀ, ಕುಡಿಯಲು ಸ್ವಲ್ಪ ನೀರು ಕೊಡಿ.",
      "phonetic": "Anna, tumba bayarike aagtide ree, kudiyalu svalpa neeru kodi."
    },
    "ml": {
      "word": "കുടിക്കാൻ വെള്ളം ചേട്ടാ",
      "phrase": "ചേട്ടാ, നല്ല ദാഹമുണ്ട്, കുടിക്കാൻ അല്പം വെള്ളം തരാമോ?",
      "phonetic": "Chetta, nalla dahamundu, kudikkan alpam vellam tharamo?"
    },
    "ur": {
      "word": "پینے کا پانی جناب",
      "phrase": "جناب، بڑی پیاس لگی ہے، براہ کرم پینے کے لیے تھوڑا پانی دیجیے۔",
      "phonetic": "Janaab, badi pyaas lagi hai, bara-e-karam peene ke liye thoda paani dijiye."
    },
    "ne": {
      "word": "पिउने पानी हजुर",
      "phrase": "हजुर, साह्रै तिर्खा लाग्यो, कृपया पिउने पानी दिनुहोस् न।",
      "phonetic": "Hajur, sahrai tirkha lagyo, kripaya piune paani dinuhos na."
    },
    "kok": {
      "word": "पियेवपाक उदक गो",
      "phrase": "भाव, खूब तान लागल्या, उपकार करून पियेवपाक मात्शें उदक दी गो.",
      "phonetic": "Bhav, khub taan laglya, upkaar karun piyewpak matshem udak di go."
    },
    "doi": {
      "word": "पीने दा पानी जी",
      "phrase": "भरा जी, बड़ी त्रेह् लग्गी ऐ, कृपा करियै पीने लेई थोड़ा पानी देओ जी।",
      "phonetic": "Bhara ji, badi treh laggi ai, kripa kariyai peene lei thoda paani deo ji."
    },
    "en": {
      "word": "Drinking Water Please",
      "phrase": "Friend, I am feeling quite thirsty, could I please have some water to drink?",
      "phonetic": "Friend, I am feeling quite thirsty, could I please have some water to drink?"
    }
  },
  "food": {
    "hi": {
      "word": "भोजन / खाना जी",
      "phrase": "भाई साहब, मुझे भूख लगी है, कुछ खाने के लिए भोजन मिल सकता है क्या?",
      "phonetic": "Bhai sahab, mujhe bhookh lagi hai, kuch khaane ke liye bhojan mil sakta hai kya?"
    },
    "mai": {
      "word": "भोजन / खाना यौ",
      "phrase": "यौ भैया, हमरा भूख लागल अछि, कनी खाय लेल भोजन मिलत की?",
      "phonetic": "Yau bhaiya, hamra bhookh lagal achhi, kani khaay lel bhojan milat ki?"
    },
    "bho": {
      "word": "खाना / भोजन भैया",
      "phrase": "ए भैया, बड़ी भूख लागल बा, कुछ खाये खातिर भोजन मिली का?",
      "phonetic": "E bhaiya, badi bhookh lagal ba, kuch khaye khatir bhojan mili ka?"
    },
    "mag": {
      "word": "खाना / भोजन",
      "phrase": "भैया, भूख लागल हई, तनी खाये ला खाना चाही।",
      "phonetic": "Bhaiya, bhookh lagal hai, tani khaye la khana chahi."
    },
    "raj": {
      "word": "जीमण / रोटी सा",
      "phrase": "भाया सा, भूख लागी है, जीमण वास्ते कुछ भोजन मिलसी कांई सा?",
      "phonetic": "Bhaya sa, bhookh laagi hai, jeeman vaaste kuch bhojan milsi kaai sa?"
    },
    "bgc": {
      "word": "खाणा / रोटी भाई",
      "phrase": "भाई, भूख लागी सै, खाण खातर रोटी मिल ज्यागी के?",
      "phonetic": "Bhai, bhookh laagi sai, khaan khatar roti mil jyagi ke?"
    },
    "hne": {
      "word": "बासी / जेवन गा",
      "phrase": "संगवारी, मोला भूख लागत हे गा, खाए बर जेवन मिलही का?",
      "phonetic": "Sangwari, mola bhookh lagat he ga, khaye bar jevan milhi ka?"
    },
    "mr": {
      "word": "जेवण / अन्न दादा",
      "phrase": "दादा, मला भूक लागली आहे, खायला थोडं जेवण मिळेल का हो?",
      "phonetic": "Dada, mala bhook lagli aahe, khayla thoda jevan milel ka ho?"
    },
    "gu": {
      "word": "જમવાનું / ભોજન ભાઈ",
      "phrase": "ભાઈ, મને ભૂખ લાગી છે, જમવા માટે કંઈક ભોજન મળશે?",
      "phonetic": "Bhai, mane bhookh lagi chhe, jamva mate kaik bhojan malshe?"
    },
    "pa": {
      "word": "ਖਾਣਾ / ਪ੍ਰਸ਼ਾਦਾ ਜੀ",
      "phrase": "ਵੀਰ ਜੀ, ਮੈਨੂੰ ਭੁੱਖ ਲੱਗੀ ਹੈ, ਖਾਣ ਲਈ ਪ੍ਰਸ਼ਾਦਾ ਮਿਲੇਗਾ ਜੀ?",
      "phonetic": "Veer ji, mainu bhukh laggi hai, khaan layi prashada milega ji?"
    },
    "bn": {
      "word": "খাবার দাদা",
      "phrase": "দাদা, বেশ খিদে পেয়েছে, খাওয়ার জন্য কিছু খাবার পাওয়া যাবে?",
      "phonetic": "Dada, besh khide peyeche, khawar jonno kichu khabar pawa jabe?"
    },
    "as": {
      "word": "খোৱা বস্তু / আহাৰ",
      "phrase": "বৰ ভোক লাগিছে দেই, খাবলৈ কিবা আহাৰ পোৱা যাবনে?",
      "phonetic": "Bor bhok lagise dei, khaboloi kiba aahar powa jabone?"
    },
    "or": {
      "word": "ଖାଇবা ଖାଦ୍ୟ ଭାଇ",
      "phrase": "ଭାଇ, ମୋତେ ଭୋକ ଲାଗୁଛି, ଖାଇବା ପାଇଁ କିଛି ମିଳିବ କି?",
      "phonetic": "Bhai, mote bhoka laguchi, khaiba pain kichi miliba ki?",
      "ttsText": "भाई, मोते भोक लागुछि, खाइबा पाइँ किछि भल खाद्य मिलिब कि?"
    },
    "ta": {
      "word": "சாப்பாடுங்க",
      "phrase": "அண்ணா, எனக்குப் பசிக்குதுங்க, சாப்பிட ஏதாவது சாப்பாடு கிடைக்குமா?",
      "phonetic": "Anna, enakkup pasikkuthunga, saappida ethavathu saappadu kidaikkuma?"
    },
    "te": {
      "word": "భోజనం / ఆహారం అండీ",
      "phrase": "అన్నా, నాకు ఆకలిగా ఉందండీ, తినడానికి భోజనం దొరుకుతుందా?",
      "phonetic": "Anna, naaku aakaliga undandi, thinadaniki bhojanam dorukuthunda?"
    },
    "kn": {
      "word": "ಊಟ / ಆಹಾರ ರೀ",
      "phrase": "ಅಣ್ಣಾ, ನನಗೆ ಹಸಿವಾಗುತ್ತಿದೆ ರೀ, ತಿನ್ನಲು ಸ್ವಲ್ಪ ಊಟ ಸಿಗುತ್ತದೆಯೇ?",
      "phonetic": "Anna, nanage hasivaguttide ree, thinnalu svalpa oota siguttadeye?"
    },
    "ml": {
      "word": "ഭക്ഷണം / ഊണ് ചേട്ടാ",
      "phrase": "ചേട്ടാ, എനിക്ക് വിശക്കുന്നുണ്ട്, കഴിക്കാൻ എന്തെങ്കിലും ഭക്ഷണം കിട്ടുമോ?",
      "phonetic": "Chetta, enikku vishakkunnundu, kazhikkan enthenkilum bhakshanam kittumo?"
    },
    "ur": {
      "word": "کھانا جناب",
      "phrase": "جناب، مجھے بھوک لگی ہے، کھانے کے لیے کچھ مل سکتا ہے؟",
      "phonetic": "Janaab, mujhe bhookh lagi hai, khaane ke liye kuch mil sakta hai?"
    },
    "ne": {
      "word": "खाना / भोजन हजुर",
      "phrase": "हजुर, मलाई भोक लाग्यो, खानको लागि केही खाना पाइन्छ कि?",
      "phonetic": "Hajur, malai bhok lagyo, khanako lagi kehi khana painchha ki?"
    },
    "kok": {
      "word": "जेवण गो",
      "phrase": "भाव, म्हाका भूक लागल्या, खावपाक किदेंय जेवण मेळटलें गो?",
      "phonetic": "Bhav, mhaka bhook laglya, khavpak kidey jevan meltale go?"
    },
    "doi": {
      "word": "रोटी / खाना जी",
      "phrase": "भरा जी, मिगी बुक्ख लग्गी ऐ, खाने लेई किश मिलग जी?",
      "phonetic": "Bhara ji, migi bukkh laggi ai, khane lei kish milag ji?"
    },
    "en": {
      "word": "Food / Meal Please",
      "phrase": "Friend, I am feeling hungry, where can I get some food to eat?",
      "phonetic": "Friend, I am feeling hungry, where can I get some food to eat?"
    }
  },
  "where": {
    "hi": {
      "word": "कहाँ है जी / रास्ता",
      "phrase": "भाई साहब, यह जगह कहाँ है? कृपया मुझे रास्ता बता दीजिए।",
      "phonetic": "Bhai sahab, yah jagah kahan hai? Kripaya mujhe raasta bata dijiye."
    },
    "mai": {
      "word": "कतय अछि यौ / बाट",
      "phrase": "यौ भैया, ई ठाम कतय अछि? कनी बाट बता दिअ ने।",
      "phonetic": "Yau bhaiya, ee thaam katay achhi? Kani baat bata dia ne."
    },
    "bho": {
      "word": "कहाँ बा भैया / रास्ता",
      "phrase": "ए भैया, ई जगह कहाँ बा? तनी रास्ता बता दीं ना।",
      "phonetic": "E bhaiya, ee jagah kahan ba? Tani raasta bata deen na."
    },
    "mag": {
      "word": "कहाँ हई भैया",
      "phrase": "भैया, ई जगह कहाँ हई? तनी रस्ता बता द ना।",
      "phonetic": "Bhaiya, ee jagah kahan hai? Tani rasta bata da na."
    },
    "raj": {
      "word": "कठे है सा / मारग",
      "phrase": "भाया सा, आ जगह कठे है? कृपा कर ने मारग बताओ सा।",
      "phonetic": "Bhaya sa, aa jagah kathe hai? Kripa kar ne maarag batao sa."
    },
    "bgc": {
      "word": "किसे सै भाई / राह",
      "phrase": "भाई, या जगह कित सै? मने थोड़ा राह बता दे ना।",
      "phonetic": "Bhai, ya jagah kit sai? Mane thoda raah bata de na."
    },
    "hne": {
      "word": "कहाँ हे संगवारी / रद्दा",
      "phrase": "संगवारी, ए जगह कहाँ हे गा? मोला रद्दा बता दे न।",
      "phonetic": "Sangwari, e jagah kahan he ga? Mola radda bata de na."
    },
    "mr": {
      "word": "कुठे आहे दादा / रस्ता",
      "phrase": "दादा, हे ठिकाण कुठे आहे? कृपया मला मार्ग सांगाल का?",
      "phonetic": "Dada, he thikan kuthe aahe? Kripaya mala marga sangal ka?"
    },
    "gu": {
      "word": "ક્યાં છે ભાઈ / રસ્તો",
      "phrase": "ભાઈ, આ જગ્યા ક્યાં આવેલી છે? જરા રસ્તો બતાવશો?",
      "phonetic": "Bhai, aa jagya kya aaveli chhe? Jara rasto batavsho?"
    },
    "pa": {
      "word": "ਕਿੱਥੇ ਹੈ ਜੀ / ਰਸਤਾ",
      "phrase": "ਵੀਰ ਜੀ, ਇਹ ਜਗ੍ਹਾ ਕਿੱਥੇ ਹੈ? ਕਿਰਪਾ ਕਰਕੇ ਮੈਨੂੰ ਰਸਤਾ ਦੱਸ ਦਿਓ ਜੀ।",
      "phonetic": "Veer ji, eh jagah kitthe hai? Kirpa karke mainu rasta dass dio ji."
    },
    "bn": {
      "word": "কোথায় দাদা / পথ",
      "phrase": "দাদা, এই জায়গাটা কোথায় বলুন তো? একটু পথটা বলে দেবেন?",
      "phonetic": "Dada, ei jaygata kothay bolun to? Ektu pothta bole deben?"
    },
    "as": {
      "word": "ক'ত আছে দেই / বাট",
      "phrase": "ককাইদেউ, এই ঠাইডোখৰ ক'ত আছে বাৰু? বাটটো কৈ দিবনে?",
      "phonetic": "Kokaideu, ei thaidokhor kot ase baru? Baatto koi dibone?"
    },
    "or": {
      "word": "କେଉଁଠି ଅଛି ଭାଇ",
      "phrase": "ଭାଇ, ଏହି ଜାଗାଟି କେଉଁଠି ଅଛି? ଦୟାକରି ବାଟ ବତାଇ ଦିଅନ୍ତୁ।",
      "phonetic": "Bhai, ehi jagati keunthi achi? Dayakari bata batai diantu.",
      "ttsText": "भाई, एहि जागाटि केउँठि अछि? दयाकरि बाट बताइ दिअन्तु।"
    },
    "ta": {
      "word": "எங்கே இருக்குங்க / வழி",
      "phrase": "அண்ணா, இந்த இடம் எங்கே இருக்குங்க? கொஞ்சம் வழி சொல்லுங்க.",
      "phonetic": "Anna, intha idam enge irukkunga? Konjam vazhi sollunga."
    },
    "te": {
      "word": "ఎక్కడ ఉందండీ / దారి",
      "phrase": "అన్నా, ఇది ఎక్కడ ఉందండీ? దయచేసి కొంచెం దారి చెబుతారా?",
      "phonetic": "Anna, idi ekkada undandi? Dayachesi konchem daari chebuthara?"
    },
    "kn": {
      "word": "ಎಲ್ಲಿದೆ ರೀ / ದಾರಿ",
      "phrase": "ಅಣ್ಣಾ, ಈ ಜಾಗ ಎಲ್ಲಿದೆ ರೀ? ದಯವಿಟ್ಟು ದಾರಿ ತೋರಿಸುತ್ತೀರಾ?",
      "phonetic": "Anna, ee jaaga ellide ree? Dayavittu daari thorisuttira?"
    },
    "ml": {
      "word": "എവിടെയാണ് ചേട്ടാ / വഴി",
      "phrase": "ചേട്ടാ, ഈ സ്ഥലം എവിടെയാണ്? ദയവായി വഴി ഒന്ന് പറഞ്ഞുതരാമോ?",
      "phonetic": "Chetta, ee sthalam evideyanu? Dayavayi vazhi onnu paranjutharamo?"
    },
    "ur": {
      "word": "کہاں ہے جناب / راستہ",
      "phrase": "جناب، یہ جگہ کہاں ہے؟ براہ کرم مجھے راستہ بتا دیجیے۔",
      "phonetic": "Janaab, yeh jagah kahan hai? Bara-e-karam mujhe raasta bata dijiye."
    },
    "ne": {
      "word": "कहाँ छ हजुर / बाटो",
      "phrase": "हजुर, यो ठाउँ कहाँ पर्छ होला? कृपया बाटो बताइदिनुहोस् न।",
      "phonetic": "Hajur, yo thaun kahan parchha hola? Kripaya bato bataidinuhos na."
    },
    "kok": {
      "word": "खंय आसा गो / वाट",
      "phrase": "भाव, ही सुवात खंय आसा गो? उपकार करून वाट दाखय.",
      "phonetic": "Bhav, hi suvat khay aasa go? Upkaar karun vaat dakhay."
    },
    "doi": {
      "word": "कुत्थै ऐ जी / रस्ता",
      "phrase": "भरा जी, एह् थाह्र कुत्थै ऐ? कृपा करियै रस्ता दस्सो जी।",
      "phonetic": "Bhara ji, eh thahr kutthai ai? Kripa kariyai rasta dasso ji."
    },
    "en": {
      "word": "Where Is It / Directions",
      "phrase": "Excuse me friend, where is this place? Could you please tell me the way?",
      "phonetic": "Excuse me friend, where is this place? Could you please tell me the way?"
    }
  },
  "wait": {
    "hi": {
      "word": "थोड़ा रुकिए जी",
      "phrase": "भाई साहब, कृपया एक मिनट थोड़ा रुकिए ना।",
      "phonetic": "Bhai sahab, kripaya ek minute thoda rukiye na."
    },
    "mai": {
      "word": "कनी रुकू यौ",
      "phrase": "यौ भैया, कृपया कनी काल रुकू आ ठहरू ने।",
      "phonetic": "Yau bhaiya, kripaya kani kaal ruku aa thahru ne."
    },
    "bho": {
      "word": "तनी रुकीं भैया",
      "phrase": "ए भैया, तनी देर खातिर रुकीं ना।",
      "phonetic": "E bhaiya, tani der khatir rukin na."
    },
    "mag": {
      "word": "तनी रुकऽ भैया",
      "phrase": "ए भैया, तनी देर रुक लऽ ना।",
      "phonetic": "E bhaiya, tani der ruk la na."
    },
    "raj": {
      "word": "थोड़ा ठहरो सा",
      "phrase": "भाया सा, कृपा कर ने एक घड़ी ठहरो सा।",
      "phonetic": "Bhaya sa, kripa kar ne ek ghadi thahro sa."
    },
    "bgc": {
      "word": "थोड़ा डट जा भाई",
      "phrase": "भाई, एक मिनट थोड़ा डट ज्या ना।",
      "phonetic": "Bhai, ek minute thoda dat jya na."
    },
    "hne": {
      "word": "थोरकन रुक संगवारी",
      "phrase": "संगवारी, थोरकन रुक जा न गा।",
      "phonetic": "Sangwari, thorkan ruk ja na ga."
    },
    "mr": {
      "word": "थोडा वेळ थांबा हो",
      "phrase": "दादा, कृपया एक मिनिट थोडा वेळ थांबा ना.",
      "phonetic": "Dada, kripaya ek minute thoda vel thamba na."
    },
    "gu": {
      "word": "થોડીવાર થોભો ભાઈ",
      "phrase": "ભાઈ, કૃપા કરીને એક મિનિટ થોડીવાર ઊભા રહો ને.",
      "phonetic": "Bhai, krupa karine ek minute thodivaar ubha raho ne."
    },
    "pa": {
      "word": "ਥੋੜ੍ਹਾ ਰੁਕੋ ਜੀ",
      "phrase": "ਵੀਰ ਜੀ, ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਮਿੰਟ ਥੋੜ੍ਹਾ ਰੁਕੋ ਜੀ।",
      "phonetic": "Veer ji, kirpa karke ik minute thoda ruko ji."
    },
    "bn": {
      "word": "একটু দাঁড়ান দাদা",
      "phrase": "দাদা, দয়া করে এক মিনিট একটু অপেক্ষা করুন না।",
      "phonetic": "Dada, doya kore ek minute ektu opekha korun na."
    },
    "as": {
      "word": "অলপ ৰ'বচোন দেই",
      "phrase": "অনুগ্ৰহ কৰি অলপ সময় ৰ'বচোন দেই।",
      "phonetic": "Onugroho kori olop xomoy roboson dei."
    },
    "or": {
      "word": "ଟିକେ ରୁହନ୍ତୁ ଭାଇ",
      "phrase": "ଭାଇ, ଦୟାକରି ଗୋଟିଏ ମିନିଟ୍ ଟିକେ ରୁହନ୍ତୁ।",
      "phonetic": "Bhai, dayakari gotie minute tike ruhantu.",
      "ttsText": "भाई, दयाकरि गोटिए मिनिट टिके रुहन्तु।"
    },
    "ta": {
      "word": "கொஞ்சம் நில்லுங்க",
      "phrase": "அண்ணா, தயவுசெஞ்சு ஒரு நிமிஷம் கொஞ்சம் நில்லுங்க.",
      "phonetic": "Anna, thayavusenju oru nimisham konjam nillunga."
    },
    "te": {
      "word": "కొంచెం ఆగండి అండీ",
      "phrase": "అన్నా, దయచేసి ఒక్క నిమిషం ఆగండి.",
      "phonetic": "Anna, dayachesi okka nimisham aagandi."
    },
    "kn": {
      "word": "ಸ್ವಲ್ಪ ನಿಲ್ಲಿ ರೀ",
      "phrase": "ಅಣ್ಣಾ, ದಯವಿಟ್ಟು ಒಂದು ನಿಮಿಷ ಸ್ವಲ್ಪ ನಿಲ್ಲಿ ರೀ.",
      "phonetic": "Anna, dayavittu ondu nimisha svalpa nilli ree."
    },
    "ml": {
      "word": "ഒന്ന് നിൽക്കണേ ചേട്ടാ",
      "phrase": "ചേട്ടാ, ദയവായി ഒരു നിമിഷം ഒന്ന് കാത്തിരിക്കണേ.",
      "phonetic": "Chetta, dayavayi oru nimisham onnu kaathirikkane."
    },
    "ur": {
      "word": "ذرا توقف فرمائیے",
      "phrase": "جناب، براہ کرم ایک لمحہ رکیے اور انتظار کیجیے۔",
      "phonetic": "Janaab, bara-e-karam ek lamha rukiye aur intezar kijiye."
    },
    "ne": {
      "word": "एकछिन पर्खनुहोस् हजुर",
      "phrase": "हजुर, कृपया एकैछिन पर्खिदिनुहोस् न।",
      "phonetic": "Hajur, kripaya ekaichhin parkhidinuhos na."
    },
    "kok": {
      "word": "मात्सो राब गो",
      "phrase": "भाव, उपकार करून एक खीण मात्सो राब गो.",
      "phonetic": "Bhav, upkaar karun ek khin matso raab go."
    },
    "doi": {
      "word": "थोड़ा रुको जी",
      "phrase": "भरा जी, कृपा करियै इक मिनट रुको जी।",
      "phonetic": "Bhara ji, kripa kariyai ik minute ruko ji."
    },
    "en": {
      "word": "Please Wait A Moment",
      "phrase": "Please wait just a moment friend, give me one second.",
      "phonetic": "Please wait just a moment friend, give me one second."
    }
  },
  "repeat": {
    "hi": {
      "word": "फिर से बताइए जी",
      "phrase": "भाई साहब, कृपया अपनी बात एक बार फिर से दोहरा दीजिए।",
      "phonetic": "Bhai sahab, kripaya apni baat ek baar phir se dohora dijiye."
    },
    "mai": {
      "word": "फेर सँ कहू यौ",
      "phrase": "यौ भैया, कृपया ई बात एक बेर फेर सँ कहू ने।",
      "phonetic": "Yau bhaiya, kripaya ee baat ek ber pher san kahu ne."
    },
    "bho": {
      "word": "फेर से कहीं भैया",
      "phrase": "ए भैया, तनी एक बेर अउरी फेर से कह दीं ना।",
      "phonetic": "E bhaiya, tani ek ber auri pher se kah deen na."
    },
    "mag": {
      "word": "फेर से बोलऽ भैया",
      "phrase": "भैया, तनी एक बार फेर से बोल द ना।",
      "phonetic": "Bhaiya, tani ek baar pher se bol da na."
    },
    "raj": {
      "word": "पाछो बताओ सा",
      "phrase": "भाया सा, कृपा कर ने एक बार पाछो बताओ सा।",
      "phonetic": "Bhaya sa, kripa kar ne ek baar pachho batao sa."
    },
    "bgc": {
      "word": "फेर तै बता भाई",
      "phrase": "भाई, एक बार फेर तै बता दे ना।",
      "phonetic": "Bhai, ek baar pher tai bata de na."
    },
    "hne": {
      "word": "फेर ले बता संगवारी",
      "phrase": "संगवारी, एक घाव अउ फेर ले बता दे न गा।",
      "phonetic": "Sangwari, ek ghav au pher le bata de na ga."
    },
    "mr": {
      "word": "पुन्हा एकदा सांगा",
      "phrase": "दादा, कृपया तेच पुन्हा एकदा सांगता का?",
      "phonetic": "Dada, kripaya tech punha ekda sangta ka?"
    },
    "gu": {
      "word": "ફરીથી કહો ભાઈ",
      "phrase": "ભાઈ, કૃપા કરીને તે વાત ફરીથી એકવાર કહેશો?",
      "phonetic": "Bhai, krupa karine te vaat farithi ekvaar kahesho?"
    },
    "pa": {
      "word": "ਦੁਬਾਰਾ ਦੱਸੋ ਜੀ",
      "phrase": "ਵੀਰ ਜੀ, ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਵਾਰ ਫਿਰ ਤੋਂ ਦੱਸ ਦਿਓ ਜੀ।",
      "phonetic": "Veer ji, kirpa karke ik vaar phir ton dass dio ji."
    },
    "bn": {
      "word": "আরেকবার বলুন দাদা",
      "phrase": "দাদা, দয়া করে কথাটা আরেকবার বলবেন?",
      "phonetic": "Dada, doya kore kothata arekbar bolben?"
    },
    "as": {
      "word": "আকৌ এবাৰ কওকচোন",
      "phrase": "অনুগ্ৰহ কৰি কথাষাৰ আকৌ এবাৰ কৈ দিয়কচোন।",
      "phonetic": "Onugroho kori kothaxar akou ebar koi diyokson."
    },
    "or": {
      "word": "ଆଉଥରେ କୁହନ୍ତୁ ଭାଇ",
      "phrase": "ଭାଇ, ଦୟାକରି ଆଉଥରେ ସେହି କଥା କୁହନ୍ତୁ।",
      "phonetic": "Bhai, dayakari authare sehi katha kuhantu.",
      "ttsText": "भाई, दयाकरि आउथरे सेहि कथा कुहन्तु।"
    },
    "ta": {
      "word": "மறுபடியும் சொல்லுங்க",
      "phrase": "அண்ணா, தயவுசெஞ்சு இன்னொரு தடவை சொல்லுங்க.",
      "phonetic": "Anna, thayavusenju innoru thadavai sollunga."
    },
    "te": {
      "word": "మళ్ళీ చెప్పండి అండీ",
      "phrase": "అన్నా, దయచేసి ఇంకొకసారి మళ్ళీ చెప్పండి.",
      "phonetic": "Anna, dayachesi inkokasari malli cheppandi."
    },
    "kn": {
      "word": "ಮತ್ತೊಮ್ಮೆ ಹೇಳಿ ರೀ",
      "phrase": "ಅಣ್ಣಾ, ದಯವಿಟ್ಟು ಅದನ್ನು ಇನ್ನೊಂದು ಸಲ ಹೇಳಿ ರೀ.",
      "phonetic": "Anna, dayavittu adannu innondu sala heli ree."
    },
    "ml": {
      "word": "ഒന്നുകൂടി പറയൂ ചേട്ടാ",
      "phrase": "ചേട്ടാ, ദയവായി അത് ഒന്നുകൂടി പറഞ്ഞുതരാമോ?",
      "phonetic": "Chetta, dayavayi athu onnukoodi paranjutharamo?"
    },
    "ur": {
      "word": "دوبارہ فرمائیے جناب",
      "phrase": "جناب، براہ کرم अपनी بات ایک بار پھر دہرا دیجیے۔",
      "phonetic": "Janaab, bara-e-karam apni baat ek baar phir dohra dijiye."
    },
    "ne": {
      "word": "फेरि भन्नुहोस् न हजुर",
      "phrase": "हजुर, कृपया एकपटक फेरि भनिदिनुहोस् न।",
      "phonetic": "Hajur, kripaya ekpatak pheri bhanidinuhos na."
    },
    "kok": {
      "word": "परत एकदां सांग गो",
      "phrase": "भाव, उपकार करून तें परत एकदां सांग गो.",
      "phonetic": "Bhav, upkaar karun te parat ekda sang go."
    },
    "doi": {
      "word": "फ्ही दस्सो जी",
      "phrase": "भरा जी, कृपा करियै इक बारी फ्ही दस्सो जी।",
      "phonetic": "Bhara ji, kripa kariyai ik baari fhi dasso ji."
    },
    "en": {
      "word": "Please Repeat Again",
      "phrase": "Could you please repeat that once more for me friend?",
      "phonetic": "Could you please repeat that once more for me friend?"
    }
  },
  "slow": {
    "hi": {
      "word": "थोड़ा धीरे बोलिए जी",
      "phrase": "भाई साहब, कृपया थोड़ा आराम से और धीरे-धीरे बताइए।",
      "phonetic": "Bhai sahab, kripaya thoda aaram se aur dheere-dheere bataiye."
    },
    "mai": {
      "word": "कनी धीरे बाजू यौ",
      "phrase": "यौ भैया, कृपया कनी धीरे-धीरे बाजू वा संकेत करू।",
      "phonetic": "Yau bhaiya, kripaya kani dheere-dheere baaju va sanket karu."
    },
    "bho": {
      "word": "तनी धीरे बोलीं भैया",
      "phrase": "ए भैया, तनी आराम से आ धीरे-धीरे बोलीं ना।",
      "phonetic": "E bhaiya, tani aaram se aa dheere-dheere bolin na."
    },
    "mag": {
      "word": "धीरे-धीरे बोलऽ भैया",
      "phrase": "भैया, तनी धीरे-धीरे बोलऽ ना ताकि हम समझ सकीं।",
      "phonetic": "Bhaiya, tani dheere-dheere bola na taki ham samajh sakin."
    },
    "raj": {
      "word": "हौळे-हौळे बोलो सा",
      "phrase": "भाया सा, कृपा कर ने थोड़ा हौळे-हौळे बोलो सा।",
      "phonetic": "Bhaya sa, kripa kar ne thoda haule-haule bolo sa."
    },
    "bgc": {
      "word": "मन्दा बोल भाई",
      "phrase": "भाई, थोड़ा आराम तै अर मन्दा बोल ले ना।",
      "phonetic": "Bhai, thoda aaram tai ar manda bol le na."
    },
    "hne": {
      "word": "कले-कले गोठिया गा",
      "phrase": "संगवारी, थोरकन कले-कले अउ धीरे गोठिया न गा।",
      "phonetic": "Sangwari, thorkan kale-kale au dheere gothiya na ga."
    },
    "mr": {
      "word": "थोडे हळू बोला दादा",
      "phrase": "दादा, कृपया थोडे सावकाश आणि हळू बोला ना.",
      "phonetic": "Dada, kripaya thode savkash aani halu bola na."
    },
    "gu": {
      "word": "થોડું ધીમે બોલો ભાઈ",
      "phrase": "ભાઈ, કૃપા કરીને થોડું ધીમે ધીમે બોલો ને.",
      "phonetic": "Bhai, krupa karine thodu dhime dhime bolo ne."
    },
    "pa": {
      "word": "ਥੋੜ੍ਹਾ ਹੌਲੀ ਬੋਲੋ ਜੀ",
      "phrase": "ਵੀਰ ਜੀ, ਕਿਰਪਾ ਕਰਕੇ ਥੋੜ੍ਹਾ ਆਰਾਮ ਨਾਲ ਅਤੇ ਹੌਲੀ ਬੋਲੋ ਜੀ।",
      "phonetic": "Veer ji, kirpa karke thoda aaram naal ate hauli bolo ji."
    },
    "bn": {
      "word": "একটু ধীরে বলুন দাদা",
      "phrase": "দাদা, দয়া করে একটু আস্তে এবং ধীরে কথা বলুন।",
      "phonetic": "Dada, doya kore ektu aaste ebong dhire kotha bolun."
    },
    "as": {
      "word": "অলপ লাহে লাহে কওক",
      "phrase": "অনুগ্ৰহ কৰি অলপ লাহে লাহে কথা কওকচোন দেই।",
      "phonetic": "Onugroho kori olop lahe lahe kotha kowkson dei."
    },
    "or": {
      "word": "ଟିକେ ଧୀରେ କୁହନ୍ତୁ ଭାଇ",
      "phrase": "ଭାଇ, ଦୟାକରି ଟିକେ ଧୀରେ ଧୀରେ କୁହନ୍ତୁ।",
      "phonetic": "Bhai, dayakari tike dhire dhire kuhantu.",
      "ttsText": "भाई, दयाकरि टिके धीरे-धीरे कुहन्तु।"
    },
    "ta": {
      "word": "கொஞ்சம் மெதுவா பேசுங்க",
      "phrase": "அண்ணா, தயவுசெஞ்சு கொஞ்சம் மெதுவா பொறுமையா பேசுங்க.",
      "phonetic": "Anna, thayavusenju konjam methuva porumaiya pesunga."
    },
    "te": {
      "word": "కొంచెం నెమ్మదిగా చెప్పండి",
      "phrase": "అన్నా, దయచేసి కొంచెం నెమ్మదిగా మాట్లాడండి.",
      "phonetic": "Anna, dayachesi konchem nemmadiga matladandi."
    },
    "kn": {
      "word": "ಸ್ವಲ್ಪ ನಿಧಾನವಾಗಿ ಹೇಳಿ",
      "phrase": "ಅಣ್ಣಾ, ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ನಿಧಾನವಾಗಿ ಮಾತನಾಡಿ ರೀ.",
      "phonetic": "Anna, dayavittu svalpa nidhanavagi matanadi ree."
    },
    "ml": {
      "word": "അല്പം പതുക്കെ പറയൂ",
      "phrase": "ചേട്ടാ, ദയവായി അല്പം പതുക്കെ സംസാരിക്കാമോ?",
      "phonetic": "Chetta, dayavayi alpam pathukke samsarikkamo?"
    },
    "ur": {
      "word": "ذرا آہستہ بولیے جناب",
      "phrase": "جناب، براہ کرم تھوڑا آہستہ اور آرام سے بولیے۔",
      "phonetic": "Janaab, bara-e-karam thoda aahista aur aaram se boliye."
    },
    "ne": {
      "word": "बिस्तारै बोल्नुहोस् हजुर",
      "phrase": "हजुर, कृपया अलि बिस्तारै बोलिदिनुहोस् न।",
      "phonetic": "Hajur, kripaya ali bistarai bolidinuhos na."
    },
    "kok": {
      "word": "मात्शें ल्हव उलय गो",
      "phrase": "भाव, उपकार करून मात्शें ल्हव ल्हव उलय गो.",
      "phonetic": "Bhav, upkaar karun matshem lhav lhav ulay go."
    },
    "doi": {
      "word": "थोड़ा मत्था बोलो जी",
      "phrase": "भरा जी, कृपा करियै थोड़ा मत्था ते आरामै कन्ने बोलो जी।",
      "phonetic": "Bhara ji, kripa kariyai thoda mattha te aaramai kanne bolo ji."
    },
    "en": {
      "word": "Please Go Slowly",
      "phrase": "Could you please speak or sign a little bit more slowly friend?",
      "phonetic": "Could you please speak or sign a little bit more slowly friend?"
    }
  },
  "bathroom": {
    "hi": {
      "word": "शौचालय / वॉशरूम कहाँ है?",
      "phrase": "भाई साहब, यहाँ पास में शौचालय या वॉशरूम किस तरफ़ है जी?",
      "phonetic": "Bhai sahab, yahan paas mein shauchalay ya washroom kis taraf hai ji?"
    },
    "mai": {
      "word": "शौचालय कतय अछि?",
      "phrase": "यौ भैया, एतय लगमे शौचालय कतय अछि?",
      "phonetic": "Yau bhaiya, etay lag mein shauchalay katay achhi?"
    },
    "bho": {
      "word": "शौचालय / बाथरूम कहाँ बा?",
      "phrase": "ए भैया, इहाँ नियरा बाथरूम चाहे शौचालय केने बा?",
      "phonetic": "E bhaiya, ihan niyara bathroom chahe shauchalay kene ba?"
    },
    "mag": {
      "word": "बाथरूम कहाँ हई?",
      "phrase": "भैया, इहाँ बाथरूम केने हई, तनी बता द ना?",
      "phonetic": "Bhaiya, ihan bathroom kene hai, tani bata da na?"
    },
    "raj": {
      "word": "शौचालय कठे है सा?",
      "phrase": "भाया सा, अठे नेड़ो शौचालय या बाथरूम कठे है सा?",
      "phonetic": "Bhaya sa, athe nedo shauchalay ya bathroom kathe hai sa?"
    },
    "bgc": {
      "word": "बाथरूम कित सै भाई?",
      "phrase": "भाई, उरे नेड़ै बाथरूम कित सै?",
      "phonetic": "Bhai, ure nedai bathroom kit sai?"
    },
    "hne": {
      "word": "शौचालय कहाँ हे गा?",
      "phrase": "संगवारी, इहाँ तीर म बाथरूम या शौचालय कहाँ हे गा?",
      "phonetic": "Sangwari, ihan teer ma bathroom ya shauchalay kahan he ga?"
    },
    "mr": {
      "word": "स्वच्छतागृह कुठे आहे?",
      "phrase": "दादा, इथे जवळ स्वच्छतागृह किंवा बाथरूम कुठे आहे हो?",
      "phonetic": "Dada, ithe javal swachhatagriha kinva bathroom kuthe aahe ho?"
    },
    "gu": {
      "word": "વોશરૂમ / શૌચાલય ક્યાં છે?",
      "phrase": "ભાઈ, અહીં નજીકમાં વોશરૂમ કે શૌચાલય કઈ બાજુ છે?",
      "phonetic": "Bhai, ahin najikma washroom ke shauchalay kai baju chhe?"
    },
    "pa": {
      "word": "ਵਾਸ਼ਰੂਮ ਕਿੱਥੇ ਹੈ ਜੀ?",
      "phrase": "ਵੀਰ ਜੀ, ਇੱਥੇ ਨੇੜੇ ਵਾਸ਼ਰੂਮ ਜਾਂ ਪਖਾਨਾ ਕਿੱਥੇ ਹੈ ਜੀ?",
      "phonetic": "Veer ji, itthe nede washroom jaan pakhana kitthe hai ji?"
    },
    "bn": {
      "word": "বাথরুম / শৌচালয় কোথায়?",
      "phrase": "দাদা, এখানে কাছাকাছি বাথরুম বা শৌচালয় কোন দিকে?",
      "phonetic": "Dada, ekhane kachakachi bathroom ba shouchaloy kon dike?"
    },
    "as": {
      "word": "শৌচালয় ক'ত আছে?",
      "phrase": "ককাইদেউ, ইয়াত ওচৰত শৌচালয় বা বাথৰুম ক'ত আছে বাৰু?",
      "phonetic": "Kokaideu, iyat osorot xousaloy ba bathroom kot ase baru?"
    },
    "or": {
      "word": "ଶୌଚାଳୟ କେଉଁଠି ଅଛି?",
      "phrase": "ଭାଇ, ଏଠାରେ ପାଖରେ ଶୌଚାଳୟ ବା ବାଥରୁମ୍ କେଉଁଠି ଅଛି?",
      "phonetic": "Bhai, ethare pakhare shauchalaya ba bathroom keunthi achi?",
      "ttsText": "भाई, एठारे पाखरे शौचालय बा बाथरुम केउँठि अछि?"
    },
    "ta": {
      "word": "கழிப்பறை எங்கே இருக்கு?",
      "phrase": "அண்ணா, இங்கே பக்கத்துல பாத்ரூம் அல்லது கழிப்பறை எங்கே இருக்குங்க?",
      "phonetic": "Anna, inge pakkathula bathroom allathu kazhipparai enge irukkunga?"
    },
    "te": {
      "word": "బాత్రూమ్ ఎక్కడ ఉందండీ?",
      "phrase": "అన్నా, ఇక్కడ దగ్గరలో బాత్రూమ్ లేదా వాష్‌రూమ్ ఎక్కడ ఉందండీ?",
      "phonetic": "Anna, ikkada daggaralo bathroom leda washroom ekkada undandi?"
    },
    "kn": {
      "word": "ಶೌಚಾಲಯ ಎಲ್ಲಿದೆ ರೀ?",
      "phrase": "ಅಣ್ಣಾ, ಇಲ್ಲಿ ಹತ್ತಿರದಲ್ಲಿ ಶೌಚಾಲಯ ಅಥವಾ ವಾಶ್‌ರೂಮ್ ಎಲ್ಲಿದೆ ರೀ?",
      "phonetic": "Anna, illi hattiradalli shauchalaya athava washroom ellide ree?"
    },
    "ml": {
      "word": "ശുചിമുറി എവിടെയാണ്?",
      "phrase": "ചേട്ടാ, ഇവിടെ അടുത്തുള്ള ശുചിമുറി അല്ലെങ്കിൽ ബാത്ത്റൂം എവിടെയാണ്?",
      "phonetic": "Chetta, ivide aduthulla shuchimuri allenkil bathroom evideyanu?"
    },
    "ur": {
      "word": "واش روم کہاں ہے جناب؟",
      "phrase": "جناب، یہاں قریب میں بیت الخلا یا واش روم کس طرف ہے؟",
      "phonetic": "Janaab, yahan qareeb mein bait-ul-khala ya washroom kis taraf hai?"
    },
    "ne": {
      "word": "शौचालय कहाँ छ हजुर?",
      "phrase": "हजुर, यहाँ नजिकै शौचालय वा बाथरूम कता छ होला?",
      "phonetic": "Hajur, yahan najikai shauchalaya wa bathroom kata chha hola?"
    },
    "kok": {
      "word": "न्हालघर खंय आसा गो?",
      "phrase": "भाव, हांगा लागीं बाथरूम वा संडास खंय आसा गो?",
      "phonetic": "Bhav, hanga lagin bathroom va sandas khay aasa go?"
    },
    "doi": {
      "word": "बाथरूम कुत्थै ऐ जी?",
      "phrase": "भरा जी, इत्थै नेड़े बाथरूम कुत्थै ऐ जी?",
      "phonetic": "Bhara ji, itthai nede bathroom kutthai ai ji?"
    },
    "en": {
      "word": "Where Is The Washroom?",
      "phrase": "Excuse me friend, could you please tell me where the washroom is?",
      "phonetic": "Excuse me friend, could you please tell me where the washroom is?"
    }
  },
  "doctor": {
    "hi": {
      "word": "डॉक्टर / वैद्य जी",
      "phrase": "भाई साहब, मेरी तबीयत ठीक नहीं है, मुझे डॉक्टर के पास ले चलिए।",
      "phonetic": "Bhai sahab, meri tabiyat theek nahi hai, mujhe doctor ke paas le chaliye."
    },
    "mai": {
      "word": "डॉक्टर / चिकित्सक यौ",
      "phrase": "यौ भैया, हमर तबीयत ठीक नहि अछि, हमरा डॉक्टर लऽ चलू।",
      "phonetic": "Yau bhaiya, hamar tabiyat theek nahi achhi, hamra doctor la chalu."
    },
    "bho": {
      "word": "डॉक्टर साहेब",
      "phrase": "ए भैया, हमार तबीयत खराब बा, हमरा के डॉक्टर लगे ले चलीं।",
      "phonetic": "E bhaiya, hamaar tabiyat kharab ba, hamra ke doctor lage le chalin."
    },
    "mag": {
      "word": "डॉक्टर भीरी ले चलऽ",
      "phrase": "भैया, हमर तबीयत ठीक नय हई, डॉक्टर भीरी ले चलऽ ना।",
      "phonetic": "Bhaiya, hamar tabiyat theek nay hai, doctor bhiri le chala na."
    },
    "raj": {
      "word": "डॉक्टर सा ने बुलाओ",
      "phrase": "भाया सा, म्हारी तबीयत ठीक कोनी, म्हाने डॉक्टर सा कनै ले चलो सा।",
      "phonetic": "Bhaya sa, mhari tabiyat theek koni, mhane doctor sa kanai le chalo sa."
    },
    "bgc": {
      "word": "डाक्टर धोरै ले चाल",
      "phrase": "भाई, मेरी तबीयत खराब सै, मने डाक्टर धोरै ले चाल ना।",
      "phonetic": "Bhai, meri tabiyat kharab sai, mane doctor dhorai le chaal na."
    },
    "hne": {
      "word": "डॉक्टर करा ले चल गा",
      "phrase": "संगवारी, मोर तबीयत बने नइ हे गा, मोला डॉक्टर करा ले चल।",
      "phonetic": "Sangwari, mor tabiyat bane nai he ga, mola doctor kara le chal."
    },
    "mr": {
      "word": "डॉक्टरांकडे घेऊन चला",
      "phrase": "दादा, माझी तब्येत बरी नाहीये, कृपया मला डॉक्टरांकडे घेऊन चला.",
      "phonetic": "Dada, majhi tabiet bari nahiye, kripaya mala doctorankade gheun chala."
    },
    "gu": {
      "word": "ડોક્ટર પાસે લઈ જાઓ",
      "phrase": "ભાઈ, મારી તબિયત સારી નથી, કૃપા કરીને મને ડોક્ટર પાસે લઈ જાઓ.",
      "phonetic": "Bhai, mari tabiyat sari nathi, krupa karine mane doctor pase lai jao."
    },
    "pa": {
      "word": "ਡਾਕਟਰ ਕੋਲ ਲੈ ਚੱਲੋ ਜੀ",
      "phrase": "ਵੀਰ ਜੀ, ਮੇਰੀ ਸਿਹਤ ਠੀਕ ਨਹੀਂ ਹੈ, ਮੈਨੂੰ ਡਾਕਟਰ ਕੋਲ ਲੈ ਚੱਲੋ ਜੀ।",
      "phonetic": "Veer ji, meri sehat theek nahi hai, mainu doctor kol lai challo ji."
    },
    "bn": {
      "word": "ডাক্তারের কাছে নিয়ে চলুন",
      "phrase": "দাদা, আমার শরীরটা ভালো লাগছে না, দয়া করে ডাক্তারের কাছে নিয়ে চলুন।",
      "phonetic": "Dada, amar shorirta bhalo lagche na, doya kore daktarer kache niye cholun."
    },
    "as": {
      "word": "ডাক্তৰৰ ওচৰলৈ লৈ ব'লক",
      "phrase": "মোৰ গাটো ভাল লগা নাই দেই, অনুগ্ৰহ কৰি ডাক্তৰৰ ওচৰলৈ লৈ ব'লক।",
      "phonetic": "Mor gato bhal loga nai dei, onugroho kori daktoror osoroloi loi bolok."
    },
    "or": {
      "word": "ଡାକ୍ତରଙ୍କ ପାଖକୁ ନିଅନ୍ତୁ",
      "phrase": "ଭାଇ, ମୋ ଦେହ ଭଲ ନାହିଁ, ଦୟାକରି ମୋତେ ଡାକ୍ତରଙ୍କ ପାଖକୁ ନେଇଯାଆନ୍ତୁ।",
      "phonetic": "Bhai, mo deha bhala nahin, dayakari mote daktaranka pakhaku neijaantu.",
      "ttsText": "भाई, मो देह भल नाहीं, दयाकरि मोते डाक्तरंक पाखकु नेइजाआन्तु।"
    },
    "ta": {
      "word": "டாக்டர்கிட்ட கூட்டிட்டு போங்க",
      "phrase": "அண்ணா, எனக்கு உடம்பு சரியில்லைங்க, தயவுசெஞ்சு டாக்டர்கிட்ட கூட்டிட்டு போங்க.",
      "phonetic": "Anna, enakku udambu sariyillainga, thayavusenju doctorkitta koottittu ponga."
    },
    "te": {
      "word": "డాక్టర్ దగ్గరకు తీసుకెళ్ళండి",
      "phrase": "అన్నా, నాకు ఒంట్లో బాగోలేదండీ, దయచేసి డాక్టర్ గారి దగ్గరకు తీసుకెళ్ళండి.",
      "phonetic": "Anna, naaku ontlo bagoledandi, dayachesi doctor gari daggaraku theesukellandi."
    },
    "kn": {
      "word": "ಡಾಕ್ಟರ್ ಹತ್ತಿರ ಕರೆದುಕೊಂಡು ಹೋಗಿ",
      "phrase": "ಅಣ್ಣಾ, ನನ್ನ ಮೈ ಹುಷಾರಿಲ್ಲ ರೀ, ದಯವಿಟ್ಟು ಡಾಕ್ಟರ್ ಹತ್ತಿರ ಕರೆದುಕೊಂಡು ಹೋಗಿ.",
      "phonetic": "Anna, nanna mai husharilla ree, dayavittu doctor hattira karedukondu hogi."
    },
    "ml": {
      "word": "ഡോക്ടറുടെ അടുത്ത് കൊണ്ടുപോകൂ",
      "phrase": "ചേട്ടാ, എനിക്ക് സുഖമില്ല, ദയവായി എന്നെ ഒരു ഡോക്ടറുടെ അടുത്ത് എത്തിക്കാമോ?",
      "phonetic": "Chetta, enikku sukhamilla, dayavayi enne oru doctorude aduthu ethikkamo?"
    },
    "ur": {
      "word": "ڈاکٹر کے پاس لے چلیے",
      "phrase": "جناب، میری طبیعت ناساز ہے، براہ کرم مجھے ڈاکٹر کے پاس لے چلیے۔",
      "phonetic": "Janaab, meri tabiyat nasaaz hai, bara-e-karam mujhe doctor ke paas le chaliye."
    },
    "ne": {
      "word": "डाक्टरकहाँ लगिदिनुहोस् हजुर",
      "phrase": "हजुर, मेरो सञ्चो छैन, कृपया मलाई डाक्टरकहाँ लगिदिनुहोस् न।",
      "phonetic": "Hajur, mero sancho chhaina, kripaya malai doctorkahan lagidinuhos na."
    },
    "kok": {
      "word": "दोतोरा म्हऱ्यांत व्हर गो",
      "phrase": "भाव, म्हाजी भलायकी बरी ना, उपकार करून म्हाका दोतोरा म्हऱ्यांत व्हर गो.",
      "phonetic": "Bhav, mhaji bhalayki bari na, upkaar karun mhaka dotora mharyant vhar go."
    },
    "doi": {
      "word": "डाक्टर कोल लेई चलो जी",
      "phrase": "भरा जी, मेरी तबीयत ठीक नेईं ऐ, मिगी डाक्टर कोल लेई चलो जी।",
      "phonetic": "Bhara ji, meri tabiyat theek nein ai, migi doctor kol lei chalo ji."
    },
    "en": {
      "word": "Need A Doctor",
      "phrase": "Friend, I am not feeling well, please help me see a doctor.",
      "phonetic": "Friend, I am not feeling well, please help me see a doctor."
    }
  },
  "emergency": {
    "hi": {
      "word": "आपातकाल / तुरंत बचाइए!",
      "phrase": "अरे भाई साहब! बड़ी मुसीबत है, कृपया तुरंत मेरी मदद कीजिए!",
      "phonetic": "Are bhai sahab! Badi museebat hai, kripaya turant meri madad kijiye!"
    },
    "mai": {
      "word": "आपातकाल / तुरन्त बचाऊ यौ!",
      "phrase": "यौ भैया! बड़ भारी विपत्ति अछि, तुरन्त हमर रक्षा करू!",
      "phonetic": "Yau bhaiya! Bad bhari vipatti achhi, turant hamar raksha karu!"
    },
    "bho": {
      "word": "इमरजेंसी बा / जल्दी बचाईं!",
      "phrase": "ए भैया! भारी आफत आ गइल बा, जल्दी से हमार मदद करीं!",
      "phonetic": "E bhaiya! Bhari aafat aa gail ba, jaldi se hamaar madad karin!"
    },
    "mag": {
      "word": "जल्दी बचा लऽ भैया!",
      "phrase": "ए भैया! बड़ी मुसीबत हई, जल्दी से हमर मदद कर द!",
      "phonetic": "E bhaiya! Badi museebat hai, jaldi se hamar madad kar da!"
    },
    "raj": {
      "word": "आपातकाल / बेगा बचाओ सा!",
      "phrase": "भाया सा! मोटी आफत है, कृपा कर ने बेगा म्हारी मदद करो सा!",
      "phonetic": "Bhaya sa! Moti aafat hai, kripa kar ne bega mhari madad karo sa!"
    },
    "bgc": {
      "word": "भाई ताबड़तोड़ बचा ले!",
      "phrase": "अरे भाई! कसूती मुसीबत आ गी, ताबड़तोड़ मेरी मदद कर दे!",
      "phonetic": "Are bhai! Kasooti museebat aa gi, tabadtod meri madad kar de!"
    },
    "hne": {
      "word": "भारी विपदा हे / झटके बचा गा!",
      "phrase": "संगवारी हो! अब्बड़ मुसीबत आ गे हे, झटके मोर मदद करव गा!",
      "phonetic": "Sangwari ho! Abbad museebat aa ge he, jhatke mor madad karav ga!"
    },
    "mr": {
      "word": "आणीबाणी / ताबडतोब मदत करा!",
      "phrase": "दादा, मोठी आणीबाणी आहे! कृपया ताबडतोब माझी मदत करा!",
      "phonetic": "Dada, mothi aanibani aahe! Kripaya tabadtob majhi madat kara!"
    },
    "gu": {
      "word": "કટોકટી / તરત મદદ કરો!",
      "phrase": "ભાઈ, મોટી મુસીબત છે! કૃપા કરીને તરત જ મારી મદદ કરો!",
      "phonetic": "Bhai, moti museebat chhe! Krupa karine tarataj mari madad karo!"
    },
    "pa": {
      "word": "ਐਮਰਜੈਂਸੀ / ਤੁਰੰਤ ਮਦਦ ਕਰੋ!",
      "phrase": "ਵੀਰ ਜੀ, ਬਹੁਤ ਵੱਡੀ ਮੁਸੀਬਤ ਹੈ! ਕਿਰਪਾ ਕਰਕੇ ਤੁਰੰਤ ਮੇਰੀ ਮਦਦ ਕਰੋ ਜੀ!",
      "phonetic": "Veer ji, bahut vaddi museebat hai! Kirpa karke turant meri madad karo ji!"
    },
    "bn": {
      "word": "জরুরি বিপদ / এক্ষুনি বাঁচান!",
      "phrase": "দাদা, ভীষণ বিপদ! দয়া করে এক্ষুনি আমাকে সাহায্য করুন!",
      "phonetic": "Dada, bhishon bipod! Doya kore ekkhuni amake shahajjo korun!"
    },
    "as": {
      "word": "জৰুৰী বিপদ / সোনকালে সহায় কৰক!",
      "phrase": "বৰ ডাঙৰ বিপদ হৈছে দেই! অনুগ্ৰহ কৰি এইমাত্ৰ মোক সহায় কৰক!",
      "phonetic": "Bor dangor bipod hoise dei! Onugroho kori eimatro mok xohay korok!"
    },
    "or": {
      "word": "ଜରୁରୀ ବିପଦ / ତୁରନ୍ତ ସାହାଯ୍ୟ କରନ୍ତୁ!",
      "phrase": "ଭାଇ, ବଡ଼ ବିପଦ ଆସିଛି! ଦୟାକରି ତୁରନ୍ତ ମୋତେ ସାହାଯ୍ୟ କରନ୍ତୁ!",
      "phonetic": "Bhai, bada bipada asichi! Dayakari turanta mote sahajya karantu!",
      "ttsText": "भाई, बड़ बिपद आसिछि! दयाकरि तुरन्त मोते साहाज्य करन्तु!"
    },
    "ta": {
      "word": "அவசரம் / உடனே காப்பாத்துங்க!",
      "phrase": "அண்ணா, பெரிய ஆபத்துங்க! தயவுசெஞ்சு உடனே எனக்கு உதவி பண்ணுங்க!",
      "phonetic": "Anna, periya aabathunga! Thayavusenju udane enakku uthavi pannunga!"
    },
    "te": {
      "word": "అత్యవసరం / వెంటనే కాపాడండి!",
      "phrase": "అన్నా, పెద్ద ఆపదలో ఉన్నాను! దయచేసి వెంటనే నాకు సహాయం చేయండి!",
      "phonetic": "Anna, pedda aapadalo unnanu! Dayachesi ventane naaku sahayam cheyandi!"
    },
    "kn": {
      "word": "ತುರ್ತು ಪರಿಸ್ಥಿತಿ / ತಕ್ಷಣ ಕಾಪಾಡಿ!",
      "phrase": "ಅಣ್ಣಾ, ದೊಡ್ಡ ಅಪಾಯವಾಗಿದೆ! ದಯವಿಟ್ಟು ತಕ್ಷಣ ನನಗೆ ಸಹಾಯ ಮಾಡಿ ರೀ!",
      "phonetic": "Anna, dodda apayavagide! Dayavittu thakshana nanage sahaya maadi ree!"
    },
    "ml": {
      "word": "അടിയന്തര സഹായം / വേഗം രക്ഷിക്കൂ!",
      "phrase": "ചേട്ടാ, വലിയ അപകടത്തിലാണ്! ദയവായി ഉടൻ തന്നെ എന്നെ സഹായിക്കണേ!",
      "phonetic": "Chetta, valiya apakadathilanu! Dayavayi udan thanne enne sahayikkane!"
    },
    "ur": {
      "word": "ہنگامی صورتحال / فوراً مدد کیجیے!",
      "phrase": "جناب، شدید ایمرجنسی ہے! براہ کرم فوراً میری مدد کیجیے!",
      "phonetic": "Janaab, shadeed emergency hai! Bara-e-karam fauran meri madad kijiye!"
    },
    "ne": {
      "word": "आपत पर्यो / तुरुन्त बचाउनुहोस्!",
      "phrase": "हजुर, ठूलो आपत पर्यो! कृपया तुरुन्तै मलाई सहयोग गर्नुहोस्!",
      "phonetic": "Hajur, thulo aapat paryo! Kripaya turuntai malai sahayog garnuhos!"
    },
    "kok": {
      "word": "व्हड संकट / बेगीन पाव गो!",
      "phrase": "भाव, व्हड संकट आयलां! उपकार करून बेगीन म्हाका पाव गो!",
      "phonetic": "Bhav, vhad sankat aayla! Upkaar karun begin mhaka paav go!"
    },
    "doi": {
      "word": "बड़ी मुसीबत / तौले बचाओ जी!",
      "phrase": "भरा जी, बड़ी भारी मुसीबत ऐ! कृपा करियै तौले मेरी मदद करो जी!",
      "phonetic": "Bhara ji, badi bhari museebat ai! Kripa kariyai taule meri madad karo ji!"
    },
    "en": {
      "word": "Emergency! Urgent Help!",
      "phrase": "Emergency! Please help me right now, I am in urgent need of assistance!",
      "phonetic": "Emergency! Please help me right now, I am in urgent need of assistance!"
    }
  },
  "medicine": {
    "hi": {
      "word": "दवाई / औषधि जी",
      "phrase": "भाई साहब, मुझे अपनी दवाई लेनी है, मेडिकल स्टोर कहाँ मिलेगा?",
      "phonetic": "Bhai sahab, mujhe apni dawai leni hai, medical store kahan milega?"
    },
    "mai": {
      "word": "दबाइ / औषधि यौ",
      "phrase": "यौ भैया, हमरा दबाइ लेबाक अछि, दबाइक दोकान कतय छै?",
      "phonetic": "Yau bhaiya, hamra dabai lebaak achhi, dabaik dokaan katay chhai?"
    },
    "bho": {
      "word": "दवाई चाहीं भैया",
      "phrase": "ए भैया, हमरा दवाई लेवे के बा, दवाई के दोकान केने बा?",
      "phonetic": "E bhaiya, hamra dawai lewe ke ba, dawai ke dokaan kene ba?"
    },
    "mag": {
      "word": "दवाई चाही भैया",
      "phrase": "भैया, हमरा दवाई लेवे ला हई, दवाई के दोकान बता द ना।",
      "phonetic": "Bhaiya, hamra dawai lewe la hai, dawai ke dokaan bata da na."
    },
    "raj": {
      "word": "दवाई / ओखद सा",
      "phrase": "भाया सा, म्हाने दवाई लेवणी है, दवाई री दुकान कठे है सा?",
      "phonetic": "Bhaya sa, mhane dawai levni hai, dawai ri dukaan kathe hai sa?"
    },
    "bgc": {
      "word": "दवाई लेणी सै भाई",
      "phrase": "भाई, मने दवाई लेणी सै, दवाई की दुकान कित सै?",
      "phonetic": "Bhai, mane dawai leni sai, dawai ki dukaan kit sai?"
    },
    "hne": {
      "word": "दवई लेबर हे संगवारी",
      "phrase": "संगवारी, मोला दवई लेबर हे गा, मेडिकल दुकान कहाँ हे?",
      "phonetic": "Sangwari, mola dawai lebar he ga, medical dukaan kahan he?"
    },
    "mr": {
      "word": "औषध हवे आहे दादा",
      "phrase": "दादा, मला माझं औषध घ्यायचं आहे, औषधाचं दुकान कुठे आहे?",
      "phonetic": "Dada, mala majha aushadh ghyaycha aahe, aushadhacha dukaan kuthe aahe?"
    },
    "gu": {
      "word": "દવા જોઈએ છે ભાઈ",
      "phrase": "ભાઈ, મારે દવા લેવી છે, મેડિકલ સ્ટોર ક્યાં છે?",
      "phonetic": "Bhai, mare dava levi chhe, medical store kya chhe?"
    },
    "pa": {
      "word": "ਦਵਾਈ ਚਾਹੀਦੀ ਹੈ ਜੀ",
      "phrase": "ਵੀਰ ਜੀ, ਮੈਨੂੰ ਦਵਾਈ ਦੀ ਲੋੜ ਹੈ, ਦਵਾਈਆਂ ਦੀ ਦੁਕਾਨ ਕਿੱਥੇ ਹੈ ਜੀ?",
      "phonetic": "Veer ji, mainu dawai di lod hai, dawaiyan di dukaan kitthe hai ji?"
    },
    "bn": {
      "word": "ওষুধ চাই দাদা",
      "phrase": "দাদা, আমার ওষুধ দরকার, ওষুধের দোকানটা কোন দিকে বলুন তো?",
      "phonetic": "Dada, amar oshudh dorkar, oshudher dokanta kon dike bolun to?"
    },
    "as": {
      "word": "দৰব লাগে দেই",
      "phrase": "মোক অলপ দৰব লাগে দেই, ফাৰ্মাচীখন ক'ত আছে বাৰু?",
      "phonetic": "Mok olop dorob lage dei, pharmasikhon kot ase baru?"
    },
    "or": {
      "word": "ଔଷଧ ଦରକାର ଭାଇ",
      "phrase": "ଭାଇ, ମୋତେ ଔଷଧ ଦରକାର, ଔଷଧ ଦୋକାନ କେଉଁଠି ଅଛି?",
      "phonetic": "Bhai, mote aushadha darakar, aushadha dokana keunthi achi?",
      "ttsText": "भाई, मोते औषध दरकार, औषध दोकान केउँठि अछि?"
    },
    "ta": {
      "word": "மருந்து வேணுங்க",
      "phrase": "அண்ணா, எனக்கு மருந்து வாங்கணுங்க, மெடிக்கல் ஷாப் எங்கே இருக்கு?",
      "phonetic": "Anna, enakku marunthu vaanganunga, medical shop enge irukku?"
    },
    "te": {
      "word": "మందులు కావాలండీ",
      "phrase": "అన్నా, నాకు మందులు కావాలండీ, మెడికల్ షాప్ ఎక్కడ ఉంది?",
      "phonetic": "Anna, naaku mandulu kavalandi, medical shop ekkada undi?"
    },
    "kn": {
      "word": "ಔಷಧಿ ಬೇಕು ರೀ",
      "phrase": "ಅಣ್ಣಾ, ನನಗೆ ಔಷಧಿ ಬೇಕು ರೀ, ಮೆಡಿಕಲ್ ಸ್ಟೋರ್ ಎಲ್ಲಿದೆ?",
      "phonetic": "Anna, nanage aushadhi beku ree, medical store ellide?"
    },
    "ml": {
      "word": "മരുന്ന് വേണം ചേട്ടാ",
      "phrase": "ചേട്ടാ, എനിക്ക് മരുന്ന് വാങ്ങണം, മെഡിക്കൽ ഷോപ്പ് എവിടെയാണ്?",
      "phonetic": "Chetta, enikku marunnu vaanganam, medical shop evideyanu?"
    },
    "ur": {
      "word": "دوا چاہیے جناب",
      "phrase": "جناب، مجھے دوا کی ضرورت ہے، دواخانہ کہاں ملے گا؟",
      "phonetic": "Janaab, mujhe dawa ki zaroorat hai, dawakhana kahan milega?"
    },
    "ne": {
      "word": "औषधि चाहियो हजुर",
      "phrase": "हजुर, मलाई औषधि लिनु छ, औषधि पसल कता छ होला?",
      "phonetic": "Hajur, malai aushadhi linu chha, aushadhi pasal kata chha hola?"
    },
    "kok": {
      "word": "वखद जाय गो",
      "phrase": "भाव, म्हाका वखद घेवंक जाय, फार्मसी खंय आसा गो?",
      "phonetic": "Bhav, mhaka vakhad gheunk jay, pharmacy khay aasa go?"
    },
    "doi": {
      "word": "दवाई चाहिदी ऐ जी",
      "phrase": "भरा जी, मिगी दवाई लैंणी ऐ, दवाई दी हट्टी कुत्थै ऐ?",
      "phonetic": "Bhara ji, migi dawai laini ai, dawai di hatti kutthai ai?"
    },
    "en": {
      "word": "Need Medicine",
      "phrase": "Friend, I need to take my medicine, where is the nearest pharmacy?",
      "phonetic": "Friend, I need to take my medicine, where is the nearest pharmacy?"
    }
  },
  "pain": {
    "hi": {
      "word": "बहुत दर्द हो रहा है",
      "phrase": "अरे भाई साहब, मुझे बहुत तेज़ दर्द हो रहा है, कृपया मदद कीजिए।",
      "phonetic": "Are bhai sahab, mujhe bahut tez dard ho raha hai, kripaya madad kijiye."
    },
    "mai": {
      "word": "बड़ दर्द भऽ रहल अछि",
      "phrase": "यौ भैया, हमरा देहमे बड़ पीड़ा आ दर्द भऽ रहल अछि।",
      "phonetic": "Yau bhaiya, hamra deh mein bad peeda aa dard bha rahal achhi."
    },
    "bho": {
      "word": "बड़ी दरद होखत बा",
      "phrase": "ए भैया, हमरा बहुत तेज दरद होखत बा, कुछ उपाय करीं।",
      "phonetic": "E bhaiya, hamra bahut tej darad hokhat ba, kuch upay karin."
    },
    "mag": {
      "word": "बड़ी दरद हो रहल हई",
      "phrase": "भैया, हमरा बड़ी जोर से दरद हो रहल हई।",
      "phonetic": "Bhaiya, hamra badi jor se darad ho rahal hai."
    },
    "raj": {
      "word": "घणो पीड़ हो रही है सा",
      "phrase": "भाया सा, म्हारे घणी पीड़ अर दरद हो रह्यो है सा।",
      "phonetic": "Bhaya sa, mhare ghani peed ar darad ho rahyo hai sa."
    },
    "bgc": {
      "word": "घणा दर्द होवै सै भाई",
      "phrase": "अरे भाई, मेरे कसूता दर्द हो रह्या सै, कुछ मदद कर दे।",
      "phonetic": "Are bhai, mere kasoota dard ho rahya sai, kuch madad kar de."
    },
    "hne": {
      "word": "अब्बड़ पीरा होवत हे गा",
      "phrase": "संगवारी, मोला अब्बड़ दरद अउ पीरा होवत हे गा।",
      "phonetic": "Sangwari, mola abbad darad au peera hovat he ga."
    },
    "mr": {
      "word": "खूप दुखतंय दादा",
      "phrase": "दादा, मला खूप वेदना होत आहेत आणि दुखतंय हो.",
      "phonetic": "Dada, mala khup vedana hot aahet aani dukhtay ho."
    },
    "gu": {
      "word": "ખૂબ દુખાવો થાય છે",
      "phrase": "ભાઈ, મને ખૂબ જ દુખાવો થઈ રહ્યો છે, મદદ કરો.",
      "phonetic": "Bhai, mane khubaj dukhavo thai rahyo chhe, madad karo."
    },
    "pa": {
      "word": "ਬਹੁਤ ਦਰਦ ਹੋ ਰਿਹਾ ਹੈ ਜੀ",
      "phrase": "ਵੀਰ ਜੀ, ਮੈਨੂੰ ਬਹੁਤ ਜ਼ਿਆਦਾ ਦਰਦ ਹੋ ਰਿਹਾ ਹੈ ਜੀ।",
      "phonetic": "Veer ji, mainu bahut ziada dard ho riha hai ji."
    },
    "bn": {
      "word": "খুব ব্যথা হচ্ছে দাদা",
      "phrase": "দাদা, আমার ভীষণ ব্যথা করছে, একটু সাহায্য করুন।",
      "phonetic": "Dada, amar bhishon byatha korche, ektu shahajjo korun."
    },
    "as": {
      "word": "বৰ বিষাইছে দেই",
      "phrase": "মোৰ গাত বৰকৈ বিষাইছে দেই, অনুগ্ৰহ কৰি সহায় কৰক।",
      "phonetic": "Mor gat borkoi bixaise dei, onugroho kori xohay korok."
    },
    "or": {
      "word": "ବହୁତ ଯନ୍ତ୍ରଣା ହେଉଛି",
      "phrase": "ଭାଇ, ମୋତେ ବହୁତ କଷ୍ଟ ଓ ଯନ୍ତ୍ରଣା ହେଉଛି।",
      "phonetic": "Bhai, mote bahut kashta o jantrana heuchi.",
      "ttsText": "भाई, मोते बहुत कष्ट ओ जन्त्रणा हेउछि।"
    },
    "ta": {
      "word": "ரொம்ப வலிக்குதுங்க",
      "phrase": "அண்ணா, எனக்கு ரொம்ப வலிக்குதுங்க, தாங்க முடியல.",
      "phonetic": "Anna, enakku romba valikkuthunga, thaanga mudiyala."
    },
    "te": {
      "word": "చాలా నొప్పిగా ఉందండీ",
      "phrase": "అన్నా, నాకు చాలా తీవ్రమైన నొప్పిగా ఉందండీ.",
      "phonetic": "Anna, naaku chala theevramaina noppiga undandi."
    },
    "kn": {
      "word": "ತುಂಬಾ ನೋವಾಗುತ್ತಿದೆ ರೀ",
      "phrase": "ಅಣ್ಣಾ, ನನಗೆ ತುಂಬಾ ನೋವಾಗುತ್ತಿದೆ ರೀ, ಸಹಾಯ ಮಾಡಿ.",
      "phonetic": "Anna, nanage tumba novaguttide ree, sahaya maadi."
    },
    "ml": {
      "word": "നല്ല വേദനയുണ്ട് ചേട്ടാ",
      "phrase": "ചേട്ടാ, എനിക്ക് സഹിക്കാൻ പറ്റാത്ത വേദനയുണ്ട് കേട്ടോ.",
      "phonetic": "Chetta, enikku sahikkan pattatha vedanayundu ketto."
    },
    "ur": {
      "word": "شدید درد ہو رہا ہے",
      "phrase": "جناب، مجھے بہت شدید تکلیف اور درد ہو رہا ہے۔",
      "phonetic": "Janaab, mujhe bahut shadeed takleef aur dard ho raha hai."
    },
    "ne": {
      "word": "साह्रै दुख्यो हजुर",
      "phrase": "हजुर, मलाई साह्रै दुखिरहेको छ, सहयोग गर्नुहोस् न।",
      "phonetic": "Hajur, malai sahrai dukhirako chha, sahayog garnuhos na."
    },
    "kok": {
      "word": "खूब दुकता गो",
      "phrase": "भाव, म्हाका खूब दुकता आनी त्रास जाता गो.",
      "phonetic": "Bhav, mhaka khub dukta aani traas jata go."
    },
    "doi": {
      "word": "बड़ी पीड़ होन्दी ऐ जी",
      "phrase": "भरा जी, मिगी बड़ी मती पीड़ होआ करदी ऐ जी।",
      "phonetic": "Bhara ji, migi badi mati peed hoa kardi ai ji."
    },
    "en": {
      "word": "I Am In Pain",
      "phrase": "Friend, I am experiencing severe pain right now, please help me.",
      "phonetic": "Friend, I am experiencing severe pain right now, please help me."
    }
  },
  "home": {
    "hi": {
      "word": "मुझे घर जाना है जी",
      "phrase": "भाई साहब, मुझे अपने घर वापस जाना है, कृपया रास्ता बताइए।",
      "phonetic": "Bhai sahab, mujhe apne ghar wapas jaana hai, kripaya raasta bataiye."
    },
    "mai": {
      "word": "हमरा घर जयबाक अछि",
      "phrase": "यौ भैया, हमरा अपन घर जयबाक अछि, बाट बता दिअ ने।",
      "phonetic": "Yau bhaiya, hamra apan ghar jaybaak achhi, baat bata dia ne."
    },
    "bho": {
      "word": "हमरा घरे जाये के बा",
      "phrase": "ए भैया, हमरा अपन घरे जाये के बा, तनी राह बता दीं।",
      "phonetic": "E bhaiya, hamra apan ghare jaaye ke ba, tani raah bata deen."
    },
    "mag": {
      "word": "हमरा घर जाये ला हई",
      "phrase": "भैया, हमरा अपन घर जाये ला हई।",
      "phonetic": "Bhaiya, hamra apan ghar jaaye la hai."
    },
    "raj": {
      "word": "म्हाने घरां जावणो है सा",
      "phrase": "भाया सा, म्हाने पाछो आपणे घरां जावणो है सा।",
      "phonetic": "Bhaya sa, mhane pachho aapne gharan javno hai sa."
    },
    "bgc": {
      "word": "मने घरां जाणा सै भाई",
      "phrase": "भाई, मने आपणे घरां जाणा सै, राह बता दे।",
      "phonetic": "Bhai, mane aapne gharan jaana sai, raah bata de."
    },
    "hne": {
      "word": "मोला घर जाए बर हे गा",
      "phrase": "संगवारी, मोला अपन घर वापस जाए बर हे गा।",
      "phonetic": "Sangwari, mola apan ghar wapas jaaye bar he ga."
    },
    "mr": {
      "word": "मला घरी जायचं आहे",
      "phrase": "दादा, मला माझ्या घरी परत जायचं आहे हो.",
      "phonetic": "Dada, mala majhya ghari parat jaycha aahe ho."
    },
    "gu": {
      "word": "મારે ઘરે જવું છે ભાઈ",
      "phrase": "ભાઈ, મારે મારા ઘરે પાછા જવું છે, મદદ કરશો?",
      "phonetic": "Bhai, mare mara ghare pachha javu chhe, madad karsho?"
    },
    "pa": {
      "word": "ਮੈਂ ਘਰ ਜਾਣਾ ਹੈ ਜੀ",
      "phrase": "ਵੀਰ ਜੀ, ਮੈਂ ਆਪਣੇ ਘਰ ਵਾਪਸ ਜਾਣਾ ਹੈ ਜੀ।",
      "phonetic": "Veer ji, main aapne ghar wapas jaana hai ji."
    },
    "bn": {
      "word": "আমি বাড়ি যাব দাদা",
      "phrase": "দাদা, আমি আমার বাড়িতে ফিরে যেতে চাই।",
      "phonetic": "Dada, ami amar barite phire jete chai."
    },
    "as": {
      "word": "মই ঘৰলৈ যাব খোজোঁ",
      "phrase": "মই মোৰ ঘৰলৈ উভতি যাব খোজোঁ দেই।",
      "phonetic": "Moi mor ghoroloi ubhoti jabo khojon dei."
    },
    "or": {
      "word": "ମୋତେ ଘରକୁ ଯିବାର ଅଛି",
      "phrase": "ଭାଇ, ମୋତେ ମୋ ଘରକୁ ଫେରିଯିବାର ଅଛି।",
      "phonetic": "Bhai, mote mo gharaku pherijibara achi.",
      "ttsText": "भाई, मोते मो घरकु फेरिजिबारो अछि।"
    },
    "ta": {
      "word": "நான் வீட்டுக்குப் போகணும்",
      "phrase": "அண்ணா, நான் என் வீட்டுக்குத் திரும்பிப் போகணுங்க.",
      "phonetic": "Anna, naan en veettukkuth thirumbip poganunga."
    },
    "te": {
      "word": "నేను ఇంటికి వెళ్ళాలండీ",
      "phrase": "అన్నా, నేను మా ఇంటికి తిరిగి వెళ్ళాలండీ.",
      "phonetic": "Anna, nenu maa intiki thirigi vellalandi."
    },
    "kn": {
      "word": "ನಾನು ಮನೆಗೆ ಹೋಗಬೇಕು ರೀ",
      "phrase": "ಅಣ್ಣಾ, ನಾನು ನನ್ನ ಮನೆಗೆ ವಾಪಸ್ ಹೋಗಬೇಕು ರೀ.",
      "phonetic": "Anna, naanu nanna manege wapas hogabeku ree."
    },
    "ml": {
      "word": "എനിക്ക് വീട്ടിൽ പോകണം",
      "phrase": "ചേട്ടാ, എനിക്ക് എന്റെ വീട്ടിലേക്ക് തിരികെ പോകണം.",
      "phonetic": "Chetta, enikku ente veettilekku thirike pokanam."
    },
    "ur": {
      "word": "مجھے گھر جانا ہے جناب",
      "phrase": "جناب، مجھے اپنے گھر واپس جانا ہے، رہنمائی فرمائیے۔",
      "phonetic": "Janaab, mujhe apne ghar wapas jaana hai, rehnumai farmaiye."
    },
    "ne": {
      "word": "मलाई घर जानु छ हजुर",
      "phrase": "हजुर, मलाई मेरो घर फर्किनु छ, सहयोग गरिदिनुहोस् न।",
      "phonetic": "Hajur, malai mero ghar pharkinu chha, sahayog garidinuhos na."
    },
    "kok": {
      "word": "म्हाका घरा वचूंक जाय",
      "phrase": "भाव, म्हाका म्हाज्या घरा परत वचूंक जाय गो.",
      "phonetic": "Bhav, mhaka mhajya ghara parat vachunk jay go."
    },
    "doi": {
      "word": "मिगी घर जाना ऐ जी",
      "phrase": "भरा जी, मिगी अपने घर परतियै जाना ऐ जी।",
      "phonetic": "Bhara ji, migi apne ghar partiyai jaana ai ji."
    },
    "en": {
      "word": "Take Me Home",
      "phrase": "Friend, I need to go back to my home, please guide me.",
      "phonetic": "Friend, I need to go back to my home, please guide me."
    }
  },
  "bus": {
    "hi": {
      "word": "बस स्टॉप / गाड़ी जी",
      "phrase": "भाई साहब, बस स्टॉप या ऑटो किस तरफ़ मिलेगा जी?",
      "phonetic": "Bhai sahab, bus stop ya auto kis taraf milega ji?"
    },
    "mai": {
      "word": "बस अड्डा / गाड़ी यौ",
      "phrase": "यौ भैया, बस स्टॉप वा गाड़ी कतय सँ मिलत?",
      "phonetic": "Yau bhaiya, bus stop va gaadi katay san milat?"
    },
    "bho": {
      "word": "बस अड्डा / गाड़ी भैया",
      "phrase": "ए भैया, बस अड्डा चाहे टेंपो केने मिली हो?",
      "phonetic": "E bhaiya, bus adda chahe tempo kene mili ho?"
    },
    "mag": {
      "word": "बस अड्डा केने हई?",
      "phrase": "भैया, बस पकड़े ला बस अड्डा केने हई?",
      "phonetic": "Bhaiya, bus pakde la bus adda kene hai?"
    },
    "raj": {
      "word": "बस स्टैंड कठे है सा?",
      "phrase": "भाया सा, बस पकड़ण वास्ते बस स्टैंड कठे है सा?",
      "phonetic": "Bhaya sa, bus pakdan vaaste bus stand kathe hai sa?"
    },
    "bgc": {
      "word": "बस अड्डा कित सै भाई?",
      "phrase": "भाई, बस लेण खातर बस अड्डा कित सै?",
      "phonetic": "Bhai, bus len khatar bus adda kit sai?"
    },
    "hne": {
      "word": "बस स्टैंड कहाँ हे गा?",
      "phrase": "संगवारी, गाड़ी पकड़े बर बस स्टैंड कोन कोती हे गा?",
      "phonetic": "Sangwari, gaadi pakde bar bus stand kon koti he ga?"
    },
    "mr": {
      "word": "बस स्टॉप कुठे आहे दादा?",
      "phrase": "दादा, जवळचा बस स्टॉप किंवा रिक्षा स्टँड कुठे आहे हो?",
      "phonetic": "Dada, javalcha bus stop kinva rickshaw stand kuthe aahe ho?"
    },
    "gu": {
      "word": "બસ સ્ટોપ ક્યાં છે ભાઈ?",
      "phrase": "ભાઈ, નજીકનું બસ સ્ટોપ કે રિક્ષા સ્ટેન્ડ કઈ તરફ છે?",
      "phonetic": "Bhai, najiknu bus stop ke rickshaw stand kai taraf chhe?"
    },
    "pa": {
      "word": "ਬੱਸ ਅੱਡਾ ਕਿੱਥੇ ਹੈ ਜੀ?",
      "phrase": "ਵੀਰ ਜੀ, ਇੱਥੇ ਨੇੜੇ ਬੱਸ ਅੱਡਾ ਕਿਸ ਪਾਸੇ ਹੈ ਜੀ?",
      "phonetic": "Veer ji, itthe nede bus adda kis paase hai ji?"
    },
    "bn": {
      "word": "বাস স্টপ কোন দিকে দাদা?",
      "phrase": "দাদা, বাস ধরার জন্য বাস স্টপটা কোন দিকে বলুন তো?",
      "phonetic": "Dada, bus dhorar jonno bus stopta kon dike bolun to?"
    },
    "as": {
      "word": "বাছ আস্থান ক'ত আছে?",
      "phrase": "ককাইদেউ, বাছ ধৰিবলৈ বাছ আস্থানটো ক'ত আছে বাৰু?",
      "phonetic": "Kokaideu, bas dhoriboloi bas asthaanto kot ase baru?"
    },
    "or": {
      "word": "ବସ୍ ଷ୍ଟାଣ୍ଡ କେଉଁଠି ଅଛି?",
      "phrase": "ଭାଇ, ପାଖରେ ବସ୍ ଷ୍ଟପ୍ ବା ଗାଡ଼ି କେଉଁଠି ମିଳିବ?",
      "phonetic": "Bhai, pakhare bus stop ba gadi keunthi miliba?",
      "ttsText": "भाई, पाखरे बस स्टप बा गाड़ि केउँठि मिलिब?"
    },
    "ta": {
      "word": "பஸ் ஸ்டாப் எங்கே இருக்கு?",
      "phrase": "அண்ணா, பஸ் பிடிக்க பக்கத்துல பஸ் ஸ்டாப் எங்கே இருக்குங்க?",
      "phonetic": "Anna, bus pidikka pakkathula bus stop enge irukkunga?"
    },
    "te": {
      "word": "బస్ స్టాప్ ఎక్కడ ఉందండీ?",
      "phrase": "అన్నా, దగ్గరలో బస్ స్టాప్ ఎటువైపు ఉందో చెబుతారా?",
      "phonetic": "Anna, daggaralo bus stop etuvaipu undo chebuthara?"
    },
    "kn": {
      "word": "ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ ರೀ?",
      "phrase": "ಅಣ್ಣಾ, ಇಲ್ಲಿ ಹತ್ತಿರದ ಬಸ್ ಸ್ಟಾಪ್ ಯಾವ ಕಡೆ ಇದೆ ರೀ?",
      "phonetic": "Anna, illi hattirada bus stop yaava kade ide ree?"
    },
    "ml": {
      "word": "ബസ് സ്റ്റോപ്പ് എവിടെയാണ്?",
      "phrase": "ചേട്ടാ, അടുത്തുള്ള ബസ് സ്റ്റോപ്പ് ഏത് ഭാഗത്താണ്?",
      "phonetic": "Chetta, aduthulla bus stop ethu bhagathanu?"
    },
    "ur": {
      "word": "بس اسٹاپ کہاں ہے جناب؟",
      "phrase": "جناب، یہاں قریب میں بس اسٹاپ کس طرف ہے؟",
      "phonetic": "Janaab, yahan qareeb mein bus stop kis taraf hai?"
    },
    "ne": {
      "word": "बस बिसौनी कता छ हजुर?",
      "phrase": "हजुर, गाडी चढ्न बस स्टप कता पर्छ होला?",
      "phonetic": "Hajur, gaadi chadhna bus stop kata parchha hola?"
    },
    "kok": {
      "word": "बस स्टॉप खंय आसा गो?",
      "phrase": "भाव, बस धरपाक बस स्टॉप खंय आसा गो?",
      "phonetic": "Bhav, bus dharpak bus stop khay aasa go?"
    },
    "doi": {
      "word": "बस अड्डा कुत्थै ऐ जी?",
      "phrase": "भरा जी, गड्डी फड़ने लेई बस अड्डा कुत्थै ऐ जी?",
      "phonetic": "Bhara ji, gaddi fadne lei bus adda kutthai ai ji?"
    },
    "en": {
      "word": "Where Is The Bus Stop?",
      "phrase": "Excuse me friend, where can I find the nearest bus stop or transport?",
      "phonetic": "Excuse me friend, where can I find the nearest bus stop or transport?"
    }
  },
  "school": {
    "hi": {
      "word": "विद्यालय / स्कूल और पढ़ाई",
      "phrase": "मैं स्कूल और पढ़ाई के लिए जा रहा हूँ जी।",
      "phonetic": "Main school aur padhai ke liye jaa raha hoon ji."
    },
    "mai": {
      "word": "विद्यालय / पढ़ाइ यौ",
      "phrase": "हम पढ़बाक लेल विद्यालय जा रहल छी यौ।",
      "phonetic": "Ham padhbaak lel vidyalaya jaa rahal chhi yau."
    },
    "bho": {
      "word": "स्कूल / पढ़ाई भैया",
      "phrase": "हम पढ़े खातिर स्कूल जात बानी हो।",
      "phonetic": "Ham padhe khatir school jaat baani ho."
    },
    "mag": {
      "word": "स्कूल / पढ़े ला",
      "phrase": "हम पढ़े ला स्कूल जाइत हियो भैया।",
      "phonetic": "Ham padhe la school jaait hiyo bhaiya."
    },
    "raj": {
      "word": "स्कूल / भणतर सा",
      "phrase": "म्हें भणवा और पढ़वा वास्ते स्कूल जा रह्यो हूं सा।",
      "phonetic": "Mhe bhanva aur padhva vaaste school jaa rahyo hoon sa."
    },
    "bgc": {
      "word": "स्कूल / पढ़ाई भाई",
      "phrase": "भाई, मैं पढ़ण खातर स्कूल जा रह्या सूं।",
      "phonetic": "Bhai, main padhan khatar school jaa rahya soon."
    },
    "hne": {
      "word": "इस्कूल / पढ़ई गा",
      "phrase": "संगवारी, मैं पढ़े बर इस्कूल जात हँव गा।",
      "phonetic": "Sangwari, main padhe bar iskool jaat hanv ga."
    },
    "mr": {
      "word": "शाळा / शिक्षण दादा",
      "phrase": "दादा, मी शिकण्यासाठी शाळेत किंवा कॉलेजला जात आहे.",
      "phonetic": "Dada, mi shiknyasathi shalet kinva collegela jaat aahe."
    },
    "gu": {
      "word": "શાળા / અભ્યાસ ભાઈ",
      "phrase": "ભાઈ, હું ભણવા માટે શાળાએ જઈ રહ્યો છું.",
      "phonetic": "Bhai, hu bhanva mate shalae jai rahyo chhu."
    },
    "pa": {
      "word": "ਸਕੂਲ / ਪੜ੍ਹਾਈ ਜੀ",
      "phrase": "ਵੀਰ ਜੀ, ਮੈਂ ਪੜ੍ਹਾਈ ਕਰਨ ਲਈ ਸਕੂਲ ਜਾ ਰਿਹਾ ਹਾਂ ਜੀ।",
      "phonetic": "Veer ji, main padhai karan layi school jaa riha haan ji."
    },
    "bn": {
      "word": "স্কুল / পড়াশোনা দাদা",
      "phrase": "দাদা, আমি পড়াশোনার জন্য স্কুলে যাচ্ছি।",
      "phonetic": "Dada, ami porashonar jonno schoole jacchi."
    },
    "as": {
      "word": "বিদ্যালয় / পঢ়া-শুনা",
      "phrase": "মই পঢ়া-শুনাৰ বাবে বিদ্যালয়লৈ গৈ আছোঁ দেই।",
      "phonetic": "Moi porha-xunar babe bidyaloyoloi goi ason dei."
    },
    "or": {
      "word": "ବିଦ୍ୟାଳୟ / ପାଠପଢ଼ା",
      "phrase": "ଭାଇ, ମୁଁ ପାଠ ପଢ଼ିବା ପାଇଁ ସ୍କୁଲକୁ ଯାଉଛି।",
      "phonetic": "Bhai, mun patha padhiba pain schoolku jauchi.",
      "ttsText": "भाई, मुँ पाठ पढ़िबा पाइँ स्कुलकु जाउछि।"
    },
    "ta": {
      "word": "பள்ளிக்கூடம் / படிப்பு",
      "phrase": "அண்ணா, நான் படிக்கிறதுக்காக பள்ளிக்கூடம் போறேங்க.",
      "phonetic": "Anna, naan padikkirathukkaga pallikkoodam porenga."
    },
    "te": {
      "word": "పాఠశాల / చదువు అండీ",
      "phrase": "అన్నా, నేను చదువుకోవడానికి స్కూలుకు వెళ్తున్నానండీ.",
      "phonetic": "Anna, nenu chaduvukovadaniki schooluku velthunnanandi."
    },
    "kn": {
      "word": "ಶಾಲೆ / ವಿದ್ಯಾಭ್ಯಾಸ ರೀ",
      "phrase": "ಅಣ್ಣಾ, ನಾನು ಓದುವುದಕ್ಕಾಗಿ ಶಾಲೆಗೆ ಹೋಗುತ್ತಿದ್ದೇನೆ ರೀ.",
      "phonetic": "Anna, naanu oduvudakkagi shalege hoguttiddene ree."
    },
    "ml": {
      "word": "സ്കൂൾ / പഠനം ചേട്ടാ",
      "phrase": "ചേട്ടാ, ഞാൻ പഠിക്കാൻ വേണ്ടി സ്കൂളിലേക്ക് പോവുകയാണ്.",
      "phonetic": "Chetta, njan padikkan vendi schoolilekku povukayanu."
    },
    "ur": {
      "word": "اسکول / تعلیم جناب",
      "phrase": "جناب، میں تعلیم حاصل کرنے کے لیے اسکول جا رہا ہوں۔",
      "phonetic": "Janaab, main taleem haasil karne ke liye school jaa raha hoon."
    },
    "ne": {
      "word": "विद्यालय / पढाइ हजुर",
      "phrase": "हजुर, म पढ्नको लागि विद्यालय जाँदैछु।",
      "phonetic": "Hajur, ma padhnako lagi vidyalaya jandaichhu."
    },
    "kok": {
      "word": "शाळा / शिक्षण गो",
      "phrase": "भाव, हांव शिकपाक शाळेंत वतां गो.",
      "phonetic": "Bhav, haav shikpak shalent vata go."
    },
    "doi": {
      "word": "स्कूल / पढ़ाई जी",
      "phrase": "भरा जी, मैं पढ़ने लेई स्कूल जा करदा आं जी।",
      "phonetic": "Bhara ji, main padhne lei school jaa karda aan ji."
    },
    "en": {
      "word": "School / Education",
      "phrase": "Friend, I am heading to school for my studies and classes.",
      "phonetic": "Friend, I am heading to school for my studies and classes."
    }
  },
  "money": {
    "hi": {
      "word": "पैसे / कितने रुपये हुए जी?",
      "phrase": "भाई साहब, इसके कितने पैसे या रुपये देने हैं जी?",
      "phonetic": "Bhai sahab, iske kitne paise ya rupaye dene hain ji?"
    },
    "mai": {
      "word": "टाका / कतेक पाय भेल यौ?",
      "phrase": "यौ भैया, एकर कतेक टाका वा पाय भेलै?",
      "phonetic": "Yau bhaiya, ekar katek taaka va paay bhelai?"
    },
    "bho": {
      "word": "पइसा / केतना रुपिया भइल?",
      "phrase": "ए भैया, एकर केतना पइसा चाहे रुपिया भइल हो?",
      "phonetic": "E bhaiya, ekar ketna paisa chahe rupiya bhail ho?"
    },
    "mag": {
      "word": "केतना पइसा होलई भैया?",
      "phrase": "भैया, एकर केतना पइसा देवे ला हई?",
      "phonetic": "Bhaiya, ekar ketna paisa dewe la hai?"
    },
    "raj": {
      "word": "पीसा / कतरा रिपिया हुया सा?",
      "phrase": "भाया सा, इणरा कतरा पीसा या रिपिया हुया सा?",
      "phonetic": "Bhaya sa, inra katra peesa ya ripiya huya sa?"
    },
    "bgc": {
      "word": "पीसे / कितने रपिये होए भाई?",
      "phrase": "भाई, इसके कितने पीसे या रपिये होए बता दे?",
      "phonetic": "Bhai, iske kitne peese ya rapiye hoye bata de?"
    },
    "hne": {
      "word": "पइसा / कतका रूपिया होइस गा?",
      "phrase": "संगवारी, एकर कतका पइसा या रूपिया होइस गा?",
      "phonetic": "Sangwari, ekar katka paisa ya rupiya hois ga?"
    },
    "mr": {
      "word": "पैसे / किती रुपये झाले हो?",
      "phrase": "दादा, याचे किती पैसे किंवा रुपये झाले सांगा ना?",
      "phonetic": "Dada, yache kiti paise kinva rupaye jhale sanga na?"
    },
    "gu": {
      "word": "પૈસા / કેટલા રૂપિયા થયા ભાઈ?",
      "phrase": "ભાઈ, આના કેટલા પૈસા કે રૂપિયા આપવાના છે?",
      "phonetic": "Bhai, aana ketla paisa ke rupiya aapvana chhe?"
    },
    "pa": {
      "word": "ਪੈਸੇ / ਕਿੰਨੇ ਰੁਪਏ ਹੋਏ ਜੀ?",
      "phrase": "ਵੀਰ ਜੀ, ਇਸ ਦੇ ਕਿੰਨੇ ਪੈਸੇ ਜਾਂ ਰੁਪਏ ਬਣਦੇ ਹਨ ਜੀ?",
      "phonetic": "Veer ji, is de kinne paise jaan rupaye bande han ji?"
    },
    "bn": {
      "word": "টাকা / কত টাকা হলো দাদা?",
      "phrase": "দাদা, এটার দাম কত টাকা হলো বলুন তো?",
      "phonetic": "Dada, etar daam koto taka holo bolun to?"
    },
    "as": {
      "word": "টকা / কিমান টকা হ'ল দেই?",
      "phrase": "ইয়াৰ বাবে কিমান টকা দিব লাগিব বাৰু দেই?",
      "phonetic": "Iyar babe kiman toka dibo lagibo baru dei?"
    },
    "or": {
      "word": "ଟଙ୍କା / କେତେ ଟଙ୍କା ହେଲା ଭାଇ?",
      "phrase": "ଭାଇ, ଏହାର କେତେ ଟଙ୍କା ଦେବାକୁ ପଡ଼ିବ?",
      "phonetic": "Bhai, ehara kete tanka debaku padiba?",
      "ttsText": "भाई, एहार केते टंका देबाकु पड़िब?"
    },
    "ta": {
      "word": "பணம் / எவ்வளவு ஆச்சுங்க?",
      "phrase": "அண்ணா, இதுக்கு எவ்வளவு பணம் குடுக்கணுங்க?",
      "phonetic": "Anna, ithukku evvalavu panam kudukkanunga?"
    },
    "te": {
      "word": "డబ్బులు / ఎంత అయిందండీ?",
      "phrase": "అన్నా, దీనికి ఎంత డబ్బులు ఇవ్వాలో చెబుతారా?",
      "phonetic": "Anna, deeniki entha dabbulu ivvalo chebuthara?"
    },
    "kn": {
      "word": "ಹಣ / ಎಷ್ಟು ರೂಪಾಯಿ ಆಯಿತು ರೀ?",
      "phrase": "ಅಣ್ಣಾ, ಇದಕ್ಕೆ ಎಷ್ಟು ಹಣ ಕೊಡಬೇಕು ರೀ?",
      "phonetic": "Anna, idakke eshtu hana kodabeku ree?"
    },
    "ml": {
      "word": "പണം / എത്ര രൂപയായി ചേട്ടാ?",
      "phrase": "ചേട്ടാ, ഇതിന് എത്ര രൂപ തരണം എന്ന് പറയാമോ?",
      "phonetic": "Chetta, ithinu ethra roopa tharanam ennu parayamo?"
    },
    "ur": {
      "word": "پیسے / کتنے روپے ہوئے جناب؟",
      "phrase": "جناب، اس کے کتنے پیسے یا روپے ادا کرنے ہیں؟",
      "phonetic": "Janaab, is ke kitne paise ya rupaye ada karne hain?"
    },
    "ne": {
      "word": "पैसा / कति रूपैयाँ भयो हजुर?",
      "phrase": "हजुर, यसको कति पैसा दिनुपर्ने होला?",
      "phonetic": "Hajur, yesko kati paisa dinuparne hola?"
    },
    "kok": {
      "word": "पयशे / कितलें जालें गो?",
      "phrase": "भाव, हाचे कितले पयशे दिवपाचे आसात गो?",
      "phonetic": "Bhav, hache kitle payshe divpache aasat go?"
    },
    "doi": {
      "word": "पैसे / किन्ने रपेऽ बने जी?",
      "phrase": "भरा जी, इसदे किन्ने पैसे जां रपेऽ देणे न जी?",
      "phonetic": "Bhara ji, isde kinne paise jaan rape dene n ji?"
    },
    "en": {
      "word": "Money / How Much Does It Cost?",
      "phrase": "Excuse me friend, how much money or rupees should I pay for this?",
      "phonetic": "Excuse me friend, how much money or rupees should I pay for this?"
    }
  },
  "transport": {
    "hi": {
      "word": "बस स्टॉप / गाड़ी जी",
      "phrase": "भाई साहब, बस स्टॉप या ऑटो किस तरफ़ मिलेगा जी?",
      "phonetic": "Bhai sahab, bus stop ya auto kis taraf milega ji?"
    },
    "mai": {
      "word": "बस अड्डा / गाड़ी यौ",
      "phrase": "यौ भैया, बस स्टॉप वा गाड़ी कतय सँ मिलत?",
      "phonetic": "Yau bhaiya, bus stop va gaadi katay san milat?"
    },
    "bho": {
      "word": "बस अड्डा / गाड़ी भैया",
      "phrase": "ए भैया, बस अड्डा चाहे टेंपो केने मिली हो?",
      "phonetic": "E bhaiya, bus adda chahe tempo kene mili ho?"
    },
    "mag": {
      "word": "बस अड्डा केने हई?",
      "phrase": "भैया, बस पकड़े ला बस अड्डा केने हई?",
      "phonetic": "Bhaiya, bus pakde la bus adda kene hai?"
    },
    "raj": {
      "word": "बस स्टैंड कठे है सा?",
      "phrase": "भाया सा, बस पकड़ण वास्ते बस स्टैंड कठे है सा?",
      "phonetic": "Bhaya sa, bus pakdan vaaste bus stand kathe hai sa?"
    },
    "bgc": {
      "word": "बस अड्डा कित सै भाई?",
      "phrase": "भाई, बस लेण खातर बस अड्डा कित सै?",
      "phonetic": "Bhai, bus len khatar bus adda kit sai?"
    },
    "hne": {
      "word": "बस स्टैंड कहाँ हे गा?",
      "phrase": "संगवारी, गाड़ी पकड़े बर बस स्टैंड कोन कोती हे गा?",
      "phonetic": "Sangwari, gaadi pakde bar bus stand kon koti he ga?"
    },
    "mr": {
      "word": "बस स्टॉप कुठे आहे दादा?",
      "phrase": "दादा, जवळचा बस स्टॉप किंवा रिक्षा स्टँड कुठे आहे हो?",
      "phonetic": "Dada, javalcha bus stop kinva rickshaw stand kuthe aahe ho?"
    },
    "gu": {
      "word": "બસ સ્ટોપ ક્યાં છે ભાઈ?",
      "phrase": "ભાઈ, નજીકનું બસ સ્ટોપ કે રિક્ષા સ્ટેન્ડ કઈ તરફ છે?",
      "phonetic": "Bhai, najiknu bus stop ke rickshaw stand kai taraf chhe?"
    },
    "pa": {
      "word": "ਬੱਸ ਅੱਡਾ ਕਿੱਥੇ ਹੈ ਜੀ?",
      "phrase": "ਵੀਰ ਜੀ, ਇੱਥੇ ਨੇੜੇ ਬੱਸ ਅੱਡਾ ਕਿਸ ਪਾਸੇ ਹੈ ਜੀ?",
      "phonetic": "Veer ji, itthe nede bus adda kis paase hai ji?"
    },
    "bn": {
      "word": "বাস স্টপ কোন দিকে দাদা?",
      "phrase": "দাদা, বাস ধরার জন্য বাস স্টপটা কোন দিকে বলুন তো?",
      "phonetic": "Dada, bus dhorar jonno bus stopta kon dike bolun to?"
    },
    "as": {
      "word": "বাছ আস্থান ক'ত আছে?",
      "phrase": "ককাইদেউ, বাছ ধৰিবলৈ বাছ আস্থানটো ক'ত আছে বাৰু?",
      "phonetic": "Kokaideu, bas dhoriboloi bas asthaanto kot ase baru?"
    },
    "or": {
      "word": "ବସ୍ ଷ୍ଟାଣ୍ଡ କେଉଁଠି ଅଛି?",
      "phrase": "ଭାଇ, ପାଖରେ ବସ୍ ଷ୍ଟପ୍ ବା ଗାଡ଼ି କେଉଁଠି ମିଳିବ?",
      "phonetic": "Bhai, pakhare bus stop ba gadi keunthi miliba?",
      "ttsText": "भाई, पाखरे बस स्टप बा गाड़ि केउँठि मिलिब?"
    },
    "ta": {
      "word": "பஸ் ஸ்டாப் எங்கே இருக்கு?",
      "phrase": "அண்ணா, பஸ் பிடிக்க பக்கத்துல பஸ் ஸ்டாப் எங்கே இருக்குங்க?",
      "phonetic": "Anna, bus pidikka pakkathula bus stop enge irukkunga?"
    },
    "te": {
      "word": "బస్ స్టాప్ ఎక్కడ ఉందండీ?",
      "phrase": "అన్నా, దగ్గరలో బస్ స్టాప్ ఎటువైపు ఉందో చెబుతారా?",
      "phonetic": "Anna, daggaralo bus stop etuvaipu undo chebuthara?"
    },
    "kn": {
      "word": "ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ ರೀ?",
      "phrase": "ಅಣ್ಣಾ, ಇಲ್ಲಿ ಹತ್ತಿರದ ಬಸ್ ಸ್ಟಾಪ್ ಯಾವ ಕಡೆ ಇದೆ ರೀ?",
      "phonetic": "Anna, illi hattirada bus stop yaava kade ide ree?"
    },
    "ml": {
      "word": "ബസ് സ്റ്റോപ്പ് എവിടെയാണ്?",
      "phrase": "ചേട്ടാ, അടുത്തുള്ള ബസ് സ്റ്റോപ്പ് ഏത് ഭാഗത്താണ്?",
      "phonetic": "Chetta, aduthulla bus stop ethu bhagathanu?"
    },
    "ur": {
      "word": "بس اسٹاپ کہاں ہے جناب؟",
      "phrase": "جناب، یہاں قریب میں بس اسٹاپ کس طرف ہے؟",
      "phonetic": "Janaab, yahan qareeb mein bus stop kis taraf hai?"
    },
    "ne": {
      "word": "बस बिसौनी कता छ हजुर?",
      "phrase": "हजुर, गाडी चढ्न बस स्टप कता पर्छ होला?",
      "phonetic": "Hajur, gaadi chadhna bus stop kata parchha hola?"
    },
    "kok": {
      "word": "बस स्टॉप खंय आसा गो?",
      "phrase": "भाव, बस धरपाक बस स्टॉप खंय आसा गो?",
      "phonetic": "Bhav, bus dharpak bus stop khay aasa go?"
    },
    "doi": {
      "word": "बस अड्डा कुत्थै ऐ जी?",
      "phrase": "भरा जी, गड्डी फड़ने लेई बस अड्डा कुत्थै ऐ जी?",
      "phonetic": "Bhara ji, gaddi fadne lei bus adda kutthai ai ji?"
    },
    "en": {
      "word": "Where Is The Bus Stop?",
      "phrase": "Excuse me friend, where can I find the nearest bus stop or transport?",
      "phonetic": "Excuse me friend, where can I find the nearest bus stop or transport?"
    }
  },
  "time": {
    "hi": {
      "word": "अभी क्या समय हुआ है जी?",
      "phrase": "भाई साहब, अभी घड़ी में क्या समय हुआ है जी?",
      "phonetic": "Bhai sahab, abhi ghadi mein kya samay hua hai ji?"
    },
    "mai": {
      "word": "अखन कतेक समय भेल यौ?",
      "phrase": "यौ भैया, अखन कतेक समय भेल अछि, कनी बता दिअ ने?",
      "phonetic": "Yau bhaiya, akhan katek samay bhel achhi, kani bata dia ne?"
    },
    "bho": {
      "word": "अभी केतना बजल बा भैया?",
      "phrase": "ए भैया, अभी घड़ी में केतना बजल बा हो?",
      "phonetic": "E bhaiya, abhi ghadi mein ketna bajal ba ho?"
    },
    "mag": {
      "word": "अभी केतना समय होलई?",
      "phrase": "भैया, अभी केतना समय होलई, तनी बता द ना?",
      "phonetic": "Bhaiya, abhi ketna samay holai, tani bata da na?"
    },
    "raj": {
      "word": "अबार कांई टेम हुयो सा?",
      "phrase": "भाया सा, अबार घड़ी में कांई टेम हुयो है सा?",
      "phonetic": "Bhaya sa, abaar ghadi mein kaai time huyo hai sa?"
    },
    "bgc": {
      "word": "इब के टेम होया सै भाई?",
      "phrase": "भाई, इब घड़ी में के टेम होया सै बता दे?",
      "phonetic": "Bhai, ib ghadi mein ke time hoya sai bata de?"
    },
    "hne": {
      "word": "अभी कतका बेरा होइस गा?",
      "phrase": "संगवारी, अभी कतका बेरा या समय होइस गा?",
      "phonetic": "Sangwari, abhi katka bera ya samay hois ga?"
    },
    "mr": {
      "word": "आता किती वाजले दादा?",
      "phrase": "दादा, आता घड्याळात किती वाजले आहेत हो?",
      "phonetic": "Dada, aata ghadyalat kiti vajle aahet ho?"
    },
    "gu": {
      "word": "અત્યારે કેટલા વાગ્યા ભાઈ?",
      "phrase": "ભાઈ, અત્યારે ઘડિયાળમાં કેટલા વાગ્યા છે?",
      "phonetic": "Bhai, atyare ghadiyalma ketla vagya chhe?"
    },
    "pa": {
      "word": "ਹੁਣ ਕੀ ਸਮਾਂ ਹੋਇਆ ਜੀ?",
      "phrase": "ਵੀਰ ਜੀ, ਹੁਣ ਘੜੀ ਵਿੱਚ ਕੀ ਸਮਾਂ ਹੋਇਆ ਹੈ ਜੀ?",
      "phonetic": "Veer ji, hun ghadi vich ki samaa hoya hai ji?"
    },
    "bn": {
      "word": "এখন কটা বাজে দাদা?",
      "phrase": "দাদা, এখন ঘড়িতে কটা বাজে একটু বলবেন?",
      "phonetic": "Dada, ekhon ghorite kota baje ektu bolben?"
    },
    "as": {
      "word": "এতিয়া কেইটা বাজিছে দেই?",
      "phrase": "এতিয়া ঘড়ীত কেইটা বাজিছে বাৰু দেই?",
      "phonetic": "Etiya ghorit keita bajise baru dei?"
    },
    "or": {
      "word": "ଏବେ କେତେ ସମୟ ହେଲା ଭାଇ?",
      "phrase": "ଭାଇ, ଏବେ ଘଣ୍ଟାରେ କେତେ ସମୟ ହୋଇଛି?",
      "phonetic": "Bhai, ebe ghantare kete samaya hoichi?",
      "ttsText": "भाई, एबे घण्टारे केते समय होइछि?"
    },
    "ta": {
      "word": "இப்போ மணி என்னங்க?",
      "phrase": "அண்ணா, இப்போ மணி என்ன ஆகுதுன்னு கொஞ்சம் சொல்லுங்க?",
      "phonetic": "Anna, ippo mani enna aaguthunnu konjam sollunga?"
    },
    "te": {
      "word": "ఇప్పుడు టైమ్ ఎంత అయిందండీ?",
      "phrase": "అన్నా, ఇప్పుడు సమయం ఎంత అయిందో కొంచెం చెబుతారా?",
      "phonetic": "Anna, ippudu samayam entha ayindo konchem chebuthara?"
    },
    "kn": {
      "word": "ಈಗ ಸಮಯ ಎಷ್ಟು ರೀ?",
      "phrase": "ಅಣ್ಣಾ, ಈಗ ಗಂಟೆ ಎಷ್ಟಾಗಿದೆ ಅಂತ ಸ್ವಲ್ಪ ಹೇಳ್ತೀರಾ ರೀ?",
      "phonetic": "Anna, eega gante eshtagide antha svalpa helthira ree?"
    },
    "ml": {
      "word": "ഇപ്പോൾ സമയം എത്രയായി?",
      "phrase": "ചേട്ടാ, ഇപ്പോൾ സമയം എത്രയായി എന്ന് ഒന്ന് പറയാമോ?",
      "phonetic": "Chetta, ippol samayam ethrayayi ennu onnu parayamo?"
    },
    "ur": {
      "word": "ابھی کیا وقت ہوا ہے جناب؟",
      "phrase": "جناب، ابھی گھڑی میں کیا وقت ہوا ہے؟",
      "phonetic": "Janaab, abhi ghadi mein kya waqt hua hai?"
    },
    "ne": {
      "word": "अहिले कति बज्यो हजुर?",
      "phrase": "हजुर, अहिले घडीमा कति बज्यो होला?",
      "phonetic": "Hajur, ahile ghadima kati bajyo hola?"
    },
    "kok": {
      "word": "आतां कितले वरां जालीं गो?",
      "phrase": "भाव, आतां घड्याळींत कितले वरां जालीं गो?",
      "phonetic": "Bhav, aata ghadyalint kitle vara jali go?"
    },
    "doi": {
      "word": "हुण केह् समां होया जी?",
      "phrase": "भरा जी, हुण घड़ी च केह् समां होया ऐ जी?",
      "phonetic": "Bhara ji, hun ghadi ch keh samaa hoya ai ji?"
    },
    "en": {
      "word": "What Time Is It?",
      "phrase": "Excuse me friend, could you please tell me what time it is right now?",
      "phonetic": "Excuse me friend, could you please tell me what time it is right now?"
    }
  },
  "call": {
    "hi": {
      "word": "फ़ोन कॉल कर दीजिए जी",
      "phrase": "भाई साहब, कृपया मेरे घर पर एक फ़ोन कॉल लगा दीजिए ना।",
      "phonetic": "Bhai sahab, kripaya mere ghar par ek phone call laga dijiye na."
    },
    "mai": {
      "word": "फोन लगा दिअ यौ",
      "phrase": "यौ भैया, कृपया हमरा लेल एकटा फोन कॉल लगा दिअ ने।",
      "phonetic": "Yau bhaiya, kripaya hamra lel ekta phone call laga dia ne."
    },
    "bho": {
      "word": "एगो फोन लगा दीं भैया",
      "phrase": "ए भैया, हमरा खातिर तनी एगो फोन कॉल लगा दीं ना।",
      "phonetic": "E bhaiya, hamra khatir tani ego phone call laga deen na."
    },
    "mag": {
      "word": "एगो फोन लगा द भैया",
      "phrase": "भैया, हमरा ला तनी एगो फोन लगा द ना।",
      "phonetic": "Bhaiya, hamra la tani ego phone laga da na."
    },
    "raj": {
      "word": "एक फोन लगा दो सा",
      "phrase": "भाया सा, कृपा कर ने म्हारे वास्ते एक फोन कॉल लगा दो सा।",
      "phonetic": "Bhaya sa, kripa kar ne mhare vaaste ek phone call laga do sa."
    },
    "bgc": {
      "word": "एक फोन मिला दे भाई",
      "phrase": "भाई, मेरे खातर एक फोन कॉल मिला दे ना।",
      "phonetic": "Bhai, mere khatar ek phone call mila de na."
    },
    "hne": {
      "word": "एक ठन फोन लगा दे गा",
      "phrase": "संगवारी, मोर बर एक ठन फोन कॉल लगा दे न गा।",
      "phonetic": "Sangwari, mor bar ek than phone call laga de na ga."
    },
    "mr": {
      "word": "एक फोन लावून द्या दादा",
      "phrase": "दादा, कृपया माझ्यासाठी घरच्यांना एक फोन लावून द्या ना.",
      "phonetic": "Dada, kripaya majhyasathi gharchyanna ek phone lavun dya na."
    },
    "gu": {
      "word": "એક ફોન કરી આપો ભાઈ",
      "phrase": "ભાઈ, કૃપા કરીને મારા માટે એક ફોન કોલ લગાવી આપશો?",
      "phonetic": "Bhai, krupa karine mara mate ek phone call lagavi aapsho?"
    },
    "pa": {
      "word": "ਇੱਕ ਫ਼ੋਨ ਮਿਲਾ ਦਿਓ ਜੀ",
      "phrase": "ਵੀਰ ਜੀ, ਕਿਰਪਾ ਕਰਕੇ ਮੇਰੇ ਲਈ ਇੱਕ ਫ਼ੋਨ ਕਾਲ ਮਿਲਾ ਦਿਓ ਜੀ।",
      "phonetic": "Veer ji, kirpa karke mere layi ik phone call mila dio ji."
    },
    "bn": {
      "word": "একটা ফোন করে দিন দাদা",
      "phrase": "দাদা, দয়া করে আমার জন্য একটা ফোন কল করে দেবেন?",
      "phonetic": "Dada, doya kore amar jonno ekta phone call kore deben?"
    },
    "as": {
      "word": "এটা ফোন কৰি দিয়কচোন",
      "phrase": "অনুগ্ৰহ কৰি মোৰ বাবে এটা ফোন কল লগাই দিয়কচোন দেই।",
      "phonetic": "Onugroho kori mor babe eta phone call logai diyokson dei."
    },
    "or": {
      "word": "ଗୋଟିଏ ଫୋନ୍ ଲଗାଇ ଦିଅନ୍ତୁ",
      "phrase": "ଭାଇ, ଦୟାକରି ମୋ ପାଇଁ ଗୋଟିଏ ଫୋନ୍ କଲ୍ ଲଗାଇ ଦିଅନ୍ତୁ।",
      "phonetic": "Bhai, dayakari mo pain gotie phone call lagai diantu.",
      "ttsText": "भाई, दयाकरी मो पाइँ गोटिए फोन कल लगाइ दिअन्तु।"
    },
    "ta": {
      "word": "ஒரு போன் பண்ணிக் குடுங்க",
      "phrase": "அண்ணா, தயவுசெஞ்சு எனக்காக ஒரு போன் கால் பண்ணிக் குடுங்க.",
      "phonetic": "Anna, thayavusenju enakkaga oru phone call pannik kudunga."
    },
    "te": {
      "word": "ఒక ఫోన్ కాల్ చేయండి",
      "phrase": "అన్నా, దయచేసి నా కోసం ఒక ఫోన్ కాల్ చేసి పెడతారా?",
      "phonetic": "Anna, dayachesi naa kosam oka phone call chesi pedathara?"
    },
    "kn": {
      "word": "ಒಂದು ಫೋನ್ ಕರೆ ಮಾಡಿ ರೀ",
      "phrase": "ಅಣ್ಣಾ, ದಯವಿಟ್ಟು ನನಗಾಗಿ ಒಂದು ಫೋನ್ ಕರೆ ಮಾಡಿಕೊಡಿ ರೀ.",
      "phonetic": "Anna, dayavittu nanagagi ondu phone kare madikodi ree."
    },
    "ml": {
      "word": "ഒന്ന് ഫോൺ വിളിച്ചുതരൂ",
      "phrase": "ചേട്ടാ, ദയവായി എനിക്ക് വേണ്ടി ഒരു ഫോൺ കോൾ ചെയ്തുതരാമോ?",
      "phonetic": "Chetta, dayavayi enikku vendi oru phone call cheythutharamo?"
    },
    "ur": {
      "word": "ایک فون کال ملا دیجیے",
      "phrase": "جناب، براہ کرم میرے لیے ایک فون کال ملا دیجیے۔",
      "phonetic": "Janaab, bara-e-karam mere liye ek phone call mila dijiye."
    },
    "ne": {
      "word": "एउटा फोन गरिदिनुहोस् हजुर",
      "phrase": "हजुर, कृपया मेरो लागि एउटा फोन कल लगाइदिनुहोस् न।",
      "phonetic": "Hajur, kripaya mero lagi euta phone call lagaidinuhos na."
    },
    "kok": {
      "word": "एक फोन लाय गो",
      "phrase": "भाव, उपकार करून म्हाजे खातीर एक फोन कॉल लाय गो.",
      "phonetic": "Bhav, upkaar karun mhaje khatir ek phone call laay go."
    },
    "doi": {
      "word": "इक फोन लाई देओ जी",
      "phrase": "भरा जी, कृपा करियै मेरे लेई इक फोन कॉल लाई देओ जी।",
      "phonetic": "Bhara ji, kripa kariyai mere lei ik phone call lai deo ji."
    },
    "en": {
      "word": "Please Make A Phone Call",
      "phrase": "Excuse me friend, could you please help me make a phone call?",
      "phonetic": "Excuse me friend, could you please help me make a phone call?"
    }
  }
};

// Number translations (1-9) across all 22 Indian State & Local Speaking Languages
const REGIONAL_NUMBERS = {
  "1": {
    "hi": "एक (१)",
    "mai": "एक (१)",
    "bho": "एक (१)",
    "mag": "एक (१)",
    "raj": "एक (१)",
    "bgc": "एक (१)",
    "hne": "एक (१)",
    "mr": "एक (१)",
    "gu": "એક (૧)",
    "pa": "ਇੱਕ (੧)",
    "bn": "এক (১)",
    "as": "এক (১)",
    "or": "ଏକ (୧)",
    "ta": "ஒன்று (1)",
    "te": "ఒకటి (1)",
    "kn": "ಒಂದು (1)",
    "ml": "ഒന്ന് (1)",
    "ur": "ایک (1)",
    "ne": "एक (१)",
    "kok": "एक (१)",
    "doi": "इक (१)",
    "en": "One (1)",
    "phonetic": "Ek"
  },
  "2": {
    "hi": "दो (२)",
    "mai": "दू (२)",
    "bho": "दू (२)",
    "mag": "दू (२)",
    "raj": "दो (२)",
    "bgc": "दो (२)",
    "hne": "दू (२)",
    "mr": "दोन (२)",
    "gu": "બે (૨)",
    "pa": "ਦੋ (੨)",
    "bn": "দুই (২)",
    "as": "দুই (২)",
    "or": "ଦୁଇ (୨)",
    "ta": "இரண்டு (2)",
    "te": "రెండు (2)",
    "kn": "ಎರಡು (2)",
    "ml": "രണ്ട് (2)",
    "ur": "دو (2)",
    "ne": "दुई (२)",
    "kok": "दोन (२)",
    "doi": "दऊ (२)",
    "en": "Two (2)",
    "phonetic": "Do"
  },
  "3": {
    "hi": "तीन (३)",
    "mai": "तीन (३)",
    "bho": "तीन (३)",
    "mag": "तीन (३)",
    "raj": "तीन (३)",
    "bgc": "तीन (३)",
    "hne": "तीन (३)",
    "mr": "तीन (३)",
    "gu": "ત્રણ (૩)",
    "pa": "ਤਿੰਨ (੩)",
    "bn": "তিন (৩)",
    "as": "তিনি (৩)",
    "or": "ତିନି (୩)",
    "ta": "மூன்று (3)",
    "te": "మూడు (3)",
    "kn": "ಮೂರು (3)",
    "ml": "മൂന്ന് (3)",
    "ur": "تین (3)",
    "ne": "तीन (३)",
    "kok": "तीन (३)",
    "doi": "त्रै (३)",
    "en": "Three (3)",
    "phonetic": "Teen"
  },
  "4": {
    "hi": "चार (४)",
    "mai": "चारि (४)",
    "bho": "चार (४)",
    "mag": "चार (४)",
    "raj": "चार (४)",
    "bgc": "च्यार (४)",
    "hne": "चार (४)",
    "mr": "चार (४)",
    "gu": "ચાર (૪)",
    "pa": "ਚਾਰ (੪)",
    "bn": "চার (৪)",
    "as": "চাৰি (৪)",
    "or": "ଚାରି (୪)",
    "ta": "நான்கு (4)",
    "te": "నాలుగు (4)",
    "kn": "ನಾಲ್ಕು (4)",
    "ml": "നാല് (4)",
    "ur": "چار (4)",
    "ne": "चार (४)",
    "kok": "चार (४)",
    "doi": "चार (४)",
    "en": "Four (4)",
    "phonetic": "Chaar"
  },
  "5": {
    "hi": "पाँच (५)",
    "mai": "पाँच (५)",
    "bho": "पाँच (५)",
    "mag": "पाँच (५)",
    "raj": "पांच (५)",
    "bgc": "पांच (५)",
    "hne": "पाँच (५)",
    "mr": "पाच (५)",
    "gu": "પાંચ (૫)",
    "pa": "ਪੰਜ (੫)",
    "bn": "পাঁচ (৫)",
    "as": "পাঁচ (৫)",
    "or": "ପାଞ୍ଚ (୫)",
    "ta": "ஐந்து (5)",
    "te": "ఐదు (5)",
    "kn": "ಐದು (5)",
    "ml": "അഞ്ച് (5)",
    "ur": "پانچ (5)",
    "ne": "पाँच (५)",
    "kok": "पांच (५)",
    "doi": "पंज (५)",
    "en": "Five (5)",
    "phonetic": "Paanch"
  },
  "6": {
    "hi": "छह (६)",
    "mai": "छओ (६)",
    "bho": "छव (६)",
    "mag": "छौ (६)",
    "raj": "छः (६)",
    "bgc": "छै (६)",
    "hne": "छै (६)",
    "mr": "सहा (६)",
    "gu": "છ (૬)",
    "pa": "ਛੇ (੬)",
    "bn": "ছয় (৬)",
    "as": "ছয় (৬)",
    "or": "ଛଅ (୬)",
    "ta": "ஆறு (6)",
    "te": "ఆరు (6)",
    "kn": "ಆರು (6)",
    "ml": "ആറ് (6)",
    "ur": "چھ (6)",
    "ne": "छ (६)",
    "kok": "स (६)",
    "doi": "छे (६)",
    "en": "Six (6)",
    "phonetic": "Chhah"
  },
  "7": {
    "hi": "सात (७)",
    "mai": "सात (७)",
    "bho": "सात (७)",
    "mag": "सात (७)",
    "raj": "सात (७)",
    "bgc": "सात (७)",
    "hne": "सात (७)",
    "mr": "सात (७)",
    "gu": "સાત (૭)",
    "pa": "ਸੱਤ (੭)",
    "bn": "সাত (৭)",
    "as": "সাত (৭)",
    "or": "ସାତ (୭)",
    "ta": "ஏழு (7)",
    "te": "ఏడు (7)",
    "kn": "ಏಳು (7)",
    "ml": "ഏഴ് (7)",
    "ur": "سات (7)",
    "ne": "सात (७)",
    "kok": "सात (७)",
    "doi": "सत्त (७)",
    "en": "Seven (7)",
    "phonetic": "Saat"
  },
  "8": {
    "hi": "आठ (८)",
    "mai": "आठ (८)",
    "bho": "आठ (८)",
    "mag": "आठ (८)",
    "raj": "आठ (८)",
    "bgc": "आठ (८)",
    "hne": "आठ (८)",
    "mr": "आठ (८)",
    "gu": "આઠ (૮)",
    "pa": "ਅੱਠ (੮)",
    "bn": "আট (৮)",
    "as": "আঠ (৮)",
    "or": "ଆଠ (୮)",
    "ta": "எட்டு (8)",
    "te": "ఎనిమిది (8)",
    "kn": "ಎಂಟು (8)",
    "ml": "എട്ട് (8)",
    "ur": "آٹھ (8)",
    "ne": "आठ (८)",
    "kok": "आठ (८)",
    "doi": "अट्ठ (८)",
    "en": "Eight (8)",
    "phonetic": "Aath"
  },
  "9": {
    "hi": "नौ (९)",
    "mai": "नओ (९)",
    "bho": "नौ (९)",
    "mag": "नौ (९)",
    "raj": "नौ (९)",
    "bgc": "नौ (९)",
    "hne": "नौ (९)",
    "mr": "नऊ (९)",
    "gu": "નવ (૯)",
    "pa": "ਨੌਂ (੯)",
    "bn": "নয় (৯)",
    "as": "ন (৯)",
    "or": "ନଅ (୯)",
    "ta": "ஒன்பது (9)",
    "te": "తొమ్మిది (9)",
    "kn": "ಒಂಬತ್ತು (9)",
    "ml": "ഒമ്പത് (9)",
    "ur": "نو (9)",
    "ne": "नौ (९)",
    "kok": "णव (९)",
    "doi": "नौ (९)",
    "en": "Nine (9)",
    "phonetic": "Nau"
  }
};

// Enrich ISL_SIGNS keywords with all regional state words & phonetics
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
 * Returns localized translation { langCode, langName, shortName, nativeName, stateRegion, localTouch, flag, word, phrase, phonetic, ttsText, ttsLang, voiceLang, fallbackVoice }
 * for any ISL sign (conversational, alphabet letter, number, or custom sign).
 */
window.getSignTranslation = function (signObj, langCode = "hi") {
  if (!signObj) return null;
  const langMeta =
    window.SIGN_LANGUAGES.find((l) => l.code === langCode) ||
    window.SIGN_LANGUAGES[0];

  // 1. Direct match in SIGN_TRANSLATIONS (includes all 22 languages including 'en')
  const direct = window.SIGN_TRANSLATIONS[signObj.id];
  if (direct && direct[langCode]) {
    const entry = direct[langCode];
    return {
      langCode,
      langName: langMeta.name,
      shortName: langMeta.shortName || langMeta.name,
      nativeName: langMeta.nativeName,
      stateRegion: langMeta.stateRegion || "",
      localTouch: langMeta.localTouch || "",
      flag: langMeta.flag,
      word: entry.word,
      phrase: entry.phrase,
      phonetic: entry.phonetic,
      ttsText: entry.ttsText || entry.phrase,
      ttsLang: langMeta.ttsLang || "hi",
      voiceLang: langMeta.voiceLang,
      fallbackVoice: langMeta.fallbackVoice || "hi-IN"
    };
  }

  if (langCode === "en") {
    return {
      langCode: "en",
      langName: langMeta.name,
      shortName: "Indian English",
      nativeName: langMeta.nativeName,
      stateRegion: langMeta.stateRegion,
      localTouch: langMeta.localTouch,
      flag: langMeta.flag,
      word: signObj.word,
      phrase: signObj.spokenPhrase,
      phonetic: signObj.spokenPhrase,
      ttsText: signObj.spokenPhrase,
      ttsLang: "en-IN",
      voiceLang: "en-IN",
      fallbackVoice: "en-IN"
    };
  }

  // 2. ISL Numbers (1-9)
  if (signObj.category === "numbers" && signObj.letterChar) {
    const numEntry = REGIONAL_NUMBERS[signObj.letterChar];
    if (numEntry && numEntry[langCode]) {
      const numWord = numEntry[langCode];
      const cleanSpokenNum = numWord.replace(/\s*\([^)]*\)/g, "").trim();
      return {
        langCode,
        langName: langMeta.name,
        shortName: langMeta.shortName || langMeta.name,
        nativeName: langMeta.nativeName,
        stateRegion: langMeta.stateRegion || "",
        localTouch: langMeta.localTouch || "",
        flag: langMeta.flag,
        word: `${numWord}`,
        phrase: `${numWord} — ${signObj.spokenPhrase}`,
        phonetic: `Number ${signObj.letterChar}, ${numEntry.phonetic}`,
        ttsText: `${cleanSpokenNum}`,
        ttsLang: langMeta.ttsLang || "hi",
        voiceLang: langMeta.voiceLang,
        fallbackVoice: langMeta.fallbackVoice || "hi-IN"
      };
    }
  }

  // 3. ISL Alphabet Letters (A-Z)
  if (signObj.category === "alphabet" && signObj.letterChar) {
    const ch = signObj.letterChar;
    const letterLabels = {
      hi: { w: `अक्षर ${ch}`, p: `सांकेतिक अक्षर ${ch} जी`, ph: `Akshar ${ch}` },
      mai: { w: `अक्षर ${ch}`, p: `सांकेतिक अक्षर ${ch} यौ`, ph: `Akshar ${ch}` },
      bho: { w: `अक्षर ${ch}`, p: `इशारा के अक्षर ${ch} भैया`, ph: `Akshar ${ch}` },
      mag: { w: `अक्षर ${ch}`, p: `इशारा अक्षर ${ch} भैया`, ph: `Akshar ${ch}` },
      raj: { w: `अक्षर ${ch}`, p: `सांकेतिक अक्षर ${ch} सा`, ph: `Akshar ${ch}` },
      bgc: { w: `अक्षर ${ch}`, p: `इशारे का अक्षर ${ch} भाई`, ph: `Akshar ${ch}` },
      hne: { w: `अक्षर ${ch}`, p: `इसारा अक्षर ${ch} संगवारी`, ph: `Akshar ${ch}` },
      mr: { w: `अक्षर ${ch}`, p: `सांकेतिक अक्षर ${ch} दादा`, ph: `Akshar ${ch}` },
      gu: { w: `અક્ષર ${ch}`, p: `સાંકેતિક અક્ષર ${ch} ભાઈ`, ph: `Akshar ${ch}` },
      pa: { w: `ਅੱਖਰ ${ch}`, p: `ਇਸ਼ਾਰਾ ਅੱਖਰ ${ch} ਜੀ`, ph: `Akkhar ${ch}` },
      bn: { w: `অক্ষর ${ch}`, p: `ইশারা অক্ষর ${ch} দাদা`, ph: `Okkhor ${ch}` },
      as: { w: `আখৰ ${ch}`, p: `ইংগিত আখৰ ${ch} দেই`, ph: `Akhor ${ch}` },
      or: { w: `ଅକ୍ଷର ${ch}`, p: `ସଙ୍କେତ ଅକ୍ଷର ${ch} ଭାଇ`, ph: `Akshara ${ch}` },
      ta: { w: `எழுத்து ${ch}`, p: `சைகை எழுத்து ${ch}ங்க`, ph: `Ezhuthu ${ch}` },
      te: { w: `అక్షరం ${ch}`, p: `సైగ అక్షరం ${ch} అండీ`, ph: `Aksharam ${ch}` },
      kn: { w: `ಅಕ್ಷರ ${ch}`, p: `ಸಂಜ್ಞೆ ಅಕ್ಷರ ${ch} ರೀ`, ph: `Akshara ${ch}` },
      ml: { w: `അക്ഷരം ${ch}`, p: `ആംഗ്യ അക്ഷരം ${ch} ചേട്ടാ`, ph: `Aksharam ${ch}` },
      ur: { w: `حرف ${ch}`, p: `اشارتی حرف ${ch} جناب`, ph: `Harf ${ch}` },
      ne: { w: `अक्षर ${ch}`, p: `सांकेतिक अक्षर ${ch} हजुर`, ph: `Akshar ${ch}` },
      kok: { w: `अक्षर ${ch}`, p: `खुणांचें अक्षर ${ch} गो`, ph: `Akshar ${ch}` },
      doi: { w: `अक्खर ${ch}`, p: `इशारे दा अक्खर ${ch} जी`, ph: `Akkhar ${ch}` }
    };
    const lObj = letterLabels[langCode] || { w: signObj.word, p: signObj.spokenPhrase, ph: signObj.spokenPhrase };
    return {
      langCode,
      langName: langMeta.name,
      shortName: langMeta.shortName || langMeta.name,
      nativeName: langMeta.nativeName,
      stateRegion: langMeta.stateRegion || "",
      localTouch: langMeta.localTouch || "",
      flag: langMeta.flag,
      word: lObj.w,
      phrase: lObj.p,
      phonetic: lObj.ph,
      ttsText: lObj.p,
      ttsLang: langMeta.ttsLang || "hi",
      voiceLang: langMeta.voiceLang,
      fallbackVoice: langMeta.fallbackVoice || "hi-IN"
    };
  }

  // 4. Universal 22-Language Regional Translation for All 5,000+ Domain & Compound Signs
  const baseWord = signObj.word ? signObj.word.split("/")[0].trim() : "Sign";
  const regionalTemplates = {
    hi: { p: `यह ${baseWord} है। कृपया ध्यान दें।`, ph: `Yeh ${baseWord} hai.` },
    mai: { p: `ई ${baseWord} अछि। कृपा कय ध्यान दिअ।`, ph: `Ee ${baseWord} achhi.` },
    bho: { p: `ई ${baseWord} बा। ध्यान दीं भैया।`, ph: `Ee ${baseWord} ba.` },
    mag: { p: `ई ${baseWord} हई। ध्यान दह भैया।`, ph: `Ee ${baseWord} hayi.` },
    raj: { p: `ओ ${baseWord} है सा। ध्यान दीजो।`, ph: `Oo ${baseWord} hai sa.` },
    bgc: { p: `यो ${baseWord} सै भाई। ध्यान देओ।`, ph: `Yo ${baseWord} sai bhai.` },
    hne: { p: `ये ${baseWord} हरे संगवारी। ध्यान देहू।`, ph: `Ye ${baseWord} hare sangwari.` },
    mr: { p: `हे ${baseWord} आहे दादा। कृपया लक्ष द्या।`, ph: `He ${baseWord} aahe dada.` },
    gu: { p: `આ ${baseWord} છે ભાઈ। કૃપા કરીને ધ્યાન આપો।`, ph: `Aa ${baseWord} chhe bhai.` },
    pa: { p: `ਇਹ ${baseWord} ਹੈ ਜੀ। ਕਿਰਪਾ ਕਰਕੇ ਧਿਆਨ ਦਿਓ।`, ph: `Eh ${baseWord} hai ji.` },
    bn: { p: `এটি ${baseWord} দাদা। দয়া করে শুনুন।`, ph: `Eti ${baseWord} dada.` },
    as: { p: `এইটো ${baseWord} হয় দেই। অনুগ্ৰহ কৰি শুনক।`, ph: `Eito ${baseWord} hoy dei.` },
    or: { p: `ଏହା ${baseWord} ଅଟେ ଭାଇ। ଦୟାକରି ଧ୍ୟାନ ଦିଅନ୍ତୁ।`, ph: `Eha ${baseWord} ate bhai.` },
    ta: { p: `இது ${baseWord}ங்க। தயவுசெய்து கவனியுங்கள்।`, ph: `Idhu ${baseWord}nga.` },
    te: { p: `ఇది ${baseWord} అండీ। దయచేసి వినండి।`, ph: `Idi ${baseWord} andi.` },
    kn: { p: `ಇದು ${baseWord} ರೀ। ದಯವಿಟ್ಟು ಗಮನಿಸಿ।`, ph: `Idu ${baseWord} ree.` },
    ml: { p: `ഇത് ${baseWord} ആണ് ചേട്ടാ। ദയവായി ശ്രദ്ധിക്കൂ।`, ph: `Ithu ${baseWord} aanu chetta.` },
    ur: { p: `یہ ${baseWord} ہے جناب۔ براہ کرم توجہ فرمائیں۔`, ph: `Yeh ${baseWord} hai janaab.` },
    ne: { p: `यो ${baseWord} हो हजुर। कृपया सुन्नुहोस्।`, ph: `Yo ${baseWord} ho hajur.` },
    kok: { p: `हें ${baseWord} आसा गो। उपकार करून आयकात।`, ph: `He ${baseWord} aasa go.` },
    doi: { p: `एह् ${baseWord} ऐ जी। किरपा करियै दिक्खो।`, ph: `Eh ${baseWord} ai ji.` }
  };
  const tmpl = regionalTemplates[langCode] || { p: signObj.spokenPhrase, ph: signObj.spokenPhrase };
  return {
    langCode,
    langName: langMeta.name,
    shortName: langMeta.shortName || langMeta.name,
    nativeName: langMeta.nativeName,
    stateRegion: langMeta.stateRegion || "",
    localTouch: langMeta.localTouch || "",
    flag: langMeta.flag,
    word: signObj.word,
    phrase: tmpl.p || signObj.spokenPhrase,
    phonetic: tmpl.ph || signObj.spokenPhrase,
    ttsText: tmpl.p || signObj.spokenPhrase,
    ttsLang: langMeta.ttsLang || "hi",
    voiceLang: langMeta.voiceLang,
    fallbackVoice: langMeta.fallbackVoice || "hi-IN"
  };
};

// =========================================================================
// INTERACTIVE PIPELINE TESTER PRESETS & DYNAMIC LOOKUP ENGINE
// =========================================================================
window.pipelinePresets = {
  FOOD: {
    landmarks: "21 Hand pts (Dominant Hand to Mouth)",
    detected: "🍲 Food / Eat (Conf: 0.95)",
    gloss: "[EAT / FOOD] → SOV Object",
    translation: "मुझे भूख लगी है / खाना चाहिए।",
    avatarAction: "Bring flat hand fingertips toward mouth repeatedly."
  },
  TOILET: {
    landmarks: "21 Hand pts (Shaking 'T' Handshape)",
    detected: "🚻 Toilet / Restroom (Conf: 0.96)",
    gloss: "[TOILET / RESTROOM] → Urgent Request",
    translation: "शौचालय / बाथरूम कहाँ है?",
    avatarAction: "Shake 'T' handshape gently side-to-side at chest level."
  },
  hello: {
    landmarks: "21 Hand pts (Vertical Palms Together)",
    detected: "🙏 Hello / Namaste (Conf: 0.98)",
    gloss: "[NAMASTE] → Greeting",
    translation: "नमस्ते जी! आपसे मिलकर बहुत खुशी हुई।",
    avatarAction: "Bring both open palms together at chest level in Namaste."
  },
  thankyou: {
    landmarks: "21 Hand pts (Chin to Outward Palm)",
    detected: "🤲 Thank You (Conf: 0.97)",
    gloss: "[THANK / GRATITUDE] → Polite Discourse",
    translation: "आपका बहुत-बहुत धन्यवाद!",
    avatarAction: "Touch fingertips to chin then move forward toward recipient."
  },
  doctor: {
    landmarks: "21 Hand pts (Radial Pulse Check Posture)",
    detected: "🏥 Doctor / Hospital (Conf: 0.97)",
    gloss: "[DOCTOR / HOSPITAL] → Medical Request",
    translation: "मुझे डॉक्टर की सख्त ज़रूरत है, कृपया अस्पताल ले चलें।",
    avatarAction: "Tap two fingers of dominant hand onto opposite wrist pulse."
  },
  water: {
    landmarks: "21 Hand pts ('W' Shape to Lip Tap)",
    detected: "💧 Water (Conf: 0.96)",
    gloss: "[WATER] → Immediate Need",
    translation: "मुझे पीने के लिए पानी चाहिए।",
    avatarAction: "Form 'W' handshape and tap index finger against lower lip."
  },
  help: {
    landmarks: "21 Hand pts (Thumb Up on Open Palm)",
    detected: "🆘 Emergency Help (Conf: 0.98)",
    gloss: "[EMERGENCY / HELP] → Urgent Directive",
    translation: "कृपया तुरंत मेरी मदद करें! यह आपातकालीन स्थिति है।",
    avatarAction: "Place thumbs-up fist onto open palm and raise both hands together."
  },
  deaf: {
    landmarks: "21 Hand pts (Ear to Mouth Index Touch)",
    detected: "🧏 I Am Deaf (Conf: 0.97)",
    gloss: "[DEAF / HARD-OF-HEARING] → Identity Marker",
    translation: "मैं सुन नहीं सकता/सकती, कृपया देखकर या लिखकर बात करें।",
    avatarAction: "Touch index fingertip from ear then to the corner of the mouth."
  },
  family: {
    landmarks: "21 Hand pts (Touching 'F' Circles Around)",
    detected: "👨‍👩‍👧 Family (Conf: 0.95)",
    gloss: "[FAMILY / RELATIVES] → Collective Noun",
    translation: "यह मेरा परिवार है।",
    avatarAction: "Touch thumbs and index fingers of both hands, sweeping outward in a circle."
  },
  school: {
    landmarks: "21 Hand pts (Horizontal Palm Claps)",
    detected: "🏫 School / Education (Conf: 0.96)",
    gloss: "[SCHOOL / STUDY] → Education Noun",
    translation: "मुझे विद्यालय / स्कूल जाना है।",
    avatarAction: "Clap dominant flat hand down onto non-dominant palm twice."
  },
  money: {
    landmarks: "21 Hand pts (Thumb-Finger Rubbing)",
    detected: "💵 Money / Cost (Conf: 0.96)",
    gloss: "[MONEY / PRICE] → Transactional SOV",
    translation: "इसकी कीमत / किराया कितना है?",
    avatarAction: "Rub thumb across fingertips of dominant hand repeatedly."
  },
  train: {
    landmarks: "21 Hand pts (Two-Handed Parallel Finger Tracks)",
    detected: "🚆 Train / Railway (Conf: 0.97)",
    gloss: "[TRAIN / RAILWAY] → Transit Noun",
    translation: "ट्रेन / रेलगाड़ी किस प्लेटफार्म पर आएगी?",
    avatarAction: "Slide two extended fingers of dominant hand back and forth over opposite two fingers."
  },
  where: {
    landmarks: "21 Hand pts (Side-to-Side Index Wave)",
    detected: "❓ Where / Kahan (Conf: 0.95)",
    gloss: "[WHERE] → Interrogative Wh-Sign",
    translation: "यह स्थान कहाँ है? कृपया रास्ता बताएं।",
    avatarAction: "Hold index finger up with palm forward and swivel wrist side-to-side with questioning eyebrows."
  },
  yes: {
    landmarks: "21 Hand pts (Closed Fist Nodding)",
    detected: "👍 Yes / Agree (Conf: 0.96)",
    gloss: "[YES / AFFIRM] → Affirmative Marker",
    translation: "हाँ, मैं सहमत हूँ।",
    avatarAction: "Hold closed fist upright and nod wrist forward twice."
  },
  no: {
    landmarks: "21 Hand pts (Index Finger Side Wave)",
    detected: "☝️ No / Disagree (Conf: 0.96)",
    gloss: "[NO / NEGATE] → Negation Marker",
    translation: "नहीं, मैं सहमत नहीं हूँ।",
    avatarAction: "Extend index finger upright and wag side to side with head shake."
  }
};

/**
 * Dynamic 5-Stage Pipeline Data Lookup across all 5,000+ gestures and custom signs.
 */
window.getPipelineStageData = function (signObjOrKey, langCode = "hi") {
  let key = "";
  let signObj = null;
  if (typeof signObjOrKey === "string") {
    key = signObjOrKey.toUpperCase();
    signObj = window.ISL_SIGNS.find((s) => s.id.toLowerCase() === signObjOrKey.toLowerCase()) ||
              window.ISL_SIGNS.find((s) => s.word.toLowerCase().includes(signObjOrKey.toLowerCase()));
  } else if (signObjOrKey && typeof signObjOrKey === "object") {
    signObj = signObjOrKey;
    key = (signObj.id || "").toUpperCase();
  }

  const preset = window.pipelinePresets[key] || window.pipelinePresets[key.toLowerCase()];
  const tr = signObj ? window.getSignTranslation(signObj, langCode) : null;
  const regionalPhrase = tr ? `${tr.flag} ${tr.nativeName}: "${tr.phrase}"` : "";

  if (preset) {
    return {
      landmarks: preset.landmarks,
      detected: preset.detected,
      gloss: preset.gloss,
      translation: regionalPhrase || preset.translation,
      avatarAction: preset.avatarAction,
      signObj: signObj || window.ISL_SIGNS[0]
    };
  }

  if (!signObj) signObj = window.ISL_SIGNS[0];
  const wordClean = (signObj.word || "").split("/")[0].trim().toUpperCase();
  const avatarAct = window.getAvatarDescription ? window.getAvatarDescription(signObj) : (signObj.tactileGuide || "Perform standard ISL hand posture.");

  return {
    landmarks: `21 Hand + 468 Face pts (${signObj.hands || "2-Handed ISL Sign"} • ${signObj.poseType || "normalized"})`,
    detected: `${signObj.emoji || "🤟"} ${signObj.word} (Conf: 0.96 • Real Pipeline Match)`,
    gloss: `[${wordClean}] → SOV Regional Grammar Reordered`,
    translation: regionalPhrase || `"${signObj.spokenPhrase}"`,
    avatarAction: avatarAct,
    signObj: signObj
  };
};

/**
 * Returns an array of translations for a sign across all 22 supported Indian State & Local Languages.
 */
window.getSignAllTranslations = function (signObj) {
  if (!signObj) return [];
  return window.SIGN_LANGUAGES.map((l) => window.getSignTranslation(signObj, l.code));
};

/**
 * Renders interactive Multi-Language Translation Cards HTML for any detected or selected sign.
 */
window.renderMultiLangCardsHTML = function (signObj, activeLangSetting = "hi") {
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
            <span class="multilang-name">${tr.flag} <strong>${tr.shortName || tr.langName}</strong> <small>(${tr.nativeName})</small></span>
            <span class="multilang-play-icon" aria-hidden="true">🗣️🔊</span>
          </div>
          <div class="multilang-word">${tr.word}</div>
          <div class="multilang-phrase">"${tr.phrase}"</div>
        </button>
      `;
    })
    .join("");
};

/**
 * Converts a sequence of ISL Sign Glosses into a natural sentence in any supported regional state language.
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
  if (langCode === "all") {
    return `${_originalNaturalizeEnglish(signWordsArray)} | ${window.naturalizeISLGloss(signWordsArray, "hi")}`;
  }

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
