// @flow
import * as React from 'react';
import styles from '../card.module.scss';
import { Link } from 'react-router-dom';
import { Product } from '../../../types/product';

type Props = {
  product: (Omit<Product, 'image' | 'volume'> & { volume: string });
};

export function AddCard({ product }: Props) {
  return (
    <li className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>Сахарозаменитель</h3>
        <dl className={styles.list}>
          <div className={styles.group}>
            <dl>{product.volume}</dl>
            <dd> {product.price} Р.</dd>
          </div>
        </dl>
      </div>
      <Link className={styles.link} to={'#todo'}>
        Заказать
      </Link>
    </li>
  );
}
