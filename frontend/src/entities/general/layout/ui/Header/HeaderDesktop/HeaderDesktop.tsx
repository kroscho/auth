import { FC } from 'react';
import { HeaderTop } from './HeaderTop/HeaderTop';
import { HeaderMiddle } from './HeaderMiddle/HeaderMiddle';
import { HeaderBottom } from './HeaderBottom/HeaderBottom';
import { HeaderFixed } from './HeaderFixed/HeaderFixed';

import { useStyles } from './styles';

interface HeaderDesktopProps {
  ThemeSwitcher: FC;
  Search: FC;
}

export const HeaderDesktop: FC<HeaderDesktopProps> = ({ ThemeSwitcher, Search }) => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <HeaderTop />
      <HeaderMiddle ThemeSwitcher={ThemeSwitcher} />
      <HeaderBottom Search={Search} />
      <HeaderFixed ThemeSwitcher={ThemeSwitcher} Search={Search} />
    </header>
  );
};
