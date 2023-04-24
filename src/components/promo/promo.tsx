
import styles from './promo.module.scss';
import catBc from '../../assets/img/index-background-mobile.webp';
import can from '../../assets/img/index-can.png.png';
import canTabl from '../../assets/img/index-can.png.png';
import clsx from 'clsx';
import useResponsive from '../../hooks/use-responsive';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts/enum';

function Promo() {
  const { isMobile, isPC } = useResponsive();

  return (
    <section className={styles.promo}>
      <div className={clsx(styles.container)}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Функциональное питание для котов</h2>
          <p className={styles.text}>Занялся собой? Займись котом!</p>
          <Link className={clsx(styles.link)} to={AppRoute.Program}>
            Подобрать программу
          </Link>
        </div>
        {(isPC || isMobile) && (
          <div className={styles.upPhoto}>
            <img src={catBc} alt="cat" />
          </div>
        )}
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
      </div>
    </section>
  );
}

export default Promo;
