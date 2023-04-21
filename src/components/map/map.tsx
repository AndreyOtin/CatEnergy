import clsx from 'clsx';
import styles from './map.module.scss';

function Map() {
  return (
    <section>
      <div className={clsx(styles.container, styles.container_mod)}>
        <h2 className={styles.title}>Приглашаем к содрудничесву дилеров</h2>
        <p className={styles.address}>
          ул. Большая Конюшенная, д. 19/8 Санкт-Петербург
        </p>
      </div>
      <div className={styles.map}></div>
    </section>
  );
}

export default Map;
