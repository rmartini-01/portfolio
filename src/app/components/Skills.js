"use client";
import React from "react";
import SliderComponent from "./SliderComponent";
import { useTranslation, withTranslation } from "react-i18next";
import WorkingIcon from "../../../public/workingIcon";

const Skills = ({ onClose, children }) => {
  const { t, i18n } = useTranslation();
  return (
    <section
      id="Skills"
      className="text-center flex flex-col items-center m-14 relative"
    >
      <div className="block md:hidden mb-8 flex justify-center mx-auto">
        <div style={{ maxWidth: '300px' }} className="mx-auto">
          <WorkingIcon />
        </div>
      </div>
      <h2 className="text-4xl md:text-4xl font-bold font-custom text-white">
        {t("Technical Expertise & Tools")}
      </h2>

      <div className="w-full max-w-5xl mx-auto">
        <SliderComponent />
      </div>
    </section>
  );
};

export default withTranslation()(Skills);
