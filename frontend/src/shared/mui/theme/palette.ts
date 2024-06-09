import { TypeBackground } from '@mui/material';

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#707070',
  700: '#454F5B',
  800: '#202226',
  900: '#161616',
};

const PRIMARY = {
  light: '#42a5f5',
  main: '#1976d2',
  dark: '#1565c0',
  contrastText: '#fff',
};

const SECONDARY = {
  light: '#ba68c8',
  main: '#9c27b0',
  dark: '#7b1fa2',
  contrastText: '#fff',
};

const ERROR = {
  light: '#ef5350',
  main: '#d32f2f',
  dark: '#c62828',
  contrastText: '#fff',
};

const WARNING = {
  light: '#ff9800',
  main: '#ed6c02',
  dark: '#e65100',
  contrastText: '#fff',
};

const INFO = {
  light: '#03a9f4',
  main: '#0288d1',
  dark: '#01579b',
  contrastText: '#fff',
};

const SUCCESS = {
  light: '#4caf50',
  main: '#2e7d32',
  dark: '#1b5e20',
  contrastText: '#fff',
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  grey: GREY,
  primary: PRIMARY,
  secondary: SECONDARY,
  error: ERROR,
  warning: WARNING,
  info: INFO,
  success: SUCCESS,
};

export const palette = (themeMode: 'light' | 'dark') => {
  const light = {
    ...COMMON,
    mode: 'light',
    text: {
      primary: GREY[800],
      secondary: GREY[700],
      disabled: GREY[500],
    },
    background: { paper: '#fff', default: '#f7fafc' } as TypeBackground,
  } as const;

  const dark = {
    ...COMMON,
    mode: 'dark',
    text: {
      primary: '#fff',
      secondary: GREY[400],
      disabled: GREY[600],
    },
    background: {
      paper: GREY[900],
      default: GREY[800],
    },
  } as const;

  return themeMode === 'light' ? light : dark;
};
