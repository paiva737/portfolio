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
} from 'react-icons/si';
import { FaTools } from 'react-icons/fa'; 
import 'aos/dist/aos.css';

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <h2 data-aos="fade-up" data-aos-offset="300" data-aos-duration="800">
      <FaTools style={{ marginRight: '8px' }} />
        Habilidades
      </h2>
      <div className={styles.underline} data-aos="fade-up" data-aos-offset="300" data-aos-duration="800"></div>

      <div className={styles.circle} data-aos="zoom-in" data-aos-offset="300" data-aos-duration="1000">
        <div className={styles.rotate}>
          <div className={styles.item}><SiHtml5 color="#E44D26" title="HTML5"/></div>
          <div className={styles.item}><SiCss3 color="#1572b6" title="CSS3" /></div>
          <div className={styles.item}><SiJavascript color="#F7DF1E" title="JavaScript" /></div>
          <div className={styles.item}><SiReact color="#61DAFB" title="React" /></div>
          <div className={styles.item}><SiTypescript color="#3178C6" title="TypeScript" /></div>
          <div className={styles.item}><SiNodedotjs color="#68A063" title="Node.js" /></div>
          <div className={styles.item}><SiBootstrap color="#7952B3" title="Bootstrap" /></div>
          <div className={styles.item}><SiMongodb color="#47A248" title="MongoDB" /></div>
        </div>
      </div>
    </section>
  );
};

// sadasajdiajsia
export default Skills;
