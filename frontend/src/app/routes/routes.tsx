import { Navigate, useRoutes } from 'react-router-dom';
import { PATH } from './paths';
import { ComponentsPage, Layout, LoginPage, MainPage } from './pages';

export const AppRouter = () => {
  return useRoutes([
    {
      path: PATH.root,
      element: <Layout />,
      children: [
        { element: <Navigate to="main" />, index: true },
        {
          path: PATH.main,
          element: (
            //   <AuthGuard navPath={PATH.login}>
            <MainPage />
            //   </AuthGuard>
          ),
        },
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'components',
          element: <ComponentsPage />,
        },
      ],
    },
  ]);
};
