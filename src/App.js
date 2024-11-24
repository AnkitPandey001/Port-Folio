import React from "react";
import Headers from "./components/Headers";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div
      className="min-h-screen text-white p-6 w-full"
      style={{
        background: "rgb(41,203,3)",
        background:
          "linear-gradient(90deg, rgba(41,203,3,1) 0%, rgba(13,9,73,1) 0%, rgba(147,255,0,1) 0%, rgba(16,6,42,1) 0%, rgba(6,3,46,1) 22%, rgba(10,18,41,1) 41%, rgba(13,27,37,1) 74%, rgba(1,2,15,1) 100%, rgba(41,121,0,1) 100%, rgba(2,1,29,1) 100%)",
      }}
    >
      <Headers />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contacts">
        <Contact />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default App;
