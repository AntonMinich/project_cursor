import { IMAGES } from '../data/assets.js';
import Reveal from '../components/Reveal.jsx';

export default function Hero() {
  return (
    <section id="hero" className="slide slide-hero relative">
      <img src={IMAGES.sport.hero} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-fincode-blue via-fincode-blue/80 to-fincode-blue/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-fincode-blue/70 via-transparent to-transparent" />
      <div className="slide-inner relative z-10 justify-end pb-4">
        <Reveal>
          <h1>
            FINCODE <span className="text-fincode-mint">TEAM</span>
          </h1>
          <p className="mt-5 max-w-2xl text-[clamp(1.35rem,3.4vh,2.35rem)] font-semibold leading-[1.2]">
            Команда, которую видят.
            <br />
            Бренд, который запоминают.
          </p>
          <p className="mt-4 whitespace-nowrap text-[clamp(0.78rem,2.15vw,1.7rem)] font-medium leading-none text-white/88">
            Корпоративная спортивная форма как инструмент продвижения бренда.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
