import { User } from '../../../apollo';

export type JWTContextType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: User | null;
  method: 'jwt';
  login: (login: string, password: string) => Promise<void>;
  logout: VoidFunction;
  refresh: () => Promise<void>;
};
