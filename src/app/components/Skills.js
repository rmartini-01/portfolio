"use client";
import React from "react";
import SliderComponent from "./SliderComponent";
import { useTranslation, withTranslation } from "react-i18next";

const Skills = ({ onClose, children }) => {
  const { t, i18n } = useTranslation();
  return (
    <section
      id="Skills"
      className="text-center flex flex-col justify-between  m-14"
    >
      <h2 className="text-4xl md:text-4xl font-bold font-custom text-white">
        {t("Technical Expertise & Tools")}
      </h2>

      <SliderComponent />
    </section>
  );
};

export default withTranslation()(Skills);
