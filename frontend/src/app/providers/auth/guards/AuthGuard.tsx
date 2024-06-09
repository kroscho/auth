import { ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
// import { GlobalLoader } from '../../../../shared/components/GlobalLoader/GlobalLoader';

type AuthGuardProps = {
  navPath: string;
  children: ReactNode;
};

export function AuthGuard({ navPath, children }: AuthGuardProps) {
  const { isAuthenticated, isInitialized } = useAuth();
  if (!isInitialized) {
    return <div>LOADING</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to={navPath} />;
  }

  return <>{children}</>;
}
