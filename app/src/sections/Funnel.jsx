import Reveal from '../components/Reveal.jsx';
import Slide from '../components/Slide.jsx';

const STEPS = [
  { n: '01', title: 'Увидел форму' },
  { n: '02', title: 'Прочитал FINCODE' },
  { n: '03', title: 'Запомнил' },
  { n: '04', title: 'Встретил снова' },
  { n: '05', title: 'Узнал бренд' },
  { n: '06', title: 'Вспомнил о FINCODE' },
  { n: '07', title: 'Пришел как клиент' },
];

export default function Funnel() {
  return (
    <Slide id="funnel">
      <Reveal>
        <p className="kicker">КАК РАБОТАЕТ</p>
        <h2 className="mt-2">
          Один контакт — мало.
          <br />
          <span className="text-fincode-mint">Повторный контакт — запоминается.</span>
        </h2>
      </Reveal>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-7">
        {STEPS.map((step, i) => (
          <Reveal key={step.n} delay={i * 0.03}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="kicker">{step.n}</p>
              <p className="mt-2 text-sm font-semibold leading-snug md:text-base">{step.title}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="lead">
        Мы не пытаемся продать лизинг во время соревнования. Мы хотим, чтобы в момент потребности
        название FINCODE уже было знакомо.
      </p>
    </Slide>
  );
}
