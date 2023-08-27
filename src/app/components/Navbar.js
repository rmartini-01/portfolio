// components/Navbar.js

import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4 gradient-purple">

      <div className="container  mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-lg font-semibold">
          Reen Martini
        </a>
        <ul className="flex space-x-4">
         
          <li>
            <a href="#about-me" className="text-white hover:text-purple-500">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:text-purple-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-purple-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
