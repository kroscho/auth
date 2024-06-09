import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    icon: {
      display: 'flex',
      alignItems: 'center',
      width: '30px',
      height: '30px',

      [theme.breakpoints.down('lg')]: {
        width: '24px',
        height: '24px',
      },
    },
  };
});
