import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10,12}')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid && !this.isPasswordMismatch()) {
      // Form is valid, you can perform your registration logic here
      console.log(this.registrationForm.value);
    }
  }

  isInvalid(controlName: string) {
    const control = this.registrationForm.get(controlName);
    return control.touched && control.invalid;
  }

  isRequired(controlName: string) {
    const control = this.registrationForm.get(controlName);
    return control.touched && control.errors?.['required'];
  }

  isPasswordMismatch() {
    const passwordControl = this.registrationForm.get('password');
    const confirmPasswordControl = this.registrationForm.get('confirmPassword');
    return (
      confirmPasswordControl.touched &&
      passwordControl.value !== confirmPasswordControl.value
    );
  }
}
