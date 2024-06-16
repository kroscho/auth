import { FC, useEffect, useState } from 'react';
import { NavCategories } from '../../../../../lib';
import { HeaderMenuCatsItem } from '../../../../../../../../shared/ui/kit';

import { useResponsive, useScrollPosition } from '../../../../../../../../shared/lib/hooks';

interface MenuCatsItemProps {
  headItem: NavCategories;
}

export const MenuCatsItem: FC<MenuCatsItemProps> = ({ headItem }) => {
  const [scrollPos] = useScrollPosition();
  const isDesktop = useResponsive('up', 'lg');

  const headerHeight = isDesktop ? 168 : 137;

  const [isShown, setIsShown] = useState<boolean>(false);

  useEffect(() => {
    if (isShown && scrollPos < headerHeight) setIsShown(false);
  }, [headerHeight, isShown, scrollPos]);

  return <HeaderMenuCatsItem headItem={headItem} isFixed={true} isShown={isShown} setIsShown={setIsShown} />;
};
