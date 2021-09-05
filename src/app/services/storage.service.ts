import { JSDocComment } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // Записать/перезаписать данные
  async store(storageKey: string, value: any) {
    // обычная запись
    window.sessionStorage.setItem(storageKey, JSON.stringify(value));
    // шифруем данные
    // const encryptedValue = btoa(escape(JSON.stringify(value)))
    // window.sessionStorage.setItem(storageKey, encryptedValue);
  }

  // получить данные
  async get(storageKey: string) {
    let res: any = await sessionStorage.getItem(storageKey);
    if (res) {
      return JSON.parse(res)
      // получить зашифрованные данные
      // return JSON.parse(unescape(atob(res)))
    } else {
      return false
    }
  }

  // очистить хранилище
  async clear() {
    window.sessionStorage.clear()
  }

}
