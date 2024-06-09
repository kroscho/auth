import { FC } from 'react';
import { IconButton } from '@mui/material';
import { IconWrapper } from '../../../../shared/ui/kit';

import { useTheme } from '../../../../shared/lib/hooks';

import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';

export const ThemeSwitcher: FC = () => {
  const { isLight, toggleTheme } = useTheme();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {isLight ? <IconWrapper Icon={Brightness4OutlinedIcon} /> : <IconWrapper Icon={Brightness7OutlinedIcon} />}
    </IconButton>
  );
};
