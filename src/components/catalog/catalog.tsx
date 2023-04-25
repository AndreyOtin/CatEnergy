// @flow
import * as React from 'react';
import styles from './catalog.module.scss';
import orangeCan from '../../assets/img/catalog/orange-can.png';
import greenCan from '../../assets/img/catalog/green-can.png';
import blueCan from '../../assets/img/catalog/blue-can.png';
import purpleCan from '../../assets/img/catalog/purple.png';
import { Product } from '../../types/product';
import { CatalogCard } from '../cards/catalog-card/catalog-card';
import { ButtonCard } from '../cards/button-card/button-card';

type Props = {};

export const data: Product[] = [
  {
    image: orangeCan,
    flavor: 'Курица',
    price: 500,
    volume: 1,
    volumeName: '1 упаковка (30 г)'
  },
  {
    image: greenCan,
    flavor: 'Курица',
    price: 500,
    volume: 1,
    volumeName: '1 упаковка (100 г)'
  },
  {
    image: blueCan,
    flavor: 'Курица',
    price: 500,
    volume: 1,
    volumeName: '5 литр'
  },
  {
    image: purpleCan,
    flavor: 'Курица',
    price: 500,
    volume: 1,
    volumeName: '1 литр'
  }
];

export function Catalog(props: Props) {
  return (
    <section className={styles.catalog}>
      <div className={styles.container}>
        <h2 className={styles.title}>Каталог продукции</h2>
        <ul className={styles.list}>
          {data.map((product, i) => (
            <CatalogCard key={`${i.toString()}`} product={product} />
          ))}
          <ButtonCard />
        </ul>
      </div>
    </section>
  );
}
