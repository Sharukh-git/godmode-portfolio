import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      {/* Animated Title */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        viewport={{ once: true }} 
        className="projects-title"
      >
        Turning Ideas into Code
      </motion.h2>

      {/* Project Cards Container */}
      <div className="projects-grid">
        {[
          {
            title: "Food Recipe Book Website",
            description: "A full-stack recipe website built using React, Django, and AWS. Deployed on EC2, S3, with CloudFront CDN.",
            tech: "React | Django | AWS",
          },
          {
            title: "Expense Tracker App",
            description: "A desktop app to track expenses with JavaFX and SQLite, featuring interactive graphs and reports.",
            tech: "JavaFX | SQLite",
          },
          {
            title: "Portfolio Website",
            description: "Built using React, hosted on Netlify with AWS CloudFront for performance optimization.",
            tech: "React | AWS | Netlify",
          }
        ].map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: index * 0.2 }} 
            viewport={{ once: true }} 
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-tech">{project.tech}</p>
            <div className="project-links">
              <button className="btn" disabled>
                GitHub
              </button>
            </div>
          </motion.div>
        ))}

        {/* "More Projects Coming Soon" Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.6 }} 
          viewport={{ once: true }} 
          className="project-card coming-soon"
        >
          <h3>🚧 More Projects Coming Soon 🚧</h3>
          <p className="project-description">
            Exciting new projects are in development. Stay tuned for updates!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
