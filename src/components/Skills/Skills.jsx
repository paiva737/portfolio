import React from 'react';
import styles from './Skills.module.css';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, SiNodedotjs, SiBootstrap, SiMongodb } from 'react-icons/si';

const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2>Habilidades</h2>
      <div className={styles.icons}>
        <SiHtml5 title="HTML5"  color='#E44D26'/>
        <SiCss3 title="CSS3"  color='#1572b6'/>
        <SiJavascript title="JavaScript" color='#F7DF1E' />
        <SiReact title="React"  color='#61DAFB'/>
        <SiTypescript title="TypeScript" color='#3178C6' />
        <SiNodedotjs title="Node.js" color='#68A063'/>
        <SiBootstrap title="Bootstrap" color='#7952B3' />
        <SiMongodb title="MongoDB" color='#47A248'/>
      </div>
    </section>
  );
};

export default Skills;
