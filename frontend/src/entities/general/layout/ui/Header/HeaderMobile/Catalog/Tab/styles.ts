import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => {
  //   const isLight = theme.palette.mode === 'light';

  return {
    tab: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '40px',
      minWidth: '110px',
    },
  };
});
