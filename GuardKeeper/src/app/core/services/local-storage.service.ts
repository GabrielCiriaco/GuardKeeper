import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { env } from 'src/app/core/environment/env';

// import Cryptograf from 'crypto-js';


const key = 'token';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {

  saveItem(key: string, value: any) {

    const jsonValue = JSON.stringify(value);

    // const encryptedValue: string = Cryptograf.AES.encrypt(jsonValue, env.cryptoKey).toString();
    const encryptedValue = jsonValue;

    localStorage.setItem(key, encryptedValue);
  }

  deleteStorage() {
    localStorage.clear();
  }

  getItemFromStorage(key: string) {

    const encryptedValue = localStorage.getItem(key)

    if (!encryptedValue) {
      return null; // Retorna null se a chave não existir
    }

    // const decryptedValue = Cryptograf.AES.decrypt(encryptedValue, env.cryptoKey).toString(Cryptograf.enc.Utf8);
    const decryptedValue = encryptedValue;

    return JSON.parse(decryptedValue);

  }

  ownValidToken() {
    const token = this.getItemFromStorage('token');
    if (token === null) return false;

    try {
      const expirationTimeInSeconds = jwtDecode<any>(token).exp;
      const expirationDate = new Date(expirationTimeInSeconds * 1000);

      if (expirationDate < new Date()) return false;
      else return true;
    } catch (error) {
      return false;
    }
  }
}
