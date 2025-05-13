import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import minhaFoto from '../../assets/foto.jpeg';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.hero}>
        <div
          className={styles.image}
          {...(!isMobile && {
            'data-aos': 'fade-right',
            'data-aos-delay': '0',
          })}
        >
          <img src={minhaFoto} alt="Rafael Paiva" />
        </div>
        <div
          className={styles.text}
          {...(!isMobile && {
            'data-aos': 'fade-up',
            'data-aos-delay': '250',
          })}
        >
          <h1>Olá, eu sou Rafael Paiva</h1>
          <div className={styles.underline}></div>
          <p>
            Desenvolvedor Front-end focado em criar experiências modernas e responsivas.
          </p>
          <a 
            href="/curriculo-rafael-paiva.pdf" 
            download 
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            Baixar Currículo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
