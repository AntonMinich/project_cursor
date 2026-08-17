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
          <p className="mt-6 max-w-3xl text-[clamp(1.55rem,4vh,2.7rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-white">
            Команда, которую видят.
            <br />
            Бренд, который запоминают.
          </p>
          <div className="mt-5 h-px w-14 bg-fincode-mint" />
          <p className="mt-4 whitespace-nowrap text-[clamp(0.82rem,1.85vw,1.2rem)] font-medium tracking-[0.02em] text-white/90">
            Корпоративная спортивная форма как инструмент продвижения бренда.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
