// @flow
import * as React from 'react';
import { useState } from 'react';
import styles from './catalog.module.scss';
import { CatalogCard } from '../cards/catalog-card/catalog-card';
import { ButtonCard } from '../cards/button-card/button-card';
import { useAppSelector } from '../../hooks/hooks';
import { selectProducts } from '../../store/app-slice/app-slice';
import { MaxElementCount } from '../../consts/enum';

export function Catalog() {
  const products = useAppSelector(selectProducts);
  const [currentCount, setCount] = useState(MaxElementCount.CatalogCard);

  const leftCount = products.length - currentCount;

  return (
    <section className={styles.catalog}>
      <div className={styles.container}>
        <h2 className={styles.title}>Каталог продукции</h2>
        <ul className={styles.list}>
          {products.slice(0, currentCount).map((product) => (
            <CatalogCard key={product.id} product={product} />
          ))}
          {leftCount < 0 || (
            <ButtonCard
              count={leftCount}
              onClick={() =>
                setCount((count) => count + MaxElementCount.CatalogCard)}
            />
          )}
        </ul>
      </div>
    </section>
  );
}
