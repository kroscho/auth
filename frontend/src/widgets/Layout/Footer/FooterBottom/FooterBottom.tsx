import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import { useStyles } from './styles';

export const FooterBottom: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer__bottom}>
      <Box className={classes.footer__bottom_content}>
        <Typography fontSize="12px" className={classes.text}>
          {`@ 2024 - ${new Date().getFullYear()}`} mister_kros
        </Typography>
      </Box>
    </Box>
  );
};
