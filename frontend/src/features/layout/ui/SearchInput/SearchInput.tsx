import { FC } from 'react';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { IconWrapper } from '../../../../shared/ui/kit';

import SearchIcon from '@mui/icons-material/Search';

import { useStyles } from './styles';
import { useResponsive } from '../../../../shared/lib/hooks';

export const SearchInput: FC = () => {
  const classes = useStyles();
  const isMobile = useResponsive('down', 'md');

  return (
    <Box display="flex" flexDirection="row" alignItems="center" className={classes.search_input}>
      <TextField
        placeholder="Поиск по каталогу"
        variant="standard"
        size="small"
        sx={{ fontSize: '10px' }}
        fullWidth={isMobile}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton color="inherit">
                <IconWrapper Icon={SearchIcon} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
