import React from 'react';
import 'aos/dist/aos.css';
import styles from './Projects.module.css';
import paivaTechImg from '../../assets/Paiva-Tech.png';
import watchItImg from '../../assets/Watch-It.jpeg';
import formBancoImg from '../../assets/FormBanco.png';
import jogoDaForcaImg from '../../assets/jogodaforca.png';
import siteReactImg from '../../assets/SiteReact.png';
import cotaMoedaImg from '../../assets/Cota-oMoeda.png';
const projects = [
  {
    name: 'Paiva-Tech',
    description: 'Marketplace que desenvolvi para tornar a experiência de compra mais simples, intuitiva e organizada.',
    image: paivaTechImg,
    url: 'https://github.com/paiva737/Paiva-Tech'
  },
  {
    name: 'Watch-It',
    description: 'Watch It permite aos usuários salvar seus filmes favoritos, navegar facilmente por categorias e faz recomendações de filmes e series, criando uma experiência personalizada e dinâmica',
    image: watchItImg,
    url: 'https://github.com/paiva737/Watch-It'
  },
  {
    name: 'Banco Digital',
    description: 'projeto que simula uma interface de banco digital, desenvolvendo páginas responsivas e interativas que oferecem uma experiência simples e eficiente para o usuário.',
    image: formBancoImg,
    url: 'https://github.com/paiva737/FormBanco'
  },
  {
    name: 'Jogo da Forca',
    description: 'Brincadeira do Jogo da forca da qual você tem que acertar a palavra oculta',
    image:  jogoDaForcaImg,
    url: 'https://github.com/paiva737/jogodaforca'
  },
  {
    name: 'Site React',
    description: 'projeto super interessante utilizando ReactJS, onde construí uma aplicação que permite cadastrar linguagens de programação como cards, com funcionalidades.',
    image: siteReactImg,
    url: 'https://github.com/paiva737/SiteReact'
  },
  {
    name: 'Cotação Moeda',
    description: 'Verifique cotações de moedas em tempo real.',
    image: cotaMoedaImg,
    url: 'https://github.com/paiva737/Cota-oMoeda'
  }
];

const Projects = () => {
  return (
    <section className={styles.projects} id="projects" data-aos-offset="200">
      <h2><span role="img" aria-label="foguete">🚀</span> Projetos em Destaque</h2>
      <div className={styles.underline}></div>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <a href={project.url} key={index} target="_blank"   data-aos="fade-up" rel="noopener noreferrer" className={styles.card}>
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <span className={styles.link}>Ver Projeto</span>
          </a>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <a
          href="https://github.com/paiva737?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver todos os repositórios
        </a>
      </div>
    </section>
  );
};

export default Projects;
