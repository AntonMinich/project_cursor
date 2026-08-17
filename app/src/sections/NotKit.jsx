import Reveal from '../components/Reveal.jsx';

const POINTS = [
  {
    n: '01',
    title: 'Видимость',
    text: 'Тысячи участников и зрителей видят бренд вживую.',
  },
  {
    n: '02',
    title: 'Повторяемость',
    text: 'Команда появляется на разных мероприятиях в течение года.',
  },
  {
    n: '03',
    title: 'Узнаваемость',
    text: 'Повторный контакт превращает незнакомый логотип в знакомый бренд.',
  },
];

export default function NotKit() {
  return (
    <section id="not-kit" className="section-shell bg-fincode-blue-deep">
      <div className="mx-auto flex h-full w-full max-w-[1320px] flex-col justify-center px-5 py-4 md:px-10">
        <Reveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-fincode-mint">ПОЧЕМУ</p>
          <h2 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Это не закупка спортивной одежды.
            <br />
            Это новый канал коммуникации с нашей аудиторией.
          </h2>
          <p className="mt-8 max-w-4xl text-2xl font-semibold leading-snug text-white/90 md:text-4xl">
            FINCODE становится видимым там, где уже находится наша потенциальная аудитория.
          </p>
        </Reveal>
        <div className="mt-6 md:mt-10 grid gap-6 md:grid-cols-3">
          {POINTS.map((item, i) => (
            <Reveal key={item.n} delay={i * 0.08}>
              <article className="h-full rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-fincode-mint/40">
                <p className="text-sm font-semibold tracking-[0.2em] text-fincode-mint">{item.n}</p>
                <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-white/70">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
