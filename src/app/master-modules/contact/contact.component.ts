import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataTransferService } from '../services/service/data-transfer.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup
  showMessage = false;
  showLoader = false;

  constructor(private fb: FormBuilder, private httpRequest: DataTransferService) {
    this.contactForm = this.fb.group({
      clientName: [""],
      clientEmail: [""],
      clientSubject: [""],
      clientMessage: [""]
    })
  }

  onSubmit() {
    this.showLoader = true;
    this.httpRequest.sendMail(this.contactForm.value).subscribe((response: any) => {
      this.showLoader = false;
      if (response.res === "1") {
        this.showMessage = true;
        this.contactForm.reset();
        setTimeout(() => {
          this.showMessage = false;
        }, 3000);
        
      }
    });
  }
}
