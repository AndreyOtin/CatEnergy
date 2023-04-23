import clsx from 'clsx';
import { ReactComponent as CatEnergy } from '../../assets/img/icons/cat-energy-m.svg';
import { ReactComponent as Logo } from '../../assets/img/icons/logo-m.svg';
import { ReactComponent as LogoDesk } from '../../assets/img/icons/logo-dsk.svg';
import { AppRoute } from '../../consts/enum';
import styles from './header.module.scss';
import { useRef, useState } from 'react';
import useCssTransition from '../../hooks/use-css-transition';
import useResponsive from '../../hooks/use-responsive';
import { log } from 'console';
import MenuButton from '../buttons/menu-button/menu-button';

const transitionTimeInSec = 1;

function Header() {
  const { atMinMobile, atMinTablet } = useResponsive();
  const [isMenuOpen, setMenu] = useState(false);
  const menu = useRef<HTMLMenuElement>(null);
  const handleTransition = useCssTransition(menu, transitionTimeInSec);

  const handleMenuClick = () => {
    setMenu(!isMenuOpen);
    handleTransition();
  };

  return (
    <header className={clsx(styles.header)}>
      <div className={styles.container}>
        <div className={clsx(styles.logoWrapper)}>
          <a href={AppRoute.Root} className={styles.logoLink}>
            {atMinTablet ? (
              <LogoDesk className={styles.logoPc} />
            ) : (
              <>
                <Logo className={styles.logo} />
                <CatEnergy className={styles.catEnergy} />
              </>
            )}
          </a>
          {!atMinMobile && (
            <MenuButton onClick={handleMenuClick} isMenuOpen={isMenuOpen} />
          )}
        </div>
        <nav
          ref={menu}
          className={clsx(styles.menu, isMenuOpen && styles.menu_open)}
        >
          <ul>
            <li>
              <a href={AppRoute.Root}>Главная</a>
            </li>
            <li>
              <a href={AppRoute.Catalog}>Каталог продукции</a>
            </li>
            <li>
              <a href={AppRoute.Program}>Подбор программы</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
