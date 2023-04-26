import { Link } from 'react-router-dom';

function ProductCard() {
  return (
    <li className="item">
      <div className="image">
        <img src="" alt="orange can" />
      </div>
      <div className="content">
        <h3 className="productTitle">Cat Energy PRO 500 г</h3>
        <dl className="nutrisionList">
          <div className="group">
            <dl>Объем</dl>
            <dd> 500 г</dd>
          </div>
          <div className="group">
            <dl>Вкус</dl>
            <dd>Курица</dd>
          </div>
          <div className="group">
            <dl>Цена</dl>
            <dd>700 Р.</dd>
          </div>
        </dl>
      </div>
      <Link className="link" to={'#todo'}>
        Заказать
      </Link>
    </li>
  );
}

export default ProductCard;
