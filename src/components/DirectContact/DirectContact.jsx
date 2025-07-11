import React, { useEffect, useState } from 'react';
import styles from './DirectContact.module.css';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const DirectContact = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const MotionSection = isMobile ? 'section' : motion.section;
  const MotionLink = isMobile ? 'a' : motion.a;

  return (
    <MotionSection
      className={styles.direct}
      {...(!isMobile && {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true }
      })}
    >
      <h2>Entre em contato diretamente:</h2>
      <div className={styles.icons}>
        <MotionLink
          href="https://api.whatsapp.com/send?phone=5571992854808&text=Ol%C3%A1%20Rafael%2C%20Me%20fale%20mais%20sobre%20voc%C3%AA"
          target="_blank"
          rel="noopener noreferrer"
          {...(!isMobile && { whileHover: { scale: 1.2 } })}
        >
          <FaWhatsapp />
        </MotionLink>
        <MotionLink
          href="mailto:rafaelpaiva636@gmail.com?subject=Oferta de Trabalho"
          {...(!isMobile && { whileHover: { scale: 1.2 } })}
        >
          <FaEnvelope />
        </MotionLink>
        <MotionLink
          href="https://www.linkedin.com/in/rafael-paiva-472531235/?locale=en_US"
          target="_blank"
          rel="noopener noreferrer"
          {...(!isMobile && { whileHover: { scale: 1.2 } })}
        >
          <FaLinkedin />
        </MotionLink>
        <MotionLink
          href="https://github.com/paiva737"
          target="_blank"
          rel="noopener noreferrer"
          {...(!isMobile && { whileHover: { scale: 1.2 } })}
        >
          <FaGithub />
        </MotionLink>
      </div>
    </MotionSection>
  );
};

export default DirectContact;
