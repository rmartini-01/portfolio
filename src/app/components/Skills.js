import React from "react";

const Skills = ({ onClose, children }) => {
  return (
    <section
      id="Skills"
      className="text-center flex flex-col justify-between m-4"
    >
      <h2 className="text-xl text-white">But that's not all I know !</h2>
      <p className="m-4">
        I have also worked on projects using these languages:
      </p>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <li className="bg-blue-500 text-white py-2 px-4 rounded-">Flutter</li>
        <li className="bg-blue-500 text-white py-2 px-4 rounded-">Kotlin</li>
        <li className="bg-blue-500 text-white py-2 px-4 rounded-">Python</li>
        <li className="bg-blue-500 text-white py-2 px-4 rounded-">XML</li>
        <li className="bg-blue-500 text-white py-2 px-4 rounded-">
          JavaScript & TypeScript
        </li>
        <li className="bg-blue-500 text-white py-2 px-4 rounded-">Ocaml</li>
      </ul>
      <p className="m-4"> And these tools and frameworks</p>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <li className="bg-green-500 text-white py-2 px-4 rounded-">
          JetBrains
        </li>
        <li className="bg-green-500 text-white py-2 px-4 rounded-">
          Visual Studio Code
        </li>
        <li className="bg-green-500 text-white py-2 px-4 rounded-">
          Android Studio
        </li>
        <li className="bg-green-500 text-white py-2 px-4 rounded-">Git</li>
        <li className="bg-green-500 text-white py-2 px-4 rounded-">Laravel</li>
        <li className="bg-green-500 text-white py-2 px-4 rounded-">
          React & NextJS
        </li>
        <li className="bg-green-500 text-white py-2 px-4 rounded-">
          Slack & Discord
        </li>
        <li className="bg-green-500 text-white py-2 px-4 rounded-">Trello</li>
        <li className="bg-green-500 text-white py-2 px-4 rounded-">Notion</li>
      </ul>
      <p className="m-4">Sometimes I design my own project with</p>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <li className="bg-purple-500 text-white py-2 px-4 rounded-">Figma</li>
        <li className="bg-purple-500 text-white py-2 px-4 rounded-">Canva</li>
      </ul>
    </section>
  );
};

export default Skills;
