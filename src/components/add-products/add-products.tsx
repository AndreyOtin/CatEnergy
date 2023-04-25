// @flow
import * as React from 'react';
import styles from './add-products.module.scss';
import {
  CatalogCard,
  CatalogCardVariant
} from '../cards/catalog-card/catalog-card';
import { data } from '../catalog/catalog';

type Props = {};

export function AddProducts(props: Props) {
  return (
    <section className={styles.addProducts}>
      <h2 className={styles.title}>Дополнительные товары</h2>
      <ul className={styles.list}>
        {data.map((product, i) => (
          <CatalogCard
            key={`${i.toString()}`}
            product={product}
            variant={CatalogCardVariant.Extra}
          />
        ))}
      </ul>
    </section>
  );
}
