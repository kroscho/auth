interface Nav {
  id: string;
  path: string;
  name: string;
}

export interface Categories {
  title: string;
  categories: Nav[];
  sizes?: string[];
}

export interface NavCategories {
  nav: Nav;
  categories: Categories[];
}

export const HEADER_DESKTOP_MDL_LEFT: Nav[] = [
  { id: 'shops', path: '/', name: 'Магазины' },
  { id: 'payment', path: '/', name: 'Доставка и оплата' },
  { id: 'how_pay', path: '/', name: 'Как купить' },
];

export const HEADER_DESKTOP_TOP_RIGHT: Nav[] = [
  { id: 'vacancy', path: '/', name: 'Вакансии' },
  { id: 'about', path: '/', name: 'О компании' },
  { id: 'blog', path: '/', name: 'Блог' },
];

export const HEADER_DESKTOP_BOTTOM: NavCategories[] = [
  {
    nav: { id: 'mans', path: '/', name: 'Мужчинам' },
    categories: [
      {
        title: 'Обувь',
        categories: [
          { id: 'news', path: '/', name: 'Новинки' },
          { id: 'shoes', path: '/', name: 'Кроссовки' },
          { id: 'sneakers', path: '/', name: 'Кеды' },
          { id: 'football_boots', path: '/', name: 'Бутсы' },
          { id: 'boots', path: '/', name: 'Ботинки' },
          { id: 'pintolets', path: '/', name: 'Пинтолеты' },
          { id: 'sandals', path: '/', name: 'Сандалины' },
          { id: 'slip-ons', path: '/', name: 'Слипоны' },
        ],
      },
      {
        title: 'По размеру обуви',
        categories: [],
        sizes: [
          '34-35',
          '34,5',
          '35',
          '35,5',
          '36',
          '36-37',
          '37',
          '37,5',
          '38',
          '38-39',
          '39',
          '39,5',
          '40',
          '40-41',
          '41',
          '41,5',
          '42',
          '42-43',
          '43',
          '43,5',
          '44',
          '44-45',
          '45',
          '45,5',
          '46',
          '46-47',
          '47',
          '47,5',
          '48',
          '48-49',
          '49',
          '49,5',
          '50-52',
        ],
      },
      {
        title: 'Одежда',
        categories: [
          { id: 'news', path: '/', name: 'Новинки' },
          { id: 'hoodies', path: '/', name: 'Толстовки' },
          { id: 'trousers', path: '/', name: 'Брюки' },
          { id: 't-shirts', path: '/', name: 'Футболки' },
          { id: 'shorts', path: '/', name: 'Шорты' },
          { id: 'jackets', path: '/', name: 'Куртки' },
          { id: 'longsleeves', path: '/', name: 'Лонгсливы' },
          { id: 'jumpers', path: '/', name: 'Джемперы' },
          { id: 'tracksuits', path: '/', name: 'Спортивные костюмы' },
          { id: 'mikey', path: '/', name: 'Майки' },
          { id: 'thermal_underwear', path: '/', name: 'Термобелье' },
          { id: 'vests', path: '/', name: 'Жилеты' },
          { id: 'underwear', path: '/', name: 'Нижнее белье' },
        ],
      },
      {
        title: 'Аксессуары',
        categories: [
          { id: 'news', path: '/', name: 'Новинки' },
          { id: 'socks', path: '/', name: 'Носки' },
          { id: 'caps', path: '/', name: 'Кепки' },
          { id: 'hats', path: '/', name: 'Шапки' },
          { id: 'backpacks', path: '/', name: 'Рюкзаки' },
          { id: 'belts', path: '/', name: 'Ремни' },
          { id: 'bags', path: '/', name: 'Сумки' },
          { id: 'bandages', path: '/', name: 'Повязки' },
          { id: 'scarves', path: '/', name: 'Шарфы' },
        ],
      },
      {
        title: 'Спортивный инвентарь',
        categories: [
          { id: 'balls', path: '/', name: 'Мячи' },
          { id: 'rackets', path: '/', name: 'Ракетки' },
          { id: 'fasteners', path: '/', name: 'Фиксаторы' },
          { id: 'accessories for sports', path: '/', name: 'Аксессуары для спорта' },
          { id: 'windings', path: '/', name: 'Обмотки' },
          { id: 'protection', path: '/', name: 'Защита' },
          { id: 'expanders', path: '/', name: 'Экспандеры' },
        ],
      },
    ],
  },
  {
    nav: { id: 'womans', path: '/', name: 'Женщинам' },
    categories: [
      {
        title: 'Обувь',
        categories: [
          { id: 'news', path: '/', name: 'Новинки' },
          { id: 'shoes', path: '/', name: 'Кроссовки' },
          { id: 'sneakers', path: '/', name: 'Кеды' },
          { id: 'pintolets', path: '/', name: 'Пинтолеты' },
          { id: 'boots', path: '/', name: 'Ботинки' },
          { id: 'sandals', path: '/', name: 'Сандалины' },
          { id: 'sapogi', path: '/', name: 'Сапоги' },
          { id: 'slip-ons', path: '/', name: 'Слипоны' },
          { id: 'clogs', path: '/', name: 'Сабо' },
        ],
      },
      {
        title: 'По размеру обуви',
        categories: [],
        sizes: [
          '34',
          '34-35',
          '34,5',
          '35',
          '35,5',
          '36',
          '36-37',
          '37',
          '37,5',
          '38',
          '38-39',
          '39',
          '39,5',
          '40',
          '40-41',
          '41',
          '41,5',
          '42',
          '42-43',
          '43',
          '43,5',
          '44',
          '44-45',
          '45',
          '45,5',
          '46',
          '46-47',
          '47',
          '47,5',
          '48',
          '48-49',
          '49',
          '49,5',
        ],
      },
      {
        title: 'Одежда',
        categories: [
          { id: 'news', path: '/', name: 'Новинки' },
          { id: 'hoodies', path: '/', name: 'Толстовки' },
          { id: 'trousers', path: '/', name: 'Брюки' },
          { id: 't-shirts', path: '/', name: 'Футболки' },
          { id: 'shorts', path: '/', name: 'Шорты' },
          { id: 'tops', path: '/', name: 'Топы' },
          { id: 'mikey', path: '/', name: 'Майки' },
          { id: 'jackets', path: '/', name: 'Куртки' },
          { id: 'skirts', path: '/', name: 'Юбки' },
          { id: 'tracksuits', path: '/', name: 'Спортивные костюмы' },
          { id: 'longsleeves', path: '/', name: 'Лонгсливы' },
          { id: 'underwear', path: '/', name: 'Нижнее белье' },
          { id: 'dresses', path: '/', name: 'Платья' },
          { id: 'thermal_underwear', path: '/', name: 'Термобелье' },
          { id: 'swimwear', path: '/', name: 'Купальники' },
          { id: 'overalls', path: '/', name: 'Комбинезоны' },
        ],
      },
      {
        title: 'Аксессуары',
        categories: [
          { id: 'news', path: '/', name: 'Новинки' },
          { id: 'socks', path: '/', name: 'Носки' },
          { id: 'caps', path: '/', name: 'Кепки' },
          { id: 'hats', path: '/', name: 'Шапки' },
          { id: 'backpacks', path: '/', name: 'Рюкзаки' },
          { id: 'belts', path: '/', name: 'Ремни' },
          { id: 'bags', path: '/', name: 'Сумки' },
          { id: 'bandages', path: '/', name: 'Повязки' },
          { id: 'scarves', path: '/', name: 'Шарфы' },
          { id: 'gloves', path: '/', name: 'Перчатки' },
        ],
      },
      {
        title: 'Спортивный инвентарь',
        categories: [
          { id: 'balls', path: '/', name: 'Мячи' },
          { id: 'rackets', path: '/', name: 'Ракетки' },
          { id: 'fasteners', path: '/', name: 'Фиксаторы' },
          { id: 'accessories for sports', path: '/', name: 'Аксессуары для спорта' },
          { id: 'windings', path: '/', name: 'Обмотки' },
          { id: 'protection', path: '/', name: 'Защита' },
          { id: 'expanders', path: '/', name: 'Экспандеры' },
        ],
      },
    ],
  },
  {
    nav: { id: 'childs', path: '/', name: 'Детям' },
    categories: [],
  },
  {
    nav: { id: 'sports', path: '/', name: 'Виды спорта' },
    categories: [],
  },
  {
    nav: { id: 'brands', path: '/', name: 'Бренды' },
    categories: [],
  },
];
