import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Controls({ index, total, onPrev, onNext, onGo }) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex items-center justify-between px-4 py-4 md:px-8">
      <button
        type="button"
        className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-fincode-blue/80 text-white backdrop-blur hover:border-fincode-mint hover:text-fincode-mint disabled:opacity-30"
        onClick={onPrev}
        disabled={index === 0}
        aria-label="Предыдущий слайд"
      >
        <ChevronLeft size={20} />
      </button>
      <div className="pointer-events-auto flex max-w-[55vw] items-center gap-1.5 overflow-x-auto px-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Слайд ${i + 1}`}
            onClick={() => onGo(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? 'w-6 bg-fincode-mint' : 'w-1.5 bg-white/25 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
      <button
        type="button"
        className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-fincode-blue/80 text-white backdrop-blur hover:border-fincode-mint hover:text-fincode-mint disabled:opacity-30"
        onClick={onNext}
        disabled={index === total - 1}
        aria-label="Следующий слайд"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
