import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,   // ← allow animation to happen multiple times
      mirror: true,  // ← animate elements when scrolling up/down
      anchorPlacement: "top-center"
    });

    // optional: refresh AOS after images or content change
    // AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
