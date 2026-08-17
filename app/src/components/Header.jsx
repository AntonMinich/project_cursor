import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { IMAGES, NAV, SECTIONS } from '../data/assets.js';

export default function Header({ activeId, progress }) {
  const [open, setOpen] = useState(false);
  const index = Math.max(0, SECTIONS.findIndex((item) => item.id === activeId));
  const num = String(index + 1).padStart(2, '0');

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="h-[2px] bg-white/10">
        <div
          className="progress-line h-full bg-fincode-mint"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
      <div className="flex items-center justify-between px-5 py-4 md:px-10 bg-fincode-blue/80 backdrop-blur-xl">
        <a href="#hero" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={IMAGES.logo} alt="FINCODE" className="h-7 w-auto" />
        </a>
        <div className="flex items-center gap-5">
          <span className="text-sm font-semibold tracking-[0.18em] text-white/70">
            <span className="text-fincode-mint">{num}</span> / {String(SECTIONS.length).padStart(2, '0')}
          </span>
          <button
            type="button"
            className="rounded-full border border-white/15 p-2 text-white/80 hover:border-fincode-mint hover:text-fincode-mint"
            onClick={() => setOpen((value) => !value)}
            aria-label="Разделы презентации"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="absolute right-5 top-[72px] w-64 rounded-2xl border border-white/10 bg-fincode-blue-deep/95 p-4 shadow-2xl md:right-10">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                activeId === item.id ? 'text-fincode-mint' : 'text-white/75 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
