import Categories from '../../components/categories/categories';
import Example from '../../components/example/example';
import Features from '../../components/features/featrues';
import Promo from '../../components/promo/promo';

function MainPage() {
  return (
    <main>
      <Promo />
      <Categories />
      <Features />
      <Example />
    </main>
  );
}

export default MainPage;
