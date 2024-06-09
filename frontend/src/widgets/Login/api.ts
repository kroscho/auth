import { EndPoints } from '../../shared/config/consts';
import axiosInstance from '../../shared/config/consts/axios';
import { AuthApi } from './types';

const EndPoint = EndPoints.AUTH;

export const authApi: AuthApi = {
  loginUser: (formValues) => axiosInstance.post(EndPoint.login, formValues),

  getCurrentUser: () => axiosInstance.get(EndPoint.getUser),

  registerUser: (formValues) => axiosInstance.post(EndPoint.registration, formValues),

  //   clearAuthToken: () => axiosInstance.delete(EndPoint.deleteToken),
};
