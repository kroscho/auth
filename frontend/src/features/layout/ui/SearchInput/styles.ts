import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    search_input: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      maxWidth: '420px',
      width: '100%',

      [theme.breakpoints.down('lg')]: {
        maxWidth: '320px',
      },

      [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
        padding: '0 30px',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
          padding: '0 12px',
        },
      },
    },
  };
});
