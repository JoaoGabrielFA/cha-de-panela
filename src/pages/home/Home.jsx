import React from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import styles from './Home.module.css';
import { FaHeart } from "react-icons/fa";

function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <span className={styles.text}>Bem vindos ao nosso&nbsp;
            <span className={styles.textPink}>Chá de Panela</span>
          </span>
          <div className={`${styles.image} ${styles.dany}`}></div>
          <div className={`${styles.image} ${styles.riquelme}`}></div>
          <FaHeart size={64} />
        </section>
        <span className={styles.textMessage}>Contamos com a sua presença, no dia 20 de abril, na rua Honório Lemos Nº56</span>
        <a className={styles.seeMore}>Ver Produtos</a>
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default Home;