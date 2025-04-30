import React from 'react';
import styles from './Hero.module.css';
import minhaFoto from '../../assets/foto.jpeg';

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.hero}>
        <div className={styles.image} data-aos="fade-right" data-aos-delay= "0">
          <img src={minhaFoto} alt="Rafael Paiva" />
        </div>
        <div className={styles.text} data-aos="fade-up" data-aos-delay = "250">
          <h1>Olá, eu sou Rafael Paiva</h1>
          <div className={styles.underline}></div>
          <p>
            Desenvolvedor Front-end focado em criar experiências modernas e responsivas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
