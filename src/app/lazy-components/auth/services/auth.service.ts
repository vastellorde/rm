import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {LocalStorageService} from '../../../services/local-storage.service';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject$ = new BehaviorSubject<boolean>(this.ls.isExist('token') || false);
  private currentUserSubject$ = new BehaviorSubject<any>({});
  constructor(
    private http: HttpClient,
    private ls: LocalStorageService
  ) { }

  get isLoggedIn$(): Observable<boolean> {
    return this.isLoggedInSubject$.asObservable();
  }

  get currentUser$(): Observable<any> {
    return this.currentUserSubject$.asObservable();
  }

  login(credential: {username: string, password: string}): Observable<any> {
    return this.http.post('/api/auth/signin', credential)
      .pipe(
        tap(res => {
          this.ls.set('token', res.accessToken);
          this.isLoggedInSubject$.next(true);
        })
      );
  }

  getUser(): Observable<any> {
    return this.http.get('/api/auth/user');
  }
}
