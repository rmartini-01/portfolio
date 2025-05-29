import AboutMe from "./components/About-me";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkWithMe from "./components/WorkWithMe";

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between gradient-purple">
      <AboutMe />
      <Skills />
      <Projects />
      <WorkWithMe />
    </main>
  );
}
