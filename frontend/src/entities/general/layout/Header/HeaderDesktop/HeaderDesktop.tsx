import { FC } from 'react';
import { HeaderTop } from './HeaderTop/HeaderTop';
import { HeaderMiddle } from './HeaderMiddle/HeaderMiddle';
import { HeaderBottom } from './HeaderBottom/HeaderBottom';
import { HeaderFixed } from './HeaderFixed/HeaderFixed';

import { useStyles } from './styles';

// interface HeaderTemplateProps {
//   Search: FC;
// }

export const HeaderDesktop: FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
      <HeaderFixed />
    </header>
  );
};
