import { Outlet } from 'react-router-dom';
import Header from '../header.tsx/header';

function Layout() {
  return (
    <div className='wrapper'>
      <Header />
      <Outlet />
      <div>I am footer</div>
    </div>
  );
}

export default Layout;
