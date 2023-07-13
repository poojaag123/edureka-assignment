import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  welcomeMessage: string = '';
  users: User[] = [];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.welcomeMessage = this._userService.message;
    this._userService.getAllUsers().subscribe((result) => {
      this.users = result;
    }, (error) => console.log(error));
  }

}
