import styles from './form.module.scss';
import { ReactComponent as TelIcon } from '../../assets/img/icons/tel-icon.svg';
import { ReactComponent as MailIcon } from '../../assets/img/icons/mail-icon.svg';

function Form() {
  return (
    <form action="#" className={styles.form}>
      <div className={styles.topRow}>
        <fieldset className={styles.adviseSet}>
          <div className={styles.group}>
            <input type="text" name="name" id="name" />
            <label htmlFor="name">Имя:*</label>
          </div>
          <div className={styles.group}>
            <input type="number" name="weight" id="weight" />
            <label htmlFor="weight">Вес (кг):*</label>
          </div>
          <div className={styles.group}>
            <input type="number" name="age" id="age" />
            <label htmlFor="age">Возраст (лет):</label>
          </div>
        </fieldset>

        <fieldset className={styles.programmSet}>
          <div className={styles.group}>
            <input
              className={styles.hidden}
              type="radio"
              name="programm"
              id="gain"
              value="gain"
            />
            <label htmlFor="gain">Набор массы</label>
          </div>
          <div className={styles.group}>
            <input
              className={styles.hidden}
              type="radio"
              name="programm"
              id="thin"
            />
            <label htmlFor="thin">Похудение</label>
          </div>
          <div className={styles.group}>
            <input
              className={styles.hidden}
              type="radio"
              name="programm"
              id="advise"
            />
            <label htmlFor="advise">Не знаю (Нужен ваш совет)</label>
          </div>
        </fieldset>
      </div>

      <fieldset className={styles.contactsSet}>
        <legend className={styles.title}>
          <span>Контактные данные (владельца кота)</span>
        </legend>
        <div className={styles.group}>
          <input type="email" name="email" id="email" />
          <MailIcon />
          <label htmlFor="email">E-mail:*</label>
        </div>
        <div className={styles.group}>
          <input type="tel" name="tel" id="tel" />
          <TelIcon />
          <label htmlFor="tel">Телефон:*</label>
        </div>
      </fieldset>
      <fieldset className={styles.commentsSet}>
        <legend className={styles.title}>Комментарий</legend>
        <textarea
          name="comments"
          id="comments"
          cols={50}
          rows={10}
          placeholder="Расскажите обо всех повадках кота"
        />
      </fieldset>

      <fieldset className={styles.addSet}>
        <legend className={styles.title}>Дополнительно</legend>
        <div className={styles.group}>
          <input
            className={styles.hidden}
            type="checkbox"
            name="sugar-replacment"
            id="sugar-replacment"
            value="sugar-replacment"
          />
          <label htmlFor="sugar-replacment">Сахарозаменитель</label>
        </div>
        <div className={styles.group}>
          <input
            className={styles.hidden}
            type="checkbox"
            name="water"
            id="water"
            value="water"
          />
          <label htmlFor="water">Питьевая вода</label>
        </div>
        <div className={styles.group}>
          <input
            className={styles.hidden}
            type="checkbox"
            name="water"
            id="milk"
            value="milk"
          />
          <label htmlFor="milk">Молоко</label>
        </div>
        <div className={styles.group}>
          <input
            className={styles.hidden}
            type="checkbox"
            name="vitamins"
            id="vitamins"
            value="vitamins"
          />
          <label htmlFor="vitamins">Витамины</label>
        </div>
      </fieldset>
      <div className={styles.bottomRow}>
        <button className={styles.link} type="submit">
          Отправить заявку
        </button>
        <small className={styles.small}>* — Обязательные поля</small>
      </div>
    </form>
  );
}

export default Form;
