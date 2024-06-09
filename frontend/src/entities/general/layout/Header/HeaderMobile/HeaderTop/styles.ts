import { Theme, alpha } from '@mui/material';
import { GENERAL } from '../../../../../../app/config';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  const isLight = theme.palette.mode === 'light';

  return {
    header__top: {
      display: 'flex',
      width: '100%',
      padding: '10px 0',
    },
    header__top_content: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      maxWidth: GENERAL.CONTENT_MAX_WIDTH,
      margin: '0 auto',
      padding: `0 ${GENERAL.CONTENT_PADDING_X}`,
    },
    header__btm_right: {
      width: '100%',
    },

    search_input: {
      padding: '0 30px',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        padding: '0 12px',
      },
    },

    logo: {
      width: '60px',
      height: '60px',
      objectFit: 'contain',
      backgroundColor: 'white',
      border: `1px solid  ${isLight ? theme.palette.grey[300] : alpha(theme.palette.grey[300], 0.1)}`,
      borderRadius: '50%',

      [theme.breakpoints.down('lg')]: {
        width: '50px',
        height: '50px',
      },
    },

    icon: {
      display: 'flex',
      alignItems: 'center',
      width: '30px',
      height: '30px',

      [theme.breakpoints.down('lg')]: {
        width: '24px',
        height: '24px',
      },
    },
  };
});
