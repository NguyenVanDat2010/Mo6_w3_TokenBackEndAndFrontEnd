import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * This service provides methods to access public and protected resources.
 */

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.URL;

  constructor(
    private http: HttpClient
    ) { }

    getPublicContent() :Observable<any>{
      return this.http.get(this.url + 'test/all', {responseType: 'text'});
    }

    getUserBoard(): Observable<any> {
      return this.http.get(this.url + 'test/user', { responseType: 'text' });
    }

    getModeratorBoard(): Observable<any> {
      return this.http.get(this.url + 'test/mod', { responseType: 'text' });
    }

    getAdminBoard(): Observable<any> {
      return this.http.get(this.url + 'test/admin', { responseType: 'text' });
    }
}
