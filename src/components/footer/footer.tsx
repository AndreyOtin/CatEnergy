import { ReactComponent as CatEnergy } from '../../assets/img/icons/cat-energy-m.svg';
import { ReactComponent as Face } from '../../assets/img/icons/facebook.svg';
import { ReactComponent as Inst } from '../../assets/img/icons/instagramm.svg';
import { ReactComponent as Vk } from '../../assets/img/icons/vk.svg';
import { ReactComponent as Html } from '../../assets/img/icons/html.svg';
import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <CatEnergy className={styles.catEnergy} width={128} height={24} />
        <ul className={styles.socials}>
          <li className={styles.socialItem}>
            <a href="#todo" className={styles.link}>
              <Face className={styles.face} />
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="#todo" className={styles.link}>
              <Inst className={styles.inst} />
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="#todo" className={styles.link}>
              <Vk className={styles.vk} />
            </a>
          </li>
        </ul>
        <div className={styles.copyright}>
          HTML Academy
          <Html className={styles.html} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
