import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  const isLight = theme.palette.mode === 'light';

  return {
    icon_count: {
      position: 'absolute',
      top: '-5px',
      right: '-5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '20px',
      maxWidth: '24px',
      height: '20px',
      padding: '4px',
      borderRadius: '50%',
      backgroundColor: isLight ? theme.palette.grey[500] : theme.palette.grey[400],
      color: isLight ? 'white' : theme.palette.grey[800],

      [theme.breakpoints.down('lg')]: {
        top: '-8px',
        right: '-8px',
      },
    },

    container: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      top: 'calc(100% + 0px)',
      right: 0,
      width: '565px',
      height: '352px',
      backgroundColor: theme.palette.background.default,
      zIndex: 1,
      borderRadius: '8px',
      padding: '30px 70px',
      boxShadow: theme.shadows[3],
    },

    iconContainer: {
      width: '90px',
      height: '90px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: '50%',
    },

    title: {
      fontSize: '18px',
      margin: '20px 0',
    },

    body: {
      fontSize: '14px',
      textAlign: 'center',
      marginBottom: '20px',
    },
  };
});
