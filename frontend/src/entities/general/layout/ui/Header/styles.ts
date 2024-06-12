import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    header: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      zIndex: 7,
    },
  };
});
