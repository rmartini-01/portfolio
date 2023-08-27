import React from "react";
import SliderComponent from "./SliderComponent";

const Skills = ({ onClose, children }) => {
  return (
    <section
      id="Skills"
      className="text-center flex flex-col justify-between m-14"
    >
      <h2 className="text-2xl md:text-4xl font-bold font-custom text-white">
        But that's not all !
      </h2>

      <SliderComponent />
    </section>
  );
};

export default Skills;
