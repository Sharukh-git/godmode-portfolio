import React from 'react';
import '../styles/TechStack.css';

const techStackData = [
  { name: 'Java', icon: '/tech-icons/java.png' },
  { name: 'Spring Boot', icon: '/tech-icons/springboot.png' },
  { name: 'AWS', icon: '/tech-icons/aws.png' },
  { name: 'React', icon: '/tech-icons/react.png' },
  { name: 'Docker', icon: '/tech-icons/docker.png' },
  { name: 'SQL', icon: '/tech-icons/sql.png' },
  { name: 'Python', icon: '/tech-icons/python.png' },
  { name: 'Git', icon: '/tech-icons/git.png' },
];

const TechStack = () => {
  return (
    <section id="techstack" className="techstack-container">
      <h2 className="techstack-title">Tech Stack</h2>
      <div className="techstack-grid">
        {techStackData.map((tech) => (
          <div key={tech.name} className="techstack-item">
            <img src={tech.icon} alt={tech.name} className="techstack-icon" />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
