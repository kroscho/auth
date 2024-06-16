import { Theme, styled } from '@mui/material';
import { GENERAL } from '../../../../../../../app/config';
import { makeStyles } from '@mui/styles';

interface Props {
  isSticky: boolean;
}

export const HeaderStyled = styled('div')<Props>(({ isSticky, theme }) => ({
  position: 'fixed',
  top: !isSticky ? '-300px' : 0,
  left: 0,
  display: 'flex',
  width: '100%',
  height: '81px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[6],
  transition: 'top 0.6s ease-in-out',
  zIndex: 6,

  [theme.breakpoints.down('lg')]: {
    height: '61px',
  },
}));

export const useStyles = makeStyles((theme: Theme) => {
  const isLight = theme.palette.mode === 'light';

  return {
    header__btm: {
      position: 'relative',
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
      padding: `12px ${GENERAL.CONTENT_PADDING_X}`,

      [theme.breakpoints.down('lg')]: {
        padding: `10px ${GENERAL.CONTENT_PADDING_X}`,
      },
    },
    links: {
      position: 'static',
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

    header__btm_right: {
      gap: '20px',

      [theme.breakpoints.down('lg')]: {
        gap: '12px',
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
  };
});
