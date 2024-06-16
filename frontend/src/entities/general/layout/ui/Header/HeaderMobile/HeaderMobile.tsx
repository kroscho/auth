import { FC } from 'react';
import { HeaderTop } from './HeaderTop/HeaderTop';
import { HeaderBottomFixed } from './HeaderBottomFixed/HeaderBottomFixed';
import { BasketProps } from '../../../../../../features/layout';

import { useStyles } from './styles';

interface HeaderMobileProps {
  ThemeSwitcher: FC;
  Search: FC;
  RequestCallButton: FC;
  Basket: FC<BasketProps>;
}

export const HeaderMobile: FC<HeaderMobileProps> = ({ ThemeSwitcher, Search, RequestCallButton, Basket }) => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <HeaderTop ThemeSwitcher={ThemeSwitcher} Search={Search} />
      <HeaderBottomFixed RequestCallButton={RequestCallButton} Basket={Basket} />
    </header>
  );
};
