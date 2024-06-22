import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { GENERAL } from '../../../../app/config';

export const useStyles = makeStyles((theme: Theme) => {
  const isLight = theme.palette.mode === 'light';

  return {
    footer__bottom: {
      display: 'flex',
      width: '100%',
      backgroundColor: isLight ? theme.palette.grey[700] : theme.palette.grey[300],
      color: isLight ? 'white' : theme.palette.grey[800],
      padding: '15px 0',
      borderBottom: `1px solid ${theme.palette.background.default}`,
    },
    footer__bottom_content: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      maxWidth: GENERAL.CONTENT_MAX_WIDTH,
      margin: '0 auto',
      padding: `0 ${GENERAL.CONTENT_PADDING_X}`,
      flexWrap: 'wrap',
      gap: '30px 0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: isLight ? theme.palette.grey[500] : theme.palette.grey[600],
    },
  };
});
