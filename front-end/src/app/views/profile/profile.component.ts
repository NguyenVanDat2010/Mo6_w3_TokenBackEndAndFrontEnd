import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/containers/services/token/token-storage.service';
import { User } from 'src/app/containers/models/user/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: User;

  constructor(
    private token: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

}
