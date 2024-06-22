interface Nav {
  id: string;
  path: string;
  name: string;
}

export interface NavCategories {
  nav: Nav;
  categories: Nav[];
}

export const NAVS_FOOTER: NavCategories[] = [
  {
    nav: { id: 'catalog', name: 'Каталог', path: '/' },
    categories: [
      { id: 'mans', name: 'Мужчинам', path: '/' },
      { id: 'womans', name: 'Женщинам', path: '/' },
      { id: 'childs', name: 'Детям', path: '/' },
      { id: 'sports', name: 'Виды спорта', path: '/' },
      { id: 'brands', name: 'Бренды', path: '/' },
    ],
  },
  {
    nav: { id: 'company', name: 'Компания', path: '/' },
    categories: [
      { id: 'blog', name: 'Блог', path: '/' },
      { id: 'news', name: 'Новости', path: '/' },
      { id: 'licenses', name: 'Сертификаты', path: '/' },
      { id: 'contacts', name: 'Контакты', path: '/' },
      { id: 'vacancy', name: 'Карьера', path: '/' },
    ],
  },
  {
    nav: { id: 'info', name: 'Информация', path: '/' },
    categories: [
      { id: 'our_shops', name: 'Наши магазины', path: '/' },
      { id: 'rekvizity', name: 'Реквизиты', path: '/' },
      { id: 'politika', name: 'Политика', path: '/' },
      { id: 'how_place_order', name: 'Как оформить заказ', path: '/' },
      { id: 'bonus_program', name: 'Программа лояльности', path: '/' },
    ],
  },
];

export const CONTACTS_FOOTER: NavCategories = {
  nav: { id: 'contacts', name: 'Контакты', path: '/' },
  categories: [
    { id: 'tel_1', name: '8 800 800-88-88', path: 'tel:88008008888' },
    { id: 'tel_2', name: '8 800 800-99-99', path: 'tel:88008009999' },
    { id: 'mail_1', name: 'nike04@mail.ru', path: 'mailto:nike04@mail.ru' },
    { id: 'mail_2', name: 'nikitka.grishin0093@gmail.com', path: 'mailto:nikitka.grishin0093@gmail.com' },
  ],
};
