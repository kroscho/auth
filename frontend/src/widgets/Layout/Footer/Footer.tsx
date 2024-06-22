import { FC } from 'react';
import { FooterTop } from './FooterTop/FooterTop';

import { useStyles } from './styles';
import { FooterBottom } from './FooterBottom/FooterBottom';

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <FooterTop />
      <FooterBottom />
    </footer>
  );
};
