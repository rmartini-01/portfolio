// components/Navbar.js

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-lg font-semibold">
          Reen Martini
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-purple-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about-me" className="text-white hover:text-purple-400">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:text-purple-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-purple-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
