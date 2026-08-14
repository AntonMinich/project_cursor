import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import PhoneMockup from '../components/PhoneMockup.jsx';
import LeasingOffer from '../components/LeasingOffer.jsx';
import { formatPrice, getProduct } from '../data/products.js';

export default function ProductPage({ onOpenLeasing }) {
  const { id } = useParams();
  const product = getProduct(id);
  const [toast, setToast] = useState('');

  if (!product) {
    return <Navigate to="/" replace />;
  }

  function handleBuy() {
    setToast('Демо: оформление покупки недоступно. Можно запросить консультацию по лизингу.');
    window.setTimeout(() => setToast(''), 2800);
  }

  return (
    <main className="page">
      <Link to="/" className="back-link">
        ← К каталогу
      </Link>
      <section className="product-page">
        <div
          className="gallery"
          style={{ '--card-accent': `${product.accent}33` }}
        >
          <PhoneMockup accent={product.accent} screen={product.screen} />
        </div>
        <div className="product-info">
          <div className="brand">{product.brand}</div>
          <h1>{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <div className="buy-panel">
            <div className="buy-row">
              <div>
                <div className="price">{formatPrice(product.price)} BYN</div>
                <div style={{ color: 'var(--muted)', fontSize: 13 }}>Цвет: {product.color}</div>
              </div>
              <button type="button" className="btn btn-primary" onClick={handleBuy}>
                Купить
              </button>
            </div>
            <LeasingOffer onAsk={() => onOpenLeasing(product)} />
          </div>
          <div className="specs">
            <h2>Основные характеристики</h2>
            <dl>
              {product.specs.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      {toast && <div className="toast">{toast}</div>}
    </main>
  );
}
