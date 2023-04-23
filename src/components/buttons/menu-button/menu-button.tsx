import clsx from 'clsx';
import styles from './menu-button.module.scss';

type MenuButtonProps = {
  onClick: () => void;
  isMenuOpen: boolean;
};

function MenuButton({ onClick, isMenuOpen }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={clsx(styles.iconMenu, isMenuOpen && styles.iconMenu_open)}
    >
      <span></span>
    </button>
  );
}

export default MenuButton;
