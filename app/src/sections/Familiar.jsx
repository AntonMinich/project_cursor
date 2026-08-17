import Reveal from '../components/Reveal.jsx';

const STORY = [
  { title: 'Соревнование №1', text: 'Человек видит FINCODE впервые.' },
  { title: 'Социальные сети', text: 'Видит фотографии участников.' },
  { title: 'Соревнование №2', text: 'Снова встречает FINCODE.' },
  { title: 'Реклама', text: 'Видит FINCODE уже в другом рекламном контексте.' },
  { title: 'Потребность', text: 'Возникает потребность в автомобиле / телефоне / технике.' },
  { title: 'Выбор', text: 'FINCODE уже знаком.' },
];

export default function Familiar() {
  return (
    <section id="familiar" className="section-shell bg-fincode-blue-deep">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-24 md:px-10">
        <Reveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-fincode-mint">ЗНАКОМСТВО</p>
          <h2 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Сначала — незнакомый логотип.
            <br />
            Потом — «я уже их где-то видел».
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-0 md:grid-cols-6">
          {STORY.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <article className="border-t border-white/10 py-6 md:border-t-0 md:border-l md:px-5 md:py-0 first:md:border-l-0 first:md:pl-0">
                <p className="text-fincode-mint text-sm font-semibold tracking-[0.16em]">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-white/65">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-16 max-w-4xl text-2xl font-semibold leading-snug md:text-3xl">
            Мы не рассчитываем на продажу с первого контакта.{' '}
            <span className="text-fincode-mint">Мы создаем знакомство с брендом.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
