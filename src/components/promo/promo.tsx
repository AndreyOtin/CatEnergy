import styles from './promo.module.scss';
import catBc from '../../assets/img/index-background-mobile.webp';
import can from '../../assets/img/index-can-mobile.png';
import canTabl from '../../assets/img/index-can-tablet.png';
import clsx from 'clsx';

function Promo() {
  return (
    <section className={styles.promo}>
      <div className={styles.ibg}>
        <img src={catBc} alt="cat" />
        <div className={styles.textContent}>
          <h2 className={styles.title}>Функциональное питание для котов</h2>
          <p className={styles.text}>Занялся собой? Займись котом!</p>
        </div>
      </div>
      <div className={styles.bottomPhoto}>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`${canTabl}`}
            src={canTabl}
          />
          <source media="(min-width: 320px)" srcSet={`${can}`} src={can} />
          <img src={can} alt="can" />
        </picture>
      </div>
      <div className={clsx(styles.container, styles.container_mod)}>
        <a className={styles.link} href="#todo">
          Подобрать программу
        </a>
      </div>
    </section>
  );
}

export default Promo;
