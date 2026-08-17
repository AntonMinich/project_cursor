import Reveal from '../components/Reveal.jsx';
import { IMAGES } from '../data/assets.js';

export default function Finale() {
  return (
    <section id="finale" className="relative min-h-svh bg-fincode-blue">
      <div className="mx-auto flex min-h-svh max-w-[1320px] flex-col justify-center px-6 py-28 md:px-10">
        <Reveal>
          <img src={IMAGES.logo} alt="FINCODE" className="h-10 w-auto md:h-14" />
          <h2 className="mt-12 text-6xl font-extrabold tracking-tight md:text-8xl">
            FINCODE <span className="text-fincode-mint">TEAM</span>
          </h2>
          <p className="mt-8 text-3xl font-semibold leading-snug md:text-5xl">
            Команда, которую видят.
            <br />
            Бренд, который запоминают.
          </p>
          <p className="mt-10 max-w-2xl text-xl leading-relaxed text-white/70">
            Увидел форму.
            <br />
            Запомнил бренд.
            <br />
            Встретил снова.
            <br />
            Вспомнил, когда понадобился лизинг.
          </p>
          <p className="mt-16 max-w-3xl text-2xl font-bold md:text-3xl">
            Предлагаем запустить FINCODE TEAM как годовой маркетинговый проект.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
