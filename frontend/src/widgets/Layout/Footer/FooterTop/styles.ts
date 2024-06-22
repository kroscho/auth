import { Theme, alpha } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { GENERAL } from '../../../../app/config';

export const useStyles = makeStyles((theme: Theme) => {
  const isLight = theme.palette.mode === 'light';

  return {
    footer__top: {
      display: 'flex',
      width: '100%',
      backgroundColor: isLight ? theme.palette.grey[700] : theme.palette.grey[300],
      color: isLight ? 'white' : theme.palette.grey[800],
      padding: '45px 0',
      borderBottom: `1px solid ${alpha(theme.palette.background.default, 0.4)}`,
    },
    footer__top_content: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      maxWidth: GENERAL.CONTENT_MAX_WIDTH,
      margin: '0 auto',
      padding: `0 ${GENERAL.CONTENT_PADDING_X}`,
      flexWrap: 'wrap',
      gap: '10px 0',

      [theme.breakpoints.down(480)]: {
        flexDirection: 'column',
      },
    },

    list: {
      width: 'calc(100%/4)',

      [theme.breakpoints.down('md')]: {
        width: 'calc(100%/3)',
      },

      [theme.breakpoints.down(480)]: {
        width: '100%',
      },
    },

    title: {
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
    },

    cats_links: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
    },

    acc: {
      color: isLight ? 'white' : theme.palette.grey[800],

      '&::before': {
        height: '1px',
        backgroundColor: isLight ? alpha('#fff', 0.4) : alpha(theme.palette.grey[700], 0.4),
      },
    },
  };
});
