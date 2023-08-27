// components/About-me.js
"use client";
import React from "react";
import Image from "next/image";
import WorkingIcon from "../../../public/workingIcon";

const handleButtonClick = () => {
  // Open the default email client with a pre-filled email
  window.location.href =
    "mailto:reenmartini01@gmail.com?subject=Regarding Your Portfolio&body=Hi Reen, Let's work together!";
};

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="w-full flex flex-row justify-between   p-24 gradient-purple"
    >
      <div className=" absolute left-13 top-10 md:top-14 lg:top-16">
        <WorkingIcon />
      </div>
      <div className="flex flex-col justify-center pt-40 gap-5 mt-16 z-10">
        <p className="text-2xl md:text-4xl font-bold text-left font-custom">
          Hey, I'm Reen Martini
        </p>
        <p className="text-lg md:text-xl text-left font-custom">
          I'm about to graduate from the University of Paris Cité with a
          Master's degree in Computer Science - Languages & Programming. I'm
          looking forward to all the new opportunities that will come my way!
        </p>
        <button
          className="bg-purple-500 w-fit p-4 rounded-xl hover:bg-purple-600 "
          onClick={handleButtonClick}
        >
          Work with me
        </button>
      </div>
      {/* Rest of your page content */}
      <div className="flex justify-center items-center">
        <div style={{ maxWidth: "100%", textAlign: "center" }}>
          <Image
            src="/me.jpg" // Path to your image in the public directory
            alt="Description of the image"
            width={300} // Desired width of the image
            height={250} // Desired height of the image
            style={{ borderRadius: "20px", minWidth: "100%" , maxWidth:"100%"}} // Adjust the radius value as needed
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
