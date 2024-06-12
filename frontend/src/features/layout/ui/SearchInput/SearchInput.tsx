import { FC } from 'react';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { IconWrapper } from '../../../../shared/ui/kit';

import SearchIcon from '@mui/icons-material/Search';

import { useStyles } from './styles';

export const SearchInput: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.search_input}>
      <TextField
        placeholder="Поиск по каталогу"
        variant="standard"
        size="small"
        sx={{ fontSize: '10px' }}
        fullWidth
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
