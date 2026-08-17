import { Car, Smartphone, Laptop, Sofa, Cog, House } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';

const FUTURE = [
  { icon: Smartphone, label: 'Телефоны' },
  { icon: Laptop, label: 'Электроника' },
  { icon: Sofa, label: 'Мебель' },
  { icon: Cog, label: 'Техника' },
  { icon: House, label: 'Товары для дома' },
];

export default function WhyFincode() {
  return (
    <section id="why-fincode" className="section-shell">
      <div className="mx-auto flex h-full w-full max-w-[1320px] flex-col justify-center px-5 py-4 md:px-10">
        <Reveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-fincode-mint">ПОЧЕМУ FINCODE</p>
          <h2 className="max-w-5xl text-4xl font-extrabold leading-tight md:text-6xl">
            Мы продвигаем не продукт.
            <br />
            Мы знакомим аудиторию с брендом FINCODE.
          </h2>
        </Reveal>
        <div className="mt-6 md:mt-10 grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-[28px] border border-white/10 bg-white/5 p-10">
              <p className="text-xs font-semibold tracking-[0.24em] text-fincode-mint">СЕГОДНЯ</p>
              <Car className="mt-8 text-fincode-mint" size={56} strokeWidth={1.4} />
              <h3 className="mt-8 text-3xl font-extrabold tracking-tight">АВТОЛИЗИНГ</h3>
              <p className="mt-4 text-xl leading-relaxed text-white/70">
                Автомобиль — одна из ключевых потребностей взрослой работающей аудитории.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="h-full rounded-[28px] border border-white/10 bg-fincode-green/40 p-10">
              <p className="text-xs font-semibold tracking-[0.24em] text-fincode-mint">ЗАВТРА</p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {FUTURE.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-lg">
                    <item.icon size={22} className="text-fincode-mint" />
                    {item.label}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-xl leading-relaxed text-white/70">
                Онлайн-потребительский лизинг расширит количество поводов обратиться к FINCODE.
              </p>
            </article>
          </Reveal>
        </div>
        <Reveal>
          <p className="mt-5 md:mt-8 text-3xl font-extrabold md:text-4xl">
            Один знакомый бренд <span className="text-fincode-mint">→</span> множество будущих потребностей.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
