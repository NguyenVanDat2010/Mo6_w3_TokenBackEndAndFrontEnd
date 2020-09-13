import { Injectable } from '@angular/core';
import { User } from '../../models/user/user';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void{
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    // console.log(TOKEN_KEY);
    // debugger
    window.sessionStorage.removeItem(TOKEN_KEY);
    // console.log(token);
    window.sessionStorage.setItem(TOKEN_KEY, token)
  }

  public getToken(): string{
    return  sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: User): void{
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): User {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
}
