import { Theme } from '@mui/material';

export default function List(theme: Theme) {
  return {
    MuiList: {
      styleOverrides: {
        root: {
          padding: '0',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: '0',
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
          minWidth: 'auto',
          marginRight: theme.spacing(2),
        },
      },
    },
    MuiListItemAvatar: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          marginRight: theme.spacing(2),
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: 0,
        },
        multiline: {
          marginTop: 0,
          marginBottom: 0,
        },
      },
    },
  };
}
