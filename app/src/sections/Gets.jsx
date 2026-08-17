import { motion } from 'framer-motion';
import Slide from '../components/Slide.jsx';

const fade = (delay) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.36, delay, ease: [0.22, 1, 0.36, 1] },
});

const ITEMS = [
  { n: '01', title: 'Узнаваемость', text: 'Больше людей знают FINCODE.' },
  { n: '02', title: 'Повторные контакты', text: 'Один человек видит бренд несколько раз.' },
  { n: '03', title: 'Ассоциации', text: 'Активность. Энергия. Движение.' },
  { n: '04', title: 'Контент', text: 'Фото, видео и истории сотрудников.' },
  { n: '05', title: 'Лиды', text: 'QR, лендинги и промокоды измеряют результат.', end: true },
];

export default function Gets() {
  return (
    <Slide id="gets" deep className="slide-gets">
      <div className="gets-top">
        <motion.p className="kicker" {...fade(0)}>
          Результат
        </motion.p>
        <motion.h2 className="gets-title" {...fade(0.08)}>
          Что остается у компании после каждого старта?
          <span>Не сувенир — след бренда.</span>
        </motion.h2>
      </div>

      <div className="gets-board">
        {ITEMS.map((item, i) => (
          <motion.article key={item.n} className={item.end ? 'gets-card is-end' : 'gets-card'} {...fade(0.16 + i * 0.05)}>
            <p className="gets-num">{item.n}</p>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </div>

      <motion.div className="gets-foot" {...fade(0.48)}>
        <p className="gets-foot-lead">На первом этапе копим узнаваемость и контакты.</p>
        <p className="gets-foot-main">Лиды — измеримый дополнительный результат.</p>
      </motion.div>
    </Slide>
  );
}
