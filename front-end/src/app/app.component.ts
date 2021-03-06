import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './containers/services/token/token-storage.service';
import { User } from './containers/models/user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front-end';

  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  user: User;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.user = this.tokenStorageService.getUser();
      this.showAdminBoard = this.user.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.user.roles.includes('ROLE_MODERATOR');
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
