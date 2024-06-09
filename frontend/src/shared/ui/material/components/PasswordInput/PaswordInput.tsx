import { FC, useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';

interface PasswordInputProps {
  value: string;
  setValue: (val: string) => void;
}

export const PasswordInput: FC<PasswordInputProps> = ({ value, setValue }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      variant="outlined"
      label="Пароль"
      fullWidth
      value={value}
      size="small"
      onChange={(e: any) => setValue(e.target.value)}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={(e: any) => e.preventDefault()}
              sx={{
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              {showPassword ? <BsEye /> : <BsEyeSlash />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
