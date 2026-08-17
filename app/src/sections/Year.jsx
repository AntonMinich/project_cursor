import Reveal from '../components/Reveal.jsx';
import Slide from '../components/Slide.jsx';

const YEAR = [
  { season: 'ВЕСНА', text: 'Первые вело- и беговые старты' },
  { season: 'ЛЕТО', text: 'Крупнейшие велогонки и триатлоны' },
  { season: 'ОСЕНЬ', text: 'Беговые старты и финал сезона' },
  { season: 'ВЕСЬ ГОД', text: 'Соцсети, контент и digital' },
];

export default function Year() {
  return (
    <Slide id="year">
      <Reveal>
        <p className="kicker">ГОД</p>
        <h2 className="mt-2">Не один старт. Система присутствия.</h2>
      </Reveal>
      <div className="relative">
        <div className="absolute left-0 right-0 top-3 hidden h-px bg-fincode-mint/40 md:block" />
        <div className="grid gap-3 md:grid-cols-4">
          {YEAR.map((item) => (
            <article key={item.season} className="relative md:pt-6">
              <span className="mb-2 hidden h-2.5 w-2.5 rounded-full bg-fincode-mint md:block" />
              <p className="kicker-sm">{item.season}</p>
              <p className="mt-2 text-[clamp(0.95rem,2.1vh,1.25rem)] font-semibold leading-snug">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
      <p className="text-[clamp(1rem,2.2vh,1.35rem)] font-semibold">
        Каждый следующий старт усиливает предыдущий контакт.
      </p>
    </Slide>
  );
}
