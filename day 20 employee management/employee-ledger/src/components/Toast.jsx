import { Check } from "lucide-react";

export default function Toast({ message }) {
  if (!message) return null;
  return (
    <div className="lg-toast">
      <Check size={14} /> {message}
    </div>
  );
}
