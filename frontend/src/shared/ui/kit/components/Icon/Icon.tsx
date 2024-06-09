import { FC } from 'react';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { useStyles } from './styles';

interface IconWrapperProps {
  Icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
    muiName: string;
  };
}

export const IconWrapper: FC<IconWrapperProps> = ({ Icon }) => {
  const classes = useStyles();

  return <Icon className={classes.icon} />;
};
