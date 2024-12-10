"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50">
      <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 shadow-2xl">
        {/* Logo */}
        <div className="text-3xl font-bold text-white tracking-wider hover:scale-105 transition-transform duration-500">
          My3DApp
        </div>

        {/* Hamburger Menu */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`transition-all duration-500 ease-in-out w-8 h-1 bg-white mb-1 transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <div
            className={`transition-all duration-500 ease-in-out w-8 h-1 bg-white mb-1 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`transition-all duration-500 ease-in-out w-8 h-1 bg-white transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>

        {/* Links */}
        <ul
          className={`absolute top-0 left-0 w-full bg-gradient-to-b from-blue-600 to-purple-700 text-white shadow-lg md:static md:flex md:w-auto md:bg-transparent md:shadow-none md:opacity-100 md:translate-x-0 ${
            isOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          } transition-all duration-700 ease-in-out md:transition-none`}
        >
          {["Home", "Features", "Gallery", "Contact"].map((item, idx) => (
            <li
              key={idx}
              className="md:ml-6 text-lg text-center font-semibold py-2 md:py-0"
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="relative inline-block px-4 py-2 transition-transform duration-500 hover:scale-110 group"
              >
                <span className="absolute inset-0 bg-white rounded-lg shadow-lg -rotate-6 transform scale-105 opacity-10 group-hover:opacity-20 transition duration-500"></span>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
