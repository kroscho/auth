import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';

import { useTheme } from '../../../../lib/hooks';

import { useStyles } from './styles';

export const Logo: FC = () => {
  const { isLight } = useTheme();
  const classes = useStyles();

  return (
    <Link component={RouterLink} to="/" underline="none" color="inherit">
      <Box component="img" src={isLight ? 'images/kros_dark.png' : 'images/kros_dark.png'} className={classes.logo} />
    </Link>
  );
};
