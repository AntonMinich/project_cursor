import Reveal from '../components/Reveal.jsx';
import { IMAGES } from '../data/assets.js';

const TOUCH = ['Старт', 'Трасса', 'Финиш', 'Фото', 'Соцсети', 'Следующий старт'];

export default function WhyKit() {
  return (
    <section id="why-kit" className="slide relative">
      <img src={IMAGES.sport.run} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-fincode-blue/88" />
      <div className="slide-inner relative z-10">
        <Reveal>
          <p className="kicker">ПОЧЕМУ ФОРМА</p>
          <h2 className="mt-2">Форма — это реклама, которая движется вместе с человеком.</h2>
        </Reveal>
        <div className="flex flex-wrap gap-2">
          {TOUCH.map((item) => (
            <span key={item} className="rounded-full border border-fincode-mint/40 px-3 py-1 text-xs font-semibold md:text-sm">
              {item}
            </span>
          ))}
        </div>
        <p className="lead max-w-3xl">
          Баннер можно увидеть один раз. Участника команды можно встретить несколько раз за одно
          мероприятие — и снова через месяц на следующем старте.
        </p>
        <p className="text-[clamp(1.05rem,2.6vh,1.7rem)] font-extrabold">
          Один комплект формы работает <span className="text-fincode-mint">не один раз</span>.
        </p>
      </div>
    </section>
  );
}
