// Real rescue dogs imported from RAK Animal Welfare Centre
// (rakawc.com/pages/adoption-services/10). Each dog's name, gender, breed,
// date of birth, health status and photo are taken from that dog's entry in
// the centre's adoption gallery. `ageLabel` is computed from the date of birth
// (relative to import date). RAK lists "good with kids/dogs/cats" as nuanced,
// conditional notes ("grown up kids", "yes/need to socialize") rather than a
// plain yes/no, so those are left unknown (UI shows "Ask shelter") to avoid
// asserting something the source does not. Size is not published by RAK, so it
// is estimated from the breed. The Foster page (rakawc.com/pages/Foster/4) is
// informational only and lists no individual dogs.
// Shape matches the reusable dog record in data/dogs.js.
export const rakawcDogs = [
  {"id": "rak-ginger", "name": "Ginger", "gender": "Male", "breed": "Mix Breed", "size": "medium", "sizeLabel": "Medium", "ageGroup": "adult", "ageLabel": "3 years 11 months", "ageMonths": 47, "dob": "12/07/2022", "shelterId": "rak-paws", "availableFor": "adoption", "vaccinated": true, "neutered": true, "photos": ["https://rakawc.com/uploads/gallery_images/2026-06-14-11-26-03h36t0undf1.jpg"]},
  {"id": "rak-dorina", "name": "Dorina", "gender": "Female", "breed": "Golden Retriever Mix", "size": "large", "sizeLabel": "Large", "ageGroup": "young", "ageLabel": "1 year", "ageMonths": 12, "dob": "12/06/2025", "shelterId": "rak-paws", "availableFor": "adoption", "vaccinated": true, "neutered": true, "photos": ["https://rakawc.com/uploads/gallery_images/2026-06-11-03-48-555kbszuhqai.jpg"]},
  {"id": "rak-tavira", "name": "Tavira", "gender": "Female", "breed": "Golden Retriever Mix", "size": "large", "sizeLabel": "Large", "ageGroup": "young", "ageLabel": "1 year", "ageMonths": 12, "dob": "12/06/2025", "shelterId": "rak-paws", "availableFor": "adoption", "vaccinated": true, "neutered": true, "photos": ["https://rakawc.com/uploads/gallery_images/2026-06-11-03-38-27rv1ysf2wpj.jpg"]},
  {"id": "rak-niva", "name": "Niva", "gender": "Female", "breed": "Terrier Mix", "size": "small", "sizeLabel": "Small/Medium", "ageGroup": "adult", "ageLabel": "4 years", "ageMonths": 48, "dob": "01/06/2022", "shelterId": "rak-paws", "availableFor": "adoption", "vaccinated": true, "neutered": true, "photos": ["https://rakawc.com/uploads/gallery_images/2026-06-11-03-22-33y53db601km.jpg"]},
  {"id": "rak-aanie", "name": "Aanie", "gender": "Female", "breed": "Mix Breed", "size": "medium", "sizeLabel": "Medium", "ageGroup": "senior", "ageLabel": "7 years 5 months", "ageMonths": 89, "dob": "01/01/2019", "shelterId": "rak-paws", "availableFor": "adoption", "vaccinated": true, "neutered": true, "photos": ["https://rakawc.com/uploads/gallery_images/2026-06-11-02-50-09cazv41nqy6.jpg"]},
  {"id": "rak-archie", "name": "Archie", "gender": "Male", "breed": "ShihTzu", "size": "small", "sizeLabel": "Small", "ageGroup": "adult", "ageLabel": "3 years 11 months", "ageMonths": 47, "dob": "19/06/2022", "shelterId": "rak-paws", "availableFor": "adoption", "vaccinated": true, "neutered": true, "photos": ["https://rakawc.com/uploads/gallery_images/2026-06-11-02-11-41s84w6tn357.jpg"]},
  {"id": "rak-fluffball", "name": "Fluffball", "gender": "Male", "breed": "Pomeranian", "size": "small", "sizeLabel": "Small", "ageGroup": "adult", "ageLabel": "2 years", "ageMonths": 24, "dob": "12/06/2024", "shelterId": "rak-paws", "availableFor": "adoption", "vaccinated": true, "neutered": true, "photos": ["https://rakawc.com/uploads/gallery_images/2026-06-11-01-12-47usfci9y3a2.jpg"]},
  {"id": "rak-puffy", "name": "Puffy", "gender": "Male", "breed": "Pomeranian", "size": "small", "sizeLabel": "Small", "ageGroup": "adult", "ageLabel": "2 years", "ageMonths": 24, "dob": "12/06/2024", "shelterId": "rak-paws", "availableFor": "adoption", "vaccinated": true, "neutered": true, "photos": ["https://rakawc.com/uploads/gallery_images/2026-06-11-01-03-51j4e2fuao1t.jpg"]},
];
