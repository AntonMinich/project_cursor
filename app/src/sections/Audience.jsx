import Reveal from '../components/Reveal.jsx';
import CountUp from '../components/CountUp.jsx';

const STATS = [
  { value: '77', suffix: '%', label: 'участников — 25–44 года' },
  { value: '75', suffix: '%', label: 'из Минска и окрестностей' },
  { value: '77', suffix: '%', label: 'приезжают на собственных автомобилях' },
  { value: '34', suffix: '%', label: 'могут позволить себе участвовать во всех интересующих соревнованиях' },
];

const SECTORS = [
  { name: 'IT и телеком', value: 22 },
  { name: 'Производство и промышленность', value: 21 },
  { name: 'Государственное управление', value: 10 },
  { name: 'Медицина и здравоохранение', value: 7 },
  { name: 'Торговля', value: 7 },
];

export default function Audience() {
  return (
    <section id="audience" className="section-shell">
      <div className="mx-auto flex h-full w-full max-w-[1320px] flex-col justify-center px-5 py-4 md:px-10">
        <Reveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-fincode-mint">КТО ТАМ</p>
          <h2 className="text-4xl font-extrabold md:text-6xl">Наша аудитория уже там</h2>
          <p className="mt-5 max-w-3xl text-xl text-white/70">
            Спортивные мероприятия собирают активную, взрослую и платежеспособную аудиторию.
          </p>
        </Reveal>
        <div className="mt-5 md:mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06}>
              <article className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                <p className="text-4xl font-extrabold tracking-tight md:text-6xl">
                  <CountUp value={item.value} />
                  <span className="text-fincode-mint">{item.suffix}</span>
                </p>
                <p className="mt-4 text-lg leading-snug text-white/70">{item.label}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-5 md:mt-8 rounded-3xl border border-white/10 bg-fincode-blue-deep/60 p-8 md:p-10">
          <h3 className="text-xl font-bold">Сферы деятельности</h3>
          <div className="mt-8 space-y-5">
            {SECTORS.map((item) => (
              <div key={item.name}>
                <div className="mb-2 flex items-baseline justify-between gap-4 text-lg">
                  <span>{item.name}</span>
                  <span className="text-fincode-mint">{item.value}%</span>
                </div>
                <div className="stat-bar h-1.5 overflow-hidden rounded-full">
                  <span className="block h-full rounded-full" style={{ width: `${item.value * 3.2}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
