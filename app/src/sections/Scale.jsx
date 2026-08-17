import Reveal from '../components/Reveal.jsx';
import CountUp from '../components/CountUp.jsx';

const EVENTS = [
  { value: 3045, prefix: '', suffix: '', name: 'Международный Минский триатлон 2026' },
  { value: 2000, prefix: '≈ ', suffix: '', name: 'Налибоки' },
  { value: 2800, prefix: '', suffix: '+', name: 'Соль Полесья' },
  { value: 1500, prefix: '≈ ', suffix: '', name: 'Kaspersky Race' },
];

export default function Scale() {
  return (
    <section id="scale" className="section-shell bg-fincode-blue-deep">
      <div className="mx-auto flex h-full w-full max-w-[1320px] flex-col justify-center px-5 py-4 md:px-10">
        <Reveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-fincode-mint">МАСШТАБ</p>
          <h2 className="max-w-4xl text-4xl font-extrabold md:text-6xl">
            Тысячи потенциальных клиентов — в одной точке
          </h2>
        </Reveal>
        <div className="mt-6 md:mt-10 grid gap-8 md:grid-cols-2">
          {EVENTS.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.07}>
              <article className="border-t border-fincode-mint/40 pt-6">
                <p className="text-5xl font-extrabold tracking-tight text-white md:text-7xl">
                  <CountUp value={item.value} prefix={item.prefix} suffix={item.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium tracking-[0.16em] text-white/45">УЧАСТНИКОВ</p>
                <p className="mt-4 text-2xl font-semibold">{item.name}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-6 md:mt-10 max-w-3xl text-xl text-white/65">
            И десятки менее массовых стартов с аудиторией 300–600 человек.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
