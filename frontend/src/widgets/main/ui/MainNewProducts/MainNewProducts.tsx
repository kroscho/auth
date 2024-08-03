import { FC } from 'react';
import { Box } from '@mui/material';
import { BlockWrapper } from '../../../../entities/main/blockWrapper';

import { useStyles } from './styles';

export const MainNewProducts: FC = () => {
  const classes = useStyles();

  return (
    <BlockWrapper title="Новинки" path="/">
      <Box className={classes.products}></Box>
    </BlockWrapper>
  );
};
