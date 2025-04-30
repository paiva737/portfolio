import React from 'react';
import styles from './Hero.module.css';
import minhaFoto from '../../assets/foto.jpeg';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <img src={minhaFoto} alt="Rafael Paiva" />
      </div>
      <div className={styles.text}>
        <h1>Olá, eu sou Rafael</h1>
        <p>
          Desenvolvedor Front-end focado em criar experiências modernas e responsivas.
        </p>
      </div>
    </section>
  );
};

export default Hero;
