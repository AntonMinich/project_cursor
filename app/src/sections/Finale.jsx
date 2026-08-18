import { Fragment } from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide.jsx';
import { IMAGES } from '../data/assets.js';

const fade = (delay) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.42, delay, ease: [0.22, 1, 0.36, 1] },
});

const PATH = ['Увидел форму', 'Запомнил бренд', 'Встретил снова', 'Вспомнил при лизинге'];

export default function Finale() {
  return (
    <Slide
      id="finale"
      deep
      className="slide-finale"
      overlay={<img src={IMAGES.fingerprint} alt="" className="finale-mark" />}
    >
      <div className="finale-stage">
        <motion.p className="kicker" {...fade(0)}>
          Предложение
        </motion.p>

        <motion.h1 className="finale-brand" {...fade(0.08)}>
          FINCODE <span>TEAM</span>
        </motion.h1>

        <motion.p className="finale-slogan" {...fade(0.16)}>
          Команда, которую видят.
          <br />
          Бренд, который запоминают.
        </motion.p>

        <motion.div className="finale-rule" {...fade(0.24)} aria-hidden="true" />

        <motion.p className="finale-journey" {...fade(0.3)}>
          {PATH.map((step, i) => (
            <Fragment key={step}>
              {i > 0 && <span className="finale-arrow" aria-hidden="true">→</span>}
              <span>{step}</span>
            </Fragment>
          ))}
        </motion.p>

        <motion.p className="finale-ask" {...fade(0.42)}>
          Предлагаем запустить FINCODE TEAM
          <span>как годовой маркетинговый проект.</span>
        </motion.p>
      </div>
    </Slide>
  );
}
