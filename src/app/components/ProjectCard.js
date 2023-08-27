"use client";

import React, { useState } from "react";
import Image from "next/image";


const ProjectCard = ({ project, onDemoButtonClick  }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const linkExists = project.githubLink !== "#";
  return (
    <div className="glassEffect rounded-lg shadow-md p-6 flex flex-col justify-between">
      <h2 className="text-xl text-center text-gray-200 font-semibold mb-2">
        {project.name}
      </h2>
      <div className=" flex justify-center items-center">
        <Image
          className="rounded-md"
          src={project.image} 
          alt="Description of the image"
          width={200} 
          height={150} 
        />
      </div>
      <p className="text-gray-200 mb-4 mt-4">{project.description}</p>
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-100"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6.293 6.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L8 9.414V14a1 1 0 11-2 0V9.414l-1.293 1.293a1 1 0 01-1.414-1.414l3-3zM16 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-gray-100">{project.tech}</p>
      </div>
      <div className="flex items-center mt-4">
        {linkExists ? (
          <a
            href={project.githubLink}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Github
          </a>
        ) : (
          <button
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            onClick={onDemoButtonClick}
          >
            Demo
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
