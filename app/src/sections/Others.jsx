import Reveal from '../components/Reveal.jsx';
import Slide from '../components/Slide.jsx';
import { IMAGES } from '../data/assets.js';

export default function Others() {
  return (
    <Slide id="others" className="slide-others">
      <div className="others-top">
        <Reveal>
          <p className="kicker">ПРЕЦЕДЕНТЫ</p>
          <h2 className="others-title">Бренды уже используют спорт как канал коммуникации</h2>
        </Reveal>
      </div>

      <div className="others-board">
        {IMAGES.teams.map((team) => (
          <figure key={team.name} className={team.wide ? 'others-card is-wide' : 'others-card'}>
            <div className="others-frame">
              <img src={team.src} alt={team.name} />
            </div>
            <figcaption>{team.name}</figcaption>
          </figure>
        ))}
      </div>

      <p className="others-foot">Корпоративная команда становится частью публичного образа компании.</p>
    </Slide>
  );
}
