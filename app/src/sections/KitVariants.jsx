import Reveal from '../components/Reveal.jsx';
import Slide from '../components/Slide.jsx';
import { Bib, Jersey, PALETTES, Tee, Trisuit } from '../components/KitGarments.jsx';

function Card({ title, subtitle, children }) {
  return (
    <article className="flex min-h-0 flex-col rounded-2xl border border-white/10 bg-black/20 p-2">
      <div className="fill">{children}</div>
      <div className="mt-1 text-center">
        <p className="text-xs font-semibold md:text-sm">{title}</p>
        <p className="text-[10px] text-fincode-mint md:text-xs">{subtitle}</p>
      </div>
    </article>
  );
}

export function KitTops() {
  return (
    <Slide id="kit-tops" deep>
      <Reveal>
        <p className="kicker">ВАРИАНТЫ ФОРМЫ</p>
        <h2 className="mt-2">Майки и велоджерси</h2>
        <p className="lead mt-1">Тёмный race-комплект и светлый club. Логотип читается с дистанции.</p>
      </Reveal>
      <div className="fill grid min-h-0 grid-cols-2 gap-2 lg:grid-cols-4">
        <Card title="Майка" subtitle={PALETTES.navy.name}><Tee palette={PALETTES.navy} /></Card>
        <Card title="Майка" subtitle={PALETTES.club.name}><Tee palette={PALETTES.club} /></Card>
        <Card title="Велоджерси" subtitle={PALETTES.navy.name}><Jersey palette={PALETTES.navy} /></Card>
        <Card title="Велоджерси" subtitle={PALETTES.forest.name}><Jersey palette={PALETTES.forest} /></Card>
      </div>
    </Slide>
  );
}

export function KitRace() {
  return (
    <Slide id="kit-race">
      <Reveal>
        <p className="kicker">ВАРИАНТЫ ФОРМЫ</p>
        <h2 className="mt-2">Бибы и трисьют</h2>
        <p className="lead mt-1">Один визуальный код на велостарте и в триатлоне.</p>
      </Reveal>
      <div className="fill grid min-h-0 grid-cols-2 gap-2 lg:grid-cols-4">
        <Card title="Велобибы" subtitle={PALETTES.navy.name}><Bib palette={PALETTES.navy} /></Card>
        <Card title="Велобибы" subtitle={PALETTES.split.name}><Bib palette={PALETTES.split} /></Card>
        <Card title="Трисьют" subtitle={PALETTES.navy.name}><Trisuit palette={PALETTES.navy} /></Card>
        <Card title="Трисьют" subtitle={PALETTES.forest.name}><Trisuit palette={PALETTES.forest} /></Card>
      </div>
    </Slide>
  );
}
