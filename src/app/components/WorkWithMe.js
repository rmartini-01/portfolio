"use client";
import React from "react";
import EmailSVG from "../../../public/emailIcon";
import GithubSVG from "../../../public/githubIcon";
import LinkedInSVG from "../../../public/linkedInIcon";
import IconFilePdf from "../../../public/pdfIcon";

const handleButtonClick = () => {
  // Open the default email client with a pre-filled email
  window.location.href =
    "mailto:reenmartini01@gmail.com?subject=Regarding Your Portfolio&body=Hi Reen, Let's work together!";
};

const WorkWithMe = () => {
  return (
    <div id="contact" className="w-full justify-between items-center mb-24  ">
      <h2 className="text-4xl text-white text-center font-bold mt-10 m-4 font-custom">
        Work with me !
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
          Send me an email
        </button>
        <button className="flex gap-4 items-center bg-gray-700 font-custom hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg">
          <GithubSVG />
          <a href="www.github.com/rmartini-01"> Find me on Github</a>
        </button>

        <button className="flex gap-4 items-center bg-white hover:bg-gray-100 font-custom text-black font-bold py-2 px-4 rounded-lg">
          <LinkedInSVG />
          <a href="https://www.linkedin.com/in/reen-martini-44b84917b/">
            Find me on LinkedIn
          </a>
        </button>
        <button className="flex gap-4 items-center bg-red-700 hover:bg-red-800 text-white font-custom font-bold py-2 px-4 rounded-lg">
          <a
            href="/CV.pdf" // Replace with the actual path to your PDF file
            download="ReenMARTINI-CV.pdf" // Specify the desired file name for the downloaded PDF
            className="flex gap-4 items-center bg-red-700 hover:bg-red-800 text-white font-custom font-bold py-2 px-4 rounded-lg"
          >
            <IconFilePdf />
            Download my resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default WorkWithMe;
