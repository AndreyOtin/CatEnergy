import Categories from '../../components/categories/categories';
import Example from '../../components/example/example';
import Features from '../../components/features/featrues';
import Map from '../../components/map/map';
import Promo from '../../components/promo/promo';

function MainPage() {

  return (
    <main>
      <Promo />
      <Categories />
      <Features />
      <Example />
      <Map />
    </main>
  );
}

export default MainPage;
