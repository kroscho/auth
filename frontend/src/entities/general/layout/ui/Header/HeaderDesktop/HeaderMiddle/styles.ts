import { Theme, alpha } from '@mui/material';
import { GENERAL } from '../../../../../../../app/config';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  const isLight = theme.palette.mode === 'light';

  return {
    header__mdl: {
      display: 'flex',
      width: '100%',
      height: '78px',
      borderBottom: `1px solid ${isLight ? theme.palette.grey[300] : alpha(theme.palette.grey[300], 0.1)}`,

      [theme.breakpoints.down('lg')]: {
        height: '65px',
      },
    },
    header__mdl_content: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      maxWidth: GENERAL.CONTENT_MAX_WIDTH,
      justifyContent: 'space-between',
      margin: '0 auto',
      padding: `0 ${GENERAL.CONTENT_PADDING_X}`,
    },
    header__mdl_left: {
      width: '43%',
      display: 'flex',
      justifyContent: 'left',
    },
    header__mdl_center: {
      width: '14%',
      display: 'flex',
      justifyContent: 'center',
    },
    header__mdl_right: {
      width: '43%',
      display: 'flex',
      justifyContent: 'end',
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
    button: {
      '&:hover': {
        color: isLight ? theme.palette.primary.light : theme.palette.primary.main,
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
