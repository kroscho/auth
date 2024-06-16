import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    tabs_menu_mdl_item: {
      borderBottom: `2px solid ${theme.palette.divider}`,
      height: '56px',
      cursor: 'pointer',
    },

    tabs_menu_mdl_item_link: {
      display: 'flex',
      alignItems: 'center',
      padding: '6px 14px',
      width: '100%',
    },
  };
});
