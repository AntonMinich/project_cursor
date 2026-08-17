import { motion } from 'framer-motion';
import Slide from '../components/Slide.jsx';
import { IMAGES } from '../data/assets.js';

const fade = (delay) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.36, delay, ease: [0.22, 1, 0.36, 1] },
});

const PATH = ['Увидел форму', 'Запомнил бренд', 'Встретил снова', 'Вспомнил при лизинге'];

export default function Finale() {
  return (
    <Slide id="finale" deep className="slide-finale">
      <div className="finale-top">
        <motion.p className="kicker" {...fade(0)}>
          Финал
        </motion.p>
        <motion.img
          src={IMAGES.logoLight}
          alt="FINCODE"
          className="finale-logo"
          {...fade(0.06)}
        />
        <motion.h2 className="finale-title" {...fade(0.12)}>
          FINCODE <span>TEAM</span>
        </motion.h2>
        <motion.p className="finale-slogan" {...fade(0.18)}>
          Команда, которую видят.
          <span>Бренд, который запоминают.</span>
        </motion.p>
      </div>

      <motion.ol className="finale-path" {...fade(0.28)}>
        {PATH.map((step, i) => (
          <li key={step}>
            <span className="finale-step">{String(i + 1).padStart(2, '0')}</span>
            <span className="finale-text">{step}</span>
          </li>
        ))}
      </motion.ol>

      <motion.div className="finale-foot" {...fade(0.42)}>
        <p className="finale-foot-lead">Не разовый старт — система присутствия.</p>
        <p className="finale-foot-main">Предлагаем запустить FINCODE TEAM как годовой маркетинговый проект.</p>
      </motion.div>
    </Slide>
  );
}
