import React from "react";
import { motion } from "framer-motion";
import "../styles/global.css";
import profilePic from "../assets/profile.jpg";
import SayHiButton from "./SayHiButton"; 

const Hero = ({ aboutRef }) => {
  const handleScroll = () => {
    if (aboutRef && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero-container">
      {/* Profile Picture */}
      <motion.img
        src={profilePic}
        alt="Sharukh Shaik"
        className="hero-image"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Hero Content */}
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="hero-title">Hi, I'm <span className="highlight">Sharukh</span></h1>
        <h2 className="hero-subtitle">A passionate Software Engineer.</h2>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="scroll-button"
          onClick={handleScroll}
        >
          Know More About Me
        </motion.button>
      </motion.div>

      {/* ✅ Say Hi Button Now Inside Hero */}
      <SayHiButton /> 

    </section>
  );
};

export default Hero;
