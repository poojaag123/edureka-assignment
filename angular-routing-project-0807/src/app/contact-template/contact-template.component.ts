import { Component } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-template',
  templateUrl: './contact-template.component.html',
  styleUrls: ['./contact-template.component.css']
})
export class ContactTemplateComponent {

  contact: Contact = {
    name: '', email: ''
  };

  contactSubmit() {
    console.log(this.contact);
  }

}
