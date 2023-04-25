import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useState } from 'react';

function Layout() {
  const [state, setState] = useState();

  return (
    <div className="wrapper">
      <Header />
      <Outlet context={{ state, setState }} />
      <Footer />
    </div>
  );
}

export default Layout;
