import Home from "./components/landingPage/Home";
import Experience from "./components/experience/Experience";
import Work from "./components/work/Work";
import About from "./components/about/About";
import "./App.css";
import NavigationBar from "./components/navigation/NavigationBar";
import LetsTalk from "./components/connect/LetsTalk";
import { useEffect, useState } from "react";

function App() {
  const [ activeSection, setActiveSection ] = useState("home");
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-[100dvh] w-full relative">
      {/* Navigation bar component goes here */}
      <NavigationBar activeSection={activeSection} />

      <section id="home">
        <Home activeSection={activeSection}/>
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="lets-talk">
        <LetsTalk />
      </section>
    </div>
  );
}

export default App;
