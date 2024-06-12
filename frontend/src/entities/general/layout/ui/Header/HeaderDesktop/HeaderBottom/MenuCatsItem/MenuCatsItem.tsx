import { FC, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Fade, Link, List, ListItem, Stack, Typography } from '@mui/material';
import { Categories } from '../../../../../lib';
import { NavCategories } from '../../../../../lib';

import { useScrollPosition } from '../../../../../../../../shared/lib/hooks';

import { LinkStyled, MenuCatsStyled, useStyles } from './styles';

interface MenuCatsItemProps {
  headItem: NavCategories;
  cats: Categories[];
}

export const MenuCatsItem: FC<MenuCatsItemProps> = ({ headItem, cats }) => {
  const classes = useStyles();
  const [scrollPos] = useScrollPosition();

  const [isShown, setIsShown] = useState<boolean>(false);
  const isSticky = scrollPos > 168;

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
        <MenuCatsStyled isSticky={isSticky}>
          <Box className={classes.menu_cats_content}>
            {cats.map((cat) => (
              <Stack key={cat.title} direction="column">
                <Typography variant="h5" mb="20px" className={classes.title}>
                  {cat.title}
                </Typography>
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
        </MenuCatsStyled>
      </Fade>
    </Box>
  );
};
