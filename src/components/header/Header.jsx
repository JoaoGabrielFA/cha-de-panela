import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.header_title}>Chá da Dany e do Riquelme</span>
    </header>
  )
}

export default Header;