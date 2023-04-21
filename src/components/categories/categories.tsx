import { AppRoute } from '../../consts/enum';
import styles from './categories.module.scss';
import { ReactComponent as Arrow } from '../../assets/img/icons/arrow.svg';

function Categories() {
  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        <h2 className={styles.visuallyHidden}>Категории</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h3 className={styles.title}>Похудение</h3>
            <p className={styles.text}>
              Ваш кот весит больше собаки и почти утратил способность лазить по
              деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу
              сбросить лишний вес.
            </p>
            <a href={AppRoute.Catalog} className={styles.link}>
              Каталог Slim
              <Arrow width={24} height={11} />
            </a>
          </li>
          <li className={styles.item}>
            <h3 className={styles.title}>Набор массы</h3>
            <p className={styles.text}>
              Заработать авторитет среди дворовых котов и даже собак? Серия Cat
              Energy Pro поможет вашему коту нарастить необходимые мышцы!
            </p>
            <a href={AppRoute.Catalog} className={styles.link}>
              Каталог pro
              <Arrow width={24} height={11} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Categories;
