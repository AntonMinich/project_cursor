import Reveal from '../components/Reveal.jsx';

const YEAR = [
  { season: 'ВЕСНА', text: 'Первые вело- и беговые старты' },
  { season: 'ЛЕТО', text: 'Крупнейшие велогонки и триатлоны' },
  { season: 'ОСЕНЬ', text: 'Беговые соревнования и финальные старты' },
  { season: 'ВЕСЬ ГОД', text: 'Социальные сети + контент + digital-реклама' },
];

export default function Year() {
  return (
    <section id="year" className="section-shell">
      <div className="mx-auto flex h-full w-full max-w-[1320px] flex-col justify-center px-5 py-4 md:px-10">
        <Reveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-fincode-mint">ГОД</p>
          <h2 className="text-4xl font-extrabold md:text-6xl">Не один старт. Система присутствия.</h2>
        </Reveal>
        <div className="relative mt-6 md:mt-10">
          <div className="absolute left-4 top-0 h-full w-px bg-fincode-mint/40 md:left-0 md:top-8 md:h-px md:w-full" />
          <div className="grid gap-10 md:grid-cols-4">
            {YEAR.map((item, i) => (
              <Reveal key={item.season} delay={i * 0.08}>
                <article className="relative pl-10 md:pl-0 md:pt-10">
                  <span className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full bg-fincode-mint md:left-0 md:top-6" />
                  <p className="text-sm font-semibold tracking-[0.2em] text-fincode-mint">{item.season}</p>
                  <p className="mt-4 text-2xl font-semibold leading-snug">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal>
          <p className="mt-6 md:mt-10 max-w-3xl text-2xl font-semibold">
            Каждый следующий старт усиливает предыдущий контакт.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
