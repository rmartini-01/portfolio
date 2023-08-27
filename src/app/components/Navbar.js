// components/Navbar.js
"use client";

import React, { useCallback } from "react";
import i18n from "./i18n";
import { useTranslation, withTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = useCallback(() => {
    const newLanguage = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLanguage);
  }, [i18n]);
  return (
    <nav className="p-4 gradient-purple">
      <div className="container  mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-lg font-semibold">
          Reen Martini
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="#about-me" className="text-white hover:text-purple-500">
              {t("About")}
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:text-purple-500">
              {t("Projects")}
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-purple-500">
              {t("Contact")}
            </a>
          </li>
          <li>
            <button
              className="text-white hover:text-purple-500"
              onClick={handleChangeLanguage}
            >
              {i18n.language === "en" ? "🇫🇷" : "🇬🇧"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withTranslation()(Navbar);
