import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    modal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '420px',
      backgroundColor: theme.palette.background.paper,
      border: `1px solid ${theme.palette.divider}`,
      boxShadow: theme.shadows[3],
      padding: '0 0 20px',
      borderRadius: '8px',
    },

    header: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: '100px',
      width: '100%',
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      padding: '20px',
    },

    title: {
      fontSize: '26px',
      fontWeight: 600,
    },

    close: {
      position: 'absolute',
      right: '10px',
      top: '10px',
    },

    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      padding: '40px 20px 20px',
    },

    helpText: {
      width: '70%',
      fontSize: '14px',
      textAlign: 'center',
      lineHeight: 1.5,
    },
  };
});
