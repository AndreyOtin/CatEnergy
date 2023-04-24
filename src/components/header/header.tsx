import clsx from 'clsx';
import { ReactComponent as CatEnergy } from '../../assets/img/icons/cat-energy-m.svg';
import { ReactComponent as Logo } from '../../assets/img/icons/logo-m.svg';
import { ReactComponent as LogoDesk } from '../../assets/img/icons/logo-dsk.svg';
import { AppRoute } from '../../consts/enum';
import styles from './header.module.scss';
import { useRef, useState } from 'react';
import useCssTransition from '../../hooks/use-css-transition';
import useResponsive from '../../hooks/use-responsive';
import MenuButton from '../buttons/menu-button/menu-button';
import { Link, useMatch } from 'react-router-dom';

const transitionTimeInSec = 1;

function Header() {
  const { atMinMobile, atMinTablet } = useResponsive();
  const isRootPage = !!useMatch(AppRoute.Root);
  const [isMenuOpen, setMenu] = useState(false);
  const menu = useRef<HTMLMenuElement>(null);
  const handleTransition = useCssTransition(menu, transitionTimeInSec);

  const handleMenuClick = () => {
    setMenu(!isMenuOpen);
    handleTransition();
  };

  return (
    <header className={clsx(styles.header, !isRootPage && styles.header_white)}>
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
              <Link to={AppRoute.Root}>Главная</Link>
            </li>
            <li>
              <Link to={AppRoute.Catalog}>Каталог продукции</Link>
            </li>
            <li>
              <Link to={AppRoute.Program}>Подбор программы</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
