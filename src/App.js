import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/global.css";
import "./styles/animations.css";

function App() {
  const aboutRef = useRef(null); // Reference for About Section

  return (
    <div className="app-container">
      <Navbar />
      <Hero aboutRef={aboutRef} />
      <About ref={aboutRef} /> {/* Now correctly attached */}
      <Projects />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
