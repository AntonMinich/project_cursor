import { useEffect, useRef, useState } from 'react';

export default function CountUp({ value, prefix = '', suffix = '', className = '' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(`${prefix}0${suffix}`);
  const target = Number(String(value).replace(/[^\d]/g, ''));

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    let frame;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - start) / 1100);
          const eased = 1 - (1 - p) ** 3;
          const current = Math.round(target * eased);
          const formatted = current.toLocaleString('ru-RU').replace(/\u00A0/g, ' ');
          setShown(`${prefix}${formatted}${suffix}`);
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(node);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [prefix, suffix, target]);

  return (
    <span ref={ref} className={className}>
      {shown}
    </span>
  );
}
