import { useId } from 'react';

export default function PhoneMockup({ accent = '#8b8178', screen = '#1c1a18' }) {
  const uid = useId().replace(/:/g, '');
  const bodyId = `body-${uid}`;
  const glassId = `glass-${uid}`;

  return (
    <svg className="phone-svg" viewBox="0 0 200 360" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={bodyId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="40%" stopColor={accent} />
          <stop offset="100%" stopColor="#1a1c20" />
        </linearGradient>
        <linearGradient id={glassId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9ecbff" stopOpacity="0.35" />
          <stop offset="45%" stopColor={screen} />
          <stop offset="100%" stopColor="#050607" />
        </linearGradient>
      </defs>
      <rect x="28" y="8" width="144" height="344" rx="32" fill={`url(#${bodyId})`} />
      <rect x="36" y="18" width="128" height="324" rx="26" fill="#0d0f12" />
      <rect x="42" y="36" width="116" height="288" rx="18" fill={`url(#${glassId})`} />
      <rect x="78" y="24" width="44" height="12" rx="6" fill="#15171b" />
      <circle cx="132" cy="30" r="3" fill="#2d3340" />
      <rect x="86" y="310" width="28" height="4" rx="2" fill="#ffffff" opacity="0.35" />
    </svg>
  );
}
