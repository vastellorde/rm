import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LocalStorageService} from './local-storage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private ls: LocalStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.ls.get('token');
    if (!!token) {
      const req = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      return next.handle(req);
    }
    return next.handle(request);
  }
}
