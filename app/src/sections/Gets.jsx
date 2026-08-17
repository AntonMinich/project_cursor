import Reveal from '../components/Reveal.jsx';

const ITEMS = [
  { n: '01', title: 'Узнаваемость', text: 'Больше людей знают FINCODE.' },
  { n: '02', title: 'Повторные контакты', text: 'Один человек может увидеть бренд несколько раз.' },
  { n: '03', title: 'Ассоциации', text: 'Активность. Энергия. Движение. Качество жизни.' },
  { n: '04', title: 'Контент', text: 'Фото, видео, публикации и истории сотрудников.' },
  { n: '05', title: 'Лиды', text: 'QR-коды, специальные предложения, лендинги и промокоды позволяют измерять результат.' },
];

export default function Gets() {
  return (
    <section id="gets" className="section-shell bg-fincode-blue-deep">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-24 md:px-10">
        <Reveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-fincode-mint">РЕЗУЛЬТАТ</p>
          <h2 className="max-w-4xl text-4xl font-extrabold md:text-6xl">
            Что остается у компании после каждого старта?
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-5">
          {ITEMS.map((item, i) => (
            <Reveal key={item.n} delay={i * 0.05}>
              <article className="h-full rounded-3xl border border-white/10 p-6 transition hover:border-fincode-mint/40">
                <p className="text-sm font-semibold tracking-[0.18em] text-fincode-mint">{item.n}</p>
                <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-white/65">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
