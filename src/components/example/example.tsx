import clsx from 'clsx';
import beforeImg from '../../assets/img/top-desktop.png';
import styles from './example.module.scss';
import { useEffect, useRef, useState } from 'react';
import afterImg from '../../assets/img/after-desktop.png';
import initComparisonSlider from '../../hooks/useComparisonSlider';

function Example() {
  const [isToggleActive, setToggle] = useState(false);
  const ref = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    initComparisonSlider(ref, sliderRef);
  }, []);

  return (
    <section className={styles.example}>
      <div className={styles.container}>
        <h2 className={styles.title}>Живой пример</h2>
        <div className={styles.contentBody}>
          <p className={styles.text}>
            Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на
            Cat Energy Slim. Отличный результат без изнуряющих тренировок! При
            этом он не менял своих привычек и по-прежнему спит по 16 часов в
            день.
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
        </div>
        <div ref={ref} className={clsx(styles.sliderContainer)}>
          <div>
            <img src={afterImg} alt="cat" style={{ objectFit: 'contain' }} />
          </div>
          <div
            style={{
              left: ' -55px',
              top: '20px'
            }}
          >
            <img
              src={beforeImg}
              alt="cat"
              style={{
                objectPosition: 'left'
              }}
            />
          </div>
        </div>
        <div className={clsx(styles.ibg)}>
          {isToggleActive ? (
            <img src={afterImg} style={{ objectFit: 'contain' }} alt="cat" />
          ) : (
            <img src={beforeImg} alt="cat" />
          )}
        </div>
        <div
          className={clsx(
            styles.toggler,
            isToggleActive && styles.toggler_active
          )}
        >
          Было
          <button onClick={() => setToggle(!isToggleActive)} title="toggler" />
          <div className={styles.slider}>
            <div ref={sliderRef} className={styles.pin}></div>
          </div>
          Стало
        </div>
      </div>
    </section>
  );
}

export default Example;
