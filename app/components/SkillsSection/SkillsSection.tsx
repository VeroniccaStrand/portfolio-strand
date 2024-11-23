'use client';
import React, { useState, useEffect } from 'react';
import styles from './SkillsSection.module.css';

const skillsData = [
  {
    name: 'JavaScript',
    description:
      'I learned JavaScript through building dynamic applications and solving complex problems.',
    repoLink: 'https://github.com/your-repo/javascript-skill',
  },
  {
    name: 'React',
    description:
      'React taught me how to structure and manage components effectively in web applications.',
    repoLink: 'https://github.com/your-repo/react-skill',
  },
  {
    name: 'Java',
    description:
      'Java provided me with a solid foundation in object-oriented programming and robust application development.',
    repoLink: 'https://github.com/your-repo/java-skill',
  },
  {
    name: 'Node.js',
    description:
      'Node.js enabled me to build scalable backend services and understand asynchronous programming.',
    repoLink: 'https://github.com/your-repo/node-skill',
  },
  {
    name: 'API Development',
    description:
      'I learned to create RESTful and GraphQL APIs for efficient data communication between clients and servers.',
    repoLink: 'https://github.com/your-repo/api-skill',
  },
  {
    name: 'MongoDB',
    description:
      'Using MongoDB, I built flexible NoSQL databases and optimized queries for high-performance applications.',
    repoLink: 'https://github.com/your-repo/mongodb-skill',
  },
];

const SkillsSection = () => {
  const [isScrollActive, setIsScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrollActive(scrollY > 90);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.skillsSection}>
      <div
        className={`${styles.diagonalBackground} ${
          isScrollActive ? styles.isActive : ''
        }`}
      >
        <div
          className={`${styles.skillList}   ${
            isScrollActive ? styles.isActive : ''
          }`}
        >
          {skillsData.map((skill, index) => (
            <div key={index} className={`${styles.skillCard}`}>
              <h3
                className={`text-xl font-body font-bold text-background ${styles.skillTitle}`}
              >
                {skill.name}
              </h3>
              <p
                className={`text-neutral desktop:text-lg ${styles.skillDescription}`}
              >
                {skill.description}
              </p>
              <a
                href={skill.repoLink}
                target='_blank'
                rel='noopener noreferrer'
                className={`${styles.repoLink}`}
              >
                View Repository
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
