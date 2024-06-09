import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, IconButton, InputAdornment, Link, List, ListItem, Stack, TextField, Typography } from '@mui/material';

import { useScrollPosition, useTheme } from '../../../../../../shared/lib/hooks';

import SearchIcon from '@mui/icons-material/Search';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';

import { HeaderContentStyled, HeaderStyled, useStyles } from './styles';

export const HeaderFixed: FC = () => {
  const { isLight, toggleTheme } = useTheme();
  const [scrollPos] = useScrollPosition();
  const isShown = scrollPos > 168;
  const classes = useStyles({ isShown });

  return (
    <HeaderStyled isShown={isShown}>
      <HeaderContentStyled isShown={isShown}>
        <List className={classes.links}>
          <ListItem className={classes.listItem}>
            <Link component={RouterLink} to="/" underline="none" color="inherit">
              <Box
                component="img"
                src={isLight ? 'images/kros_dark.png' : 'images/kros_dark.png'}
                className={classes.logo}
              />
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link component={RouterLink} to="/" className={classes.link}>
              <Typography variant="overline">Мужчинам</Typography>
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link component={RouterLink} to="/" className={classes.link}>
              <Typography variant="overline" noWrap>
                Женщинам
              </Typography>
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link component={RouterLink} to="/" className={classes.link}>
              <Typography variant="overline" noWrap>
                Детям
              </Typography>
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link component={RouterLink} to="/" className={classes.link}>
              <Typography variant="overline" noWrap>
                Виды спорта
              </Typography>
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link component={RouterLink} to="/" className={classes.link}>
              <Typography variant="overline" noWrap>
                Бренды
              </Typography>
            </Link>
          </ListItem>
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
          <Box display="flex" flexDirection="row" alignItems="center" className={classes.search_input}>
            <TextField
              placeholder="Поиск по каталогу"
              variant="standard"
              size="small"
              sx={{ fontSize: '10px' }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton color="inherit">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
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
                <PersonOutlinedIcon className={classes.icon} />
              </Link>
            </ListItem>
            <ListItem>
              <Link component={RouterLink} to="/" underline="none" color="inherit">
                <Box position="relative" display="flex" alignItems="center">
                  <ShoppingCartOutlinedIcon className={classes.icon} />
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
