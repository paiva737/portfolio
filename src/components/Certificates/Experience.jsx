import React from 'react';
import styles from './Experience.module.css';
import 'aos/dist/aos.css';

const experienceData = [
  {
    title: 'Desenvolvedor Front-end - Freelancer',
    period: '2023 - Atual',
    institution: 'Projetos Independentes',
    description: 'Atuação em projetos pessoais e freelance utilizando React, TypeScript, Node.js e MongoDB.'
  },
  {
    title: 'Formação em Ciência da Computação',
    period: '2020 - 2024',
    institution: 'Universidade X',
    description: 'Curso superior com foco em desenvolvimento web, estruturas de dados, banco de dados e inteligência artificial.'
  },
  {
    title: 'Curso React Avançado',
    period: '2023',
    institution: 'Alura',
    description: 'Curso focado em React Hooks, context API, roteamento e testes.'
  },
  {
    title: 'Bootcamp Fullstack JavaScript',
    period: '2022',
    institution: 'Rocketseat',
    description: 'Imersão prática em tecnologias modernas com foco em desenvolvimento fullstack.'
  }
];

const Experience = () => {
  return (
    <section className={styles.timeline} id="experience">
      <h2><span role="img" aria-label="livros">📚</span> Experiência e Educação</h2>
     
      <div className={styles.items}>
        {experienceData.map((item, index) => (
          <div
            key={index}
            className={styles.item}
            data-aos="fade-up"
            data-aos-offset="200"
          >
           
            <div className={styles.content}>
              <h3>{item.title}</h3>
              <span className={styles.period}>{item.period}</span>
              <p className={styles.institution}>{item.institution}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
