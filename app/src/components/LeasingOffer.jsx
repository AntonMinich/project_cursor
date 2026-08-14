import FlamingoMark from './FlamingoMark.jsx';

export default function LeasingOffer({ onAsk }) {
  return (
    <div className="leasing-offer">
      <div className="leasing-copy">
        <FlamingoMark className="flamingo-svg" />
        <div>
          <strong>От 100 BYN/мес. с Фламинго</strong>
          <span>Товар можно взять в лизинг — условия по кнопке «?»</span>
        </div>
      </div>
      <button
        type="button"
        className="help-btn"
        aria-label="Условия лизинга Фламинго"
        onClick={onAsk}
      >
        ?
      </button>
    </div>
  );
}
