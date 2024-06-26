import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, List, ListItem, Stack, Typography } from '@mui/material';
import { HEADER_DESKTOP_BOTTOM } from '../../../../lib';
import { MenuCatsItem } from './MenuCatsItem/MenuCatsItem';
import { IconWrapper, Logo } from '../../../../../../../shared/ui/kit';
import { Basket, BasketProps } from '../../../../../../../features/layout/ui/Basket/Basket';

import { useResponsive, useScrollPosition } from '../../../../../../../shared/lib/hooks';

import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

import { HeaderStyled, useStyles } from './styles';

interface HeaderFixedProps {
  ThemeSwitcher: FC;
  Search: FC;
  Basket: FC<BasketProps>;
}

export const HeaderFixed: FC<HeaderFixedProps> = ({ Search, ThemeSwitcher }) => {
  const classes = useStyles();

  const [scrollPos] = useScrollPosition();
  const isDesktop = useResponsive('up', 'lg');
  const headerHeight = isDesktop ? 168 : 137;
  const isFixed = scrollPos > headerHeight;

  return (
    <HeaderStyled isSticky={isFixed}>
      <Box className={classes.header__btm_content}>
        <List className={classes.links}>
          <ListItem className={classes.listItem}>
            <Logo />
          </ListItem>

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

        <Stack direction="row" alignItems="center" className={classes.header__btm_right}>
          <Search />
          <List className={classes.links}>
            <ListItem>
              <ThemeSwitcher />
            </ListItem>
            <ListItem>
              <Link component={RouterLink} to="/" underline="none" color="inherit">
                <IconWrapper Icon={PersonOutlinedIcon} />
              </Link>
            </ListItem>
            <ListItem>
              <Basket withText={false} />
            </ListItem>
          </List>
        </Stack>
      </Box>
    </HeaderStyled>
  );
};
