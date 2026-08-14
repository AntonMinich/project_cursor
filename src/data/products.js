export const PRODUCTS = [
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    brand: 'Apple',
    price: 4299,
    color: 'Натуральный титан',
    accent: '#8b8178',
    screen: '#1c1a18',
    description:
      'Флагман Apple с титановым корпусом, камерой Pro и чипом A18 Pro. Подходит для фото, видео и повседневной работы без компромиссов.',
    specs: [
      ['Экран', '6,3″ Super Retina XDR, 120 Гц'],
      ['Процессор', 'A18 Pro'],
      ['Память', '256 ГБ'],
      ['Камера', 'Тройная 48 Мп, 5× телефото'],
      ['Аккумулятор', 'До 27 часов видео'],
      ['Связь', '5G, Wi‑Fi 7, USB‑C'],
    ],
  },
  {
    id: 'galaxy-s25-ultra',
    name: 'Galaxy S25 Ultra',
    brand: 'Samsung',
    price: 3899,
    color: 'Титан серый',
    accent: '#5d6570',
    screen: '#12151a',
    description:
      'Премиальный смартфон Samsung с S Pen, мощной камерой и ярким экраном. Удобен для работы, заметок и съёмки в любом свете.',
    specs: [
      ['Экран', '6,9″ Dynamic AMOLED 2X, 120 Гц'],
      ['Процессор', 'Snapdragon 8 Elite'],
      ['Память', '256 ГБ / 12 ГБ ОЗУ'],
      ['Камера', '200 Мп + перископ 5×'],
      ['Аккумулятор', '5000 мА·ч, 45 Вт'],
      ['Особенность', 'Встроенный S Pen'],
    ],
  },
  {
    id: 'xiaomi-15-pro',
    name: 'Xiaomi 15 Pro',
    brand: 'Xiaomi',
    price: 2199,
    color: 'Лесной зелёный',
    accent: '#3f6b57',
    screen: '#101714',
    description:
      'Флагман Xiaomi с оптикой Leica, быстрой зарядкой и сбалансированной производительностью. Хороший выбор, если нужен топ без переплаты.',
    specs: [
      ['Экран', '6,73″ AMOLED, 120 Гц'],
      ['Процессор', 'Snapdragon 8 Elite'],
      ['Память', '256 ГБ / 12 ГБ ОЗУ'],
      ['Камера', 'Leica, основная 50 Мп'],
      ['Аккумулятор', '6100 мА·ч, 90 Вт'],
      ['Защита', 'IP68'],
    ],
  },
  {
    id: 'pixel-9-pro',
    name: 'Pixel 9 Pro',
    brand: 'Google',
    price: 2799,
    color: 'Фарфор',
    accent: '#c9b8a8',
    screen: '#171412',
    description:
      'Смартфон Google с лучшей вычислительной фотографией и чистым Android. Камера, перевод и ИИ-функции работают сразу из коробки.',
    specs: [
      ['Экран', '6,3″ LTPO OLED, 120 Гц'],
      ['Процессор', 'Google Tensor G4'],
      ['Память', '128 ГБ / 16 ГБ ОЗУ'],
      ['Камера', '50 Мп + 48 Мп телефото'],
      ['Аккумулятор', '4700 мА·ч, 30 Вт'],
      ['ОС', 'Android 15, 7 лет обновлений'],
    ],
  },
  {
    id: 'honor-magic-7',
    name: 'Honor Magic 7',
    brand: 'Honor',
    price: 1899,
    color: 'Сияющая сирень',
    accent: '#7a5c8a',
    screen: '#161318',
    description:
      'Яркий флагман Honor с быстрым экраном, ёмкой батареей и аккуратным дизайном. Удобный ежедневный смартфон с запасом мощности.',
    specs: [
      ['Экран', '6,8″ AMOLED, 120 Гц'],
      ['Процессор', 'Snapdragon 8 Elite'],
      ['Память', '256 ГБ / 12 ГБ ОЗУ'],
      ['Камера', 'Основная 50 Мп'],
      ['Аккумулятор', '5600 мА·ч, 80 Вт'],
      ['Особенность', 'ИИ-помощник Magic'],
    ],
  },
];

export function getProduct(id) {
  return PRODUCTS.find((product) => product.id === id) ?? null;
}

export function formatPrice(value) {
  return new Intl.NumberFormat('ru-BY', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function estimateMonthlyPayment(price) {
  const downPayment = price * 0.1;
  const remainder = price - downPayment;
  const months = 18;
  return Math.max(100, Math.round(remainder / months));
}
