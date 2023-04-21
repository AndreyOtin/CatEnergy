import clsx from 'clsx';
import beforeImg from '../../assets/img/before-mobile.webp';
import styles from './example.module.scss';
import { useState } from 'react';

function Example() {
  const [isToggleActive, setToggle] = useState(false);

  return (
    <section className={styles.example}>
      <div className={styles.container}>
        <h2 className={styles.title}>Живой пример</h2>
        <p className={styles.text}>
          Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на
          Cat Energy Slim. Отличный результат без изнуряющих тренировок! При
          этом он не менял своих привычек и по-прежнему спит по 16 часов в день.
        </p>
        <dl className={styles.statements}>
          <div className={styles.group}>
            <dl>снижение веса</dl>
            <dd>5 кг</dd>
          </div>
          <div className={styles.group}>
            <dl>затрачено времени</dl>
            <dd>60 дней</dd>
          </div>
        </dl>
        <p className={styles.costs}>Затраты на питание: 15 000 руб.</p>
        <div className={styles.ibg}>
          <img src={beforeImg} alt="fat cat" />
        </div>
        <div
          className={clsx(
            styles.toggler,
            isToggleActive && styles.toggler_active
          )}
        >
          Было
          <button onClick={() => setToggle(!isToggleActive)} title="toggler" />
          Стало
        </div>
      </div>
    </section>
  );
}

export default Example;
