import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: [""],
      email: [""],
      subject: [""],
      message: [""]
    })
  }

  onSubmit() {

  }
}
