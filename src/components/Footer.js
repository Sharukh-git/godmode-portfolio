import React from "react";
import { motion } from "framer-motion";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 10 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }} 
      viewport={{ once: true }} 
      className="footer-container"
    >
      <p>© {new Date().getFullYear()} Sharukh Shaik. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
