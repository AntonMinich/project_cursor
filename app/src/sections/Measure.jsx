import Reveal from '../components/Reveal.jsx';

const LEVELS = [
  {
    title: 'ОХВАТ',
    items: [
      'количество мероприятий',
      'количество участников',
      'потенциальная аудитория',
      'количество контактов',
      'количество публикаций',
    ],
  },
  {
    title: 'DIGITAL',
    items: ['просмотры', 'охват', 'переходы по QR', 'посещения лендинга', 'подписки', 'вовлеченность'],
  },
  {
    title: 'BUSINESS',
    items: [
      'заявки',
      'обращения',
      'заявки с QR',
      'заявки с промокодом',
      'заявки на автолизинг',
      'заявки на потребительский лизинг',
    ],
  },
];

export default function Measure() {
  return (
    <section id="measure" className="section-shell bg-fincode-blue-deep">
      <div className="mx-auto flex h-full w-full max-w-[1320px] flex-col justify-center px-5 py-4 md:px-10">
        <Reveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-fincode-mint">KPI</p>
          <h2 className="max-w-4xl text-4xl font-extrabold md:text-6xl">
            Спорт — это эмоции. Результат — в цифрах.
          </h2>
        </Reveal>
        <div className="mt-5 md:mt-8 grid gap-6 md:grid-cols-3">
          {LEVELS.map((level, i) => (
            <Reveal key={level.title} delay={i * 0.07}>
              <article className="h-full rounded-3xl border border-white/10 p-8">
                <h3 className="text-2xl font-extrabold tracking-wide text-fincode-mint">{level.title}</h3>
                <ul className="mt-6 space-y-3 text-lg text-white/75">
                  {level.items.map((item) => (
                    <li key={item} className="border-b border-white/10 pb-3 last:border-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-5 md:mt-8 max-w-4xl text-xl leading-relaxed text-white/70">
            На первом этапе основной результат проекта — рост узнаваемости и количества контактов с брендом.
            Лидогенерация подключается как измеримый дополнительный результат.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
