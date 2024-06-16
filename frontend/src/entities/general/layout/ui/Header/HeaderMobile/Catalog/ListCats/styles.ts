import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  const isLight = theme.palette.mode === 'light';

  return {
    tabs_menu: {
      // marginBottom: '20px',
    },

    tabs_menu_item: {
      borderBottom: `2px solid ${theme.palette.divider}`,
      height: '100px',
      cursor: 'pointer',
    },

    tabs_menu_item_link: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '12px 14px',
      width: '100%',
    },

    iconContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '163px',
      height: '65px',
      backgroundColor: isLight ? theme.palette.grey[300] : theme.palette.grey[700],
      borderRadius: '30px',
    },

    icon: {
      objectFit: 'contain',
    },
  };
});
