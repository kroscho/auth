import { FC } from 'react';
import { Button, Typography } from '@mui/material';
import { Tab as TabType } from '../../../../../lib';

import { useStyles } from './styles';

interface TabProps {
  tab: TabType;
  isActiveTab: boolean;
  onClick: VoidFunction;
}

export const Tab: FC<TabProps> = ({ tab, isActiveTab, onClick }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.tab}
      variant={isActiveTab ? 'contained' : 'text'}
      color={isActiveTab ? 'primary' : 'inherit'}
      onClick={onClick}
    >
      <Typography fontSize={16}>{tab.name}</Typography>
    </Button>
  );
};
