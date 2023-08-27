"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IconArrowLeftSquare from "../../../public/leftArrowIcon";
import IconArrowRightSquare from "../../../public/RightArrowIcon";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 3000,
    prevArrow: <IconArrowLeftSquare />,
    nextArrow: <IconArrowRightSquare />,
  };

  return (
      <Slider {...settings} className="w-full  p-32 font-custom  z-20">
        {/* First Slide */}
        <div className=" text-white text-left z-20 ">
          <div className=" flex flex-col justify-between">
            <p className="mt-4 mb-4">
              I have also worked on projects using these languages:
            </p>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <li className=" glassEffect text-white py-2 px-4 rounded-lg text-center">
                Flutter
              </li>
              <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
                Kotlin
              </li>
              <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
                Python
              </li>
              <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
                XML
              </li>
              <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
                JavaScript & TypeScript
              </li>
              <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
                Ocaml
              </li>
            </ul>
          </div>
        </div>

        {/* Second Slide */}
        <div className=" text-white z-20">
          <p className="mt-4 mb-4"> And these tools and frameworks</p>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              JetBrains
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Visual Studio Code
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Android Studio
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Laravel
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              React & NextJS
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Trello
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Slack & Discord
            </li>

            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Git
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Notion & Linear
            </li>
          </ul>
        </div>

        {/* Third Slide */}
        <div className=" text-white z-20">
          <p className="m-4">Sometimes I design my own projects with</p>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Figma
            </li>
            <li className="glassEffect text-white py-2 px-4 rounded-lg text-center">
              Canva
            </li>
          </ul>
        </div>
      </Slider>
  );
};

export default SliderComponent;
