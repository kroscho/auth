import { Theme } from '@mui/material';
import { GENERAL } from '../../../../../../../app/config';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  const isLight = theme.palette.mode === 'light';

  return {
    header__btm: {
      position: 'fixed',
      left: 0,
      bottom: 0,
      display: 'flex',
      width: '100%',
      height: '65px',
      backgroundColor: theme.palette.background.paper,
      zIndex: 8,
      borderTop: `1px solid ${isLight ? theme.palette.grey[300] : theme.palette.grey[500]}`,
    },
    header__btm_content: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxWidth: GENERAL.CONTENT_MAX_WIDTH,
      margin: '0 auto',
      padding: `0 ${GENERAL.CONTENT_PADDING_X}`,
    },

    links: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      maxWidth: '500px',
    },

    listItem: {
      display: 'flex',
      justifyContent: 'center',
      height: '65px',
    },

    link: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      cursor: 'pointer',
      transition: 'color 250ms',
      backgroundColor: 'transparent',
      color: theme.palette.text.primary,
      padding: 0,

      '&:hover': {
        color: theme.palette.primary.main,
        backgroundColor: 'transparent',
      },
    },

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

    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      visibility: 'hidden',
      opacity: 0,
      background: `rgba(0, 0, 0, ${isLight ? 0.36 : 0.61})`,
      transition: 'opacity 0.25s linear, visibility 0.25s linear',
      zIndex: 6,
    },

    overlay_open: {
      visibility: 'visible',
      opacity: 1,
    },
  };
});
