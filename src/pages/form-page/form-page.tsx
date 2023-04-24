import Form from '../../components/form/form';
import Map from '../../components/map/map';
import styles from './form-page.module.scss';

function FormPage() {
  return (
    <main>
      <section className={styles.formPage}>
        <div className={styles.container}>
          <h2 className={styles.title}>Подбор программы</h2>
          <p className={styles.text}>
            Заполните анкету и мы подберем программу питания для вашего кота
          </p>
          <Form />
        </div>
      </section>
      <Map />
    </main>
  );
}

export default FormPage;
