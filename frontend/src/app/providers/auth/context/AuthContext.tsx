import { createContext } from 'react';
import { JWTContextType } from '../types/jwtContextType';

export const AuthContext = createContext<JWTContextType | null>(null);
