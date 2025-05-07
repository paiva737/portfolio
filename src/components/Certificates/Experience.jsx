import React from 'react';
import styles from './Experience.module.css';
import 'aos/dist/aos.css';
import unijorgeLogo from '../../assets/logoUniJorge.jpeg';
import workandtravellogo from '../../assets/logoWorkAndTravel.png';
import infinityschool from '../../assets/logoInfinitySchool.png';
import aluralogo from '../../assets/logoAlura.jpeg';
import rocketseatlogo from '../../assets/logoRocketseat.png';


const experienceData = [
  {
    title: 'Centro Universitário Jorge Amado - UNIJORGE',
    period: 'Jan 2021 - Dez 2024',
    institution: 'Bacharel',
    description: 'Durante minha graduação em Ciência da Computação no Centro Universitário Jorge Amado (UNIJORGE), desenvolvi uma base sólida em lógica de programação, estrutura de dados, desenvolvimento web, banco de dados e inteligência artificial. Ao longo do curso, tive a oportunidade de aplicar os conhecimentos adquiridos em projetos práticos e acadêmicos, fortalecendo minha capacidade de resolver problemas, trabalhar em equipe e entregar soluções tecnológicas eficientes.',
    logo: unijorgeLogo,
  },
  {
    title: 'Work And Travel',
    period: 'Dez 2023 - Março 2024',
    institution: 'Intercâmbio',
    description: 'Participei do programa Work and Travel entre dezembro de 2023 e março de 2024, vivenciando uma imersão cultural e profissional nos Estados Unidos. Durante esse período, atuei em um ambiente de trabalho internacional, aprimorando significativamente minhas habilidades de comunicação em inglês, adaptabilidade e trabalho em equipe. A experiência contribuiu não apenas para meu crescimento pessoal, mas também ampliou minha visão profissional em contextos multiculturais.',
    logo: workandtravellogo,
  },
  {
    title: 'Programação FullStack IA',
    period: 'Maio 2025 - Maio 2026',
    institution: 'Infinity School',
    description: 'Atualmente estou em formação na Infinity School, onde estou aprofundando meus conhecimentos em desenvolvimento web e inteligência artificial. O programa abrange HTML, CSS, Logica da Programação, JavaScript, Python e fundamentos de IA, proporcionando uma base sólida tanto para o front-end quanto para o back-end. Mesmo ainda em andamento, essa formação tem ampliado minha visão técnica e me preparado para desenvolver soluções completas com foco em tecnologia moderna e inovação.',
    logo: infinityschool,
  },
  {
    title: 'Alura Education',
    period: '2024-2025',
    institution: 'Alura',
    description: 'Realizei diversos cursos na Alura, com foco em desenvolvimento web moderno. A formação abrangeu HTML, CSS, JavaScript, Bootstrap, Node.js, ReactJS e TypeScript, permitindo uma evolução progressiva e prática nas principais tecnologias do mercado. As trilhas oferecidas me ajudaram a consolidar uma base sólida em front-end e back-end, contribuindo diretamente para a qualidade dos projetos que desenvolvo.',
    logo: aluralogo,
  },
  {
    title: 'Rocketseat Education',
    period: '2023',
    institution: 'Rocketseat',
    description: 'Participei de formações e imersões na Rocketseat, com foco em tecnologias modernas para desenvolvimento web. Durante os cursos, aprofundei meus conhecimentos em Git, GitHub, JavaScript, CSS, HTML5 e React, explorando boas práticas de codificação, versionamento e criação de interfaces dinâmicas. A abordagem prática e direta da plataforma contribuiu significativamente para minha evolução como desenvolvedor.',
    logo: rocketseatlogo,
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
              <div className={styles.header}>
              <img src={item.logo} alt={item.title} className={styles.logo} />
               <h3>{item.title}</h3>
              </div>
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
