import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, List, ListItem, Typography } from '@mui/material';
import { HEADER_DESKTOP_BOTTOM } from '../../../../lib';
import { MenuCatsItem } from './MenuCatsItem/MenuCatsItem';
import { BasketProps } from '../../../../../../../features/layout/ui/Basket/Basket';

import { useStyles } from './styles';

interface HeaderBottomProps {
  ThemeSwitcher: FC;
  Search: FC;
  Basket: FC<BasketProps>;
}

export const HeaderBottom: FC<HeaderBottomProps> = ({ Search }) => {
  const classes = useStyles();

  return (
    <Box className={classes.header__btm}>
      <Box className={classes.header__btm_content}>
        <List className={classes.links}>
          {HEADER_DESKTOP_BOTTOM.map((headItem) => (
            <MenuCatsItem key={headItem.nav.id} headItem={headItem} />
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
