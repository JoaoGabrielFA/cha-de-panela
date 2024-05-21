import React from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import styles from './Home.module.css';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* <Header /> */}
      <main className={styles.main}>
        <section className={styles.banner}>
          <span className={styles.text}>{localStorage.getItem('nome_do_convidado_danyeriquelme').split(' ')[0]}, Bem vindo(a) ao nosso&nbsp;
            <span className={styles.textPink}>Chá de Panela</span>
          </span>
          <div className={`${styles.image} ${styles.dany}`}></div>
          <div className={`${styles.image} ${styles.riquelme}`}></div>
          <FaHeart size={64} />
        </section>
        <span className={styles.textMessage}>Contamos com a sua presença, no dia 20 de abril, na rua Honório Lemos Nº56</span>
        <Link className={styles.seeMore} to={'/produtos/todos'}>VER PRODUTOS</Link>
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default Home;