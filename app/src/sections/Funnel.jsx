import Reveal from '../components/Reveal.jsx';

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
    <section id="funnel" className="section-shell">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-24 md:px-10">
        <Reveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-fincode-mint">КАК РАБОТАЕТ</p>
          <h2 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Один контакт — мало.
            <br />
            <span className="text-fincode-mint">Повторный контакт — запоминается.</span>
          </h2>
        </Reveal>
        <div className="mt-16 flex flex-col gap-4 md:flex-row md:flex-wrap md:items-stretch">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.05} className="md:min-w-[140px] md:flex-1">
              <div className="flex h-full flex-row items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 md:flex-col md:items-start md:p-6">
                <p className="text-sm font-semibold tracking-[0.18em] text-fincode-mint">{step.n}</p>
                <p className="text-xl font-semibold leading-snug">{step.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-12 max-w-3xl text-xl text-white/65">
            Мы не пытаемся продать лизинг во время соревнования. Мы хотим, чтобы в момент потребности
            название FINCODE уже было знакомо.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
