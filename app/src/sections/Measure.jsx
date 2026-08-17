import Reveal from '../components/Reveal.jsx';
import Slide from '../components/Slide.jsx';

const LEVELS = [
  {
    title: 'ОХВАТ',
    items: ['мероприятия', 'участники', 'потенциальная аудитория', 'контакты', 'публикации'],
  },
  {
    title: 'DIGITAL',
    items: ['просмотры', 'охват', 'переходы по QR', 'визиты на лендинг', 'подписки', 'вовлеченность'],
  },
  {
    title: 'BUSINESS',
    items: ['заявки', 'обращения', 'заявки с QR', 'промокоды', 'автолизинг', 'потребительский лизинг'],
  },
];

export default function Measure() {
  return (
    <Slide id="measure" deep>
      <Reveal>
        <p className="kicker">KPI</p>
        <h2 className="mt-2">Спорт — это эмоции. Результат — в цифрах.</h2>
      </Reveal>
      <div className="grid min-h-0 gap-3 md:grid-cols-3">
        {LEVELS.map((level) => (
          <article key={level.title} className="rounded-2xl border border-white/10 p-3">
            <h3 className="font-extrabold tracking-wide text-fincode-mint">{level.title}</h3>
            <ul className="mt-2 space-y-1 text-sm text-white/75 md:text-base">
              {level.items.map((item) => (
                <li key={item} className="border-b border-white/10 py-1 last:border-0">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="lead">
        На первом этапе основной результат — рост узнаваемости и контактов. Лидогенерация — измеримый
        дополнительный результат.
      </p>
    </Slide>
  );
}
