import Reveal from '../components/Reveal.jsx';
import Slide from '../components/Slide.jsx';

const STORY = [
  { title: 'Старт №1', text: 'Видит FINCODE впервые.' },
  { title: 'Соцсети', text: 'Видит фото участников.' },
  { title: 'Старт №2', text: 'Снова встречает FINCODE.' },
  { title: 'Реклама', text: 'Видит бренд в другом контексте.' },
  { title: 'Потребность', text: 'Нужен авто / телефон / техника.' },
  { title: 'Выбор', text: 'FINCODE уже знаком.' },
];

export default function Familiar() {
  return (
    <Slide id="familiar" deep>
      <Reveal>
        <p className="kicker">ЗНАКОМСТВО</p>
        <h2 className="mt-2">
          Сначала — незнакомый логотип.
          <br />
          Потом — «я уже их где-то видел».
        </h2>
      </Reveal>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-6">
        {STORY.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.04}>
            <article className="h-full rounded-2xl border border-white/10 p-3">
              <p className="kicker-sm">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-2 font-bold">{item.title}</h3>
              <p className="lead mt-1">{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="text-[clamp(1rem,2.3vh,1.45rem)] font-semibold">
        Мы не рассчитываем на продажу с первого контакта.{' '}
        <span className="text-fincode-mint">Мы создаем знакомство с брендом.</span>
      </p>
    </Slide>
  );
}
