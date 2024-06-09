interface Nav {
  id: string;
  path: string;
  name: string;
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

export const HEADER_DESKTOP_BOTTOM: Nav[] = [
  { id: 'mans', path: '/', name: 'Мужчинам' },
  { id: 'womans', path: '/', name: 'Женщинам' },
  { id: 'childs', path: '/', name: 'Детям' },
  { id: 'sports', path: '/', name: 'Виды спорта' },
  { id: 'brands', path: '/', name: 'Бренды' },
];
