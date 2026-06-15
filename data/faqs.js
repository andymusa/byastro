// Rule-based FAQ knowledge for the Astro chatbot.
// Each entry: keywords to match + a warm answer. Matched by keyword overlap.
export const faqs = [
  {
    id: "adopt-vs-foster",
    keywords: ["difference", "adopt", "foster", "adopting", "fostering", "vs", "versus"],
    question: "What's the difference between adopting and fostering?",
    answer:
      "Great question! 🐾 Adopting means a dog becomes yours forever — your couch is officially their couch. Fostering means you give a dog a temporary loving home until they find their forever family. Fostering is a fantastic way to help if you're not ready to commit fur-ever, and it literally saves lives by freeing up shelter space!",
  },
  {
    id: "cost",
    keywords: ["cost", "price", "fee", "much", "money", "expensive", "afford", "payment"],
    question: "How much does it cost to adopt?",
    answer:
      "Each shelter sets its own adoption fees, so the best thing to do is contact the shelter directly for more info. 🐾 You'll find their Instagram, phone number, and email right on each dog's profile and in the shelters section — just reach out and they'll happily walk you through the details.",
  },
  {
    id: "documents",
    keywords: ["document", "documents", "papers", "paperwork", "id", "need", "require", "requirements"],
    question: "What documents do I need?",
    answer:
      "Not too much, I promise! 📋 Most shelters ask for a copy of your Emirates ID, proof of address (like a tenancy contract or DEWA bill), and sometimes a quick home check or landlord approval if you rent. Bring those and you're well on your way to a wagging tail.",
  },
  {
    id: "apartment",
    keywords: ["apartment", "flat", "small", "space", "tower", "building", "live"],
    question: "Can I adopt if I live in an apartment?",
    answer:
      "Absolutely! 🏢 Plenty of wonderful dogs thrive in apartments — especially smaller breeds and calmer adults. What matters most is daily walks and your love, not square footage. Just double-check your building allows pets (some UAE towers have rules), and we'll help you find a pup that fits your space perfectly.",
  },
  {
    id: "vaccinated",
    keywords: ["vaccinated", "vaccine", "vaccinations", "shots", "healthy", "health", "vet", "neutered", "spayed"],
    question: "Are the dogs vaccinated?",
    answer:
      "Yes! 💉 Almost all our dogs are vaccinated, microchipped, and spayed/neutered before adoption. Very young puppies may still be finishing their shots — you'll always see each dog's vaccination and neuter status right on their profile, so there are no surprises.",
  },
  {
    id: "transport",
    keywords: ["transport", "transit", "travel", "pick", "pickup", "collect", "drive", "deliver", "move", "bring"],
    question: "How do I transport a dog within the UAE?",
    answer:
      "Bringing your new friend home is easier than you'd think! 🚗 Many shelters offer or arrange transport across the emirates, sometimes for a small fee. You can also drive over yourself with a crate or seatbelt harness. Just chat with the shelter — they do this all the time and will sort the safest option for your pup.",
  },
  {
    id: "other-pets",
    keywords: ["other", "pet", "pets", "cat", "dog", "resident", "along", "introduce", "existing"],
    question: "What if the dog doesn't get along with my other pet?",
    answer:
      "Totally understandable worry! 🐶🐱 Each profile notes whether a dog is good with other dogs and kids. Shelters strongly recommend a slow, supervised meet-and-greet first — many even let your current pet visit. And good fosters/shelters offer support and advice during the settling-in period so everyone becomes one happy pack.",
  },
  {
    id: "process-time",
    keywords: ["long", "time", "process", "take", "wait", "how", "soon", "quick", "approval"],
    question: "How long does the adoption process take?",
    answer:
      "It can be wonderfully quick! ⏱️ Once you've connected with a shelter, a typical process — application, a chat or home check, and meeting your match — takes anywhere from a few days to a couple of weeks. Fostering can sometimes happen even faster. The shelter will guide you through every step.",
  },
  {
    id: "first-time",
    keywords: ["first", "beginner", "never", "experience", "ready", "should", "right"],
    question: "I've never had a dog before — is that okay?",
    answer:
      "More than okay — it's exciting! 🎉 Everyone starts somewhere, and shelters are brilliant at matching first-timers with easygoing, forgiving dogs. Look for profiles tagged 'mellow', 'easygoing', or 'great on lead'. Fostering first is also a lovely low-pressure way to learn the ropes.",
  },
  {
    id: "kids",
    keywords: ["kid", "kids", "child", "children", "baby", "family", "safe"],
    question: "Are these dogs safe around kids?",
    answer:
      "Many of them are wonderful with little humans! 👶 Every dog's profile clearly shows whether they're good with kids. Always supervise early introductions and give the dog calm space, and you'll be building a beautiful kid-and-dog friendship in no time.",
  },
  {
    id: "why-shelter-long",
    keywords: ["long", "shelter", "months", "years", "waiting", "why", "old", "overlooked"],
    question: "Why have some dogs been in the shelter so long?",
    answer:
      "It breaks my heart a little. 💛 Often it's nothing to do with the dog — bigger dogs, black dogs, and seniors simply get overlooked, even though they make the most loyal companions. That little 'in shelter for X months' badge is there to remind us: these patient pups deserve a home most of all.",
  },
  {
    id: "supplies",
    keywords: ["supplies", "need", "buy", "food", "bed", "stuff", "prepare", "before"],
    question: "What do I need to prepare before bringing a dog home?",
    answer:
      "A few cozy basics! 🦴 Food and water bowls, a comfy bed, a lead and harness, some food (ask the shelter what they've been eating), and a few toys. A quiet corner to call their own helps them settle. The shelter will give you a starter checklist for your specific pup.",
  },
  {
    id: "return",
    keywords: ["return", "give", "back", "work", "out", "doesnt", "change", "mind"],
    question: "What if it doesn't work out?",
    answer:
      "Please don't worry — reputable UAE shelters never want a dog back on the street. 🏡 Almost all ask that you return the dog to them if things don't work out, no judgement. They'd always rather help you through a rough patch first, though, so reach out early and they'll support you.",
  },
  {
    id: "meet-dogs",
    keywords: ["meet", "where", "see", "visit", "person", "adoption day", "adoption days", "volunteer", "volunteering", "come", "place", "location"],
    question: "Where can I meet these dogs?",
    answer:
      "The best way is to visit each shelter's page! 🐶 Shelters usually host weekly adoption days and volunteering sessions where you can come meet the dogs in person, spend time with them, and find the one who steals your heart. Check a shelter's Instagram or give them a call to find out when their next one is.",
  },
  {
    id: "how-to-start",
    keywords: ["start", "begin", "how", "browse", "find", "where", "first", "step"],
    question: "How do I get started?",
    answer:
      "So happy you asked! 🐕 Just head to the Browse Dogs page, use the filters to find a pup that fits your home and lifestyle, then hit 'Adopt Me' or 'Foster Me' on their profile to connect straight with their shelter. Take your time — your perfect match is waiting.",
  },
  {
    id: "what-is-byastro",
    keywords: ["byastro", "astro", "site", "website", "who", "what", "this", "about"],
    question: "What is ByAstro?",
    answer:
      "I'm so glad you asked — and hi, I'm Astro! ⭐ ByAstro brings every adoptable and fosterable shelter dog in the UAE into one warm little corner of the internet, instead of scattered across Instagram pages. It's built in loving memory of a very good boy named Astro, so every dog here gets a real chance to be seen.",
  },
];

export const greeting =
  "Hi there, I'm Astro! ⭐🐾 I'm here to help you find your new best friend. Ask me anything about adopting or fostering a dog in the UAE!";

export const fallback =
  "Great question! 🐾 For that one I'd recommend reaching out to the shelter directly — they'll know best.";
