import { useState } from 'react';
import styles from './Header.module.css';
import SandwichMenu from '../sandwich/SandwichMenu';
import { IoBed } from "react-icons/io5";
import { FaToilet, FaCouch } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { Link } from 'react-router-dom';

function Header() {
  const [linksCozinha, setLinksCozinha] = useState(false);
  const [linksSala, setLinksSala] = useState(false);

  const toggleCozinha = () => {
    setLinksCozinha(!linksCozinha);
    setLinksSala(false);
  };

  const toggleSala = () => {
    setLinksCozinha(false);
    setLinksSala(!linksSala);
  };

  const [active, setActive] = useState(false);

  const handlerButton = () => {
    setActive(!active);
  }

  return (
    <header className={`${styles.header} ${active ? styles.active : ''}`}>
      <div className={`${styles.sandwich} ${active ? styles.active : ''}`}>
        <div className={`${styles.sandwichButton} ${active ? styles.active : ''}`} onClick={handlerButton}></div>
      </div>
      <div className={`${styles.categorias} ${active ? styles.active : ''}`}>
        <div className={styles.categoria} onClick={toggleCozinha}>
          COZINHA
          {linksCozinha && (
            <>
              <Link to="/produtos">Ver Todos</Link>
              <Link to="/produtos">Talheres</Link>
              <Link to="/produtos">Potes</Link>
              <Link to="/produtos">Panelas</Link>
            </>
          )}
        </div>

        <div className={styles.categoria} onClick={toggleSala}>
          SALA
          {linksSala && (
            <>
              <Link to="/produtos">Ver Todos</Link>
              <Link to="/produtos">Tapetes</Link>
              <Link to="/produtos">Almofadas</Link>
              <Link to="/produtos">Enfeites</Link>
            </>
          )}
        </div>
      </div>
      {/* <div className={`${styles.categories} ${active ? styles.active : ''}`}>
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
          <span>Sala</span>
        </div>
        <div className={styles.category}>
          <ImSpoonKnife />
          <span>Cozinha</span>
        </div>
      </div> */}
    </header>
  )
}

export default Header;