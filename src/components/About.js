import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/about.css';

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="about" className="about-container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="about-title"
      >
        From Circuits to Code: A Techie Tale
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="about-content"
      >
        <p>
          Once upon a time, I was all set to be an <b>Electronics Engineer</b>, dreaming of circuits, 
          microcontrollers, and fancy oscilloscopes. But somewhere along my Bachelor's journey, I took a 
          few programming courses—just for fun. <b>Big mistake. Or maybe the best mistake.</b>
        </p>

        <p>
          Before I knew it, I was more excited about <b>writing code</b> than wiring circuits. Debugging a 
          program gave me more joy than debugging a PCB. And just like that, my career plans took a 
          sharp U-turn.
        </p>

        <p>
          Fast forward to my final year, I decided to test the waters and attended a few placement 
          drives. <b>Boom!</b> Landed an internship at <b>Accenture</b>. A year later, I transitioned into a full-time 
          <b> Backend Developer</b> role at <b>Infosys</b>. I spent my days battling complex APIs, databases, and 
          server-side logic, and every time I cracked a tough issue, I felt that high—like a 
          detective solving a mind-bending case.
        </p>

        <p>
          But I wasn’t done yet. One year later, I packed my bags and moved to the U.S. to pursue 
          my Master’s in <b>Computer and Information Systems</b>. Now, I’m continuing my journey as a  
          <b> Software Engineer</b>, fueled by my love for building scalable systems, cloud computing, 
          and solving real-world problems—one line of code at a time.
        </p>

        <p className="about-moral"><i>Moral of the story?</i> Sometimes, your passion finds you when you least expect it.</p>
      </motion.div>
    </section>
  );
});

export default About;
