import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  id: any;
  user: User = {
    id: 0,
    name: '',
    username: '',
    password: '',
    email: '',
    contactNumber: ''
  };

  constructor(private _activatedRoute: ActivatedRoute,
    private _userService: UserService,
    private _router: Router) { }

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this._userService.getUserById(this.id).subscribe((result) => {
      this.user = result;
      console.log(this.user);
    }, (error) => { console.log(error); })
  }

  deleteUser() {
    this._userService.deleteUserById(this.id).subscribe((result) => {
      alert('User delted successfully.');
      this._router.navigate(['/users']);
    }, (error) => { console.log(error); })
  }

}
