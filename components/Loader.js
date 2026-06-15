import { Paw } from "./icons";

export default function Loader({ message = "Fetching good boys..." }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <div className="flex gap-2 text-terra-400">
        <span className="animate-float" style={{ animationDuration: "1.2s" }}>
          <Paw className="h-9 w-9" />
        </span>
        <span className="animate-float" style={{ animationDuration: "1.2s", animationDelay: "0.2s" }}>
          <Paw className="h-9 w-9" />
        </span>
        <span className="animate-float" style={{ animationDuration: "1.2s", animationDelay: "0.4s" }}>
          <Paw className="h-9 w-9" />
        </span>
      </div>
      <p className="font-hand text-2xl font-bold text-brown-600">{message}</p>
    </div>
  );
}
