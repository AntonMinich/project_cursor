import Reveal from '../components/Reveal.jsx';
import { IMAGES } from '../data/assets.js';

export default function Others() {
  return (
    <section id="others" className="section-shell">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-24 md:px-10">
        <Reveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-fincode-mint">ПРЕЦЕДЕНТЫ</p>
          <h2 className="max-w-4xl text-4xl font-extrabold md:text-6xl">
            Бренды уже используют спорт как канал коммуникации
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
          {IMAGES.teams.belarus.map((team, i) => (
            <Reveal key={team.name} delay={i * 0.05} className={i === 0 ? 'col-span-2 row-span-2' : ''}>
              <figure className="relative h-full min-h-[180px] overflow-hidden rounded-2xl md:min-h-[220px]">
                <img src={team.src} alt={team.name} className="h-full w-full object-cover" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 p-4 text-lg font-semibold">
                  {team.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <h3 className="text-2xl font-bold">Примеры из России</h3>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {IMAGES.teams.russia.map((team) => (
              <figure key={team.name} className="relative min-h-[180px] overflow-hidden rounded-2xl">
                <img src={team.src} alt={team.name} className="h-full w-full object-cover" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 p-4 text-lg font-semibold">
                  {team.name}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-xl text-white/70">
            Корпоративная команда становится частью публичного образа компании.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
