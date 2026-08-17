import { Fragment } from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide.jsx';

const fade = (delay) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.36, delay, ease: [0.22, 1, 0.36, 1] },
});

const CONTACTS = [
  { stage: 'Старт №1', text: 'Увидел FINCODE' },
  { stage: 'Трасса / финиш', text: 'Снова встретил бренд' },
  { stage: 'Фото / соцсети', text: 'Увидел участников на фото' },
  { stage: 'Старт №2', text: 'Снова встретил FINCODE' },
  { stage: 'Потребность', text: 'Нужен авто / телефон / техника' },
  { stage: 'Выбор', text: 'FINCODE уже знаком', end: true },
];

function BrandLine({ text }) {
  const parts = text.split('FINCODE');
  if (parts.length === 1) return text;
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && <span className="meet-brand">FINCODE</span>}
    </Fragment>
  ));
}

export default function Familiar() {
  return (
    <Slide id="familiar" deep className="slide-meet">
      <div className="meet-top">
        <motion.p className="kicker" {...fade(0)}>
          Один логотип — несколько контактов
        </motion.p>
        <motion.h2 className="meet-title" {...fade(0.08)}>
          Сначала — незнакомый логотип.
          <span>Потом — «я уже их где-то видел».</span>
        </motion.h2>
      </div>

      <div className="meet-body">
        <ol className="meet-path">
          {CONTACTS.map((item, i) => (
            <motion.li key={item.stage} className={item.end ? 'is-end' : ''} {...fade(0.14 + i * 0.05)}>
              <span className="meet-dot" />
              <p className="meet-stage">{item.stage}</p>
              <p className="meet-text">
                <BrandLine text={item.text} />
              </p>
            </motion.li>
          ))}
        </ol>

        <motion.aside className="meet-aside" {...fade(0.28)}>
          <p className="meet-echo" aria-hidden="true">
            <span>FINCODE</span>
            <span>FINCODE</span>
            <span>FINCODE</span>
            <span>FINCODE</span>
          </p>
          <div className="meet-kit">
            <p className="meet-kit-title">Форма работает не один раз.</p>
            <p className="meet-kit-line">Старт → трасса → финиш → фото → соцсети → следующий старт</p>
          </div>
        </motion.aside>
      </div>

      <motion.div className="meet-foot" {...fade(0.52)}>
        <p className="meet-foot-lead">Мы не рассчитываем на продажу с первого контакта. Мы создаём знакомство с брендом.</p>
        <p className="meet-foot-main">
          Мы хотим, чтобы в момент потребности название <BrandLine text="FINCODE" /> уже было знакомо.
        </p>
      </motion.div>
    </Slide>
  );
}
