"use client"; 
import React, {useState} from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";
import VideoBackground from "./VideoBackground";
const Projects = () => {
  const projects = [
    {
      name: "NaviNinja",
      image: "/navininja.png",
      description: "Find your itinerary !",
      tech: "Java - JavaFX - IntelliJ - SceneBuilder",
      githubLink: "#",
    },
    {
      name: "Twisk",
      image: "/twisk.png",
      description: "What if we looked at the world ?",
      tech: "Java - JavaFX - C - IntelliJ ",
      githubLink: "https://github.com/rmartini-01/twisk",
    },
    {
      name: "Recettes de cocktails",
      image: "/recettes.png",
      description: "The perfect website for your cocktails recipes!",
      tech: "PHP - SQL - HTML - CSS -  ",
      githubLink: "https://github.com/rmartini-01/cocktails",
    },
    {
      name: "SpaceJump",
      image: "/spacejump.png",
      description: "Game inspired by Doodle Jump ",
      tech: "C - SDL2 ",
      githubLink: "https://github.com/rmartini-01/spaceJump",
    },
    {
      name: "ShareCount",
      image: "/sharecount.png",
      description: "Money pot manager",
      tech: "C++ - QtCreator",
      githubLink: "https://github.com/rmartini-01/sharecount",
    },

    {
      name: "Energy ",
      image: "/energy.png",
      description: "Lights up",
      tech: "Java - Swing",
      githubLink: "https://github.com/rmartini-01/energy",
    },
  ];

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div
      id="projects"
      className="relative w-full min-h-screen bg-gray-100  font-custom p-24"
    >
      <div className="relative z-10 ">
        <p className="text-lg glassEffect p-5 rounded-lg mb-4">
          &#x26A0; This is a preview of some of the projects I have done during
          my studies. I have worked on other projects making me gain skills not
          only in other programming languages, frameworks and tools, but also in
          methodology, teamwork and productivity. I am currently working on some
          new projects that I unfortunately cannot share with you just yet...{" "}
        </p>

        <div className=" realtive grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project}  onDemoButtonClick={toggleModal}/>
          ))}

          {showModal && (
            <Modal onClose={toggleModal}>
              <h2 className="text-xl font-semibold mb-4">Oops...</h2>
              <p className="mb-2">
                I can't share this repository, but here's a video presentation
                of the app :)
              </p>
              <video controls className="max-w-[50%] h-auto">
                <source src="/Navininja.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Modal>
          )}
        </div>
      </div>
      <VideoBackground />
    </div>
  );
};

export default Projects;
