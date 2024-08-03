import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  const isLight = theme.palette.mode === 'light';

  return {
    container: {
      width: '100%',
      maxHeight: '420px',
    },

    image: {
      width: '100%',
      height: 'auto',
      objectFit: 'contain',

      [theme.breakpoints.down(436)]: {
        objectFit: 'contain',
      },
    },

    navIcon: {
      backgroundColor: isLight ? `${theme.palette.grey[700]} !important` : `${theme.palette.grey[300]} !important`,
      color: isLight ? 'white !important' : `${theme.palette.grey[800]} !important`,

      [theme.breakpoints.down('md')]: {
        width: '30px',
        height: '30px',
      },
    },
  };
});
