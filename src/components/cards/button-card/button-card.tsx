// @flow
import * as React from 'react';
import ownStyles from './button-card.module.scss';
import generalStyles from '../card.module.scss';

import clsx from 'clsx';

type Props = {};

export function ButtonCard(props: Props) {
  return (
    <li className={clsx(ownStyles.card)}>
      <h3 className={clsx(generalStyles.title, ownStyles.title)}>
        Показать еще 100500 товаров
      </h3>
      <p>На самом деле вкусов гораздо больше!</p>
      <button className={(clsx(generalStyles.link, ownStyles.link))}>
        Показать все
      </button>
    </li>
  );
}
