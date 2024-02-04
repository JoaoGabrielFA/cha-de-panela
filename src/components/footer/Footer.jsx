import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.info}>
      <div
        className={styles.casa}
        style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/001/200/294/non_2x/house-png.png)' }}
      ></div>
      <span className={styles.info_local}>Rua Honório Lemos Nº 56</span>
      <span className={styles.info_data}>20 de Abril</span>
    </footer>
  )
}

export default Footer;