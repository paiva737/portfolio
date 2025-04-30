import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2>Projetos em Destaque</h2>
      <div className={styles.grid}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className={styles.card}>
            <h3>Projeto {index + 1}</h3>
            <p>Descrição breve do projeto {index + 1}.</p>
            <a href="/">Ver Projeto</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
