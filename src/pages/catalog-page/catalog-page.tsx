import gift from '../../assets/img/catalog/gift-photo-desktop.jpg.jpg';
import styles from './catalog-page.module.scss';
import { Catalog } from '../../components/catalog/catalog';
import { AddProducts } from '../../components/add-products/add-products';

function CatalogPage() {
  return (
    <main>
      <Catalog />
      <div className={styles.container}>
        <AddProducts />
        <section className={styles.promo}>
          <div className={styles.ibg}>
            <h2 className={styles.title}>
              Закажите все и получите чехол для кота в подарок!
            </h2>
            <img src={gift} alt="gift" />
          </div>
        </section>
      </div>
    </main>
  );
}

export default CatalogPage;
