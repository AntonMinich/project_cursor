import { motion } from 'framer-motion';
import Slide from '../components/Slide.jsx';

const fade = (delay) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.36, delay, ease: [0.22, 1, 0.36, 1] },
});

const STEPS = [
  { n: '01', title: 'Увидел форму' },
  { n: '02', title: 'Прочитал FINCODE' },
  { n: '03', title: 'Запомнил', cycle: true },
  { n: '04', title: 'Встретил снова', cycle: true },
  { n: '05', title: 'Узнал бренд', cycle: true },
  { n: '06', title: 'Вспомнил о FINCODE', cycle: true },
  { n: '07', title: 'Пришел как клиент', end: true },
];

export default function Funnel() {
  return (
    <Slide id="funnel" deep className="slide-funnel">
      <div className="funnel-top">
        <motion.p className="kicker" {...fade(0)}>
          Как работает
        </motion.p>
        <motion.h2 className="funnel-title" {...fade(0.08)}>
          Один контакт — мало.
          <span>Повторный контакт — запоминается.</span>
        </motion.h2>
      </div>

      <div className="funnel-track">
        <div className="funnel-cycle" aria-hidden="true" />
        <ol className="funnel-path">
          {STEPS.map((step, i) => (
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

      <motion.div className="funnel-foot" {...fade(0.56)}>
        <p className="funnel-foot-lead">Мы не пытаемся продать лизинг во время соревнования.</p>
        <p className="funnel-foot-main">
          Мы хотим, чтобы в момент потребности название FINCODE уже было знакомо.
        </p>
      </motion.div>
    </Slide>
  );
}
