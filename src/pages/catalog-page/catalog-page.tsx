import gift from '../../assets/img/catalog/gift-photo-desktop.jpg.jpg';
import styles from './catalog-page.module.scss';
import { Catalog } from '../../components/catalog/catalog';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  fetchExtraProducts,
  fetchProducts,
  selectExtraProductStatus,
  selectProductStatus
} from '../../store/app-slice/app-slice';
import Spinner from '../../components/spinner/spinner';
import { Status } from '../../consts/enum';
import { useEffect } from 'react';
import { AddProducts } from '../../components/add-products/add-products';

function CatalogPage() {
  const status = useAppSelector(selectProductStatus);
  const extraStatus = useAppSelector(selectExtraProductStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchExtraProducts());
  }, [dispatch]);

  if (status === Status.Loading || extraStatus === Status.Loading) {
    return <Spinner isActive />;
  }

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
