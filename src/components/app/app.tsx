import '../../index.scss';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts/enum';
import MainPage from '../../pages/main-page/main-page';
import Layout from '../layout/layout';

function App({ data }: { data: [] }): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Root} element={<Layout />}>
        <Route index element={<MainPage />} />

        {/* <Route path="*" element={<NotFoundScreen/>}/> */}
      </Route>
    </Routes>
  );
}

export default App;
