import { Theme } from '@mui/material';

export default function Accordion(theme: Theme) {
  return {
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none',
          '&.Mui-expanded': {
            borderRadius: theme.shape.borderRadius,
            backgroundColor: 'transparent',
            margin: 0,
          },
          '&.Mui-disabled': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '8px 0',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          border: 'none',
          paddingLeft: 0,
          paddingRight: 0,
          '&.Mui-disabled': {
            opacity: 1,
            color: theme.palette.action.disabled,
            '& .MuiTypography-root': {
              color: 'inherit',
            },
          },

          '&.Mui-expanded': {
            minHeight: '48px',
          },
        },
        expandIconWrapper: {
          color: 'inherit',
        },
        content: {
          margin: '12px 0',

          '&.Mui-expanded': {
            margin: '12px 0',
          },
        },
      },
    },
  };
}
