import { User } from '../../../apollo';

export type AuthState = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: User | null;
};
