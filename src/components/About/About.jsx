import React from 'react';
import styles from './About.module.css';
import fotoFormatura from '../../assets/fotoFormatura.JPG';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaUserTie } from 'react-icons/fa';
AOS.init();

const About = () => {
  return (
<section
  className={`${styles.about} ${styles.aboutSection}`}
 
  data-aos-offset="300"
  data-aos-duration="1000"
  data-aos-easing="ease-in-out"
  data-aos-anchor-placement="top-bottom"
>
  <div className={styles.container}>
    <div
      className={styles.text}
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-duration="1000"
    >
      

      <h2><FaUserTie style={{ marginRight: "8px" }} /> Sobre mim</h2>
      <div className={styles.underline}></div>
      <p>
        Sou um desenvolvedor web de 22 anos, comprometido e focado em entregar resultados de alta qualidade.
        A cada dia me encontro mais na área de desenvolvimento web, onde tenho investido meu tempo e energia
        para aprimorar minhas habilidades e conhecimentos. Sou uma pessoa atenciosa, responsável e organizada,
        sempre pronta para encarar novos desafios e evoluir profissionalmente.
      </p>
      <p>
        Minha meta é atuar como desenvolvedor web, onde poderei aplicar estratégias eficazes, aprimorar minhas
        habilidades em programação e continuar a crescer como profissional e estudante. Estou disposto a me
        dedicar totalmente e a fazer o que for necessário para alcançar resultados excepcionais. Busco
        oportunidades que me permitam evoluir e contribuir de forma significativa para o sucesso da equipe e
        dos projetos em que estiver envolvido.
      </p>
    </div>

    <div
      className={styles.image}
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-duration="1000"
    >
      <img src={fotoFormatura} alt="Rafael Paiva formado" />
    </div>
  </div>
</section>

  
  );
};

export default About;
