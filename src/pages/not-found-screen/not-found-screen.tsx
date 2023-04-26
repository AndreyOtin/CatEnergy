import { Link } from 'react-router-dom';
import cl from './not-found.module.css';
import { FaSadTear } from 'react-icons/fa';
import { AppRoute } from '../../consts/enum';

type NotFoundScreenProps = {
  resetNotFound?: () => void;
};

const NotFoundScreen = ({ resetNotFound }: NotFoundScreenProps) => (
  <main className={cl.container}>
    <FaSadTear className={cl.sadFace} />
    <h1 style={{ marginBottom: '15px' }}>404. Page not found</h1>
    <Link onClick={resetNotFound} className={cl.link} to={AppRoute.Root}>
      Вернуться на главную
    </Link>
  </main>
);

export default NotFoundScreen;
