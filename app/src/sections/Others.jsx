import Reveal from '../components/Reveal.jsx';
import Slide from '../components/Slide.jsx';
import { IMAGES } from '../data/assets.js';

export default function Others() {
  const all = [...IMAGES.teams.belarus, ...IMAGES.teams.russia];

  return (
    <Slide id="others">
      <Reveal>
        <p className="kicker">ПРЕЦЕДЕНТЫ</p>
        <h2 className="mt-2">Бренды уже используют спорт как канал коммуникации</h2>
      </Reveal>
      <div className="fill grid min-h-0 grid-cols-4 gap-2 md:grid-cols-7">
        {all.map((team) => (
          <figure key={team.name} className="relative min-h-0 overflow-hidden rounded-xl">
            <img src={team.src} alt={team.name} className="h-full w-full object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 px-2 py-1.5 text-xs font-semibold md:text-sm">
              {team.name}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="lead">Корпоративная команда становится частью публичного образа компании.</p>
    </Slide>
  );
}
