import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent {
  loginUser(signInForm: NgForm) {
    console.log(signInForm);
    console.log(signInForm.value.emailfield);
    console.log(signInForm.value.password);
    console.log(signInForm.value.termsfield);
    console.log(signInForm.value.phonefield);
    console.log(signInForm.value.confirmpassword);
  }

  passwordMatchValidator(signInForm: NgForm) {
    if (signInForm.value.password !== signInForm.value.confirmPassword) {
      signInForm.controls['confirmPassword'].setErrors({ passwordMatch: true });
    } else {
      signInForm.controls['confirmPassword'].setErrors(null);
    }
  }
}
