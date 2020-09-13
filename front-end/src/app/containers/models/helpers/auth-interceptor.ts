import { Injectable } from '@angular/core';
import { TokenStorageService } from '../../services/token/token-storage.service';
import { HttpHandler, HttpEvent, HttpRequest, HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../register/register';

/**
 * HttpInterceptor has intercept() method to inspect and transform HTTP requests
 * before they are sent to server.
 */

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private token: TokenStorageService) { }

  /**
   * intercept() gets HTTPRequest object, change it and forward to HttpHandler object’s handle() method.
   * It transforms HTTPRequest object into an Observable<HttpEvents>.
   *
   * next: HttpHandler object represents the next interceptor in the chain of interceptors.
   * The final ‘next’ in the chain is the Angular HttpClient.
   */
  intercept(req: HttpRequest<any>, next: HttpHandler) :Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();
    if(token != null){
      authReq = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, 'Kira' + token) })
    }
    return next.handle(authReq);
  }

}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
