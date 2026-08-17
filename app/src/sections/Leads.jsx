import Reveal from '../components/Reveal.jsx';
import { IMAGES } from '../data/assets.js';

const OPTIONS = ['Автомобиль', 'Телефон', 'Техника', 'Другие покупки'];

export default function Leads() {
  return (
    <section id="leads" className="section-shell">
      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-12 px-6 py-24 md:grid-cols-2 md:px-10">
        <Reveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-fincode-mint">ЛИДЫ</p>
          <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Увидел FINCODE → получил повод познакомиться ближе
          </h2>
          <p className="mt-6 text-xl text-white/70">
            На форме и в зоне команды — QR-код. После сканирования пользователь попадает на специальный лендинг.
          </p>
          <p className="mt-8 text-3xl font-semibold">Тех, у кого есть команда</p>
          <p className="mt-3 text-xl text-white/70">FINCODE помогает двигаться дальше.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {OPTIONS.map((item) => (
              <span key={item} className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <span className="rounded-full bg-fincode-mint px-6 py-3 text-sm font-bold tracking-wide text-fincode-blue">
              Узнать о FINCODE
            </span>
            <span className="rounded-full border border-fincode-mint px-6 py-3 text-sm font-bold tracking-wide text-fincode-mint">
              Рассчитать лизинг
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mx-auto w-full max-w-sm rounded-[32px] border border-white/10 bg-white p-8 text-fincode-blue">
            <p className="text-xs font-bold tracking-[0.2em] text-fincode-green">DEMO QR</p>
            <img src={IMAGES.qr} alt="Демонстрационный QR-код FINCODE" className="mx-auto mt-6 w-56" />
            <p className="mt-6 text-center text-sm font-medium text-fincode-blue/70">
              Демо-версия. В сезоне код ведет на лендинг FINCODE.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
