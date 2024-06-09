import { Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { FC } from 'react';

const MainPage: FC = () => {
  return (
    <Stack direction="column" mt={5}>
      <Paper>
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
        <Stack direction="row" gap={3}>
          <Button variant="contained">Action</Button>
          <Button variant="outlined">Action</Button>
          <Button variant="text">Action</Button>
        </Stack>
        <Stack direction="row" gap={3}>
          <TextField variant="outlined" label="Логин" value="Логин" size="small"></TextField>
          <TextField variant="outlined" label="Логин" value="Логин" size="medium"></TextField>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default MainPage;
