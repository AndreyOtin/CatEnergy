import { Link } from 'react-router-dom';
import orangeCan from '../../assets/img/catalog/orange-can.png';
import greenCan from '../../assets/img/catalog/green-can.png';
import blueCan from '../../assets/img/catalog/blue-can.png';
import purpleCan from '../../assets/img/catalog/purple.png';
import gift from '../../assets/img/catalog/gift-photo-desktop.jpg.jpg';
import styles from './catalog.module.scss';
import clsx from 'clsx';

function CatalogPage() {
  return (
    <main>
      <section className={styles.catalog}>
        <div className={styles.container}>
          <h2 className={styles.title}>Каталог продукции</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.image}>
                <img src={orangeCan} alt="orange can" />
              </div>
              <div className={styles.content}>
                <h3 className={styles.productTitle}>Cat Energy PRO 500 г</h3>
                <dl className={styles.nutrisionList}>
                  <div className={styles.group}>
                    <dl>Объем</dl>
                    <dd> 500 г</dd>
                  </div>
                  <div className={styles.group}>
                    <dl>Вкус</dl>
                    <dd>Курица</dd>
                  </div>
                  <div className={styles.group}>
                    <dl>Цена</dl>
                    <dd>700 Р.</dd>
                  </div>
                </dl>
              </div>
              <Link className={styles.link} to={'#todo'}>
                Заказать
              </Link>
            </li>
            <li className={styles.item}>
              <div className={styles.image}>
                <img src={blueCan} alt="orange can" />
              </div>
              <div className={styles.content}>
                <h3 className={styles.productTitle}>Cat Energy PRO 500 г</h3>
                <dl className={styles.nutrisionList}>
                  <div className={styles.group}>
                    <dl>Объем</dl>
                    <dd> 500 г</dd>
                  </div>
                  <div className={styles.group}>
                    <dl>Вкус</dl>
                    <dd>Курица</dd>
                  </div>
                  <div className={styles.group}>
                    <dl>Цена</dl>
                    <dd>700 Р.</dd>
                  </div>
                </dl>
              </div>
              <Link className={styles.link} to={'#todo'}>
                Заказать
              </Link>
            </li>
            <li className={styles.item}>
              <div className={styles.image}>
                <img src={purpleCan} alt="orange can" />
              </div>
              <div className={styles.content}>
                <h3 className={styles.productTitle}>Cat Energy PRO 500 г</h3>
                <dl className={styles.nutrisionList}>
                  <div className={styles.group}>
                    <dl>Объем</dl>
                    <dd> 500 г</dd>
                  </div>
                  <div className={styles.group}>
                    <dl>Вкус</dl>
                    <dd>Курица</dd>
                  </div>
                  <div className={styles.group}>
                    <dl>Цена</dl>
                    <dd>700 Р.</dd>
                  </div>
                </dl>
              </div>
              <Link className={styles.link} to={'#todo'}>
                Заказать
              </Link>
            </li>
            <li className={styles.item}>
              <div className={styles.image}>
                <img src={greenCan} alt="orange can" />
              </div>
              <div className={styles.content}>
                <h3 className={styles.productTitle}>Cat Energy PRO 500 г</h3>
                <dl className={styles.nutrisionList}>
                  <div className={styles.group}>
                    <dl>Объем</dl>
                    <dd> 500 г</dd>
                  </div>
                  <div className={styles.group}>
                    <dl>Вкус</dl>
                    <dd>Курица</dd>
                  </div>
                  <div className={styles.group}>
                    <dl>Цена</dl>
                    <dd>700 Р.</dd>
                  </div>
                </dl>
              </div>
              <Link className={styles.link} to={'#todo'}>
                Заказать
              </Link>
            </li>
            <li className={clsx(styles.item, styles.item_button)}>
              <h3 className={styles.productTitle}>
                Показать еще 100500 товаров
              </h3>
              <p>На самом деле вкусов гораздо больше!</p>
              <button className={clsx(styles.link_all,styles.link) }>Показать все</button>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.additional}>
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
      <section>
        <div className={styles.container}>
          <h2 className={styles.title}>
            Закажите все и получите чехол для кота в подарок!
          </h2>
          <div className={styles.ibg}>
            <img src={gift} alt="gift" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default CatalogPage;
