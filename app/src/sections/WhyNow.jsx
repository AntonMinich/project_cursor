import { motion } from 'framer-motion';
import Slide from '../components/Slide.jsx';

const fade = (delay) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.36, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function WhyNow() {
  return (
    <Slide id="why-now" deep className="slide-now">
      <div className="now-top">
        <motion.p className="kicker" {...fade(0)}>
          Момент
        </motion.p>
        <motion.h2 className="now-title" {...fade(0.08)}>
          Сейчас FINCODE строит бренд.
          <span>Каждый контакт уже имеет значение.</span>
        </motion.h2>
        <motion.p className="now-lead" {...fade(0.16)}>
          Когда бренд молодой, узнаваемость нельзя откладывать. Мы формируем её там, где уже находится нужная аудитория.
        </motion.p>
      </div>

      <div className="now-board">
        <motion.article className="now-card" {...fade(0.24)}>
          <p className="now-label">Сегодня</p>
          <p className="now-line">Нас ещё нужно узнавать.</p>
        </motion.article>
        <motion.article className="now-card is-next" {...fade(0.32)}>
          <p className="now-label">Завтра</p>
          <p className="now-line">Нас уже должны узнавать.</p>
        </motion.article>
      </div>

      <motion.div className="now-foot" {...fade(0.44)}>
        <p className="now-foot-lead">Окно короткое.</p>
        <p className="now-foot-main">Пока бренд строится — каждый старт работает на знакомство.</p>
      </motion.div>
    </Slide>
  );
}
