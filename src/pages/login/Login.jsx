import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

function Login() {
  const navigate = useNavigate();

  const check = {
    check1: {
      nome: 'teste', 
      senha: 'teste123'
    }
  }

  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    let acessoPermitido = false;
  
    for (const key in check) {
      if (check[key].nome === nome && check[key].senha === senha) {
        acessoPermitido = true;
        navigate('/home');
        break; 
      }
    }
  
    if (!acessoPermitido) {
      alert('ACESSO NEGADO');
    }
  };
  

  return (
    <section className={styles.login}>
      <form className={styles.login_form} onSubmit={handleSubmit}>
        <span className={styles.login_form_title}>Bem Vindo</span>
        <input
          className={styles.login_form_input}
          type='text'
          placeholder='Nome'
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          autoComplete='username'
        ></input>
        <input
          className={styles.login_form_input}
          type='password'
          placeholder='Senha'
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          autoComplete='current-password'
        ></input>
        <button className={styles.login_form_button} type='submit'>
          ENTRAR
        </button>
      </form>
    </section>
  );
}

export default Login;
