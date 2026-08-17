import { Car, Smartphone, Laptop, Sofa, Cog, House } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import Slide from '../components/Slide.jsx';

const FUTURE = [
  { icon: Smartphone, label: 'Телефоны' },
  { icon: Laptop, label: 'Электроника' },
  { icon: Sofa, label: 'Мебель' },
  { icon: Cog, label: 'Техника' },
  { icon: House, label: 'Товары для дома' },
];

export default function WhyFincode() {
  return (
    <Slide id="why-fincode">
      <Reveal>
        <p className="kicker">ПОЧЕМУ FINCODE</p>
        <h2 className="mt-2">
          Мы продвигаем не продукт.
          <br />
          Мы знакомим аудиторию с брендом FINCODE.
        </h2>
      </Reveal>
      <div className="grid min-h-0 gap-3 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="kicker">СЕГОДНЯ</p>
          <Car className="mt-4 text-fincode-mint" size={36} strokeWidth={1.4} />
          <h3 className="mt-3 text-xl font-extrabold">АВТОЛИЗИНГ</h3>
          <p className="lead mt-2">Автомобиль — одна из ключевых потребностей взрослой работающей аудитории.</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-fincode-green/35 p-4">
          <p className="kicker">ЗАВТРА</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {FUTURE.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm">
                <item.icon size={16} className="text-fincode-mint" />
                {item.label}
              </div>
            ))}
          </div>
          <p className="lead mt-3">Онлайн-потребительский лизинг расширит количество поводов обратиться к FINCODE.</p>
        </article>
      </div>
      <p className="text-[clamp(1rem,2.3vh,1.45rem)] font-extrabold">
        Один знакомый бренд <span className="text-fincode-mint">→</span> множество будущих потребностей.
      </p>
    </Slide>
  );
}
