import { FC, Fragment } from 'react';
import { HeaderDesktop } from './HeaderDesktop/HeaderDesktop';
import { HeaderMobile } from './HeaderMobile/HeaderMobile';
import { BasketProps } from '../../../../../features/layout/ui/Basket/Basket';

import { useResponsive } from '../../../../../shared/lib/hooks';

interface HeaderTemplateProps {
  ThemeSwitcher: FC;
  Search: FC;
  Basket: FC<BasketProps>;
  RequestCallButton: FC;
}

export const HeaderTemplate: FC<HeaderTemplateProps> = ({ ThemeSwitcher, Search, Basket, RequestCallButton }) => {
  const isDesktop = useResponsive('up', 'md');

  return (
    <Fragment>
      {isDesktop ? (
        <HeaderDesktop
          ThemeSwitcher={ThemeSwitcher}
          Search={Search}
          Basket={Basket}
          RequestCallButton={RequestCallButton}
        />
      ) : (
        <HeaderMobile
          ThemeSwitcher={ThemeSwitcher}
          Search={Search}
          RequestCallButton={RequestCallButton}
          Basket={Basket}
        />
      )}
    </Fragment>
  );
};
