import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import styles from './Produtos.module.css';

function Produtos() {
  return (
    <>
      <Header />
      <main className={styles.produtos}>
        <div className={styles.produto}>
          <div className={styles.produto_img}></div>
          <div className={styles.produto_dados}>
            <span className={styles.produto_titulo}>KIT 2 Cadeiras</span>
            <span className={styles.produto_loja}>por Magazine Luiza</span>
            <span className={styles.produto_avista}>R$ 278,70</span>
            <span className={styles.produto_parcelado}>ou R$ 316,71 em 3x de R$ 105,57 sem juros</span>
            <Link className={styles.produto_link} target='_blank' to={'https://www.magazineluiza.com.br/kit-2-cadeiras-reforcadas-estofadas-mesa-cozinha-luxo-linho-balaqui-decor/p/dg77bhd907/mo/mcad/'}>Ver Produto</Link>
          </div>
        </div>
      </main>
    </>

  )
}

export default Produtos;