import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, IconButton, InputAdornment, Link, List, ListItem, TextField, Typography } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

import { useStyles } from './styles';

export const HeaderBottom: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.header__btm}>
      <Box className={classes.header__btm_content}>
        <List className={classes.links}>
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

        <Box display="flex" alignItems="center" maxWidth={320}>
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
      </Box>
    </Box>
  );
};
