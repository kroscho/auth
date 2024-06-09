import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  const isLight = theme.palette.mode === 'light';

  return {
    header: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      zIndex: 7,
      borderBottom: `2px solid ${isLight ? theme.palette.grey[300] : theme.palette.grey[500]}`,
    },
  };
});
