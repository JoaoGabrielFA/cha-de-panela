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
          <div className={`${styles.image} ${styles.dany}`}></div>
          <div className={`${styles.image} ${styles.riquelme}`}></div>
          <span className={styles.text}>Bem vindos ao nosso&nbsp;
            <span className={styles.textPink}>Chá de Panela</span>
          </span>
          <FaHeart size={64}/>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home;