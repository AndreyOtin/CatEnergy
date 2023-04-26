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
    <dl className={styles.list}>
      <div className={styles.group}>
        <dl>Объем</dl>
        <dd> {volume} г</dd>
      </div>
      <div className={styles.group}>
        <dl>Вкус</dl>
        <dd>{makeFirstLetterUpperCase(flavor)}</dd>
      </div>
      <div className={styles.group}>
        <dl>Цена</dl>
        <dd>{price} Р.</dd>
      </div>
    </dl>
  );

  const extraListElement = (
    <dl className={styles.list}>
      <div className={styles.group}>
        <dl>{volumeName}</dl>
        <dd> {price} Р.</dd>
      </div>
    </dl>
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
