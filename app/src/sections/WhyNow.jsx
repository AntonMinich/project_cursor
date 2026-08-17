import Reveal from '../components/Reveal.jsx';

export default function WhyNow() {
  return (
    <section id="why-now" className="section-shell bg-fincode-blue-deep">
      <div className="mx-auto flex h-full w-full max-w-[1320px] flex-col justify-center px-5 py-4 md:px-10">
        <Reveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-fincode-mint">МОМЕНТ</p>
          <h2 className="text-4xl font-extrabold md:text-6xl">Сейчас FINCODE строит бренд.</h2>
          <p className="mt-8 max-w-3xl text-2xl leading-snug text-white/80">
            Когда бренд молодой, каждый дополнительный контакт имеет значение.
          </p>
          <p className="mt-5 max-w-3xl text-2xl leading-snug text-white/80">
            Мы можем начать формировать узнаваемость FINCODE там, где уже находится нужная нам аудитория.
          </p>
        </Reveal>
        <div className="mt-6 md:mt-10 grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="rounded-[28px] border border-white/10 p-10">
              <p className="text-xs font-semibold tracking-[0.2em] text-white/45">СЕГОДНЯ</p>
              <p className="mt-6 text-4xl font-extrabold">Нас еще нужно узнавать.</p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="rounded-[28px] border border-fincode-mint/40 bg-fincode-mint/10 p-10">
              <p className="text-xs font-semibold tracking-[0.2em] text-fincode-mint">ЗАВТРА</p>
              <p className="mt-6 text-4xl font-extrabold">Нас уже должны узнавать.</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
