import Reveal from '../components/Reveal.jsx';
import Slide from '../components/Slide.jsx';
import { IMAGES } from '../data/assets.js';

const OPTIONS = ['Автомобиль', 'Телефон', 'Техника', 'Другие покупки'];

export default function Leads() {
  return (
    <Slide id="leads">
      <div className="grid min-h-0 items-center gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <p className="kicker">ЛИДЫ</p>
          <h2 className="mt-2">Увидел FINCODE → получил повод познакомиться ближе</h2>
          <p className="lead mt-2">На форме и в зоне команды — QR-код. После сканирования — специальный лендинг.</p>
          <p className="mt-3 text-[clamp(1.05rem,2.4vh,1.5rem)] font-semibold">Тех, у кого есть команда</p>
          <p className="lead mt-1">FINCODE помогает двигаться дальше.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {OPTIONS.map((item) => (
              <span key={item} className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-fincode-mint px-4 py-1.5 text-xs font-bold text-fincode-blue">
              Узнать о FINCODE
            </span>
            <span className="rounded-full border border-fincode-mint px-4 py-1.5 text-xs font-bold text-fincode-mint">
              Рассчитать лизинг
            </span>
          </div>
        </Reveal>
        <div className="mx-auto w-full max-w-[220px] rounded-2xl bg-white p-4 text-fincode-blue">
          <p className="text-[10px] font-bold tracking-[0.2em] text-fincode-green">DEMO QR</p>
          <img src={IMAGES.qr} alt="Демонстрационный QR-код FINCODE" className="mx-auto mt-3 w-36" />
          <p className="mt-3 text-center text-[11px] text-fincode-blue/70">Демо. В сезоне код ведет на лендинг.</p>
        </div>
      </div>
    </Slide>
  );
}
