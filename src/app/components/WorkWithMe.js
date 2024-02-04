"use client";
import React from "react";
import EmailSVG from "../../../public/emailIcon";
import GithubSVG from "../../../public/githubIcon";
import LinkedInSVG from "../../../public/linkedInIcon";
import IconFilePdf from "../../../public/pdfIcon";
import { useTranslation, withTranslation } from "react-i18next";

const handleButtonClick = () => {
  // Open the default email client with a pre-filled email
  window.location.href =
    "mailto:reenmartini01@gmail.com?subject=Regarding Your Portfolio&body=Hi Reen, Let's work together!";
};

const WorkWithMe = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      id="contact"
      className="w-full justify-between items-center mb-12 bg-black pt-5 "
    >
      <h2 className="text-4xl text-white text-center font-bold mt-10 m-4 font-custom">
        {t("Work with me")}
      </h2>
      <div
        id="buttons"
        className="flex md:flex-row gap-4 md:justify-center  pl-24 pr-24 pb-24 flex-col"
      >
        <button
          className=" flex gap-4 items-center bg-purple-500 hover:bg-purple-600 font-custom text-white font-bold py-2 px-4 rounded-lg"
          onClick={handleButtonClick}
        >
          <EmailSVG />
          {t("Send me an email")}
        </button>
        <button className="flex gap-4 items-center bg-gray-700 font-custom hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg">
          <GithubSVG />
          <a href="https://www.github.com/rmartini-01">  {t("Find me on Github")}</a>
        </button>

        <button className="flex gap-4 items-center bg-white hover:bg-gray-100 font-custom text-black font-bold py-2 px-4 rounded-lg">
          <LinkedInSVG />
          <a href="https://www.linkedin.com/in/reen-martini-44b84917b/">
            {t("Find me on LinkedIn")}
          </a>
        </button>

        {i18n.language === "fr" ? (
          <button className="flex gap-4 items-center bg-red-700 hover:bg-red-800 text-white font-custom font-bold py-2 px-4 rounded-lg">
            <a
              href="/frCV.pdf" // Replace with the actual path to your PDF file
              download="ReenMARTINI-CV.pdf" // Specify the desired file name for the downloaded PDF
              className="flex gap-4 items-center bg-red-700 hover:bg-red-800 text-white font-custom font-bold py-2 px-4 rounded-lg"
            >
              <IconFilePdf />
              CV
            </a>
          </button>
        ) : (
          <button className="flex gap-4 items-center bg-red-700 hover:bg-red-800 text-white font-custom font-bold py-2 px-4 rounded-lg">
            <a
              href="/enCV.pdf" // Replace with the actual path to your PDF file
              download="ReenMARTINI-CV.pdf" // Specify the desired file name for the downloaded PDF
              className="flex gap-4 items-center bg-red-700 hover:bg-red-800 text-white font-custom font-bold py-2 px-4 rounded-lg"
            >
              <IconFilePdf />
              Resume
            </a>
          </button>
        )}
      </div>
      <p className="text-center">{t("All rights reserved © 2024")}</p>
    </div>
  );
};

export default withTranslation()(WorkWithMe);
