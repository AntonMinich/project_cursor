import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slide from '../components/Slide.jsx';
import { IMAGES } from '../data/assets.js';

export default function Others() {
  const teams = IMAGES.teams;
  const count = teams.length;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % count);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [count, index]);

  const go = (nextIndex) => setIndex((nextIndex + count) % count);
  const team = teams[index];
  const prev = teams[(index + count - 1) % count];
  const next = teams[(index + 1) % count];

  return (
    <Slide id="others" className="slide-others">
      <div className="others-top">
        <p className="kicker">ПРЕЦЕДЕНТЫ</p>
        <h2 className="others-title">Бренды уже используют спорт как канал коммуникации</h2>
      </div>

      <div className="others-stage">
        <button type="button" className="others-peek is-prev" onClick={() => go(index - 1)} aria-label={prev.name}>
          <img src={prev.src} alt="" />
        </button>

        <figure className="others-hero">
          <div className="others-hero-frame">
            <AnimatePresence mode="wait">
              <motion.img
                key={team.name}
                src={team.src}
                alt={team.name}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
            <button type="button" className="others-nav is-left" onClick={() => go(index - 1)} aria-label="Предыдущее фото">
              <ChevronLeft size={22} />
            </button>
            <button type="button" className="others-nav is-right" onClick={() => go(index + 1)} aria-label="Следующее фото">
              <ChevronRight size={22} />
            </button>
          </div>
          <figcaption>{team.name}</figcaption>
        </figure>

        <button type="button" className="others-peek is-next" onClick={() => go(index + 1)} aria-label={next.name}>
          <img src={next.src} alt="" />
        </button>
      </div>

      <div className="others-strip" role="tablist" aria-label="Команды">
        {teams.map((item, i) => (
          <button
            key={item.name}
            type="button"
            role="tab"
            aria-selected={i === index}
            className={i === index ? 'others-thumb is-on' : 'others-thumb'}
            onClick={() => go(i)}
          >
            <img src={item.src} alt="" />
            <span>{item.name}</span>
          </button>
        ))}
      </div>

      <p className="others-foot">Корпоративная команда становится частью публичного образа компании.</p>
    </Slide>
  );
}
