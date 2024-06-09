import { FC, Fragment } from 'react';
import { HeaderDesktop } from './HeaderDesktop/HeaderDesktop';
import { HeaderMobile } from './HeaderMobile/HeaderMobile';

import { useResponsive } from '../../../../../shared/lib/hooks';

interface HeaderTemplateProps {
  ThemeSwitcher: FC;
  Search: FC;
}

export const HeaderTemplate: FC<HeaderTemplateProps> = ({ ThemeSwitcher, Search }) => {
  const isDesktop = useResponsive('up', 'md');

  return (
    <Fragment>
      {isDesktop ? (
        <HeaderDesktop ThemeSwitcher={ThemeSwitcher} Search={Search} />
      ) : (
        <HeaderMobile ThemeSwitcher={ThemeSwitcher} Search={Search} />
      )}
    </Fragment>
  );
};
