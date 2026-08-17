import { Eye, Repeat2, Fingerprint } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import Slide from '../components/Slide.jsx';

const SHIFT = [
  { from: 'Закупка одежды', to: 'Канал коммуникации' },
  { from: 'Разовый расход', to: 'Годовой бренд-актив' },
  { from: 'Форма на складе', to: 'Логотип на дистанции' },
];

const DRIVERS = [
  {
    n: '01',
    icon: Eye,
    title: 'Видимость',
    text: 'Тысячи участников и зрителей видят бренд вживую — без медиабаинга.',
  },
  {
    n: '02',
    icon: Repeat2,
    title: 'Повторяемость',
    text: 'Команда выходит на старты весь год. Контакт с брендом копится.',
  },
  {
    n: '03',
    icon: Fingerprint,
    title: 'Узнаваемость',
    text: 'Повторная встреча превращает незнакомый знак в знакомое имя FINCODE.',
  },
];

export default function NotKit() {
  return (
    <Slide id="not-kit" deep className="slide-finance">
      <div className="fill grid min-h-0 gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-8">
        <Reveal className="flex h-full min-h-0 flex-col justify-between">
          <div>
            <p className="kicker">ТЕЗИС</p>
            <h2 className="mt-3 max-w-[18ch]">
              Это не закупка формы.
              <span className="mt-2 block text-fincode-mint">Это канал коммуникации.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[clamp(0.92rem,2vh,1.2rem)] font-medium leading-snug text-white/75">
              FINCODE становится видимым там, где уже находится наша потенциальная аудитория.
            </p>
          </div>
          <div className="mt-5">
            <div className="flex items-center justify-between border-b border-white/15 pb-2 text-[10px] font-semibold tracking-[0.2em] text-white/35">
              <span>НЕ ЭТО</span>
              <span className="text-fincode-mint">АКТИВ</span>
            </div>
            {SHIFT.map((row) => (
              <div
                key={row.from}
                className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-b border-white/10 py-2.5"
              >
                <p className="text-[clamp(0.78rem,1.5vh,0.95rem)] text-white/40">{row.from}</p>
                <p className="text-fincode-mint">→</p>
                <p className="text-[clamp(0.82rem,1.6vh,1.02rem)] font-semibold">{row.to}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid min-h-0 grid-rows-3 gap-2">
          {DRIVERS.map((item, i) => (
            <Reveal key={item.n} delay={0.08 + i * 0.06} className="h-full min-h-0">
              <article className="flex h-full min-h-0 items-stretch overflow-hidden border border-white/10 bg-[#0c1448]/80">
                <div className="flex w-16 shrink-0 flex-col items-center justify-between bg-fincode-mint/10 py-3 md:w-20">
                  <p className="text-[10px] font-bold tracking-[0.18em] text-fincode-mint">{item.n}</p>
                  <item.icon className="text-fincode-mint" size={22} strokeWidth={1.6} />
                </div>
                <div className="flex min-h-0 flex-1 flex-col justify-center px-4 py-3">
                  <h3 className="text-[clamp(1.05rem,2.4vh,1.55rem)] font-extrabold tracking-tight">{item.title}</h3>
                  <p className="lead mt-1">{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Slide>
  );
}
