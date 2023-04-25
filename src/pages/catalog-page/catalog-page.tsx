
import gift from '../../assets/img/catalog/gift-photo-desktop.jpg.jpg';
import styles from './catalog-page.module.scss';
import { Catalog } from '../../components/catalog/catalog';
import { AddProducts } from '../../components/add-products/add-products';

function CatalogPage() {
  return (
    <main>
      <Catalog />
      <AddProducts />
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
