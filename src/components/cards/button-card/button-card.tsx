// @flow
import * as React from 'react';
import styles from './button-card.module.scss';
import { getPluralWord } from '../../../utils/common';

type Props = {
  onClick: () => void;
  count: number;
};

const wordMapping = {
  zero: 'товаров',
  one: 'товар',
  two: 'товара',
  few: 'товара',
  many: 'товаров',
  other: 'товаров'
};

export function ButtonCard({ onClick, count }: Props) {
  return (
    <li className={styles.card}>
      <h3 className={styles.title}>
        Показать еще{' '}
        <span>
          {count} {getPluralWord(count, wordMapping)}
        </span>
      </h3>
      <p>На самом деле вкусов гораздо больше!</p>
      <button onClick={onClick} className={styles.link}>
        Показать все
      </button>
    </li>
  );
}
