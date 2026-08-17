import Reveal from '../components/Reveal.jsx';
import Slide from '../components/Slide.jsx';
import { IMAGES } from '../data/assets.js';

export default function TeamLook() {
  return (
    <Slide id="team" deep wide>
      <Reveal>
        <p className="kicker">ЭКИПИРОВКА</p>
        <h2 className="mt-1">Так выглядит команда FINCODE TEAM</h2>
      </Reveal>
      <div className="fill overflow-hidden rounded-xl bg-black/25">
        <img
          src={IMAGES.kit.board}
          alt="Макет формы FINCODE TEAM"
          className="h-full w-full object-contain object-center"
        />
      </div>
    </Slide>
  );
}
