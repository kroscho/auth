import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  const isLight = theme.palette.mode === 'light';

  return {
    footer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      backgroundColor: isLight ? theme.palette.grey[700] : theme.palette.grey[300],
      color: isLight ? 'white' : theme.palette.grey[800],
      marginTop: '120px',

      [theme.breakpoints.down('md')]: {
        marginBottom: '64px',
      },
    },
  };
});
