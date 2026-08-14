import { Link } from 'react-router-dom';
import PhoneMockup from './PhoneMockup.jsx';
import { formatPrice } from '../data/products.js';

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card"
      style={{ '--card-accent': `${product.accent}33` }}
    >
      <div className="card-visual">
        <PhoneMockup accent={product.accent} screen={product.screen} />
      </div>
      <div className="card-body">
        <div className="card-brand">{product.brand}</div>
        <h2 className="card-title">{product.name}</h2>
        <div className="card-price">
          <span className="price">{formatPrice(product.price)} BYN</span>
          <span className="btn btn-primary">Купить</span>
        </div>
      </div>
    </Link>
  );
}
