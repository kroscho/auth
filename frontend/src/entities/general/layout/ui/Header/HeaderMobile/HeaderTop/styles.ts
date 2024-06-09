import { makeStyles } from '@mui/styles';
import { GENERAL } from '../../../../../../../app/config';

export const useStyles = makeStyles(() => {
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
  };
});
