import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, IconButton, InputAdornment, Link, Stack, TextField } from '@mui/material';

import { useScrollPosition, useTheme } from '../../../../../../shared/lib/hooks';

import SearchIcon from '@mui/icons-material/Search';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';

import { useStyles } from './styles';

export const HeaderTop: FC = () => {
  const { isLight, toggleTheme } = useTheme();
  const [scrollPos] = useScrollPosition();
  const isShown = scrollPos > 168;
  const classes = useStyles({ isShown });

  return (
    <Box className={classes.header__top}>
      <Box className={classes.header__top_content}>
        <Link component={RouterLink} to="/" underline="none" color="inherit">
          <Box
            component="img"
            src={isLight ? 'images/kros_dark.png' : 'images/kros_dark.png'}
            className={classes.logo}
          />
        </Link>

        <Stack direction="row" alignItems="center" className={classes.header__btm_right}>
          <Box display="flex" flexDirection="row" alignItems="center" className={classes.search_input}>
            <TextField
              placeholder="Поиск по каталогу"
              variant="standard"
              size="small"
              sx={{ fontSize: '10px' }}
              fullWidth
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

          <IconButton onClick={toggleTheme} color="inherit">
            {isLight ? (
              <Brightness4OutlinedIcon className={classes.icon} />
            ) : (
              <Brightness7OutlinedIcon className={classes.icon} />
            )}
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};
