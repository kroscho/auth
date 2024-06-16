import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  //   const isLight = theme.palette.mode === 'light';

  return {
    tab: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '40px',
      width: 'calc(100%/3)',
    },
  };
});
