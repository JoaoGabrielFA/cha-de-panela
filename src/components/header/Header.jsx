import styles from './Header.module.css';
import SandwichMenu from '../sandwich/SandwichMenu';

function Header() {
  return (
    <header className={styles.header}>
      {/* <span className={styles.header_title}>Chá da Dany e do Riquelme</span> */}
    <SandwichMenu/>
    </header>
  )
}

export default Header;