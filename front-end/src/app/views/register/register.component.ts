import { Component, OnInit } from '@angular/core';
import { Register } from '../../containers/models/register/register';
import { AuthService } from '../../containers/services/auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: Register;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService
  ) {
    this.form = {
      username:'',
      email: '',
      password:''
    }
   }

  ngOnInit(): void {

  }

  onSubmit(): void {
    // debugger
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        // debugger
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        // debugger
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
