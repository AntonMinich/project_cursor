import { ChevronRight } from 'lucide-react';
import { IMAGES } from '../data/assets.js';
import Reveal from '../components/Reveal.jsx';
import { useDeck } from '../DeckContext.jsx';

export default function Hero() {
  const { next } = useDeck();

  return (
    <section id="hero" className="relative h-full overflow-hidden">
      <img
        src={IMAGES.sport.hero}
        alt="Спортсмены на соревновании"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-fincode-blue via-fincode-blue/80 to-fincode-blue/20" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1320px] flex-col justify-end px-5 pb-6 pt-4 md:px-10 md:pb-8">
        <Reveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.28em] text-fincode-mint">
            ООО «ФИНАНСОВЫЙ КОД»
          </p>
          <h1 className="max-w-5xl text-5xl font-extrabold leading-[0.92] tracking-tight md:text-8xl">
            FINCODE <span className="text-fincode-mint">TEAM</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl font-semibold leading-snug md:text-4xl">
            Команда, которую видят.
            <br />
            Бренд, который запоминают.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-xl">
            Создаем корпоративную спортивную команду FINCODE для участия в крупнейших велогонках,
            беговых и триатлонных мероприятиях Беларуси.
          </p>
        </Reveal>
        <button
          type="button"
          onClick={next}
          className="mt-8 inline-flex items-center gap-2 self-start text-xs font-semibold tracking-[0.22em] text-white/70 hover:text-fincode-mint"
        >
          ДАЛЬШЕ
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
}
