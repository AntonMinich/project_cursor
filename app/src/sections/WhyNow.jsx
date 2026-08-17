import Reveal from '../components/Reveal.jsx';
import Slide from '../components/Slide.jsx';

export default function WhyNow() {
  return (
    <Slide id="why-now" deep>
      <Reveal>
        <p className="kicker">МОМЕНТ</p>
        <h2 className="mt-2">Сейчас FINCODE строит бренд.</h2>
        <p className="lead mt-3 max-w-3xl">
          Когда бренд молодой, каждый дополнительный контакт имеет значение. Мы можем начать формировать
          узнаваемость там, где уже находится нужная аудитория.
        </p>
      </Reveal>
      <div className="grid gap-3 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 p-5">
          <p className="kicker">СЕГОДНЯ</p>
          <p className="mt-3 text-[clamp(1.2rem,3vh,1.9rem)] font-extrabold">Нас еще нужно узнавать.</p>
        </article>
        <article className="rounded-2xl border border-fincode-mint/40 bg-fincode-mint/10 p-5">
          <p className="kicker">ЗАВТРА</p>
          <p className="mt-3 text-[clamp(1.2rem,3vh,1.9rem)] font-extrabold">Нас уже должны узнавать.</p>
        </article>
      </div>
    </Slide>
  );
}
