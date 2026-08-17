import Reveal from '../components/Reveal.jsx';
import Slide from '../components/Slide.jsx';
import { IMAGES } from '../data/assets.js';

const ITEMS = [
  { title: 'Велоджерси', src: IMAGES.kit.jersey },
  { title: 'Велобибы', src: IMAGES.kit.bib },
  { title: 'Беговая майка', src: IMAGES.kit.running },
  { title: 'Триатлон', src: IMAGES.kit.triathlon },
  { title: 'Тренировки', src: IMAGES.kit.training },
];

export default function TeamLook() {
  return (
    <Slide id="team" deep>
      <Reveal>
        <p className="kicker">ЭКИПИРОВКА</p>
        <h2 className="mt-2">FINCODE TEAM</h2>
        <p className="lead mt-2">Мы будем выглядеть как команда. Логотип читается с расстояния.</p>
      </Reveal>
      <div className="fill grid min-h-0 grid-cols-5 gap-2">
        {ITEMS.map((item) => (
          <article key={item.title} className="flex min-h-0 flex-col rounded-2xl border border-white/10 bg-black/20 p-2">
            <img src={item.src} alt={item.title} className="min-h-0 w-full flex-1 object-contain" />
            <p className="mt-1 text-center text-[11px] font-semibold md:text-sm">{item.title}</p>
          </article>
        ))}
      </div>
    </Slide>
  );
}
