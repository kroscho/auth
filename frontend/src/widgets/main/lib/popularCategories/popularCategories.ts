import { PopularCategoriesPublic } from '../../../../app/config';

interface PopularCategoriesItem {
  src: PopularCategoriesPublic;
  path: string;
  type: 'big' | 'small';
}

export const PopularCategoriesItems: PopularCategoriesItem[] = [
  {
    src: PopularCategoriesPublic.BIG,
    path: '/',
    type: 'big',
  },
  {
    src: PopularCategoriesPublic.SMAL_1,
    path: '/',
    type: 'small',
  },
  {
    src: PopularCategoriesPublic.SMAL_2,
    path: '/',
    type: 'small',
  },
];
