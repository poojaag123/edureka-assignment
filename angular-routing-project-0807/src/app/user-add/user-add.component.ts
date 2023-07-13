import { Component } from '@angular/core';
import { User } from '../models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  user: User = {
    id: 0,
    name: '',
    username: '',
    password: '',
    email: '',
    contactNumber: ''
  };

  userForm: FormGroup;
  submitted: boolean = false;

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl(this.user.name, [Validators.required]),
      username: new FormControl(this.user.username, [Validators.required]),
      password: new FormControl(this.user.password, [Validators.required]),
      email: new FormControl(this.user.email, [Validators.required]),
      contactNumber: new FormControl(this.user.contactNumber, [Validators.required])
    })
  }

  get f() {
    return this.userForm.controls;
  }

  addUser() {
    this.submitted = true;
    console.log(this.user);
  }

}
