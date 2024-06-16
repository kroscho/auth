import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Fade, Link, List, ListItem, Stack, Typography } from '@mui/material';
import { NavCategories } from '../../../../../entities/general/layout/lib';

import { LinkStyled, MenuCatsStyled, useStyles } from './styles';

interface MenuCatsItemProps {
  headItem: NavCategories;
  isFixed: boolean;
  isShown: boolean;
  setIsShown: (val: boolean) => void;
}

export const HeaderMenuCatsItem: FC<MenuCatsItemProps> = ({ headItem, isFixed, isShown, setIsShown }) => {
  const classes = useStyles();

  return (
    <Box
      key={headItem.nav.id}
      height="100%"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <ListItem key={headItem.nav.id} className={classes.listItem}>
        <LinkStyled isshown={`${isShown}`} to={headItem.nav.path}>
          <Typography variant="overline" noWrap>
            {headItem.nav.name}
          </Typography>
        </LinkStyled>
      </ListItem>
      <Fade in={isShown} timeout={250}>
        <MenuCatsStyled isFixed={isFixed}>
          <Box className={classes.menu_cats_container} flexWrap={headItem.isGridContent ? 'wrap' : 'nowrap'}>
            <Box
              className={classes.menu_cats_content}
              justifyContent={headItem.isGridContent ? undefined : 'space-between'}
              flexWrap={headItem.isGridContent ? 'wrap' : 'nowrap'}
            >
              {headItem.categories.map((cat) => (
                <Stack key={cat.title} direction="column" width={headItem.isGridContent ? 'calc(100%/4)' : 'auto'}>
                  <Link component={RouterLink} to={cat.path ?? '/'} mb={1.5}>
                    <Stack direction="row" alignItems="center" gap={1}>
                      {cat.img && (
                        <Box className={classes.titleImgContainer}>
                          <Box component="img" src={cat.img} className={classes.titleImg} />
                        </Box>
                      )}
                      <Typography variant="h5" className={classes.title}>
                        {cat.title}
                      </Typography>
                    </Stack>
                  </Link>
                  {cat.categories.length > 0 && (
                    <List className={classes.menu_cats_links}>
                      {cat.categories.map((catItem: any) => (
                        <ListItem key={catItem.id}>
                          <Link component={RouterLink} to={catItem.path}>
                            <Typography variant="subtitle1" noWrap>
                              {catItem.name}
                            </Typography>
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  )}
                  {cat.sizes && (
                    <List className={classes.menu_cats_sizes}>
                      {cat.sizes.map((sizeItem: any, index: number) => (
                        <ListItem key={index} className={classes.sizeItem}>
                          <Link component={RouterLink} to={'/'} className={classes.sizeLink}>
                            <Typography variant="subtitle1" noWrap className={classes.sizeText}>
                              {sizeItem}
                            </Typography>
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  )}
                </Stack>
              ))}
            </Box>
          </Box>
        </MenuCatsStyled>
      </Fade>
    </Box>
  );
};
