export const shelters = [
  {
    id: "sdc-uaq",
    name: "Stray Dogs Center UAQ",
    short: "Stray Dogs Center UAQ",
    location: "Umm Al Quwain",
    emoji: "🏜️",
    instagram: "https://www.instagram.com/straydogscenter",
    phone: "+971502352616",
    phoneLabel: "+971 50 235 2616",
    whatsapp: "https://wa.me/971502352616",
    email: "operations@sdc-uaq.com",
    blurb:
      "The UAE's largest no-kill shelter, home to hundreds of desert dogs waiting for their forever couch.",
  },
  {
    id: "awad",
    name: "Abu Dhabi Animal Shelter",
    short: "Abu Dhabi Animal Shelter",
    location: "Abu Dhabi",
    emoji: "🏡",
    instagram: "https://www.instagram.com/abudhabianimalshelter",
    phone: "+97128858100",
    phoneLabel: "+971 2 885 8100",
    whatsapp: null,
    email: "info@abudhabianimalshelter.com",
    blurb:
      "A community-funded shelter caring for abandoned and injured dogs across the capital.",
  },
  {
    id: "k9-dubai",
    name: "K9 Friends",
    short: "K9 Friends",
    location: "Dubai",
    emoji: "🦴",
    instagram: "https://www.instagram.com/k9friendsdubai",
    phone: "+97148878739",
    phoneLabel: "+971 4 887 8739",
    whatsapp: null,
    email: "info@k9friends.com",
    blurb:
      "One of Dubai's oldest charities, rescuing and rehoming abandoned dogs since 1989.",
  },
  {
    id: "rak-paws",
    name: "RAK Animal Welfare Centre",
    short: "RAK Animal Welfare",
    location: "Ras Al Khaimah",
    emoji: "⛰️",
    instagram: "https://www.instagram.com/rakawc",
    phone: "+971563576013",
    phoneLabel: "+971 56 357 6013",
    whatsapp: "https://wa.me/971563576013",
    email: "rakawc@psd.rak.ae",
    blurb:
      "A volunteer-run centre rescuing mountain and beach dogs across the northern emirates.",
  },
];

export const shelterById = (id) => shelters.find((s) => s.id === id);
