import { FC } from 'react';
import { HeaderTop } from './HeaderTop/HeaderTop';
import { HeaderMiddle } from './HeaderMiddle/HeaderMiddle';
import { HeaderBottom } from './HeaderBottom/HeaderBottom';
import { BasketProps } from '../../../../../../features/layout';

import { useStyles } from './styles';
import { HeaderFixed } from './HeaderFixed/HeaderFixed';

interface HeaderDesktopProps {
  ThemeSwitcher: FC;
  Search: FC;
  Basket: FC<BasketProps>;
  RequestCallButton: FC;
}

export const HeaderDesktop: FC<HeaderDesktopProps> = ({ ThemeSwitcher, Search, Basket, RequestCallButton }) => {
  const classes = useStyles();

  return (
    <>
      <header className={classes.header}>
        <HeaderTop RequestCallButton={RequestCallButton} />
        <HeaderMiddle ThemeSwitcher={ThemeSwitcher} Basket={Basket} />
        <HeaderBottom Search={Search} ThemeSwitcher={ThemeSwitcher} Basket={Basket} />
      </header>
      <HeaderFixed Search={Search} ThemeSwitcher={ThemeSwitcher} Basket={Basket} />
    </>
  );
};
