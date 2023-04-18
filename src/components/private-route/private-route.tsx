import { Navigate } from 'react-router-dom';
import { AppRoute, UserStatus } from '../../consts/enum';
import Spinner from '../spinner/spinner';

type PrivateRouteProps = {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  return (
    <Spinner isActive>
      {UserStatus.Auth
        ? <Navigate to={AppRoute.Login}/>
        : children}
    </Spinner>
  );
};

export default PrivateRoute;
