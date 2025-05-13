import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Contact.module.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 300,
      easing: 'ease-in-out',
      once: true,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <section className={styles.contact} id="contact" data-aos="fade-up">
      <h2>Contato</h2>
      <form action="https://formsubmit.co/rafaelpaiva636@gmail.com" method="POST">
        <div className={styles.inputWrapper}>
          <input type="text" name="name" placeholder="Nome" required />
        </div>
        <div className={styles.inputWrapper}>
          <input type="text" name="Subject" placeholder="Assunto" required />
        </div>
        <div className={styles.inputWrapper}>
          <textarea name="message" placeholder="Mensagem" rows="5" required></textarea>
        </div>

        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="http://localhost:3000/#/obrigado" />
        
        <button type="submit">Enviar</button>

      </form>
    </section>
  );
};

export default Contact;
