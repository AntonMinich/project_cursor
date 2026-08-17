import Reveal from '../components/Reveal.jsx';
import { IMAGES } from '../data/assets.js';

const ITEMS = [
  { title: 'Велоджерси', src: IMAGES.kit.jersey },
  { title: 'Велобибы', src: IMAGES.kit.bib },
  { title: 'Беговая майка', src: IMAGES.kit.running },
  { title: 'Триатлонная форма', src: IMAGES.kit.triathlon },
  { title: 'Тренировочная одежда', src: IMAGES.kit.training },
];

export default function TeamLook() {
  return (
    <section id="team" className="section-shell bg-fincode-blue-deep">
      <div className="mx-auto flex h-full w-full max-w-[1320px] flex-col justify-center px-5 py-4 md:px-10">
        <Reveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-fincode-mint">ЭКИПИРОВКА</p>
          <h2 className="text-3xl font-extrabold md:text-5xl">FINCODE TEAM</h2>
          <p className="mt-5 max-w-3xl text-xl text-white/70">
            Мы будем выглядеть как команда. Логотип читается с расстояния. Без лишних знаков на форме.
          </p>
        </Reveal>
        <div className="mt-5 md:mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="rounded-[24px] border border-white/10 bg-black/20 p-5 transition hover:border-fincode-mint/40">
                <img src={item.src} alt={item.title} className="mx-auto aspect-[5/6] w-full object-contain" />
                <p className="mt-3 text-center text-sm font-semibold tracking-wide">{item.title}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
