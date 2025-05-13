import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Obrigado.module.css';

const Obrigado = () => {
  return (
    <section className={styles.obrigado}>
      <h2>Mensagem enviada com sucesso!</h2>
      <p>Obrigado pelo contato. Em breve retornarei 🙂</p>
      <Link to="/" className={styles.button}>Voltar para o início</Link>
    </section>
  );
};

export default Obrigado;
