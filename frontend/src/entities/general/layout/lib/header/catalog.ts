export interface Tab {
  id: string;
  name: string;
}

export const Tabs: Tab[] = [
  { id: 'mans', name: 'Мужчинам' },
  { id: 'womans', name: 'Женщинам' },
  { id: 'childs', name: 'Детям' },
];

export interface Cat {
  id: string;
  name: string;
  img: string;
  widthImg: number;
  heightImg: number;
  path?: string;
}

export interface CatWithSubCats {
  cat: Cat;
  subCats: SubCat[];
}

export interface SubCat extends Omit<Cat, 'subCats'> {}

export const Cats: CatWithSubCats[] = [
  {
    cat: {
      id: 'shoes_mans',
      name: 'Обувь',
      img: 'images/catalog/{type}/shoes.png',
      widthImg: 80,
      heightImg: 65,
    },
    subCats: [
      {
        id: 'kross',
        name: 'Кроссовки',
        img: 'images/catalog/{type}/shoes/1.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
      {
        id: 'kedi',
        name: 'Кеды',
        img: 'images/catalog/{type}/shoes/2.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
      {
        id: 'botinki',
        name: 'Ботинки',
        img: 'images/catalog/{type}/shoes/3.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
      {
        id: 'pantoleti',
        name: 'Пантолеты',
        img: 'images/catalog/{type}/shoes/4.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
      {
        id: 'sandalii',
        name: 'Сандалии',
        img: 'images/catalog/{type}/shoes/5.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
      {
        id: 'all',
        name: 'Вся обувь',
        img: 'images/catalog/{type}/shoes/6.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
    ],
  },
  {
    cat: { id: 'weather_mans', name: 'Одежда', img: 'images/catalog/{type}/weather.png', widthImg: 50, heightImg: 65 },
    subCats: [
      {
        id: 'weather_mans_tolstovki',
        name: 'Толстовки',
        img: 'images/catalog/{type}/weather/1.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
      {
        id: 'weather_mans_bruki',
        name: 'Брюки',
        img: 'images/catalog/{type}/weather/2.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
      {
        id: 'weather_mans_futbolki',
        name: 'Футболки',
        img: 'images/catalog/{type}/weather/3.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
      {
        id: 'weather_mans_shorti',
        name: 'Шорты',
        img: 'images/catalog/{type}/weather/4.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
      {
        id: 'weather_mans_kurtki',
        name: 'Куртки',
        img: 'images/catalog/{type}/weather/5.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
      {
        id: 'weather_mans_all',
        name: 'Вся одежда',
        img: 'images/catalog/{type}/weather/6.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
    ],
  },
  {
    cat: {
      id: 'accessories_mans',
      name: 'Аксессуары',
      img: 'images/catalog/{type}/accessories.png',
      widthImg: 50,
      heightImg: 65,
    },
    subCats: [
      {
        id: 'accessories_mans_shapki',
        name: 'Шапки',
        img: 'images/catalog/{type}/accessories/1.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
      {
        id: 'accessories_mans_noski',
        name: 'Носки',
        img: 'images/catalog/{type}/accessories/2.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
      {
        id: 'accessories_mans_kepki',
        name: 'Кепки',
        img: 'images/catalog/{type}/accessories/3.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
      {
        id: 'accessories_mans_rukzaki',
        name: 'Рюкзаки',
        img: 'images/catalog/{type}/accessories/4.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
      {
        id: 'accessories_mans_sumki',
        name: 'Сумки',
        img: 'images/catalog/{type}/accessories/5.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
      {
        id: 'accessories_mans_all',
        name: 'Все аксессуары',
        img: 'images/catalog/{type}/accessories/6.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
    ],
  },
  {
    cat: {
      id: 'sports_mans',
      name: 'Виды спорта',
      img: 'images/catalog/sports.png',
      widthImg: 40,
      heightImg: 40,
    },
    subCats: [
      {
        id: 'sports_mans_beg',
        name: 'Бег',
        img: 'images/catalog/sports/1.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
      {
        id: 'sports_mans_fitness',
        name: 'Фитнес',
        img: 'images/catalog/sports/2.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
      {
        id: 'sports_mans_tennis',
        name: 'Теннис',
        img: 'images/catalog/sports/3.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
      {
        id: 'sports_mans_turizm',
        name: 'Туризм',
        img: 'images/catalog/sports/4.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
      {
        id: 'sports_mans_basket',
        name: 'Баскетбол',
        img: 'images/catalog/sports/5.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
    ],
  },
  {
    cat: { id: 'brands', name: 'Бренды', img: 'images/catalog/brands.png', widthImg: 145, heightImg: 65 },
    subCats: [
      {
        id: 'brands_puma',
        name: 'Puma',
        img: 'images/catalog/brands/1.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
      {
        id: 'brands_nike',
        name: 'Nike',
        img: 'images/catalog/brands/2.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
      {
        id: 'brands_adidas',
        name: 'Adidas',
        img: 'images/catalog/brands/3.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
      {
        id: 'brands_reebok',
        name: 'Reebok',
        img: 'images/catalog/brands/4.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
      {
        id: 'brands_asics',
        name: 'Asics',
        img: 'images/catalog/brands/5.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
      {
        id: 'brands_jordan',
        name: 'Jordan',
        img: 'images/catalog/brands/6.png',
        widthImg: 80,
        heightImg: 65,
        path: '/',
      },
    ],
  },
];
