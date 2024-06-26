import { Theme } from '@mui/material';
import { GENERAL } from '../../../../../../../app/config';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  const isLight = theme.palette.mode === 'light';

  return {
    header__top: {
      display: 'flex',
      width: '100%',
      height: '40px',
      backgroundColor: isLight ? theme.palette.grey[700] : theme.palette.grey[300],
      color: isLight ? 'white' : theme.palette.grey[800],

      [theme.breakpoints.down('lg')]: {
        height: '35px',
      },
    },
    header__top_content: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      maxWidth: GENERAL.CONTENT_MAX_WIDTH,
      justifyContent: 'space-between',
      margin: '0 auto',
      padding: `0 ${GENERAL.CONTENT_PADDING_X}`,
    },
    links: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '30px',
      height: '100%',

      [theme.breakpoints.down('lg')]: {
        gap: '16px',
      },
    },

    listItem: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
    },
  };
});
