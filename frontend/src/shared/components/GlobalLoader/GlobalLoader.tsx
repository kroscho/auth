import { FC } from 'react';
import logo from 'kros.svg';

import styles from './GlobalLoader.module.scss';

export const GlobalLoader: FC = () => {
  return (
    <div className={styles.loader_back}>
      <img src={logo} className={styles.rotating_image} alt="logo" />
    </div>
  );
};
