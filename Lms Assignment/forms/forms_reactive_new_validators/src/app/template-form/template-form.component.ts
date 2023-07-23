import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent {
  // Email: any;
  // MobileNumber: any;
  // Password: any;
  // ConfirmPassword: any;
  username: any;
  UserEmail: any;
  UserMobileNumber: any;
  UserPassword: any;
  UserConfirmPassword: any;

  Submit() {
    console.log(this.Submit);
  }
}
