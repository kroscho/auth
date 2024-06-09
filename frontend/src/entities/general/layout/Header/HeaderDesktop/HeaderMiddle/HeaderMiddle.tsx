import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, IconButton, Link, List, ListItem, Stack, Typography } from '@mui/material';

import { useTheme } from '../../../../../../shared/lib/hooks';

import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';

import { useStyles } from './styles';

export const HeaderMiddle: FC = () => {
  const classes = useStyles();
  const { isLight, toggleTheme } = useTheme();

  return (
    <Box className={classes.header__mdl}>
      <Box className={classes.header__mdl_content}>
        <Box className={classes.header__mdl_left}>
          <List className={classes.links}>
            <ListItem>
              <Link component={RouterLink} to="/">
                <Typography variant="body1" noWrap>
                  Магазины
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link component={RouterLink} to="/">
                <Typography variant="body1" noWrap>
                  Доставка и оплата
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link component={RouterLink} to="/">
                <Typography variant="body1" noWrap>
                  Как купить
                </Typography>
              </Link>
            </ListItem>
          </List>
        </Box>
        <Box className={classes.header__mdl_center}>
          <Link component={RouterLink} to="/" underline="none" color="inherit">
            <Box
              component="img"
              src={isLight ? 'images/kros_dark.png' : 'images/kros_dark.png'}
              className={classes.logo}
            />
          </Link>
        </Box>
        <Box className={classes.header__mdl_right}>
          <List className={classes.links}>
            <ListItem>
              <IconButton onClick={toggleTheme} color="inherit">
                {isLight ? (
                  <Brightness4OutlinedIcon className={classes.icon} />
                ) : (
                  <Brightness7OutlinedIcon className={classes.icon} />
                )}
              </IconButton>
            </ListItem>
            <ListItem>
              <Link component={RouterLink} to="/" underline="none" color="inherit">
                <Stack direction="row" alignItems="center" gap={1}>
                  <PersonOutlinedIcon className={classes.icon} />
                  <Typography variant="body1" noWrap>
                    Профиль
                  </Typography>
                </Stack>
              </Link>
            </ListItem>
            <ListItem>
              <Link component={RouterLink} to="/" underline="none" color="inherit">
                <Stack direction="row" alignItems="center" gap={1}>
                  <Box position="relative" display="flex" alignItems="center">
                    <ShoppingCartOutlinedIcon className={classes.icon} />
                    <Box component={'span'} className={classes.icon_count}>
                      <Typography fontSize="10px">0</Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1" noWrap>
                    Корзина
                  </Typography>
                </Stack>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};
