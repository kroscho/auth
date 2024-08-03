import { Box, Link, Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useStyles } from './styles';
import cx from 'classnames';

interface BlockWrapperProps extends PropsWithChildren {
  title: string;
  path?: string;
}

export const BlockWrapper: FC<BlockWrapperProps> = ({ title, path, children }) => {
  const classes = useStyles();

  const isLink = !!path;

  return (
    <Box component="section" className={classes.container}>
      {isLink ? (
        <Link component={RouterLink} to={path} className={cx(classes.link, classes.titleContainer)}>
          <Typography variant="h1" className={classes.title}>
            {title}
          </Typography>
          <ArrowForwardIosIcon />
        </Link>
      ) : (
        <Typography variant="h1" className={cx(classes.title, classes.titleContainer)}>
          {title}
        </Typography>
      )}
      {children}
    </Box>
  );
};
