// components/About-me.js
"use client";
import React from "react";
import Image from "next/image";
import WorkingIcon from "../../../public/workingIcon";
import { useTranslation, withTranslation } from "react-i18next";

const handleButtonClick = () => {
  // Open the default email client with a pre-filled email
  window.location.href =
    "mailto:reenmartini01@gmail.com?subject=Regarding Your Portfolio&body=Hi Reen, Let's work together!";
};

const AboutMe = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      id="about-me"
      className="w-full min-h-screen flex items-center justify-center p-8 md:p-12 lg:p-24 relative"
    >
      <div className="absolute right-10 top-[100%] transform -translate-y-1/2">
        <WorkingIcon />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/me.jpg"
                alt="Reen MARTINI"
                fill
                className="object-cover rounded-2xl shadow-xl"
                style={{
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-2/3 space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-custom">
              {t("Hey, I'm Reen Martini")}
            </h1>
            
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                {t("Software Engineer at ")}
                <a 
                  href="https://orchestra.eu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-300 font-bold"
                >
                  Orchestra
                </a>
                {t(", where I work on innovative travel technology solutions. I focus on full-stack development with Java and React, building reliable and user-friendly applications.")}
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                {t("I enjoy solving complex problems and learning new technologies. I'm always looking for ways to improve and grow as a developer.")}
              </p>
            </div>

            <button
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-xl transition-colors duration-300 transform hover:scale-105"
              onClick={handleButtonClick}
            >
              {t("Work with me")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withTranslation()(AboutMe);
