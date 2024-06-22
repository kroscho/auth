import { FC } from 'react';
import { Box, Link, List, ListItem, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { CONTACTS_FOOTER } from '../../../../../entities/general/layout/lib/footer/consts';
import { IconColor, TelegramIcon, VkIcon } from '../../../../../shared/ui/kit/icons';
import { useTheme } from '../../../../../shared/lib/hooks';

import { useStyles } from './styles';

export const ContactsBlock: FC = () => {
  const classes = useStyles();
  const { isLight } = useTheme();

  return (
    <Stack direction="column" width="calc(100%/4)">
      <Link component={RouterLink} to={CONTACTS_FOOTER.nav.path} mb={1.5}>
        <Typography variant="h5" className={classes.title}>
          {CONTACTS_FOOTER.nav.name}
        </Typography>
      </Link>
      <List className={classes.cats_links}>
        {CONTACTS_FOOTER.categories.map((item) => (
          <ListItem key={item.id}>
            <Link href={item.path} color="inherit">
              <Typography variant="subtitle1" noWrap className={classes.title}>
                {item.name}
              </Typography>
            </Link>
          </ListItem>
        ))}
      </List>
      <Stack direction="row" alignItems="center" gap={2} mt={2}>
        <Link href="" color="inherit">
          <Box className={classes.iconContainer}>
            <TelegramIcon fill={isLight ? IconColor.WHITE : IconColor.GREY_800} />
          </Box>
        </Link>
        <Link href="" color="inherit">
          <Box className={classes.iconContainer}>
            <VkIcon fill={isLight ? IconColor.WHITE : IconColor.GREY_800} />
          </Box>
        </Link>
      </Stack>
    </Stack>
  );
};
