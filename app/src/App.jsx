import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Header from './components/Header.jsx';
import Controls from './components/Controls.jsx';
import { DeckContext } from './DeckContext.jsx';
import Hero from './sections/Hero.jsx';
import NotKit from './sections/NotKit.jsx';
import Audience from './sections/Audience.jsx';
import Scale from './sections/Scale.jsx';
import Funnel from './sections/Funnel.jsx';
import WhyKit from './sections/WhyKit.jsx';
import Familiar from './sections/Familiar.jsx';
import WhyFincode from './sections/WhyFincode.jsx';
import TeamLook from './sections/TeamLook.jsx';
import Others from './sections/Others.jsx';
import Gets from './sections/Gets.jsx';
import Year from './sections/Year.jsx';
import Measure from './sections/Measure.jsx';
import Leads from './sections/Leads.jsx';
import WhyNow from './sections/WhyNow.jsx';
import Finale from './sections/Finale.jsx';

const SLIDES = [
  { id: 'hero', node: <Hero /> },
  { id: 'not-kit', node: <NotKit /> },
  { id: 'audience', node: <Audience /> },
  { id: 'scale', node: <Scale /> },
  { id: 'funnel', node: <Funnel /> },
  { id: 'why-kit', node: <WhyKit /> },
  { id: 'familiar', node: <Familiar /> },
  { id: 'why-fincode', node: <WhyFincode /> },
  { id: 'team', node: <TeamLook /> },
  { id: 'others', node: <Others /> },
  { id: 'gets', node: <Gets /> },
  { id: 'year', node: <Year /> },
  { id: 'measure', node: <Measure /> },
  { id: 'leads', node: <Leads /> },
  { id: 'why-now', node: <WhyNow /> },
  { id: 'finale', node: <Finale /> },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const lock = useRef(false);
  const total = SLIDES.length;
  const activeId = SLIDES[index].id;

  const goTo = useCallback((idOrIndex) => {
    if (typeof idOrIndex === 'number') {
      setIndex(Math.max(0, Math.min(total - 1, idOrIndex)));
      return;
    }
    const next = SLIDES.findIndex((slide) => slide.id === idOrIndex);
    if (next >= 0) setIndex(next);
  }, [total]);

  const next = useCallback(() => setIndex((value) => Math.min(total - 1, value + 1)), [total]);
  const prev = useCallback(() => setIndex((value) => Math.max(0, value - 1)), []);

  const deck = useMemo(() => ({ index, total, goTo, next, prev, activeId }), [index, total, goTo, next, prev, activeId]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
        event.preventDefault();
        next();
      }
      if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault();
        prev();
      }
      if (event.key === 'Home') goTo(0);
      if (event.key === 'End') goTo(total - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goTo, next, prev, total]);

  useEffect(() => {
    const onWheel = (event) => {
      if (Math.abs(event.deltaY) < 28) return;
      if (lock.current) return;
      lock.current = true;
      if (event.deltaY > 0) next();
      else prev();
      window.setTimeout(() => {
        lock.current = false;
      }, 720);
    };
    window.addEventListener('wheel', onWheel, { passive: true });
    return () => window.removeEventListener('wheel', onWheel);
  }, [next, prev]);

  useEffect(() => {
    let startX = null;
    const onStart = (event) => {
      startX = event.changedTouches[0].screenX;
    };
    const onEnd = (event) => {
      if (startX === null) return;
      const dx = event.changedTouches[0].screenX - startX;
      if (Math.abs(dx) > 48) {
        if (dx < 0) next();
        else prev();
      }
      startX = null;
    };
    window.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchend', onEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchend', onEnd);
    };
  }, [next, prev]);

  return (
    <DeckContext.Provider value={deck}>
      <div className="deck bg-fincode-blue text-white">
        <Header />
        <main className="min-h-0 overflow-hidden">
          <div key={activeId} className="animate-slide">
            {SLIDES[index].node}
          </div>
        </main>
        <Controls index={index} total={total} onPrev={prev} onNext={next} onGo={goTo} />
      </div>
    </DeckContext.Provider>
  );
}
