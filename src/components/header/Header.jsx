import { useState } from 'react';
import styles from './Header.module.css';
import SandwichMenu from '../sandwich/SandwichMenu';
import { IoBed } from "react-icons/io5";
import { FaToilet } from "react-icons/fa";

function Header() {
  const [active, setActive] = useState(false);

  const handlerButton = () => {
    setActive(!active);
  }

  return (
    <header className={`${styles.header} ${active ? styles.active : ''}`}>
      <div className={`${styles.sandwich} ${active ? styles.active : ''}`}>
        <div className={`${styles.sandwichButton} ${active ? styles.active : ''}`} onClick={handlerButton}></div>
      </div>
      <div className={styles.categories}>
        <div className={styles.category}>
          <IoBed />
          <span>Quarto</span>
        </div>
        <div className={styles.category}>
          <FaToilet />
          <span>Banheiro</span>
        </div>
        <div className={styles.category}>
          <FaCouch />
          <span>Quarto</span>
        </div>
        <div className={styles.category}>
          <IoBed />
          <span>Quarto</span>
        </div>
        <div className={styles.category}>
          <IoBed />
          <span>Quarto</span>
        </div>
        <div className={styles.category}>
          <IoBed />
          <span>Quarto</span>
        </div>
      </div>
    </header>
  )
}

export default Header;