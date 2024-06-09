import { ElementType, Suspense, lazy } from 'react';

// eslint-disable-next-line react/display-name
export const Loadable = (Component: ElementType) => (props: object) => {
  return (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );
};

export const Layout = Loadable(lazy(() => import('../../widgets/Layout/Layout')));

export const MainPage = Loadable(lazy(() => import('../../pages/main/MainPage')));
export const LoginPage = Loadable(lazy(() => import('../../pages/login/LoginPage')));
export const ComponentsPage = Loadable(lazy(() => import('../../pages/components/ComponentsPage')));
