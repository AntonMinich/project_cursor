export const asset = (file) => `${import.meta.env.BASE_URL}assets/${file}`;

export const IMAGES = {
  logo: asset('brand/fincode-logo.png'),
  logoLight: asset('brand/fincode-logo-light.png'),
  wordmark: asset('brand/fincode-wordmark-light.png'),
  fingerprint: asset('brand/fincode-fingerprint.png'),
  mark: asset('brand/fincode-mark.svg'),
  qr: asset('brand/qr-demo.svg'),
  sport: {
    hero: asset('sport/hero.jpg'),
    pack: asset('sport/sport-02.jpg'),
    run: asset('sport/sport-03.jpg'),
    bike: asset('sport/sport-04.jpg'),
    finish: asset('sport/sport-05.jpg'),
  },
  teams: {
    belarus: [
      { src: asset('teams/belarus-01.jpg'), name: 'Servolux' },
      { src: asset('teams/belarus-02.jpg'), name: 'Т-Банк' },
      { src: asset('teams/belarus-03.jpg'), name: 'Zmitroc' },
      { src: asset('teams/belarus-04.jpg'), name: 'On-bike' },
      { src: asset('teams/belarus-05.jpg'), name: 'Rovar' },
    ],
    russia: [
      { src: asset('teams/russia-01.jpg'), name: 'Россия · пример 1' },
      { src: asset('teams/russia-02.jpg'), name: 'Россия · пример 2' },
    ],
  },
  kit: {
    board: asset('kit/fincode-kit.jpg'),
    jersey: asset('kit/jersey.svg'),
    bib: asset('kit/bib.svg'),
    running: asset('kit/running.svg'),
    triathlon: asset('kit/triathlon.svg'),
    training: asset('kit/training.svg'),
  },
};

export const SECTIONS = [
  { id: 'hero', label: 'Идея' },
  { id: 'not-kit', label: 'Идея' },
  { id: 'audience', label: 'Аудитория' },
  { id: 'scale', label: 'Масштаб' },
  { id: 'funnel', label: 'Механика' },
  { id: 'familiar', label: 'Механика' },
  { id: 'team', label: 'FINCODE TEAM' },
  { id: 'others', label: 'FINCODE TEAM' },
  { id: 'gets', label: 'Результат' },
  { id: 'year', label: 'Проект' },
  { id: 'measure', label: 'Результат' },
  { id: 'leads', label: 'Результат' },
  { id: 'why-now', label: 'Проект' },
  { id: 'finale', label: 'Проект' },
];

export const NAV = [
  { id: 'hero', label: 'Идея' },
  { id: 'audience', label: 'Аудитория' },
  { id: 'scale', label: 'Масштаб' },
  { id: 'funnel', label: 'Механика' },
  { id: 'team', label: 'Форма' },
  { id: 'gets', label: 'Результат' },
  { id: 'year', label: 'Проект' },
];
