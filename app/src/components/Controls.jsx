import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Controls({ index, total, onPrev, onNext, onGo }) {
  return (
    <div className="flex items-center justify-between px-4 py-2 md:px-8">
      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white hover:border-fincode-mint hover:text-fincode-mint disabled:opacity-30"
        onClick={onPrev}
        disabled={index === 0}
        aria-label="Предыдущий слайд"
      >
        <ChevronLeft size={18} />
      </button>
      <div className="flex max-w-[60vw] flex-wrap items-center justify-center gap-1">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Слайд ${i + 1}`}
            onClick={() => onGo(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? 'w-5 bg-fincode-mint' : 'w-1.5 bg-white/25 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white hover:border-fincode-mint hover:text-fincode-mint disabled:opacity-30"
        onClick={onNext}
        disabled={index === total - 1}
        aria-label="Следующий слайд"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
