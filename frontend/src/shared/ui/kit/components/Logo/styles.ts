import { Theme, alpha } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  const isLight = theme.palette.mode === 'light';

  return {
    logo: {
      width: '55px',
      height: '55px',
      objectFit: 'contain',
      backgroundColor: 'white',
      border: `1px solid  ${isLight ? theme.palette.grey[300] : alpha(theme.palette.grey[300], 0.1)}`,
      borderRadius: '50%',

      [theme.breakpoints.down('lg')]: {
        width: '45px',
        height: '45px',
      },
    },
  };
});
