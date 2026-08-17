import { motion } from 'framer-motion';
import Slide from '../components/Slide.jsx';

const fade = (delay) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.36, delay, ease: [0.22, 1, 0.36, 1] },
});

const TOUCH = [
  { n: '01', title: 'Старт' },
  { n: '02', title: 'Трасса', cycle: true },
  { n: '03', title: 'Финиш', cycle: true },
  { n: '04', title: 'Фото', cycle: true },
  { n: '05', title: 'Соцсети', cycle: true },
  { n: '06', title: 'Следующий старт', end: true },
];

export default function WhyKit() {
  return (
    <Slide id="why-kit" deep className="slide-funnel slide-kit">
      <div className="funnel-top">
        <motion.p className="kicker" {...fade(0)}>
          Почему форма
        </motion.p>
        <motion.h2 className="funnel-title" {...fade(0.08)}>
          Форма — это реклама,
          <span>которая движется вместе с человеком.</span>
        </motion.h2>
      </div>

      <div className="funnel-track">
        <div className="funnel-cycle" aria-hidden="true" />
        <ol className="funnel-path">
          {TOUCH.map((step, i) => (
            <motion.li
              key={step.n}
              className={`funnel-step${step.cycle ? ' is-cycle' : ''}${step.end ? ' is-end' : ''}`}
              {...fade(0.16 + i * 0.05)}
            >
              <p className="funnel-num">{step.n}</p>
              <span className="funnel-marker" />
              <p className="funnel-label">{step.title}</p>
            </motion.li>
          ))}
        </ol>
      </div>

      <motion.div className="funnel-foot" {...fade(0.52)}>
        <p className="funnel-foot-lead">
          Баннер можно увидеть один раз. Участника команды можно встретить несколько раз
          за одно мероприятие — и снова через месяц на следующем старте.
        </p>
        <p className="funnel-foot-main">
          Один комплект формы работает <span>не один раз</span>.
        </p>
      </motion.div>
    </Slide>
  );
}
