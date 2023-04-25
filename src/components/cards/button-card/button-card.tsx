// @flow
import * as React from 'react';
import styles from './button-card.module.scss';

type Props = {};

export function ButtonCard(props: Props) {
  return (
    <li className={styles.card}>
      <h3 className={styles.title}>
        Показать еще <span>100500 товаров</span>
      </h3>
      <p>На самом деле вкусов гораздо больше!</p>
      <button className={styles.link}>Показать все</button>
    </li>
  );
}
