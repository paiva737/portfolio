import React from 'react';
import styles from './DirectContact.module.css';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const DirectContact = () => {
  return (
    <motion.section
      className={styles.direct}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Entre em contato diretamente:</h2>
      <div className={styles.icons}>
        <motion.a
          href="https://api.whatsapp.com/send?phone=5571992854808&text=Ol%C3%A1%20Rafael%2C%20Me%20fale%20mais%20sobre%20voc%C3%AA"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaWhatsapp />
        </motion.a>
        <motion.a
          href="mailto:rafaelpaiva636@gmail.com?subject=Oferta de Trabalho"
          whileHover={{ scale: 1.2 }}
        >
          <FaEnvelope />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/rafael-paiva-472531235/?locale=en_US"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/paiva737"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaGithub />
        </motion.a>
      </div>
    </motion.section>
  );
};

export default DirectContact;
