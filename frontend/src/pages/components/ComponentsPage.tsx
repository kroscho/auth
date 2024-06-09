import { Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { useTheme } from '../../shared/lib/hooks';

const ComponentsPage: FC = () => {
  const [sizeButton, setSizeButton] = useState<'small' | 'medium' | 'large'>('small');
  const [sizeInput, setSizeInput] = useState<'small' | 'medium'>('small');
  const { isLight, toggleTheme } = useTheme();

  return (
    <Stack direction="column" mt={5}>
      <Paper sx={{ padding: '2rem', marginBottom: '2rem' }}>
        <Typography onClick={toggleTheme}>{isLight ? 'LIGHT' : 'DARK'}</Typography>
        <Typography variant="h1">Heading h1</Typography>
        <Typography variant="h2">Heading h2</Typography>
        <Typography variant="h3">Heading h3</Typography>
        <Typography variant="h4">Heading h4</Typography>
        <Typography variant="h5">Heading h5</Typography>
        <Typography variant="h6">Heading h6</Typography>
        <Typography variant="body1">Body 1</Typography>
        <Typography variant="body2">Body 2</Typography>
        <Typography variant="button">Button</Typography>
        <Typography variant="caption">Caption</Typography>
        <Typography variant="subtitle1">Subtitle 1</Typography>
        <Typography variant="subtitle2">Subtitle 2</Typography>
        <Typography variant="inherit">Inherit</Typography>
        <Typography variant="overline">Overline</Typography>
        <Typography variant="h1" m={2}>
          Кнопки
        </Typography>
        <Stack direction="row" gap={2} mt={2}>
          <Button
            size="small"
            variant={sizeButton === 'small' ? 'contained' : 'outlined'}
            onClick={() => setSizeButton('small')}
          >
            SMALL
          </Button>
          <Button
            size="small"
            variant={sizeButton === 'large' ? 'contained' : 'outlined'}
            onClick={() => setSizeButton('large')}
          >
            LARGE
          </Button>
          <Button
            size="small"
            variant={sizeButton === 'medium' ? 'contained' : 'outlined'}
            onClick={() => setSizeButton('medium')}
          >
            MEDIUM
          </Button>
        </Stack>
        <Stack direction="row" gap={3} mt={3}>
          <Stack direction="column" gap={2}>
            <Button variant="contained" size={sizeButton}>
              Action
            </Button>
            <Button variant="contained" color="error" size={sizeButton}>
              Action
            </Button>
            <Button variant="contained" color="info" size={sizeButton}>
              Action
            </Button>
            <Button variant="contained" color="inherit" size={sizeButton}>
              Action
            </Button>
            <Button variant="contained" color="secondary" size={sizeButton}>
              Action
            </Button>
            <Button variant="contained" color="success" size={sizeButton}>
              Action
            </Button>
            <Button variant="contained" color="warning" size={sizeButton}>
              Action
            </Button>
            <Button variant="contained" disabled size={sizeButton}>
              Action
            </Button>
          </Stack>
          <Stack direction="column" gap={2}>
            <Button variant="text" size={sizeButton}>
              Action
            </Button>
            <Button variant="text" color="error" size={sizeButton}>
              Action
            </Button>
            <Button variant="text" color="info" size={sizeButton}>
              Action
            </Button>
            <Button variant="text" color="inherit" size={sizeButton}>
              Action
            </Button>
            <Button variant="text" color="secondary" size={sizeButton}>
              Action
            </Button>
            <Button variant="text" color="success" size={sizeButton}>
              Action
            </Button>
            <Button variant="text" color="warning" size={sizeButton}>
              Action
            </Button>
            <Button variant="text" disabled size={sizeButton}>
              Action
            </Button>
          </Stack>
          <Stack direction="column" gap={2}>
            <Button variant="outlined" size={sizeButton}>
              Action
            </Button>
            <Button variant="outlined" color="error" size={sizeButton}>
              Action
            </Button>
            <Button variant="outlined" color="info" size={sizeButton}>
              Action
            </Button>
            <Button variant="outlined" color="inherit" size={sizeButton}>
              Action
            </Button>
            <Button variant="outlined" color="secondary" size={sizeButton}>
              Action
            </Button>
            <Button variant="outlined" color="success" size={sizeButton}>
              Action
            </Button>
            <Button variant="outlined" color="warning" size={sizeButton}>
              Action
            </Button>
            <Button variant="outlined" disabled size={sizeButton}>
              Action
            </Button>
          </Stack>
        </Stack>
        <Typography variant="h1" m={2}>
          Инпуты
        </Typography>
        <Stack direction="row" gap={2} mt={2} mb={2}>
          <Button
            size="small"
            variant={sizeInput === 'small' ? 'contained' : 'outlined'}
            onClick={() => setSizeInput('small')}
          >
            SMALL
          </Button>
          <Button
            size="small"
            variant={sizeInput === 'medium' ? 'contained' : 'outlined'}
            onClick={() => setSizeInput('medium')}
          >
            MEDIUM
          </Button>
        </Stack>
        <Stack direction="column" gap={2} maxWidth={500}>
          <TextField variant="outlined" label="Логин" value="Логин" size={sizeInput}></TextField>
          <TextField variant="outlined" label="Логин" size={sizeInput}></TextField>
          <TextField variant="outlined" label="Логин" size={sizeInput} disabled></TextField>
          <TextField variant="outlined" label="Логин" size={sizeInput} error helperText="why error"></TextField>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default ComponentsPage;
