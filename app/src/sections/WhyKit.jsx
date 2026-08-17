import Reveal from '../components/Reveal.jsx';
import { IMAGES } from '../data/assets.js';

const TOUCH = ['Старт', 'Трасса', 'Финиш', 'Фото', 'Социальные сети', 'Следующее соревнование'];

export default function WhyKit() {
  return (
    <section id="why-kit" className="relative h-full overflow-hidden">
      <img src={IMAGES.sport.run} alt="Спортсмены на дистанции" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-fincode-blue/85" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1320px] items-center px-5 py-4 md:px-10">
        <div>
          <Reveal>
            <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-fincode-mint">ПОЧЕМУ ФОРМА</p>
            <h2 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              Форма — это реклама, которая движется вместе с человеком.
            </h2>
          </Reveal>
          <div className="mt-5 md:mt-8 flex flex-wrap gap-3">
            {TOUCH.map((item) => (
              <span
                key={item}
                className="rounded-full border border-fincode-mint/40 bg-fincode-blue/40 px-5 py-2 text-sm font-semibold tracking-wide"
              >
                {item}
              </span>
            ))}
          </div>
          <Reveal>
            <p className="mt-10 max-w-3xl text-xl leading-relaxed text-white/80">
              Баннер можно увидеть один раз. Участника команды можно встретить несколько раз за одно
              мероприятие — и снова через месяц на следующем старте.
            </p>
            <p className="mt-8 text-3xl font-extrabold md:text-4xl">
              Один комплект формы работает <span className="text-fincode-mint">не один раз</span>.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
