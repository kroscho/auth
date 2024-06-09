import { Theme } from '@mui/material';

export default function Link(theme: Theme) {
  return {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          transition: 'color 250ms',
          color: 'inherit',
          '&:hover': {
            color: theme.palette.primary.main,
            backgroundColor: 'transparent',
          },
        },
      },
    },
  };
}
