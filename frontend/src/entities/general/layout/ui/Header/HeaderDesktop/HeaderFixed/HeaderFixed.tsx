import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, List, ListItem, Stack, Typography } from '@mui/material';
import { IconWrapper, Logo } from '../../../../../../../shared/ui/kit';
import { HEADER_DESKTOP_BOTTOM } from '../../../../lib';

import { useScrollPosition } from '../../../../../../../shared/lib/hooks';

import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { HeaderContentStyled, HeaderStyled, useStyles } from './styles';

interface HeaderFixedProps {
  ThemeSwitcher: FC;
  Search: FC;
}

export const HeaderFixed: FC<HeaderFixedProps> = ({ ThemeSwitcher, Search }) => {
  const [scrollPos] = useScrollPosition();
  const isShown = scrollPos > 168;
  const classes = useStyles({ isShown });

  return (
    <HeaderStyled isShown={isShown}>
      <HeaderContentStyled isShown={isShown}>
        <List className={classes.links}>
          <ListItem className={classes.listItem}>
            <Logo />
          </ListItem>
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
              <Link component={RouterLink} to="/" underline="none" color="inherit">
                <Box position="relative" display="flex" alignItems="center">
                  <IconWrapper Icon={ShoppingCartOutlinedIcon} />
                  <Box component={'span'} className={classes.icon_count}>
                    <Typography fontSize="10px">0</Typography>
                  </Box>
                </Box>
              </Link>
            </ListItem>
          </List>
        </Stack>
      </HeaderContentStyled>
    </HeaderStyled>
  );
};
