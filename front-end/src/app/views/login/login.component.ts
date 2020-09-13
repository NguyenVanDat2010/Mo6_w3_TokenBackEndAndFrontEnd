import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/containers/services/auth/auth.service';
import { Login } from 'src/app/containers/models/login/login';
import { TokenStorageService } from 'src/app/containers/services/token/token-storage.service';
import { User } from 'src/app/containers/models/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: Login;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  user: User;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {
    this.form = {
      username:'',
      password:''
    }
  }

  ngOnInit(): void {
    if(this.tokenStorage.getToken()){
      this.isLoggedIn = true;
      this.user = this.tokenStorage.getUser();
    }
  }

  onSubmit(): void{
    this.authService.login(this.form).subscribe(
      data => {
        console.log(data);

        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // console.log(this.tokenStorage.getToken());

        this.user = this.tokenStorage.getUser();
        // console.log(this.user);

        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
