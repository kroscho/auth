import { UserRoles } from '../../app/config';
import { AxiosResponse as AxiosRes } from 'axios';
import { User } from '../../entities/user/user';

export type AxiosResponse<T> = Promise<AxiosRes<T>>;

export interface LoginForm {
  email: string;
  password: string;
}

export interface SignupForm extends LoginForm {
  repeatPassword: string;
  firstName?: string;
  lastName?: string;
}

export interface SignupWithRoles extends SignupForm {
  role: UserRoles;
}

export type Forms = LoginForm | SignupForm;

type Token = AxiosResponse<{ token: string }>;

export interface AuthApi {
  loginUser(formValues: LoginForm): Token;

  getCurrentUser(): AxiosResponse<User>;

  registerUser(formValues: SignupWithRoles): Token;

  //   clearAuthToken(): AxiosResponse<unknown>;
}
