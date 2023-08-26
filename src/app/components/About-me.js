// components/About-me.js

import React from "react";
import Image from "next/image";
const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="w-full h-screen flex flex-row justify-between"
    >
      <div className="flex flex-col justify-center gap-5">
        <p className="text-4xl font-bold text-left font-custom">
          Hey, I'm Reen Martini
        </p>
        <p className="text-xl text-left font-custom">
          I'm about to graduate from the University of Paris Cité with a
          Master's degree in Computer Science - Languages & Programming. I'm
          looking forward to all the new opportunities that will come my way!
        </p>
        <button className="bg-purple-500 w-fit p-4 rounded-xl hover:underline">
          Work with me
        </button>
      </div>
      {/* Rest of your page content */}
      <div className=" flex justify-center items-center">
        <Image
          src="/me.jpg" // Path to your image in the public directory
          alt="Description of the image"
          width={300} // Desired width of the image
          height={250} // Desired height of the image
          style={{ borderRadius: "50px" }} // Adjust the radius value as needed
        />
      </div>
    </section>
  );
};

export default AboutMe;
