import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent {

  contact: Contact = {
    name: '', email: ''
  };

  contactForm: FormGroup;
  submitted: boolean = false;

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(this.contact.name,
        [Validators.required, Validators.minLength(4),
        Validators.maxLength(10)]),
      email: new FormControl(this.contact.email,
        [Validators.required, Validators.email])
    })
  }

  get f() {
    return this.contactForm.controls;
  }

  contactSubmit() {
    this.submitted = true;
    console.log(this.contact);
  }
}
