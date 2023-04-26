import * as React from 'react';
import styles from './catalog-card.module.scss';
import { Link } from 'react-router-dom';
import { Product } from '../../../types/product';
import clsx from 'clsx';
import { makeFirstLetterUpperCase } from '../../../utils/common';
import { CatalogCardVariant } from '../../../consts/enum';

type Props = {
  product: Product;
  variant?: CatalogCardVariant;
};

export function CatalogCard({
  product,
  variant = CatalogCardVariant.Primary
}: Props) {
  const { flavor, price, image, volume, volumeName, title } = product;
  const isExtra = variant === CatalogCardVariant.Extra;
  const isPrimary = variant === CatalogCardVariant.Primary;

  const primaryListElement = (
    <ul className={styles.list}>
      <li className={styles.group}>
        <p>Объем</p>
        <p> {volume} г</p>
      </li>
      <li className={styles.group}>
        <p>Вкус</p>
        <p>{makeFirstLetterUpperCase(flavor)}</p>
      </li>
      <li className={styles.group}>
        <p>Цена</p>
        <p>{price} Р.</p>
      </li>
    </ul>
  );

  const extraListElement = (
    <ul className={styles.list}>
      <li className={styles.group}>
        <dl>{volumeName}</dl>
        <dd> {price} Р.</dd>
      </li>
    </ul>
  );

  const imageElement = (
    <div className={styles.image}>
      <img src={image} alt="orange can" />
    </div>
  );

  return (
    <li className={clsx(styles.card, isExtra && styles.card_extra)}>
      {isPrimary && imageElement}
      <div className={styles.content}>
        <h3 className={styles.title}>
          {title} {!isExtra && <span>{volume} г</span>}
        </h3>
        {isPrimary && primaryListElement}
        {isExtra && extraListElement}
      </div>
      <Link className={styles.link} to={'#todo'}>
        Заказать
      </Link>
    </li>
  );
}
