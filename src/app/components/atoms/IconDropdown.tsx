import { ChevronDown } from "lucide-react";

const IconDropdown = ({ label }: { label: string }) => (
  <div className="relative group">
    <button className="flex items-center gap-1 hover:text-indigo-400 transition">
      {label}
      <ChevronDown size={16} />
    </button>
  </div>
);

export default IconDropdown;
