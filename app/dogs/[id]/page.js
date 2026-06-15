import { notFound } from "next/navigation";
import { dogs, dogById, dogsByShelter } from "@/data/dogs";
import { shelterById } from "@/data/shelters";
import DogProfile from "@/components/DogProfile";

export function generateStaticParams() {
  return dogs.map((d) => ({ id: d.id }));
}

export function generateMetadata({ params }) {
  const dog = dogById(params.id);
  if (!dog) return { title: "Dog not found · ByAstro" };
  return {
    title: `${dog.name}${dog.breed ? ` · ${dog.breed}` : ""} · ByAstro`,
    description: (dog.personality || `Meet ${dog.name}, a rescue dog looking for a home.`).slice(0, 150),
  };
}

export default function DogPage({ params }) {
  const dog = dogById(params.id);
  if (!dog) notFound();

  const shelter = shelterById(dog.shelterId);
  const related = dogsByShelter(dog.shelterId)
    .filter((d) => d.id !== dog.id)
    .slice(0, 3);

  return <DogProfile dog={dog} shelter={shelter} related={related} />;
}
