import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../../models/login/login';
import { Observable } from 'rxjs';
import { Register } from '../../models/register/register';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.URL;

  constructor(
    private http: HttpClient
  ) { }

  login(data: Login) :Observable<any> {
    return this.http.post<any>(this.url + 'auth/signin', data, httpOptions);
  }

  register(data: Register): Observable<any> {
    // debugger
    return this.http.post<any>(this.url + 'auth/signup', data, httpOptions);
  }
}
