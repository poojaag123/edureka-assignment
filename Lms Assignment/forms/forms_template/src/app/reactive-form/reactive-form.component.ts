import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  employeeForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      fullName: [''],
      address: [''],
      city: [''],
      email: [''],
      phone: [''],
      password: [''],
      confirmPassword: [''],
    });
  }
}
