import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(@Inject(PLATFORM_ID) private platformId: any) { }
  get(key: string): string {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(key);
    }
    return '';
  }
  set(key: string, value: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(key, value);
    }
  }
  remove(key: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(key);
    }
  }
  isExist(key: string): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem(key);
    }
    return false;
  }
}
