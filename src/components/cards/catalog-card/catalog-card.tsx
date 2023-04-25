import * as React from 'react';
import styles from '../card.module.scss';
import { Link } from 'react-router-dom';
import { Product } from '../../../types/product';

type Props = {
  product: Product;
};

export function CatalogCard({ product }: Props) {
  const { flavor, image, price, volume } = product;

  return (
    <li className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt="orange can" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>Cat Energy PRO 500 г</h3>
        <dl className={styles.list}>
          <div className={styles.group}>
            <dl>Объем</dl>
            <dd> {volume} г</dd>
          </div>
          <div className={styles.group}>
            <dl>Вкус</dl>
            <dd>{flavor}</dd>
          </div>
          <div className={styles.group}>
            <dl>Цена</dl>
            <dd>{price} Р.</dd>
          </div>
        </dl>
      </div>
      <Link className={styles.link} to={'#todo'}>
        Заказать
      </Link>
    </li>
  );
}
