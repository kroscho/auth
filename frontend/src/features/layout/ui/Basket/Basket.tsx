import { FC, useState } from 'react';
import { Box, Button, Fade, Link, Stack, Typography } from '@mui/material';
import { IconWrapper } from '../../../../shared/ui/kit';
import { Link as RouterLink } from 'react-router-dom';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { useStyles } from './styles';

export interface BasketProps {
  withText?: boolean;
}

export const Basket: FC<BasketProps> = ({ withText = true }) => {
  const classes = useStyles();
  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <Box position="relative" height="100%" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
      <Link component={RouterLink} to="/" underline="none" color="inherit">
        <Stack direction="row" alignItems="center" gap={1}>
          <Box position="relative" display="flex" alignItems="center">
            <IconWrapper Icon={ShoppingCartOutlinedIcon} />
            <Box component={'span'} className={classes.icon_count}>
              <Typography fontSize="10px">0</Typography>
            </Box>
          </Box>
          {withText && (
            <Typography variant="body1" noWrap>
              Корзина
            </Typography>
          )}
        </Stack>
      </Link>

      <Fade in={isShown} timeout={250}>
        <Box className={classes.container}>
          <Box className={classes.iconContainer}>
            <ShoppingCartOutlinedIcon sx={{ width: '50px', height: '50px' }} />
          </Box>
          <Typography className={classes.title}>Ваша корзина пуста</Typography>
          <Typography className={classes.body}>
            Исправить это просто: выберите в каталоге интересующий товар и нажмите кнопку «В корзину».
          </Typography>
          <Button component={RouterLink} to="/" variant="contained">
            В каталог
          </Button>
        </Box>
      </Fade>
    </Box>
  );
};
