import React from 'react';
import styles from './Skills.module.css';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiBootstrap,
  SiMongodb,
  SiGit,
  SiGithub,
  SiExpress
} from 'react-icons/si';
import { FaTools } from 'react-icons/fa';

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <h2><FaTools /> Habilidades</h2>
      <div className={styles.underline}></div>
      <div
        className={styles.circle}
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="200"
      >
        <div className={styles.rotate}>
          <div className={styles.item}><div className={styles.iconWrapper}><SiHtml5 color="#E44D26" /><span className={styles.tooltip}>HTML5</span></div></div>
          <div className={styles.item}><div className={styles.iconWrapper}><SiCss3 color="#1572b6" /><span className={styles.tooltip}>CSS3</span></div></div>
          <div className={styles.item}><div className={styles.iconWrapper}><SiJavascript color="#F7DF1E" /><span className={styles.tooltip}>JavaScript</span></div></div>
          <div className={styles.item}><div className={styles.iconWrapper}><SiReact color="#61DAFB" /><span className={styles.tooltip}>React</span></div></div>
          <div className={styles.item}><div className={styles.iconWrapper}><SiTypescript color="#3178C6" /><span className={styles.tooltip}>TypeScript</span></div></div>
          <div className={styles.item}><div className={styles.iconWrapper}><SiNodedotjs color="#68A063" /><span className={styles.tooltip}>Node.js</span></div></div>
          <div className={styles.item}><div className={styles.iconWrapper}><SiBootstrap color="#7952B3" /><span className={styles.tooltip}>Bootstrap</span></div></div>
          <div className={styles.item}><div className={styles.iconWrapper}><SiMongodb color="#47A248" /><span className={styles.tooltip}>MongoDB</span></div></div>
          <div className={styles.item}><div className={styles.iconWrapper}><SiGit color="#F1502F" /><span className={styles.tooltip}>Git</span></div></div>
          <div className={styles.item}><div className={styles.iconWrapper}><SiGithub color="#ffffff" /><span className={styles.tooltip}>GitHub</span></div></div>
          <div className={styles.item}><div className={styles.iconWrapper}><SiExpress color="#ffffff" /><span className={styles.tooltip}>ExpressJS</span></div></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;