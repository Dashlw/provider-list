import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string) {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  }

  public clearStorage() {
    localStorage.clear();
  }
}
