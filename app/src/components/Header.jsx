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
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="h-[2px] bg-white/10">
        <div className="progress-line h-full bg-fincode-mint" style={{ transform: `scaleX(${progress})` }} />
      </div>
      <div className="flex items-center justify-between px-4 py-3 md:px-8 bg-fincode-blue/85 backdrop-blur-xl">
        <button type="button" className="flex items-center" onClick={() => { goTo(0); setOpen(false); }}>
          <img src={IMAGES.logo} alt="FINCODE" className="h-6 w-auto md:h-7" />
        </button>
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold tracking-[0.18em] text-white/70">
            <span className="text-fincode-mint">{num}</span> / {String(total).padStart(2, '0')}
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
        <nav className="absolute right-4 top-[60px] w-60 rounded-2xl border border-white/10 bg-fincode-blue-deep/95 p-3 shadow-2xl md:right-8">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                goTo(item.id);
                setOpen(false);
              }}
              className={`block w-full rounded-lg px-3 py-2 text-left text-sm font-medium ${
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
