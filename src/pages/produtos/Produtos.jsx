import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import styles from './Produtos.module.css';

function Produtos() {
  return (
    <>
      <Header />
      <main className={styles.produtos}>

        <span className={styles.produtos_titulo}>TODOS OS PRODUTOS</span>

        <div className={styles.produtoT}>
          <div className={styles.produtoT_img} style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/41G3itFxggL._AC_SX425_.jpg')`}}></div>
          <span className={styles.produtoT_nome}>FACA</span>
        </div>

        {/* <div className={styles.produto}>
          <div className={styles.produto_img} https://a-static.mlcdn.com.br/800x560/kit-2-cadeiras-reforcadas-estofadas-mesa-cozinha-luxo-linho-balaqui-decor/balaquiestofadosltda/15883002572/0c8eed182060d51829a03c5bb1b0e7b8.jpeg')` }}></div>
          <div className={styles.produto_dados}>
            <span className={styles.produto_titulo}>KIT 2 Cadeiras</span>
            <span className={styles.produto_loja}>por Magazine Luiza</span>
            <span className={styles.produto_avista}>R$278,70</span>
            <span className={styles.produto_parcelado}>ou R$ 316,71 em 3x de R$ 105,57 sem juros</span>
            <Link className={styles.produto_link} target='_blank' to={'https://www.magazineluiza.com.br/kit-2-cadeiras-reforcadas-estofadas-mesa-cozinha-luxo-linho-balaqui-decor/p/dg77bhd907/mo/mcad/'}>Ver Produto</Link>
          </div>
        </div>

        <div className={styles.produto}>
          <div className={styles.produto_img} style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/71S5pC0KigL._AC_SX425_.jpg')` }}></div>
          <div className={styles.produto_dados}>
            <span className={styles.produto_titulo}>Torneira para Pia de Cozinha</span>
            <span className={styles.produto_loja}>por Amazon</span>
            <span className={styles.produto_avista}>R$209,90</span>
            <span className={styles.produto_parcelado}>em até 4x R$ 52,49 sem juros</span>
            <Link className={styles.produto_link} target='_blank' to={'https://www.amazon.com.br/Torneira-Cozinha-Docol-00801306-Cromado/dp/B0792ND5FD/ref=asc_df_B0792ND5FD/?tag=googleshopp00-20&linkCode=df0&hvadid=379707889890&hvpos=&hvnetw=g&hvrand=5456916210847802054&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031419&hvtargid=pla-810604235693&psc=1&mcid=5073fe3ed684304f9477929582ea3b2c'}>Ver Produto</Link>
          </div>
        </div> */}
      </main>
    </>

  )
}

export default Produtos;