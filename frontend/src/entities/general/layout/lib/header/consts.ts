import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DepartureBoardOutlinedIcon from '@mui/icons-material/DepartureBoardOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

interface Nav {
  id: string;
  path: string;
  name: string;
  icon?: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
    muiName: string;
  };
}

export interface Categories {
  title: string;
  path?: string;
  categories: Nav[];
  sizes?: string[];
  img?: string;
}

export interface NavCategories {
  nav: Nav;
  isGridContent?: boolean;
  categories: Categories[];
}

export const HEADER_DESKTOP_MDL_LEFT: Nav[] = [
  { id: 'shops', path: '/', name: 'Магазины', icon: LocationOnOutlinedIcon },
  { id: 'payment', path: '/', name: 'Доставка и оплата', icon: DepartureBoardOutlinedIcon },
  { id: 'how_pay', path: '/', name: 'Как купить', icon: HelpOutlineOutlinedIcon },
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
        path: '/',
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
        path: '/',
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
        path: '/',
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
        path: '/',
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
        path: '/',
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
        path: '/',
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
        path: '/',
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
        path: '/',
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
    categories: [
      {
        title: 'Обувь',
        path: '/',
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
          '17,5',
          '18,5',
          '19,5',
          '20',
          '21',
          '22',
          '22,5',
          '23',
          '24',
          '24,5',
          '25',
          '26',
          '27',
          '27,5',
          '28',
          '28,5',
          '29',
          '30',
          '30,5',
          '31',
          '31,5',
          '32',
          '32,5',
          '33',
          '33,5',
          '34',
          '34,5',
          '35',
          '35,5',
          '36',
          '36,5',
          '37',
          '38',
          '38,5',
          '39',
          '40',
        ],
      },
      {
        title: 'Одежда',
        path: '/',
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
        path: '/',
        categories: [
          { id: 'news', path: '/', name: 'Новинки' },
          { id: 'socks', path: '/', name: 'Носки' },
          { id: 'caps', path: '/', name: 'Кепки' },
          { id: 'hats', path: '/', name: 'Шапки' },
          { id: 'backpacks', path: '/', name: 'Рюкзаки' },
          { id: 'perchatki', path: '/', name: 'Перчатки' },
          { id: 'bags', path: '/', name: 'Сумки' },
        ],
      },
      {
        title: 'Спортивный инвентарь',
        path: '/',
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
    nav: { id: 'sports', path: '/', name: 'Виды спорта' },
    isGridContent: true,
    categories: [
      {
        title: 'Бег',
        path: '/',
        categories: [
          { id: 'shoes', path: '/', name: 'Обувь' },
          { id: 'weather', path: '/', name: 'Одежда' },
          { id: 'accessories', path: '/', name: 'Аксессуары' },
          { id: 'sports_invetory', path: '/', name: 'Спортивный инвентарь' },
        ],
      },
      {
        title: 'Фитнес',
        path: '/',
        categories: [
          { id: 'shoes', path: '/', name: 'Обувь' },
          { id: 'weather', path: '/', name: 'Одежда' },
          { id: 'accessories', path: '/', name: 'Аксессуары' },
          { id: 'sports_invetory', path: '/', name: 'Спортивный инвентарь' },
        ],
      },
      {
        title: 'Футбол',
        path: '/',
        categories: [
          { id: 'shoes', path: '/', name: 'Обувь' },
          { id: 'weather', path: '/', name: 'Одежда' },
          { id: 'accessories', path: '/', name: 'Аксессуары' },
          { id: 'sports_invetory', path: '/', name: 'Спортивный инвентарь' },
        ],
      },
      {
        title: 'Волейбол',
        path: '/',
        categories: [
          { id: 'shoes', path: '/', name: 'Обувь' },
          { id: 'weather', path: '/', name: 'Одежда' },
          { id: 'accessories', path: '/', name: 'Аксессуары' },
          { id: 'sports_invetory', path: '/', name: 'Спортивный инвентарь' },
        ],
      },
      {
        title: 'Теннис',
        path: '/',
        categories: [
          { id: 'shoes', path: '/', name: 'Обувь' },
          { id: 'weather', path: '/', name: 'Одежда' },
          { id: 'accessories', path: '/', name: 'Аксессуары' },
          { id: 'sports_invetory', path: '/', name: 'Спортивный инвентарь' },
        ],
      },
      {
        title: 'Туризм',
        path: '/',
        categories: [
          { id: 'shoes', path: '/', name: 'Обувь' },
          { id: 'weather', path: '/', name: 'Одежда' },
          { id: 'accessories', path: '/', name: 'Аксессуары' },
        ],
      },
      {
        title: 'Баскетбол',
        path: '/',
        categories: [
          { id: 'shoes', path: '/', name: 'Обувь' },
          { id: 'weather', path: '/', name: 'Одежда' },
          { id: 'accessories', path: '/', name: 'Аксессуары' },
          { id: 'sports_invetory', path: '/', name: 'Спортивный инвентарь' },
        ],
      },
      {
        title: 'Плавание',
        path: '/',
        categories: [
          { id: 'shoes', path: '/', name: 'Обувь' },
          { id: 'weather', path: '/', name: 'Одежда' },
          { id: 'accessories', path: '/', name: 'Аксессуары' },
          { id: 'sports_invetory', path: '/', name: 'Спортивный инвентарь' },
        ],
      },
      {
        title: 'Единоборства',
        path: '/',
        categories: [
          { id: 'shoes', path: '/', name: 'Обувь' },
          { id: 'weather', path: '/', name: 'Одежда' },
          { id: 'sports_invetory', path: '/', name: 'Спортивный инвентарь' },
        ],
      },
    ],
  },
  {
    nav: { id: 'brands', path: '/', name: 'Бренды' },
    isGridContent: true,
    categories: [
      {
        title: 'Nike',
        path: '/',
        img: 'images/catalog/brands/2.png',
        categories: [
          { id: 'shoes', path: '/', name: 'Обувь' },
          { id: 'weather', path: '/', name: 'Одежда' },
          { id: 'accessories', path: '/', name: 'Аксессуары' },
        ],
      },
      {
        title: 'Puma',
        path: '/',
        img: 'images/catalog/brands/1.png',
        categories: [
          { id: 'shoes', path: '/', name: 'Обувь' },
          { id: 'weather', path: '/', name: 'Одежда' },
          { id: 'accessories', path: '/', name: 'Аксессуары' },
        ],
      },
      {
        title: 'Adidas',
        path: '/',
        img: 'images/catalog/brands/3.png',
        categories: [
          { id: 'shoes', path: '/', name: 'Обувь' },
          { id: 'weather', path: '/', name: 'Одежда' },
          { id: 'accessories', path: '/', name: 'Аксессуары' },
        ],
      },
      {
        title: 'Reebok',
        path: '/',
        img: 'images/catalog/brands/4.png',
        categories: [
          { id: 'shoes', path: '/', name: 'Обувь' },
          { id: 'weather', path: '/', name: 'Одежда' },
          { id: 'accessories', path: '/', name: 'Аксессуары' },
        ],
      },
      {
        title: 'Asics',
        path: '/',
        img: 'images/catalog/brands/5.png',
        categories: [
          { id: 'shoes', path: '/', name: 'Обувь' },
          { id: 'weather', path: '/', name: 'Одежда' },
          { id: 'accessories', path: '/', name: 'Аксессуары' },
        ],
      },
      {
        title: 'Jordan',
        path: '/',
        img: 'images/catalog/brands/6.png',
        categories: [
          { id: 'shoes', path: '/', name: 'Обувь' },
          { id: 'weather', path: '/', name: 'Одежда' },
          { id: 'accessories', path: '/', name: 'Аксессуары' },
        ],
      },
    ],
  },
];
