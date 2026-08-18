import { Fragment } from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide.jsx';

const fade = (delay) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.36, delay, ease: [0.22, 1, 0.36, 1] },
});

const SIDES = [
  {
    n: '01',
    label: 'Сегодня',
    title: 'Нас ещё нужно узнавать.',
    points: ['Бренд молодой', 'Каждый контакт имеет вес', 'Окно нельзя откладывать'],
  },
  {
    n: '02',
    label: 'Завтра',
    title: 'Нас уже должны узнавать.',
    points: ['Аудитория уже на стартах', 'Форма даёт повторные касания', 'FINCODE становится знакомым'],
    end: true,
  },
];

function BrandLine({ text }) {
  const parts = text.split('FINCODE');
  if (parts.length === 1) return text;
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && <span className="now-brand">FINCODE</span>}
    </Fragment>
  ));
}

export default function WhyNow() {
  return (
    <Slide id="why-now" deep className="slide-now">
      <div className="now-top">
        <motion.p className="kicker" {...fade(0)}>
          Момент
        </motion.p>
        <motion.h2 className="now-title" {...fade(0.08)}>
          Сейчас <BrandLine text="FINCODE" /> строит бренд.
          <span>Каждый контакт уже имеет значение.</span>
        </motion.h2>
      </div>

      <div className="now-board">
        {SIDES.map((side, i) => (
          <motion.article key={side.n} className={side.end ? 'now-card is-next' : 'now-card'} {...fade(0.18 + i * 0.08)}>
            <p className="now-num">{side.n}</p>
            <p className="now-label">{side.label}</p>
            <p className="now-line">{side.title}</p>
            <ul className="now-points">
              {side.points.map((point) => (
                <li key={point}>
                  <BrandLine text={point} />
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      <motion.div className="now-foot" {...fade(0.44)}>
        <p className="now-foot-lead">Окно короткое.</p>
        <p className="now-foot-main">
          Пока бренд строится — каждый старт работает на знакомство с <BrandLine text="FINCODE" />.
        </p>
      </motion.div>
    </Slide>
  );
}
