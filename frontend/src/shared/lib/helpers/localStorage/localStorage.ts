import { LocalStorage } from '../../../config/consts';

export class ReactLocalStorage {
  public getStorage() {
    if (typeof localStorage !== 'undefined') {
      return localStorage;
    }
    return null;
  }
  public clear() {
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    }
  }
  public get(key: LocalStorage) {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(key);
    }
  }
  public set(key: LocalStorage, value: string) {
    if (typeof localStorage !== 'undefined' && value) {
      localStorage.setItem(key, value);
    }
  }
}
