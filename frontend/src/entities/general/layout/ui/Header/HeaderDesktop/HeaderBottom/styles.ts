import { Theme } from '@mui/material';
import { GENERAL } from '../../../../../../../app/config';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    header__btm: {
      display: 'flex',
      width: '100%',
      height: '50px',

      [theme.breakpoints.down('lg')]: {
        height: '38px',
      },
    },
    header__btm_content: {
      display: 'flex',
      flexDirection: 'row',
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

      [theme.breakpoints.down('lg')]: {
        gap: '16px',
      },
    },
    listItem: {
      height: '100%',
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',

      '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        bottom: 0,
        background: theme.palette.primary.main,
        height: '4px',
        width: 0,
        zIndex: -1,
        left: 0,
        right: 0,
        margin: '0 auto',
        transition: 'width 0.25s',
        borderRadius: '100px',
      },

      '&:hover:after': {
        width: '100%',
      },
    },
    sale: {
      padding: '0 12px',
      color: 'white',

      '&:before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: 0,
        transform: 'translate(0, -50%) skew(-18deg)',
        zIndex: -1,
        display: 'block',
        width: '100%',
        height: '55%',
        background: '#CE1438',
      },
    },
  };
});
