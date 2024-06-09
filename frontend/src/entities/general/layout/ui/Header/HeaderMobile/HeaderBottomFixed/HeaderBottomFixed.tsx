import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, List, ListItem, Typography } from '@mui/material';
import { IconWrapper } from '../../../../../../../shared/ui/kit';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { useStyles } from './styles';

export const HeaderBottomFixed: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.header__btm}>
      <Box className={classes.header__btm_content}>
        <List className={classes.links}>
          <ListItem className={classes.listItem}>
            <Link component={RouterLink} to="/" className={classes.link}>
              <IconWrapper Icon={HomeOutlinedIcon} />
              <Typography variant="body2" noWrap>
                Главная
              </Typography>
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link component={RouterLink} to="/" className={classes.link}>
              <IconWrapper Icon={WidgetsOutlinedIcon} />
              <Typography variant="body2" noWrap>
                Каталог
              </Typography>
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link component={RouterLink} to="/" className={classes.link}>
              <Box position="relative" display="flex" alignItems="center">
                <IconWrapper Icon={ShoppingCartOutlinedIcon} />
                <Box component={'span'} className={classes.icon_count}>
                  <Typography fontSize="10px">0</Typography>
                </Box>
              </Box>
              <Typography variant="body2" noWrap>
                Корзина
              </Typography>
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link component={RouterLink} to="/" className={classes.link}>
              <IconWrapper Icon={PersonOutlinedIcon} />
              <Typography variant="body2" noWrap>
                Профиль
              </Typography>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
