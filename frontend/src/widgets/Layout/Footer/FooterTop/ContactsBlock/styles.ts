import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  const isLight = theme.palette.mode === 'light';

  return {
    title: {
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
    },

    cats_links: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
    },

    iconContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '35px',
      height: '35px',
      border: `2px solid ${isLight ? '#fff' : theme.palette.grey[800]}`,
      borderRadius: '50%',

      '&:hover': {
        backgroundColor: isLight ? theme.palette.primary.main : theme.palette.primary.light,
      },
    },
  };
});
