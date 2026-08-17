function Logo({ palette, x = 100, y = 108, size = 11 }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fill={palette.logo}
      fontFamily="Inter, Arial, sans-serif"
      fontSize={size}
      fontWeight="800"
      letterSpacing="1.1"
    >
      FIN<tspan fill={palette.logoAccent}>CODE</tspan>
    </text>
  );
}

export const PALETTES = {
  navy: {
    id: 'navy',
    name: 'Navy Race',
    body: '#101954',
    panel: '#0D3E36',
    accent: '#01F69B',
    ink: '#FFFFFF',
    logo: '#FFFFFF',
    logoAccent: '#01F69B',
  },
  forest: {
    id: 'forest',
    name: 'Forest',
    body: '#0D3E36',
    panel: '#101954',
    accent: '#01F69B',
    ink: '#FFFFFF',
    logo: '#FFFFFF',
    logoAccent: '#01F69B',
  },
  split: {
    id: 'split',
    name: 'Mint Split',
    body: '#101954',
    panel: '#01F69B',
    accent: '#01F69B',
    ink: '#FFFFFF',
    logo: '#FFFFFF',
    logoAccent: '#0D3E36',
  },
  club: {
    id: 'club',
    name: 'Club White',
    body: '#F3F6F4',
    panel: '#101954',
    accent: '#01F69B',
    ink: '#101954',
    logo: '#101954',
    logoAccent: '#0D3E36',
  },
};

export function Tee({ palette }) {
  return (
    <svg viewBox="0 0 200 240" className="h-full w-full">
      <path
        d="M46 58c22-18 86-18 108 0l18 16v8l-22 8v118c0 10-8 16-18 16H68c-10 0-18-6-18-16V90L28 82v-8l18-16Z"
        fill={palette.body}
      />
      <path d="M68 48c18-14 46-14 64 0v18H68V48Z" fill={palette.panel} />
      <path d="M50 92h100v8H50z" fill={palette.accent} />
      <Logo palette={palette} y="130" size={12} />
    </svg>
  );
}

export function Jersey({ palette }) {
  return (
    <svg viewBox="0 0 200 240" className="h-full w-full">
      <path
        d="M60 30c20-18 60-18 80 0l24 18 16-8 8 34-30 16v126c0 10-8 18-20 18H72c-12 0-20-8-20-18V90L22 74 30 40l16 8 14-18Z"
        fill={palette.body}
      />
      <path d="M72 32c16-12 40-12 56 0v20H72V32Z" fill={palette.panel} />
      <path d="M52 78v110c0 6 4 10 10 10h8V78H52Z" fill={palette.panel} opacity="0.9" />
      <path d="M130 78h18v110c0 6-4 10-10 10h-8V78Z" fill={palette.panel} opacity="0.9" />
      <path d="M52 86h96v7H52z" fill={palette.accent} />
      <Logo palette={palette} y="118" />
      <text
        x="100"
        y="168"
        textAnchor="middle"
        fill={palette.accent}
        fontFamily="Inter, Arial, sans-serif"
        fontSize="28"
        fontWeight="800"
      >
        01
      </text>
    </svg>
  );
}

export function Bib({ palette }) {
  return (
    <svg viewBox="0 0 200 240" className="h-full w-full">
      <path d="M78 18c8 22 10 40 10 58H72C70 52 68 34 62 18c6-4 12-6 16-0Z" fill={palette.panel} />
      <path d="M122 18c-8 22-10 40-10 58h16c2-24 4-42 10-58-6-4-12-6-16 0Z" fill={palette.panel} />
      <path d="M62 74h76v128c0 12-10 20-22 20H84c-12 0-22-8-22-20V74Z" fill={palette.body} />
      <path d="M62 128h76v10H62z" fill={palette.accent} />
      <path d="M86 74h28v14H86z" fill={palette.accent} />
      <Logo palette={palette} y="112" size={10} />
    </svg>
  );
}

export function Trisuit({ palette }) {
  return (
    <svg viewBox="0 0 200 240" className="h-full w-full">
      <path
        d="M78 22c14-10 30-10 44 0l16 20v54l8 8v108c0 8-8 14-18 14h-56c-10 0-18-6-18-14V104l8-8V42l16-20Z"
        fill={palette.body}
      />
      <path d="M68 42h64v12H68z" fill={palette.panel} />
      <path d="M60 118h80v12H60z" fill={palette.accent} />
      <path d="M78 22c14-10 30-10 44 0v18H78V22Z" fill={palette.panel} />
      <Logo palette={palette} y="92" size={10} />
      <text
        x="100"
        y="168"
        textAnchor="middle"
        fill={palette.ink}
        fontFamily="Inter, Arial, sans-serif"
        fontSize="10"
        fontWeight="700"
        letterSpacing="2"
      >
        TEAM
      </text>
    </svg>
  );
}
