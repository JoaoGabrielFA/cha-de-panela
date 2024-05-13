import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import styles from './Produtos.module.css';
import data from '../../data/api.json';
import { IoBed } from "react-icons/io5";
import { FaKitchenSet, FaBaby } from "react-icons/fa6";
import { FaToilet, FaBabyCarriage } from "react-icons/fa";
import { useState } from 'react';
import { GiBabyBottle } from "react-icons/gi";
import { MdBabyChangingStation } from "react-icons/md";

function Produtos() {
  const [categoria, setCategoria] = useState('quarto');
  const [panela, setPanela] = useState(true);
  const itens = data.produtos;

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
                if (item.categoria === categoria) {
                  return (
                    <div key={id} className={styles.linha}>
                      <span>-{item.nome}</span>
                      <span>{item.nomes.length}</span>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.folder}>
        <div className={styles.folderButtons}>
          <div className={`${styles.folderButton} ${panela ? '' : styles.desactive}`} onClick={() => setPanela(true)}>Chá de Panela</div>
          <div className={`${styles.folderButton} ${panela ? styles.desactive : ''}`} onClick={() => setPanela(false)}>Chá de Fralda</div>
        </div>
        {panela ?
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
          :
          <div className={styles.buttons}>
            <div className={styles.button}>
              <MdBabyChangingStation onClick={() => setCategoria('higiene')} />
              <span>Higiene</span>
            </div>
            <div className={styles.button}>
              <FaBaby onClick={() => setCategoria('vestuario')} />
              <span>Vestuário</span>
            </div>
            <div className={styles.button}>
              <GiBabyBottle onClick={() => setCategoria('acessorios')} />
              <span>Acessórios</span>
            </div>
          </div>
        }
      </div>
    </main>
  )
}

export default Produtos;
