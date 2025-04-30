import React from 'react';
import styles from './Certificates.module.css';

const Certificates = () => {
  return (
    <section className={styles.certificates}>
      <h2>Certificados & Cursos</h2>
      <div className={styles.grid}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className={styles.card}>
            <h3>Curso {index + 1}</h3>
            <p>Alura</p>
            <a href="/" target="_blank" rel="noopener noreferrer">Ver Certificado</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
