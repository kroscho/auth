import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      marginTop: '70px',

      [theme.breakpoints.down('lg')]: {
        marginTop: '40px',
      },
    },

    link: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '10px',
    },

    titleContainer: {
      marginBottom: '30px',

      [theme.breakpoints.down('md')]: {
        marginBottom: '24px',
      },

      [theme.breakpoints.down('sm')]: {
        marginBottom: '18px',
      },
    },

    title: {
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
    },
  };
});
