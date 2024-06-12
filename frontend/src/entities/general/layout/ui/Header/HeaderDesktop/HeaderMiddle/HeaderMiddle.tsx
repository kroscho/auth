import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, List, ListItem, Stack, Typography } from '@mui/material';
import { IconWrapper, Logo } from '../../../../../../../shared/ui/kit';
import { HEADER_DESKTOP_MDL_LEFT } from '../../../../lib';
import { BasketProps } from '../../../../../../../features/layout/ui/Basket/Basket';

import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

import { useStyles } from './styles';

interface HeaderMiddleProps {
  ThemeSwitcher: FC;
  Basket: FC<BasketProps>;
}

export const HeaderMiddle: FC<HeaderMiddleProps> = ({ ThemeSwitcher, Basket }) => {
  const classes = useStyles();

  return (
    <Box className={classes.header__mdl}>
      <Box className={classes.header__mdl_content}>
        <Box className={classes.header__mdl_left}>
          <List className={classes.links}>
            {HEADER_DESKTOP_MDL_LEFT.map((headItem) => (
              <ListItem key={headItem.id}>
                <Link component={RouterLink} to={headItem.path}>
                  <Typography variant="body1" noWrap>
                    {headItem.name}
                  </Typography>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box className={classes.header__mdl_center}>
          <Logo />
        </Box>
        <Box className={classes.header__mdl_right}>
          <List className={classes.links}>
            <ListItem>
              <ThemeSwitcher />
            </ListItem>
            <ListItem>
              <Link component={RouterLink} to="/" underline="none" color="inherit">
                <Stack direction="row" alignItems="center" gap={1}>
                  <IconWrapper Icon={PersonOutlinedIcon} />
                  <Typography variant="body1" noWrap>
                    Профиль
                  </Typography>
                </Stack>
              </Link>
            </ListItem>
            <ListItem>
              <Basket />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};
