import Reveal from '../components/Reveal.jsx';
import CountUp from '../components/CountUp.jsx';
import Slide from '../components/Slide.jsx';

const EVENTS = [
  { value: 3045, prefix: '', suffix: '', name: 'Минский триатлон 2026' },
  { value: 2000, prefix: '≈ ', suffix: '', name: 'Налибоки' },
  { value: 2800, prefix: '', suffix: '+', name: 'Соль Полесья' },
  { value: 1500, prefix: '≈ ', suffix: '', name: 'Kaspersky Race' },
];

export default function Scale() {
  return (
    <Slide id="scale" deep>
      <Reveal>
        <p className="kicker">МАСШТАБ</p>
        <h2 className="mt-2">Тысячи потенциальных клиентов — в одной точке</h2>
      </Reveal>
      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
        {EVENTS.map((item, i) => (
          <Reveal key={item.name} delay={i * 0.04}>
            <article className="border-t border-fincode-mint/40 pt-3">
              <p className="stat">
                <CountUp value={item.value} prefix={item.prefix} suffix={item.suffix} />
              </p>
              <p className="mt-1 text-[11px] tracking-[0.16em] text-white/45">УЧАСТНИКОВ</p>
              <p className="mt-1 text-[clamp(0.95rem,2vh,1.25rem)] font-semibold">{item.name}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="lead">И десятки менее массовых стартов с аудиторией 300–600 человек.</p>
    </Slide>
  );
}
