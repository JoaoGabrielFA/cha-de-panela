import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

function Login() {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('nome_do_convidado_danyeriquelme', nome);
    navigate('/home');
  };
  

  return (
    <section className={styles.login}>
      <form className={styles.login_form} onSubmit={handleSubmit}>
        <span className={styles.login_form_title}>Bem Vindo</span>
        <input
          className={styles.login_form_input}
          type='text'
          placeholder='QUAL O SEU NOME?'
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          autoComplete='username'
        ></input>
        <button className={styles.login_form_button} type='submit'>
          ENTRAR
        </button>
      </form>
    </section>
  );
}

export default Login;
