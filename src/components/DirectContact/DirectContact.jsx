import React from 'react';
import styles from './DirectContact.module.css';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const DirectContact = () => {
  return (
    <section className={styles.direct}>
      <h2>Entre em contato diretamente:</h2>
      <div className={styles.icons}>
        <a href="https://api.whatsapp.com/send?phone=5571992854808&text=Ol%C3%A1%20Rafael%2C%20Me%20fale%20mais%20sobre%20voc%C3%AA" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="mailto:rafaelpaiva636@gmail.com?subject=Oferta de Trabalho">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/rafael-paiva-472531235/?locale=en_US" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/paiva737"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default DirectContact;
