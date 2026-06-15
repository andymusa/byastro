// Dog data for ByAstro.
//
// Real shelter dogs are imported per-shelter (e.g. data/k9friends.js) and
// spread into `baseDogs` below. To add another shelter later, create a similar
// file exporting an array of dog records and add it to the spread — every dog
// is run through `normalizeDog`, which fills in graceful defaults for any
// information a shelter doesn't publish.
import { stories } from "./stories";
import { k9FriendsDogs } from "./k9friends";
import { rakawcDogs } from "./rakawc";
import { sdcDogs } from "./sdc";

// Fields a shelter may not provide. `null` means "unknown" and the UI shows a
// friendly "Contact shelter for details" instead of asserting something false.
const normalizeDog = (d) => ({
  // identity
  id: d.id,
  name: d.name,
  shelterId: d.shelterId,
  availableFor: d.availableFor || "adoption",
  // basics (unknown -> null, rendered gracefully in the UI)
  breed: d.breed ?? null,
  gender: d.gender ?? null,
  size: d.size ?? null,
  sizeLabel: d.sizeLabel ?? null,
  weight: d.weight ?? null,
  ageGroup: d.ageGroup ?? null,
  ageLabel: d.ageLabel ?? null,
  ageMonths: d.ageMonths ?? null,
  dob: d.dob ?? null,
  monthsInShelter: d.monthsInShelter ?? null,
  // health / temperament (null = ask the shelter)
  vaccinated: d.vaccinated ?? null,
  neutered: d.neutered ?? null,
  goodWithKids: d.goodWithKids ?? null,
  goodWithDogs: d.goodWithDogs ?? null,
  goodWithCats: d.goodWithCats ?? null,
  // story
  traits: d.traits ?? [],
  photos: d.photos && d.photos.length ? d.photos : ["/hero-dogs.png"],
  personality:
    d.personality ??
    `${d.name} is one of the rescue dogs hoping to be chosen. Contact the shelter for details on ${d.name}'s story, personality and what kind of home suits them best.`,
});

// All shelter dogs. Add more shelters by spreading their arrays here.
const baseDogs = [...k9FriendsDogs, ...rakawcDogs, ...sdcDogs];

// Round-robin interleave the dogs by shelter so the default "All" view mixes
// shelters together instead of showing one shelter's dogs in a solid block.
// It's a deterministic shuffle (stable across renders, no hydration mismatch),
// and grows automatically as more shelters are added to `baseDogs`.
const interleaveByShelter = (list) => {
  const groups = new Map();
  for (const d of list) {
    if (!groups.has(d.shelterId)) groups.set(d.shelterId, []);
    groups.get(d.shelterId).push(d);
  }
  const buckets = [...groups.values()];
  const mixed = [];
  for (let i = 0; mixed.length < list.length; i++) {
    for (const bucket of buckets) {
      if (i < bucket.length) mixed.push(bucket[i]);
    }
  }
  return mixed;
};

export const dogs = interleaveByShelter(
  baseDogs.map(normalizeDog).map((d) => ({ ...d, ...(stories[d.id] || {}) }))
);

export const dogById = (id) => dogs.find((d) => d.id === id);
export const dogsByShelter = (shelterId) =>
  dogs.filter((d) => d.shelterId === shelterId);

// Longest-waiting dogs first — for the "Still Waiting..." section. Dogs with an
// unknown wait time sort to the end rather than breaking the order.
export const dogsByWaiting = [...dogs].sort(
  (a, b) => (b.monthsInShelter ?? -1) - (a.monthsInShelter ?? -1)
);
