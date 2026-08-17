import Reveal from '../components/Reveal.jsx';
import { IMAGES } from '../data/assets.js';

export default function Finale() {
  return (
    <section id="finale" className="slide">
      <div className="slide-inner">
        <Reveal>
          <img src={IMAGES.logoLight} alt="FINCODE" className="h-16 w-auto md:h-24" />
          <h1 className="mt-4">
            FINCODE <span className="text-fincode-mint">TEAM</span>
          </h1>
          <p className="mt-3 text-[clamp(1.1rem,3vh,2rem)] font-semibold leading-snug">
            Команда, которую видят.
            <br />
            Бренд, который запоминают.
          </p>
          <p className="lead mt-4 max-w-xl">
            Увидел форму. Запомнил бренд. Встретил снова. Вспомнил, когда понадобился лизинг.
          </p>
          <p className="mt-4 text-[clamp(1rem,2.3vh,1.45rem)] font-bold">
            Предлагаем запустить FINCODE TEAM как годовой маркетинговый проект.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
