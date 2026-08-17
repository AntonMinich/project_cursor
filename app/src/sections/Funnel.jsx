import { motion } from 'framer-motion';
import Slide from '../components/Slide.jsx';

const fade = (delay) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.36, delay, ease: [0.22, 1, 0.36, 1] },
});

const Join = ({ dir, area }) => (
  <span className={`funnel-join is-${dir} ${area}`} aria-hidden="true" />
);

const Card = ({ n, title, end, area, delay }) => (
  <motion.article className={`funnel-card ${area}${end ? ' is-end' : ''}`} {...fade(delay)}>
    <p className="funnel-card-num">{n}</p>
    <p className="funnel-card-title">{title}</p>
  </motion.article>
);

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

      <div className="funnel-board">
        <div className="funnel-route">
          <Card area="s1" n="01" title="Увидел форму" delay={0.14} />
          <Join dir="right" area="a12" />
          <Card area="s2" n="02" title="Прочитал FINCODE" delay={0.18} />
          <Join dir="right" area="a23" />
          <Card area="s3" n="03" title="Запомнил" delay={0.22} />
          <Join dir="right" area="a34" />
          <Card area="s4" n="04" title="Встретил снова" delay={0.26} />

          <Join dir="down" area="a45" />

          <Card area="s7" n="07" title="Пришел как клиент" end delay={0.46} />
          <Join dir="left" area="a67" />
          <Card area="s6" n="06" title="Вспомнил о FINCODE" delay={0.4} />
          <Join dir="left" area="a56" />
          <Card area="s5" n="05" title="Узнал бренд" delay={0.34} />
        </div>
      </div>

      <motion.div className="funnel-foot funnel-foot-wide" {...fade(0.52)}>
        <p className="funnel-foot-lead">Мы не пытаемся продать лизинг во время соревнования.</p>
        <p className="funnel-foot-main">
          Мы хотим, чтобы в момент потребности название FINCODE уже было знакомо.
        </p>
      </motion.div>
    </Slide>
  );
}
