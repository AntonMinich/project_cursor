import Reveal from '../components/Reveal.jsx';
import Slide from '../components/Slide.jsx';

const ITEMS = [
  { n: '01', title: 'Узнаваемость', text: 'Больше людей знают FINCODE.' },
  { n: '02', title: 'Повторные контакты', text: 'Один человек видит бренд несколько раз.' },
  { n: '03', title: 'Ассоциации', text: 'Активность. Энергия. Движение.' },
  { n: '04', title: 'Контент', text: 'Фото, видео и истории сотрудников.' },
  { n: '05', title: 'Лиды', text: 'QR, лендинги и промокоды измеряют результат.' },
];

export default function Gets() {
  return (
    <Slide id="gets" deep>
      <Reveal>
        <p className="kicker">РЕЗУЛЬТАТ</p>
        <h2 className="mt-2">Что остается у компании после каждого старта?</h2>
      </Reveal>
      <div className="grid gap-2 md:grid-cols-5">
        {ITEMS.map((item) => (
          <article key={item.n} className="rounded-2xl border border-white/10 p-3">
            <p className="kicker-sm">{item.n}</p>
            <h3 className="mt-2 font-bold">{item.title}</h3>
            <p className="lead mt-1">{item.text}</p>
          </article>
        ))}
      </div>
    </Slide>
  );
}
