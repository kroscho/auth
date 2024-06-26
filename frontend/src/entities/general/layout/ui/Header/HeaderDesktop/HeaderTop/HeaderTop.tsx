import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, List, ListItem, Stack, Typography } from '@mui/material';
import { IconWrapper } from '../../../../../../../shared/ui/kit';
import { HEADER_DESKTOP_TOP_RIGHT } from '../../../../lib';

import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

import { useStyles } from './styles';

interface HeaderTopProps {
  RequestCallButton: FC;
}

export const HeaderTop: FC<HeaderTopProps> = ({ RequestCallButton }) => {
  const classes = useStyles();

  return (
    <Box className={classes.header__top}>
      <Box className={classes.header__top_content}>
        <Stack direction="row" alignItems="center">
          <Stack direction="row" alignItems="center" gap="5px" mr="20px">
            <IconWrapper Icon={PlaceOutlinedIcon} />
            <Typography variant="body1">Пермь</Typography>
          </Stack>
          <Box>
            <Stack direction="row" alignItems="center" gap="10px">
              <Link href="tel:88008008888" color="inherit">
                <Typography variant="body1" fontWeight="bold">
                  8800 800 88-88
                </Typography>
              </Link>
              <span>—</span>
              <RequestCallButton />
            </Stack>
          </Box>
        </Stack>
        <List className={classes.links}>
          {HEADER_DESKTOP_TOP_RIGHT.map((headItem) => (
            <ListItem key={headItem.id} sx={{ height: '100%' }}>
              <Link component={RouterLink} to={headItem.path} className={classes.listItem}>
                <Typography variant="body1" noWrap>
                  {headItem.name}
                </Typography>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};
