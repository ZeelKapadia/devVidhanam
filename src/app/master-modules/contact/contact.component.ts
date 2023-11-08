import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataTransferService } from '../services/service/data-transfer.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnChanges {
  contactForm: FormGroup
  showMessage = false;
  showLoader = false;
  language: any = "en";

  constructor(private fb: FormBuilder, private httpRequest: DataTransferService, private languageService: DataTransferService, private translateService: TranslateService) {
    this.contactForm = this.fb.group({
      clientName: [""],
      clientEmail: [""],
      clientSubject: [""],
      clientMessage: [""]
    });
    this.language = this.languageService.getLanguage();

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

  ngOnChanges(changes: SimpleChanges): void {
    this.translateService.use(this.language);
  }
}
