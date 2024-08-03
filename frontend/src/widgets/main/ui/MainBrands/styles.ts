import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  const isLight = theme.palette.mode === 'light';

  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: '100px',
      backgroundColor: isLight ? theme.palette.grey[300] : theme.palette.grey[500],
      overflowX: 'scroll',

      [theme.breakpoints.down('lg')]: {
        height: '86px',
      },

      [theme.breakpoints.down('md')]: {
        height: '67px',
      },

      scrollbarWidth: 'none',
    },

    imageContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '122px',
      height: '32px',
      objectFit: 'contain',
      padding: '0 30px',

      [theme.breakpoints.down('md')]: {
        padding: '0 20px',
        height: '26px',
        minWidth: '102px',
      },
    },

    image: {
      height: '100%',
    },

    links: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },

    listItem: {
      height: '100%',
    },

    link: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
});
