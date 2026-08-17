import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import { SECTIONS } from './data/assets.js';
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

export default function App() {
  const [activeId, setActiveId] = useState('hero');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const nodes = SECTIONS.map((item) => document.getElementById(item.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { threshold: [0.25, 0.45, 0.6] },
    );
    nodes.forEach((node) => io.observe(node));

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="bg-fincode-blue text-white">
      <Header activeId={activeId} progress={progress} />
      <main>
        <Hero />
        <NotKit />
        <Audience />
        <Scale />
        <Funnel />
        <WhyKit />
        <Familiar />
        <WhyFincode />
        <TeamLook />
        <Others />
        <Gets />
        <Year />
        <Measure />
        <Leads />
        <WhyNow />
        <Finale />
      </main>
    </div>
  );
}
