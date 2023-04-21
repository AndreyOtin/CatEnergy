import styles from './promo.module.scss';
import catBc from '../../assets/img/index-background-mobile.webp';
import can from '../../assets/img/index-can-mobile.png';

function Promo() {
  return (
    <section className={styles.promo}>
      <div className={styles.ibg}>
        <img src={catBc} alt="cat"/>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Функциональное питание для котов</h2>
          <p className={styles.text}>Занялся собой? Займись котом!</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.bottomPhoto}>
          <img src={can} alt="can"/>
        </div>
        <a className={styles.link} href="#todo">
          Подобрать программу
        </a>
      </div>
    </section>
  );
}

export default Promo;
