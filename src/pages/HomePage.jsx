import ProductCard from '../components/ProductCard.jsx';
import PromoCard from '../components/PromoCard.jsx';
import { PRODUCTS } from '../data/products.js';

export default function HomePage({ onOpenLeasing }) {
  const cards = [
    ...PRODUCTS.slice(0, 2).map((product) => (
      <ProductCard key={product.id} product={product} />
    )),
    <PromoCard key="flamingo-promo" onOpenLeasing={onOpenLeasing} />,
    ...PRODUCTS.slice(2).map((product) => (
      <ProductCard key={product.id} product={product} />
    )),
  ];

  return (
    <main className="page">
      <section className="hero">
        <div>
          <h1>21 век finance</h1>
          <p>Смартфоны в наличии. Можно купить сразу или оформить лизинг с Фламинго.</p>
        </div>
        <div className="hero-note">Каталог · 5 моделей</div>
      </section>
      <section className="catalog-grid" aria-label="Каталог товаров">
        {cards}
      </section>
    </main>
  );
}
