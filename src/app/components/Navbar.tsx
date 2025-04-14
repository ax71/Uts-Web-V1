import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-black text-white shadow-md z-50">
      <div className="flex items-center gap-2">
        <Image
          src="/logos/logo.png"
          alt="Logo"
          width={130}
          height={50}
          priority
        />
      </div>

      <div className="hidden md:flex gap-8 font-semibold text-lx items-center">
        <a href="#" className="hover:text-indigo-400 transition">
          Games
        </a>
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-indigo-400 transition">
            Browse Games
            <ChevronDown size={16} />
          </button>
        </div>
        <a href="#" className="hover:text-indigo-400 transition">
          Store
        </a>
      </div>

      <div className="flex items-center gap-3">
        <button className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-md font-medium text-sm transition">
          Sign up
        </button>
        <button className="border border-white hover:bg-white hover:text-black px-5 py-2 rounded-md font-medium text-sm transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
