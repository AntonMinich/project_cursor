import Reveal from '../components/Reveal.jsx';
import Slide from '../components/Slide.jsx';

const POINTS = [
  { n: '01', title: 'Видимость', text: 'Тысячи участников и зрителей видят бренд вживую.' },
  { n: '02', title: 'Повторяемость', text: 'Команда появляется на разных мероприятиях в течение года.' },
  { n: '03', title: 'Узнаваемость', text: 'Повторный контакт превращает незнакомый логотип в знакомый бренд.' },
];

export default function NotKit() {
  return (
    <Slide id="not-kit" deep>
      <Reveal>
        <p className="kicker">ПОЧЕМУ</p>
        <h2 className="mt-2">
          Это не закупка спортивной одежды.
          <br />
          Это новый канал коммуникации с нашей аудиторией.
        </h2>
        <p className="mt-3 text-[clamp(1rem,2.4vh,1.6rem)] font-semibold">
          FINCODE становится видимым там, где уже находится наша потенциальная аудитория.
        </p>
      </Reveal>
      <div className="grid gap-3 md:grid-cols-3">
        {POINTS.map((item, i) => (
          <Reveal key={item.n} delay={i * 0.05}>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="kicker">{item.n}</p>
              <h3 className="mt-2 font-bold">{item.title}</h3>
              <p className="lead mt-2">{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Slide>
  );
}
