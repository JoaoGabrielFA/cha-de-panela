import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import styles from './Produtos.module.css';
import data from '../../data/list.json';
import { IoBed } from "react-icons/io5";
import { FaKitchenSet } from "react-icons/fa6";
import { FaToilet } from "react-icons/fa";
import { useState } from 'react';

function Produtos() {
  const [categoria, setCategoria] = useState('quarto');
  const itens = Object.keys(data[categoria]);

  return (
    <main className={styles.main}>
      <div className={styles.moldura}>
        <div className={styles.paper}>
          <div className={styles.pattern}>
            <div className={styles.content}>
              {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
              <br />
              <br />
              {itens.map((item, id) => {
                const itemData = data[categoria][item];
                return (
                  <div key={id} className={styles.linha}>
                    <span>-{item}</span>
                    <span>{itemData.likes}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.button}>
          <IoBed onClick={() => setCategoria('quarto')} />
          <span>Quarto</span>
        </div>
        <div className={styles.button}>
          <FaKitchenSet onClick={() => setCategoria('cozinha')} />
          <span>Cozinha</span>
        </div>
        <div className={styles.button}>
          <FaToilet onClick={() => setCategoria('banheiro')} />
          <span>Banheiro</span>
        </div>
        
      </div>
      {/* <Header />
    <main className={styles.produtos}>
      <span className={styles.produtos_titulo}>Todos os produtos em '{categoria.toUpperCase()}'</span>
      {itens.map((item, id) => {
        return (
          <div className={styles.produto}>
            <span className={styles.produto_nome} key={id}>{item}</span>
            <span>{item.likes}</span>
          </div>
        )
      })}
    </main> */}
    </main>
  )
}

export default Produtos;