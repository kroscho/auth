import axios from 'axios';
import appConfig from '../../../app/config/config';
import { ReactLocalStorage } from '../../lib/helpers/localStorage/localStorage';
import { LocalStorage } from './localStorage';

const axiosInstance = axios.create({
  baseURL: appConfig.SERVER_URL,
  withCredentials: true,
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response) {
      throw Error('Please check your internet connection.');
    }
    return Promise.reject(error);
  },
);

const storage = new ReactLocalStorage();

axiosInstance.defaults.headers.common['authorization'] = `Bearer ${storage.get(LocalStorage.AUTH_TOKEN)}`;

export default axiosInstance;
