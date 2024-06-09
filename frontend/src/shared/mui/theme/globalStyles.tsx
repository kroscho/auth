import { GlobalStyles as MUIGlobalStyles } from '@mui/material';

export default function GlobalStyles() {
  const inputGlobalStyles = (
    <MUIGlobalStyles
      styles={(theme) => ({
        body: {
          display: 'flex',
          flexDirection: 'column',
          margin: 0,
          padding: 0,
          width: '100%',
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          overflowX: 'hidden',

          '::-webkit-scrollbar': {
            height: '8px',
            width: '6px',
          },
          '::-webkit-scrollbar-track-piece': {
            background: theme.palette.mode === 'dark' ? '#000000' : '#F0F0F0',
          },
          '::-webkit-scrollbar-thumb:vertical': {
            background: theme.palette.mode === 'light' ? '#919EAB' : '#707070',
            borderRadius: '20px',
          },
          '::-webkit-scrollbar-thumb:horizontal': {
            background: theme.palette.mode === 'light' ? '#919EAB' : '#707070',
            borderRadius: '20px',
          },
        },
      })}
    />
  );

  return inputGlobalStyles;
}
