import Reveal from '../components/Reveal.jsx';
import { Bib, Jersey, PALETTES, Tee, Trisuit } from '../components/KitGarments.jsx';

function Card({ title, subtitle, children }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-black/20 p-3 md:p-4">
      <div className="min-h-0 flex-1">{children}</div>
      <div className="mt-2 text-center">
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-xs text-fincode-mint">{subtitle}</p>
      </div>
    </article>
  );
}

export function KitTops() {
  return (
    <section id="kit-tops" className="section-shell bg-fincode-blue-deep">
      <div className="mx-auto flex h-full w-full max-w-[1320px] flex-col justify-center px-5 py-4 md:px-10">
        <Reveal>
          <p className="mb-2 text-xs font-semibold tracking-[0.24em] text-fincode-mint">ВАРИАНТЫ ФОРМЫ</p>
          <h2 className="text-3xl font-extrabold md:text-5xl">Майки и велоджерси</h2>
          <p className="mt-2 max-w-3xl text-base text-white/70 md:text-lg">
            Два направления: тёмный race-комплект и светлый club. Логотип FINCODE читается с дистанции.
          </p>
        </Reveal>
        <div className="mt-5 grid min-h-0 flex-1 grid-cols-2 gap-3 lg:grid-cols-4">
          <Card title="Майка" subtitle={PALETTES.navy.name}>
            <Tee palette={PALETTES.navy} />
          </Card>
          <Card title="Майка" subtitle={PALETTES.club.name}>
            <Tee palette={PALETTES.club} />
          </Card>
          <Card title="Велоджерси" subtitle={PALETTES.navy.name}>
            <Jersey palette={PALETTES.navy} />
          </Card>
          <Card title="Велоджерси" subtitle={PALETTES.forest.name}>
            <Jersey palette={PALETTES.forest} />
          </Card>
        </div>
      </div>
    </section>
  );
}

export function KitRace() {
  return (
    <section id="kit-race" className="section-shell">
      <div className="mx-auto flex h-full w-full max-w-[1320px] flex-col justify-center px-5 py-4 md:px-10">
        <Reveal>
          <p className="mb-2 text-xs font-semibold tracking-[0.24em] text-fincode-mint">ВАРИАНТЫ ФОРМЫ</p>
          <h2 className="text-3xl font-extrabold md:text-5xl">Бибы и трисьют</h2>
          <p className="mt-2 max-w-3xl text-base text-white/70 md:text-lg">
            Велобибы и триатлонный комбинезон в тех же цветах, чтобы команда выглядела цельно на любом старте.
          </p>
        </Reveal>
        <div className="mt-5 grid min-h-0 flex-1 grid-cols-2 gap-3 lg:grid-cols-4">
          <Card title="Велобибы" subtitle={PALETTES.navy.name}>
            <Bib palette={PALETTES.navy} />
          </Card>
          <Card title="Велобибы" subtitle={PALETTES.split.name}>
            <Bib palette={PALETTES.split} />
          </Card>
          <Card title="Трисьют" subtitle={PALETTES.navy.name}>
            <Trisuit palette={PALETTES.navy} />
          </Card>
          <Card title="Трисьют" subtitle={PALETTES.forest.name}>
            <Trisuit palette={PALETTES.forest} />
          </Card>
        </div>
      </div>
    </section>
  );
}
