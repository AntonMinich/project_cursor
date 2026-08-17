import { motion } from 'framer-motion';
import CountUp from '../components/CountUp.jsx';
import Slide from '../components/Slide.jsx';

const fade = (delay) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.36, delay, ease: [0.22, 1, 0.36, 1] },
});

const EVENTS = [
  { name: 'Минский полумарафон', value: 30000, prefix: '', suffix: '+' },
  { name: 'Минский триатлон', value: 3045, prefix: '', suffix: '' },
  { name: 'Соль Полесья', value: 2800, prefix: '', suffix: '+' },
  { name: 'Налибоки', value: 2000, prefix: '≈ ', suffix: '' },
  { name: 'Kaspersky Race', value: 1500, prefix: '≈ ', suffix: '' },
];

const MAX = EVENTS[0].value;

export default function Scale() {
  return (
    <Slide id="scale" deep className="slide-scale">
      <div className="scale-top">
        <motion.p className="kicker" {...fade(0)}>
          Масштаб
        </motion.p>
        <motion.h2 className="scale-title" {...fade(0.08)}>
          Десятки тысяч потенциальных клиентов —
          <span>в одной спортивной среде</span>
        </motion.h2>
        <motion.p className="scale-lead" {...fade(0.16)}>
          Крупнейшие спортивные мероприятия Беларуси собирают тысячи участников в течение всего сезона.
        </motion.p>
      </div>

      <div className="scale-body">
        <motion.div className="scale-hero" {...fade(0.22)}>
          <p className="scale-hero-num">
            <CountUp value={39000} prefix="≈ " />
          </p>
          <p className="scale-hero-unit">Участников</p>
          <p className="scale-hero-note">5 крупнейших мероприятий 2026 года</p>
        </motion.div>

        <ul className="scale-list">
          {EVENTS.map((item, i) => (
            <motion.li key={item.name} className="scale-row" {...fade(0.28 + i * 0.05)}>
              <div className="scale-row-top">
                <div>
                  <p className="scale-row-num">
                    <CountUp value={item.value} prefix={item.prefix} suffix={item.suffix} />
                  </p>
                  <p className="scale-row-unit">Участников</p>
                </div>
                <p className="scale-row-name">{item.name}</p>
              </div>
              <div className="scale-track">
                <span style={{ width: `${(item.value / MAX) * 100}%`, animationDelay: `${0.32 + i * 0.05}s` }} />
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.div className="scale-foot" {...fade(0.56)}>
        <p className="scale-foot-lead">И это только крупнейшие старты.</p>
        <p>
          Десятки менее массовых мероприятий добавляют ещё сотни и тысячи контактов с аудиторией в течение сезона.
        </p>
      </motion.div>
    </Slide>
  );
}
