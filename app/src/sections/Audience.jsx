import Reveal from '../components/Reveal.jsx';
import CountUp from '../components/CountUp.jsx';
import Slide from '../components/Slide.jsx';

const STATS = [
  { value: '77', suffix: '%', label: 'участников — 25–44 года' },
  { value: '75', suffix: '%', label: 'из Минска и окрестностей' },
  { value: '77', suffix: '%', label: 'приезжают на авто' },
  { value: '34', suffix: '%', label: 'могут участвовать во всех интересующих стартах' },
];

const SECTORS = [
  { name: 'IT и телеком', value: 22 },
  { name: 'Производство', value: 21 },
  { name: 'Госуправление', value: 10 },
  { name: 'Медицина', value: 7 },
  { name: 'Торговля', value: 7 },
];

export default function Audience() {
  return (
    <Slide id="audience">
      <Reveal>
        <p className="kicker">КТО ТАМ</p>
        <h2 className="mt-2">Наша аудитория уже там</h2>
        <p className="lead mt-2">Спортивные мероприятия собирают активную, взрослую и платежеспособную аудиторию.</p>
      </Reveal>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {STATS.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.04}>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="stat">
                <CountUp value={item.value} />
                <span className="text-fincode-mint">{item.suffix}</span>
              </p>
              <p className="lead mt-2">{item.label}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="text-sm font-bold">Сферы деятельности</p>
        <div className="mt-2 grid gap-2 md:grid-cols-5">
          {SECTORS.map((item) => (
            <div key={item.name} className="rounded-xl border border-white/10 px-3 py-2">
              <div className="flex items-baseline justify-between gap-2 text-sm">
                <span>{item.name}</span>
                <span className="text-fincode-mint">{item.value}%</span>
              </div>
              <div className="stat-bar mt-2 h-1 overflow-hidden rounded-full">
                <span className="block h-full" style={{ width: `${item.value * 3.2}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Slide>
  );
}
