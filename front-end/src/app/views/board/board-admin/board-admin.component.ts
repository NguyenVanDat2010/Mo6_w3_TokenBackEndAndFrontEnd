import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/containers/services/user/user.service';
import { TokenStorageService } from 'src/app/containers/services/token/token-storage.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  content: string;

  constructor(
    private userService: UserService,
    private tokenStorage: TokenStorageService
    ) { }

  ngOnInit(): void {
    // console.log(this.tokenStorage.getToken());

    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
