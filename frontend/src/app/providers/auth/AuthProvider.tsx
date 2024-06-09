import { ReactNode, useEffect, useReducer } from 'react';
import { getAccessToken, setAccessToken } from '../../../utils';
import { AuthContext } from './context/AuthContext';
import { Types } from './enums/types';
import { AuthState } from './types/authState';
import { JWTActions } from './types/jwtActions';
import { AuthService } from './service/authService';

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const JWTReducer = (state: AuthState, action: JWTActions) => {
  switch (action.type) {
    case Types.Initial:
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      };
    case Types.Login:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case Types.Logout:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case Types.Register:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

type AuthProviderProps = {
  children: ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(JWTReducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = getAccessToken();

        if (accessToken) {
          const user = await AuthService.whoami();

          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        dispatch({
          type: Types.Initial,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const login = async (email: string, password: string) => {
    await AuthService.doLogin(email, password);
    const user = await AuthService.whoami();

    dispatch({
      type: Types.Login,
      payload: {
        user,
      },
    });
  };

  const refresh = async () => {
    const user = await AuthService.whoami();

    dispatch({
      type: Types.Login,
      payload: {
        user,
      },
    });
  };

  const logout = () => {
    setAccessToken('', { expires: 1, path: '/' });
    dispatch({ type: Types.Logout });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        login,
        logout,
        refresh,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
