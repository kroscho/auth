import { FC, Fragment } from 'react';
import { HeaderDesktop } from './HeaderDesktop/HeaderDesktop';

import { useResponsive } from '../../../../shared/lib/hooks';
import { HeaderMobile } from './HeaderMobile/HeaderMobile';

// interface HeaderTemplateProps {
//   Search: FC;
// }

export const HeaderTemplate: FC = () => {
  const isDescktop = useResponsive('up', 'md');

  return <Fragment>{isDescktop ? <HeaderDesktop /> : <HeaderMobile />}</Fragment>;
};
