"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IconArrowLeftSquare from "../../../public/leftArrowIcon";
import IconArrowRightSquare from "../../../public/RightArrowIcon";
import { useTranslation, withTranslation } from "react-i18next";

const SliderComponent = () => {
  const { t, i18n } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 5000,
    prevArrow: <IconArrowLeftSquare />,
    nextArrow: <IconArrowRightSquare />,
    appendDots: dots => (
      <div
        style={{
          padding: "10px",
          position: "absolute",
          bottom: "-40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul style={{ 
          margin: "0px",
          padding: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          listStyle: "none"
        }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "12px",
          height: "12px",
          margin: "0 8px",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          borderRadius: "50%",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      />
    ),
  };

  return (
    <div className="relative">
      <style jsx global>{`
        .slick-dots li.slick-active div {
          background-color: white !important;
        }

        .glassEffect {
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.1);
          position: relative;
          z-index: 10;
        }

        .glassEffect:hover {
          transform: scale(1.05);
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
          z-index: 20;
        }

        .slick-prev, .slick-next {
          z-index: 5;
        }

        .slick-slide {
          padding: 60px;
        }

        .slick-list {
          margin: -60px;
        }
      `}</style>
      <Slider
        {...settings}
        className="w-full p-12 md:p-32 font-custom text-lg text-center z-20"
      >
        {/* First Slide - Core Programming Languages */}
        <div className="text-white z-20">
          <div className="flex flex-col justify-between text-center">
            <p className="mt-4 mb-4 text-lg text-center">
              {t("Core Programming Languages")}
            </p>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
                Java
              </li>
              <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
                JavaScript & TypeScript
              </li>
              <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
                Python
              </li>
              <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
                C/C++
              </li>
              <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
                PHP
              </li>
              <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
                OCaml
              </li>
            </ul>
          </div>
        </div>

        {/* Second Slide - Web & Mobile Development */}
        <div className="text-white z-20">
          <p className="mt-4 mb-4">{t("Web & Mobile Development")}</p>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              React & NextJS
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Flutter
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Kotlin
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Swift
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Laravel & Slim
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              HTML/CSS
            </li>
          </ul>
        </div>

        {/* Third Slide - Development Tools & IDEs */}
        <div className="text-white z-20">
          <p className="m-4">{t("Development Tools & IDEs")}</p>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              JetBrains & Android Studio
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Visual Studio Code
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              XCode
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Git
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Firebase
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              UML
            </li>
          </ul>
        </div>

        {/* Fourth Slide - Methodologies & Practices */}
        <div className="text-white z-20">
          <p className="m-4">{t("Methodologies & Practices")}</p>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Agile & Scrum
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Test Driven Development
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Feature Driven Development
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Pair Programming
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              CI/CD
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              {t("Modelling")}
            </li>
          </ul>
        </div>

        {/* Fifth Slide - Collaboration & Design Tools */}
        <div className="text-white z-20">
          <p className="m-4">{t("Collaboration & Design Tools")}</p>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Figma
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Canva
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Trello
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Slack & Discord
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Notion & Linear
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Confluence
            </li>
          </ul>
        </div>

        {/* Sixth Slide - Data & Analytics */}
        <div className="text-white z-20">
          <p className="m-4">{t("Data & Analytics")}</p>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              SQL & PL/SQL
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Oracle
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              MongoDB
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              PowerBI
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Metabase
            </li>
          </ul>
        </div>
      </Slider>
    </div>
  );
};

export default withTranslation()(SliderComponent);
