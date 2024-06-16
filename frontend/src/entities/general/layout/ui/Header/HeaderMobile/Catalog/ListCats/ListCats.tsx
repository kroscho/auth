import { FC, ReactNode } from 'react';
import { Box, Link, List, ListItem, Stack, Typography } from '@mui/material';
import { Cat, CatWithSubCats, Cats } from '../../../../../lib';
import { Link as RouterLink } from 'react-router-dom';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { useStyles } from './styles';

interface ListCatsProps {
  items: Cat[];
  activeTabId: string;
  setActiveCat: (cat: CatWithSubCats | undefined) => void;
  activeCat?: boolean;
}

export const LinkItemWrapper: FC<{ path?: string; children: ReactNode }> = ({ path, children }) => {
  const classes = useStyles();

  if (path)
    return (
      <Link component={RouterLink} className={classes.tabs_menu_item_link} to={path}>
        {children}
      </Link>
    );
  else
    return (
      <Box component={Link} className={classes.tabs_menu_item_link}>
        {children}
      </Box>
    );
};

export const ListCats: FC<ListCatsProps> = ({ items, activeCat, setActiveCat, activeTabId }) => {
  const classes = useStyles();

  return (
    <Stack component={List} direction="column" className={classes.tabs_menu}>
      {items.map((cat) => (
        <ListItem
          key={cat.id}
          className={classes.tabs_menu_item}
          onClick={() => {
            if (!cat.path) setActiveCat(Cats.find((c) => c.cat.id === cat.id));
          }}
        >
          <LinkItemWrapper path={cat.path}>
            <Stack direction="row" alignItems="center" gap="20px">
              <Box className={classes.iconContainer}>
                <Box
                  component="img"
                  src={cat.img.replace('{type}', activeTabId)}
                  className={classes.icon}
                  width={cat.widthImg}
                  height={cat.heightImg}
                />
              </Box>
              <Typography fontSize={14} fontWeight={500}>
                {cat.name}
              </Typography>
            </Stack>
            {!activeCat && <KeyboardArrowRightIcon />}
          </LinkItemWrapper>
        </ListItem>
      ))}
    </Stack>
  );
};
