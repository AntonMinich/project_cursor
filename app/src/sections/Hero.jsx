import { ChevronRight } from 'lucide-react';
import { IMAGES } from '../data/assets.js';
import Reveal from '../components/Reveal.jsx';
import { useDeck } from '../DeckContext.jsx';

export default function Hero() {
  const { next } = useDeck();

  return (
    <section id="hero" className="slide relative">
      <img src={IMAGES.sport.hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-fincode-blue via-fincode-blue/80 to-fincode-blue/25" />
      <div className="slide-inner relative z-10 justify-end pb-4">
        <Reveal>
          <img src={IMAGES.logoLight} alt="FINCODE" className="h-8 w-auto md:h-10" />
          <p className="kicker mt-4">ООО «ФИНАНСОВЫЙ КОД»</p>
          <h1 className="mt-3">
            FINCODE <span className="text-fincode-mint">TEAM</span>
          </h1>
          <p className="mt-4 max-w-xl text-[clamp(1rem,2.6vh,1.8rem)] font-semibold leading-snug">
            Команда, которую видят.
            <br />
            Бренд, который запоминают.
          </p>
          <p className="lead mt-3 max-w-2xl">
            Создаем корпоративную спортивную команду FINCODE для участия в крупнейших велогонках,
            беговых и триатлонных мероприятиях Беларуси.
          </p>
        </Reveal>
        <button
          type="button"
          onClick={next}
          className="mt-4 inline-flex items-center gap-2 self-start text-[11px] font-semibold tracking-[0.2em] text-white/70 hover:text-fincode-mint"
        >
          ДАЛЬШЕ <ChevronRight size={14} />
        </button>
      </div>
    </section>
  );
}
