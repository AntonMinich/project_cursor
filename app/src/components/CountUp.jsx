import { useEffect, useRef, useState } from 'react';

export default function CountUp({ value, prefix = '', suffix = '', className = '' }) {
  const ref = useRef(null);
  const target = Number(String(value).replace(/[^\d]/g, ''));
  const [shown, setShown] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    const start = performance.now();
    let frame;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / 900);
      const eased = 1 - (1 - p) ** 3;
      const current = Math.round(target * eased);
      const formatted = current.toLocaleString('ru-RU').replace(/\u00A0/g, ' ');
      setShown(`${prefix}${formatted}${suffix}`);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [prefix, suffix, target]);

  return (
    <span ref={ref} className={className}>
      {shown}
    </span>
  );
}
