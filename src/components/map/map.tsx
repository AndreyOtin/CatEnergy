import clsx from 'clsx';
import styles from './map.module.scss';
import useResponsive from '../../hooks/use-responsive';

function Map() {
  const { isPC } = useResponsive();

  return (
    <section>
      <div className={clsx(styles.container)}>
        <h2 className={clsx(styles.title, isPC && styles.hidden)}>
          Приглашаем к сотрудничеству дилеров
        </h2>
        {isPC || (
          <p className={styles.address}>
            ул. Большая Конюшенная, д. 19/8 Санкт-Петербург
          </p>
        )}
      </div>
      <div className={styles.map}></div>
    </section>
  );
}

export default Map;
