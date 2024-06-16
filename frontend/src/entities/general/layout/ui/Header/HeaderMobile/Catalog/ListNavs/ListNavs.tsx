import { FC, Fragment } from 'react';
import { Link, ListItem, Stack, Typography } from '@mui/material';
import { HEADER_DESKTOP_MDL_LEFT, HEADER_DESKTOP_TOP_RIGHT } from '../../../../../lib';
import { Link as RouterLink } from 'react-router-dom';

import { useStyles } from './styles';

export const ListNavs: FC = () => {
  const classes = useStyles();

  return (
    <Fragment>
      {[...HEADER_DESKTOP_MDL_LEFT, ...HEADER_DESKTOP_TOP_RIGHT].map((item) => (
        <ListItem key={item.id} className={classes.tabs_menu_mdl_item}>
          <Link component={RouterLink} to={item.path} className={classes.tabs_menu_mdl_item_link}>
            <Stack direction="row" alignItems="center" gap="20px">
              {item.icon ? <item.icon /> : null}
              <Typography fontSize={14} fontWeight={500}>
                {item.name}
              </Typography>
            </Stack>
          </Link>
        </ListItem>
      ))}
    </Fragment>
  );
};
