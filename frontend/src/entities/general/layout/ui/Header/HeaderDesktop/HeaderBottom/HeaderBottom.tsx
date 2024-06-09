import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, List, ListItem, Typography } from '@mui/material';
import { HEADER_DESKTOP_BOTTOM } from '../../../../lib';

import { useStyles } from './styles';

interface HeaderBottomProps {
  Search: FC;
}

export const HeaderBottom: FC<HeaderBottomProps> = ({ Search }) => {
  const classes = useStyles();

  return (
    <Box className={classes.header__btm}>
      <Box className={classes.header__btm_content}>
        <List className={classes.links}>
          {HEADER_DESKTOP_BOTTOM.map((headItem) => (
            <ListItem key={headItem.id} className={classes.listItem}>
              <Link component={RouterLink} to={headItem.path} className={classes.link}>
                <Typography variant="overline" noWrap>
                  {headItem.name}
                </Typography>
              </Link>
            </ListItem>
          ))}
          <ListItem className={classes.listItem}>
            <Link component={RouterLink} to="/" className={classes.link}>
              <Box>
                <Typography variant="overline" noWrap className={classes.sale}>
                  Sale
                </Typography>
              </Box>
            </Link>
          </ListItem>
        </List>
        <Search />
      </Box>
    </Box>
  );
};
