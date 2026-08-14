import FlamingoMark from './FlamingoMark.jsx';

export default function PromoCard({ onOpenLeasing }) {
  return (
    <button type="button" className="promo-card" onClick={onOpenLeasing}>
      <div className="promo-kicker">Партнёрский лизинг</div>
      <h2>Фламинго — бери в лизинг</h2>
      <p>Смартфон сейчас, платежи частями. Оформление онлайн, первый взнос от 10%.</p>
      <div className="promo-cta">
        Узнать условия
        <span aria-hidden="true">→</span>
      </div>
      <div className="promo-illustration">
        <FlamingoMark className="flamingo-svg" />
      </div>
    </button>
  );
}
