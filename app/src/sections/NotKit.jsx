import { motion } from 'framer-motion';
import Slide from '../components/Slide.jsx';
import { IMAGES } from '../data/assets.js';

const fade = (delay) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.38, delay, ease: [0.22, 1, 0.36, 1] },
});

const BLOCKS = [
  {
    n: '01',
    title: 'Видимость',
    text: 'Тысячи участников и зрителей видят бренд вживую — без медиабаинга.',
  },
  {
    n: '02',
    title: 'Повторяемость',
    text: 'Команда выходит на старты весь год. Контакт с брендом копится.',
  },
  {
    n: '03',
    title: 'Узнаваемость',
    text: 'Повторная встреча превращает незнакомый знак в знакомое имя FINCODE.',
  },
];

export default function NotKit() {
  return (
    <Slide
      id="not-kit"
      deep
      className="slide-channel"
      overlay={<img src={IMAGES.fingerprint} alt="" className="channel-mark" />}
    >
      <div className="channel-top">
        <motion.p className="channel-kicker" {...fade(0)}>
          Маркетинговый инструмент
        </motion.p>
        <motion.h2 className="channel-title" {...fade(0.08)}>
          Это не закупка формы.
          <span>Это канал коммуникации.</span>
        </motion.h2>
        <motion.p className="channel-lead" {...fade(0.18)}>
          FINCODE становится видимым там, где уже находится наша потенциальная аудитория.
        </motion.p>
      </div>

      <div className="channel-bottom">
        {BLOCKS.map((item, i) => (
          <motion.article key={item.n} className="channel-col" {...fade(0.28 + i * 0.1)}>
            <p className="channel-num">{item.n}</p>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.article>
        ))}
        <svg className="channel-path" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
          <path d="M8 7 C 28 2, 38 2, 50 5 C 62 8, 72 8, 92 4" fill="none" stroke="currentColor" strokeWidth="0.35" />
          <circle cx="8" cy="7" r="0.7" fill="currentColor" />
          <circle cx="50" cy="5" r="0.7" fill="currentColor" />
          <circle cx="92" cy="4" r="0.7" fill="currentColor" />
        </svg>
      </div>
    </Slide>
  );
}
