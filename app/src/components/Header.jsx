import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { IMAGES, NAV } from '../data/assets.js';
import { useDeck } from '../DeckContext.jsx';

export default function Header() {
  const { activeId, index, total, goTo } = useDeck();
  const [open, setOpen] = useState(false);
  const num = String(index + 1).padStart(2, '0');
  const progress = total > 1 ? (index + 1) / total : 1;

  return (
    <header className="relative z-50">
      <div className="h-[2px] bg-white/10">
        <div className="progress-line h-full bg-fincode-mint" style={{ transform: `scaleX(${progress})` }} />
      </div>
      <div className="flex items-center justify-between px-4 py-2 md:px-8">
        <button type="button" className="flex items-center" onClick={() => { goTo(0); setOpen(false); }}>
          <img src={IMAGES.logoLight} alt="FINCODE" className="h-8 w-auto md:h-9" />
        </button>
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold tracking-[0.18em] text-white/70 md:text-sm">
            <span className="text-fincode-mint">{num}</span> / {String(total).padStart(2, '0')}
          </span>
          <button
            type="button"
            className="rounded-full border border-white/15 p-1.5 text-white/80 hover:border-fincode-mint hover:text-fincode-mint"
            onClick={() => setOpen((value) => !value)}
            aria-label="Разделы презентации"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="absolute right-4 top-full z-50 w-56 rounded-2xl border border-white/10 bg-fincode-blue-deep p-2 shadow-2xl md:right-8">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                goTo(item.id);
                setOpen(false);
              }}
              className={`block w-full rounded-lg px-3 py-1.5 text-left text-sm font-medium ${
                activeId === item.id ? 'text-fincode-mint' : 'text-white/75 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
