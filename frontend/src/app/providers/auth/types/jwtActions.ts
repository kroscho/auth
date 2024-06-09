import { User } from '../../../apollo';
import { Types } from '../enums/types';

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

type JWTAuthPayload = {
  [Types.Initial]: {
    isAuthenticated: boolean;
    user: User | null;
  };
  [Types.Login]: {
    user: User | null;
  };
  [Types.Logout]: undefined;
  [Types.Register]: {
    user: User | null;
  };
};

export type JWTActions =
  ActionMap<JWTAuthPayload>[keyof ActionMap<JWTAuthPayload>];
