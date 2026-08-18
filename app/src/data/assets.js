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
  teams: [
    { src: asset('teams/servolux.jpg'), name: 'Servolux' },
    { src: asset('teams/elkpath.jpg'), name: 'Т-Банк' },
    { src: asset('teams/rovar.jpg'), name: 'Rovar' },
    { src: asset('teams/on-bike.jpg'), name: 'On-bike' },
    { src: asset('teams/iron.jpg'), name: 'Триатлон' },
  ],
  kit: {
    board: asset('kit/fincode-kit.jpg'),
    jersey: asset('kit/jersey.svg'),
    bib: asset('kit/bib.svg'),
    running: asset('kit/running.svg'),
    triathlon: asset('kit/triathlon.svg'),
    training: asset('kit/training.svg'),
  },
  gifts: {
    keychain: asset('gifts/keychain.jpg'),
    socks: asset('gifts/socks.jpg'),
  },
};

export const SECTIONS = [
  { id: 'hero', label: 'Идея' },
  { id: 'not-kit', label: 'Идея' },
  { id: 'audience', label: 'Аудитория' },
  { id: 'scale', label: 'Масштаб' },
  { id: 'familiar', label: 'Механика' },
  { id: 'others', label: 'Прецеденты' },
  { id: 'team', label: 'FINCODE TEAM' },
  { id: 'gifts', label: 'FINCODE TEAM' },
  { id: 'gets', label: 'Результат' },
  { id: 'why-now', label: 'Проект' },
  { id: 'finale', label: 'Проект' },
];

export const NAV = [
  { id: 'hero', label: 'Идея' },
  { id: 'audience', label: 'Аудитория' },
  { id: 'scale', label: 'Масштаб' },
  { id: 'familiar', label: 'Механика' },
  { id: 'others', label: 'Прецеденты' },
  { id: 'team', label: 'Форма' },
  { id: 'gifts', label: 'Подарки' },
  { id: 'gets', label: 'Результат' },
  { id: 'why-now', label: 'Проект' },
];
