import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { Logo } from '../../../../../../../shared/ui/kit';

import { useScrollPosition } from '../../../../../../../shared/lib/hooks';

import { useStyles } from './styles';

interface HeaderTopProps {
  ThemeSwitcher: FC;
  Search: FC;
}

export const HeaderTop: FC<HeaderTopProps> = ({ ThemeSwitcher, Search }) => {
  const [scrollPos] = useScrollPosition();
  const isShown = scrollPos > 168;
  const classes = useStyles({ isShown });

  return (
    <Box className={classes.header__top}>
      <Box className={classes.header__top_content}>
        <Logo />
        <Stack direction="row" alignItems="center" className={classes.header__btm_right}>
          <Search />
          <ThemeSwitcher />
        </Stack>
      </Box>
    </Box>
  );
};
