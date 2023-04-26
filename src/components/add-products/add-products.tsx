// @flow
import * as React from 'react';
import styles from './add-products.module.scss';
import { CatalogCard } from '../cards/catalog-card/catalog-card';
import { useAppSelector } from '../../hooks/hooks';
import { selectExtraProducts } from '../../store/app-slice/app-slice';
import { CatalogCardVariant } from '../../consts/enum';

export function AddProducts() {
  const products = useAppSelector(selectExtraProducts);

  return (
    <section className={styles.addProducts}>
      <h2 className={styles.title}>Дополнительные товары</h2>
      <ul className={styles.list}>
        {products.map((product) => (
          <CatalogCard
            key={product.id}
            product={product}
            variant={CatalogCardVariant.Extra}
          />
        ))}
      </ul>
    </section>
  );
}
