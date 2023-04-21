import clsx from 'clsx';
import styles from './features.module.scss';

function Features() {
  return (
    <section className={styles.fearures}>
      <div className={styles.container}>
        <h2 className={styles.title}>Как это работет</h2>
        <ul className={styles.list}>
          <li className={clsx(styles.item, styles.item_leaf)}>
            Функциональное питание содержит только полезные питательные
            вещества.
          </li>
          <li className={clsx(styles.item, styles.item_can)}>
            Выпускается в виде порошка, который нужно лишь залить кипятком и
            готово.
          </li>
          <li className={clsx(styles.item, styles.item_fork)}>
            Замените один-два приема обычной еды на наше функциональное питание.
          </li>
          <li className={clsx(styles.item, styles.item_time)}>
            Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Features;
