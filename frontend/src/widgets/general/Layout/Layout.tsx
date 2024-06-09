import { FC } from 'react';
import { Header } from './Header';
import Main from './Main';
import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <Stack direction="column" sx={{ minHeight: '100vh' }}>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Stack>
  );
};

export default Layout;
