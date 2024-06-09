import { FC } from 'react';

import { useStyles } from './styles';
import { HeaderTop } from './HeaderTop/HeaderTop';
import { HeaderBottomFixed } from './HeaderBottomFixed/HeaderBottomFixed';

// interface HeaderTemplateProps {
//   Search: FC;
// }

export const HeaderMobile: FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <HeaderTop />
      <HeaderBottomFixed />
    </header>
  );
};
