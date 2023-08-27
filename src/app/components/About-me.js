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
      className="w-full flex flex-row justify-between p-12 md:p-24 gradient-purple md:flex-col"
    >
      <div className=" absolute left-10 md:left-13 top-10 md:top-14 lg:top-16">
        <WorkingIcon />
      </div>
      {/* <div className="flex flex-col justify-center pt-40 gap-2 mt-16 z-10"> */}
      <div className="flex flex-col gap-5 items-center  md:items-start">
        <div className="flex md:flex-row gap-5 flex-col items-center ">
          <div className="pt-40 gap-2 mt-16 z-10 ">
            <p className="text-2xl md:text-4xl font-bold text-center md:text-left font-custom mb-2">
              {t("Hey, I'm Reen Martini")}
            </p>
            <p className="text-lg md:text-xl md:text-left text-center font-custom flex flex-col items-center gap-5 md:flex-row">
              {t(
                "I'm about to graduate from the University of Paris Cité with a Master's degree in Computer Science - Languages & Programming."
              )}
              <br />
            </p>
          </div>

          <Image
            src="/me.jpg" // Path to your image in the public directory
            alt="Reen MARTINI"
            width={250} // Desired width of the image
            height={200} // Desired height of the image
            style={{
              borderRadius: "20px",
            }} // Adjust the radius value as needed
          />
        </div>
        <button
          className="bg-purple-500 w-fit p-4 rounded-xl hover:bg-purple-600 "
          onClick={handleButtonClick}
        >
          {t("Work with me")}
        </button>
      </div>
    </section>
  );
};

export default withTranslation()(AboutMe);
