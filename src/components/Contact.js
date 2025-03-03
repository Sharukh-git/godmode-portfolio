import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      {/* Animated Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="contact-title"
      >
        Contact
      </motion.h2>

      {/* Animated Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="contact-subtext"
      >
        Let's connect! Feel free to reach out to me on any of these platforms:
      </motion.p>

      {/* Contact Links with Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="contact-links"
      >
        <a href="https://github.com/Sharukh-git" target="_blank" rel="noopener noreferrer">
          <FaGithub className="contact-icon" /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/sharukh-shaik-srk12/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="contact-icon" /> LinkedIn
        </a>
        <a href="mailto:sharukhshaik.012@gmail.com">
          <FaEnvelope className="contact-icon" /> Email
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
