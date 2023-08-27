import Image from "next/image";
import Navbar from "./components/Navbar";
import AboutMe from "./components/About-me";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkWithMe from "./components/WorkWithMe";
import SliderComponent from "./components/SliderComponent";
import VideoBackground from "./components/VideoBackground";

export default function Home() {
  return (
    <main className=" min-h-screen items-center justify-between ">
      <AboutMe />
      <Projects />
      <Skills />
      <WorkWithMe />
    </main>
  );
}
