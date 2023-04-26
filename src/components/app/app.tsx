import '../../index.scss';
import '../../scss/global.module.scss';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts/enum';
import MainPage from '../../pages/main-page/main-page';
import Layout from '../layout/layout';
import FormPage from '../../pages/form-page/form-page';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Root} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={AppRoute.Program} element={<FormPage />} />
        <Route path={AppRoute.Catalog} element={<CatalogPage />} />
        <Route path="*" element={<NotFoundScreen/>} />
      </Route>
    </Routes>
  );
}

export default App;
