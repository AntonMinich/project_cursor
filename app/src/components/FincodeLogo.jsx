export default function FincodeLogo({ className = 'h-7', light = true }) {
  const main = light ? '#FFFFFF' : '#101954';
  const accent = '#01F69B';
  return (
    <svg className={className} viewBox="0 0 220 28" fill="none" aria-label="FINCODE">
      <text
        x="0"
        y="22"
        fill={main}
        fontFamily="Inter, sans-serif"
        fontSize="24"
        fontWeight="800"
        letterSpacing="1.4"
      >
        FIN
      </text>
      <text
        x="54"
        y="22"
        fill={accent}
        fontFamily="Inter, sans-serif"
        fontSize="24"
        fontWeight="800"
        letterSpacing="1.4"
      >
        CODE
      </text>
    </svg>
  );
}
