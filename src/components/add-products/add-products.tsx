// @flow
import * as React from 'react';
import styles from './add-products.module.scss';
import { Link } from 'react-router-dom';

type Props = {};

export function AddProducts(props: Props) {
  return (
    <section className={styles.addProducts}>
      <div className={styles.container}>
        <h2 className={styles.addTitle}>Дополнительные товары</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.content}>
              <h3 className={styles.productTitle}>Сахарозаменитель</h3>
              <dl className={styles.nutrisionList}>
                <div className={styles.group}>
                  <dl>1 упаковка (100 г)</dl>
                  <dd> 500 Р.</dd>
                </div>
              </dl>
            </div>
            <Link className={styles.link} to={'#todo'}>
              Заказать
            </Link>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <h3 className={styles.productTitle}>Питьевая вода</h3>
              <dl className={styles.nutrisionList}>
                <div className={styles.group}>
                  <dl>5 литров</dl>
                  <dd>50 Р.</dd>
                </div>
              </dl>
            </div>
            <Link className={styles.link} to={'#todo'}>
              Заказать
            </Link>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <h3 className={styles.productTitle}>Молоко</h3>
              <dl className={styles.nutrisionList}>
                <div className={styles.group}>
                  <dl>1 литр</dl>
                  <dd>100 Р.</dd>
                </div>
              </dl>
            </div>
            <Link className={styles.link} to={'#todo'}>
              Заказать
            </Link>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <h3 className={styles.productTitle}>Витамины</h3>
              <dl className={styles.nutrisionList}>
                <div className={styles.group}>
                  <dl>1 упаковка (30 г)</dl>
                  <dd> 300 Р.</dd>
                </div>
              </dl>
            </div>
            <Link className={styles.link} to={'#todo'}>
              Заказать
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
