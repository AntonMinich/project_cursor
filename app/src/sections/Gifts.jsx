import { motion } from 'framer-motion';
import Slide from '../components/Slide.jsx';
import { IMAGES } from '../data/assets.js';

const fade = (delay) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.36, delay, ease: [0.22, 1, 0.36, 1] },
});

const GIFTS = [
  {
    n: '01',
    title: 'Брелок FINCODE',
    text: 'Маленький предмет, который остаётся с участником после старта.',
    src: IMAGES.gifts.keychain,
  },
  {
    n: '02',
    title: 'Спортивные носки',
    text: 'Брендированная вещь из стартового пакета — контакт с брендом каждый день.',
    src: IMAGES.gifts.socks,
  },
];

export default function Gifts() {
  return (
    <Slide id="gifts" deep className="slide-gifts">
      <div className="gifts-top">
        <motion.p className="kicker" {...fade(0)}>
          Закрепление
        </motion.p>
        <motion.h2 className="gifts-title" {...fade(0.08)}>
          Узнаваемость на старте можно закрепить подарком.
          <span>Он попадает в стартовый пакет участника.</span>
        </motion.h2>
        <motion.p className="gifts-lead" {...fade(0.16)}>
          Форма работает на трассе. Подарок — дома, в зале и в дороге: бренд остаётся рядом после финиша.
        </motion.p>
      </div>

      <div className="gifts-board">
        {GIFTS.map((gift, i) => (
          <motion.article key={gift.n} className="gifts-item" {...fade(0.22 + i * 0.08)}>
            <div className="gifts-frame">
              <img src={gift.src} alt={gift.title} />
            </div>
            <p className="gifts-num">{gift.n}</p>
            <h3>{gift.title}</h3>
            <p>{gift.text}</p>
          </motion.article>
        ))}
      </div>

      <motion.div className="gifts-foot" {...fade(0.46)}>
        <p className="gifts-foot-main">
          Ещё один контакт с FINCODE — уже после старта.
        </p>
      </motion.div>
    </Slide>
  );
}
