import { FC } from 'react';

import { useStyles } from './styles';
import { HeaderTop } from './HeaderTop/HeaderTop';
import { HeaderBottomFixed } from './HeaderBottomFixed/HeaderBottomFixed';

interface HeaderMobileProps {
  ThemeSwitcher: FC;
  Search: FC;
}

export const HeaderMobile: FC<HeaderMobileProps> = ({ ThemeSwitcher, Search }) => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <HeaderTop ThemeSwitcher={ThemeSwitcher} Search={Search} />
      <HeaderBottomFixed />
    </header>
  );
};
