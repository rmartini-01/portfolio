// components/Navbar.js
"use client";

import React, { useCallback } from "react";
import i18n from "./i18n";
import { useTranslation, withTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#about-me" className="text-white text-xl font-bold nav-link">
            RM
          </a>
          <div className="flex items-center space-x-6">
            <a href="#about-me" className="text-white nav-link">{t("About")}</a>
            <a href="#projects" className="text-white nav-link">{t("Projects")}</a>
            <a href="#contact" className="text-white nav-link">{t("Contact")}</a>
            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={() => i18n.changeLanguage("en")}
                className="text-white hover:text-purple-300 transition-colors"
              >
                EN
              </button>
              <span className="text-white">|</span>
              <button
                onClick={() => i18n.changeLanguage("fr")}
                className="text-white hover:text-purple-300 transition-colors"
              >
                FR
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default withTranslation()(Navbar);
