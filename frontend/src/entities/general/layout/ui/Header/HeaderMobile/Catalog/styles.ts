import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  const isLight = theme.palette.mode === 'light';

  return {
    drawer: {
      position: 'fixed',
      top: 0,
      left: 0,
      height: 'calc(100vh)',
      paddingBottom: '64px',
      zIndex: 7,
      transition: 'width 0.25s ease-in',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.background.default,
      overflowY: 'auto',
      overflowX: 'hidden',
    },

    header: {
      padding: '6px 14px',
      borderBottom: `1px solid ${theme.palette.divider}`,
      marginBottom: '10px',
      height: '44px',
    },

    tabsHeader: {
      padding: '0px 14px 10px',
      borderBottom: `2px solid ${theme.palette.divider}`,
    },

    tabs: {
      backgroundColor: isLight ? theme.palette.grey[200] : theme.palette.grey[900],
      borderRadius: '4px',
    },

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
