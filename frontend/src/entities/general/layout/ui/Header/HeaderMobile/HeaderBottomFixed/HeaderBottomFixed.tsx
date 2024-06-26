import { FC, RefObject, useEffect, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Link, List, ListItem, Typography } from '@mui/material';
import { IconWrapper } from '../../../../../../../shared/ui/kit';
import { Catalog } from '../Catalog/Catalog';
import { BasketProps } from '../../../../../../../features/layout';
import { useBooleanState, useCloseOnOutsideClick } from '../../../../../../../shared/lib/hooks';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

import cx from 'classnames';
import { useStyles } from './styles';

export const HeaderBottomFixed: FC<{ RequestCallButton: FC; Basket: FC<BasketProps> }> = ({
  RequestCallButton,
  Basket,
}) => {
  const classes = useStyles();
  const { isOpen, toggle, close } = useBooleanState();

  const drawerRef = useRef() as RefObject<HTMLDivElement>;
  useCloseOnOutsideClick(drawerRef, () => close());

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <Box ref={drawerRef}>
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
                <Box component={Button} onClick={toggle} className={classes.link}>
                  <IconWrapper Icon={WidgetsOutlinedIcon} />
                  <Typography variant="body2" noWrap>
                    Каталог
                  </Typography>
                </Box>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Basket />
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
        <Catalog open={isOpen} onClose={close} RequestCallButton={RequestCallButton} />
      </Box>
      <Box
        className={cx(classes.overlay, {
          [classes.overlay_open]: isOpen,
        })}
      />
    </>
  );
};
