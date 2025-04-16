// src/components/NavMenu.tsx
"use client";

import { useState } from "react";
import NavLink from "../atoms/NavLink";
import IconDropdown from "../atoms/IconDropdown";
import { genres } from "../../data/Genre";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genreNames = genres.map((genre) => genre.name);

  return (
    <div className="hidden md:flex gap-8 font-semibold text-lg items-center relative">
      {/* Link untuk menuju halaman "Games" */}
      <NavLink label="Games" href="/allgames" />

      <div
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <IconDropdown label="Browse Games" />

        {isOpen && (
          <div
            className="absolute top-8 left-0 bg-transparent border border-gray-300 shadow-lg rounded-md z-10 transition-opacity duration-3500"
            style={{ minWidth: "max-content" }}
          >
            {genreNames.map((genre) => (
              <a
                key={genre}
                href={`/genres/${genre.toLowerCase()}`}
                className="block px-4 py-2 text-sm text-white hover:bg-indigo-50 hover:text-indigo-600 transition"
              >
                {genre}
              </a>
            ))}
          </div>
        )}
      </div>

      <NavLink label="Store" href="#" />
    </div>
  );
};

export default NavMenu;
