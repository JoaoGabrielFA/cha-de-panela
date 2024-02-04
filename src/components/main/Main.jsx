import Footer from '../footer/Footer';
import Header from '../header/Header';
import styles from './Main.module.css';

function Main() {
  const casal = {
    dany: {
      nome: 'Dany',
      img: 'https://scontent.fpoa34-1.fna.fbcdn.net/v/t1.15752-9/418928085_353937430901712_7016147913901746622_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHlNdQbruwYXo4Vx0t_o_pEPxtUBxpxUm0_G1QHGnFSbfDrX5gmYkEjx-hjqrlL70j0V7JClAER85aYnM3JosOz&_nc_ohc=FE5T5mMkdXIAX82A44O&_nc_ht=scontent.fpoa34-1.fna&oh=03_AdRg4Kx6jDNd7aZJtj-Jikf_NkpK1vUuZ_er2IDOQQLlrg&oe=65E496E3'
    },
    riquelme: {
      nome: 'Riquelme',
      img: 'https://scontent.fpoa34-1.fna.fbcdn.net/v/t1.15752-9/418977279_1115905559585511_8176185184151689397_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGo6ZkPvWdEGr9clloxciV532PBl4KKwdrfY8GXgorB2oY_H7OGoIM9w5QkR-riFNGCpuQIPQ9B5XKOKz1LJYV_&_nc_ohc=5FsLehyzdwUAX883moO&_nc_ht=scontent.fpoa34-1.fna&oh=03_AdQRe6SXJ3fwIuAe23V3dLh4l9KTutNdzvFvcAkMUpJRzg&oe=65E4A7E2'
    }
  };

  return (
    <>
    <Header/>
    <main className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerContent_card}>
          <div className={styles.bannerContent_card_img}
            style={{ backgroundImage: `url(${casal.dany.img})` }}
          ></div>
          <div className={styles.bannerContent_card_label}>{casal.dany.nome}</div>
        </div>
        <div className={styles.bannerContent_title}>Chá de Panela</div>
        <div className={styles.bannerContent_card}>
          <div className={styles.bannerContent_card_img}
            style={{ backgroundImage: `url(${casal.riquelme.img})` }}
          ></div>
          <div className={styles.bannerContent_card_label}>{casal.riquelme.nome}</div>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  )
}

export default Main;