import { HeaderTemplate } from '../../entities/general/layout/ui/Header/Header';
import { Basket, RequestCallButton, SearchInput, ThemeSwitcher } from '../../features/layout';

export const Header = () => {
  return (
    <HeaderTemplate
      ThemeSwitcher={ThemeSwitcher}
      Search={SearchInput}
      Basket={Basket}
      RequestCallButton={RequestCallButton}
    />
  );
};
