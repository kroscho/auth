import { HTMLAttributes } from 'react';

export enum IconColor {
  WHITE = '#ffffff',
  BLACK = '#000000',
  GREY_800 = '#202226',
}

export interface IIcon extends HTMLAttributes<SVGElement> {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: IconColor;
}
