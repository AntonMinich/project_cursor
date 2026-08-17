import { ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IMAGES } from '../data/assets.js';
import Reveal from '../components/Reveal.jsx';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 90]);

  return (
    <section id="hero" className="relative min-h-svh overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={IMAGES.sport.hero}
          alt="Спортсмены на соревновании"
          className="h-[120%] w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-fincode-blue via-fincode-blue/80 to-fincode-blue/25" />
      <div className="relative z-10 mx-auto flex min-h-svh max-w-[1320px] flex-col justify-end px-6 pb-16 pt-28 md:px-10 md:pb-20">
        <Reveal>
          <p className="mb-5 text-xs font-semibold tracking-[0.28em] text-fincode-mint">
            ООО «ФИНАНСОВЫЙ КОД»
          </p>
          <h1 className="max-w-5xl text-6xl font-extrabold leading-[0.92] tracking-tight md:text-8xl">
            FINCODE <span className="text-fincode-mint">TEAM</span>
          </h1>
          <p className="mt-8 max-w-xl text-2xl font-semibold leading-snug md:text-4xl">
            Команда, которую видят.
            <br />
            Бренд, который запоминают.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            Создаем корпоративную спортивную команду FINCODE для участия в крупнейших велогонках,
            беговых и триатлонных мероприятиях Беларуси.
          </p>
        </Reveal>
        <a
          href="#not-kit"
          className="mt-12 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-white/70 hover:text-fincode-mint"
        >
          SCROLL TO EXPLORE
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
