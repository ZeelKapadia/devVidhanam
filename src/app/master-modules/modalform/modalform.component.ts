import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-modalform',
  templateUrl: './modalform.component.html',
  styleUrls: ['./modalform.component.scss']
})
export class ModalformComponent implements OnInit {
  @Input() dataToBind: any;

  contactForm: FormGroup = new FormGroup({});
  showMessage = false;
  showLoader = false;
  dismissForm = false;
  language = ""

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.dataToBind
      .subscribe((data: any) => {
        this.init(data)
      });
    this.init({})
  }

  init(data: any) {
    this.contactForm = this.fb.group({
      pujaTitle: new FormControl(data ? data.pujaTitle : ""),
      pujaDescription: new FormControl(data ? data.pujaDescription : ""),
      clientName: new FormControl(""),
      clientMessage: new FormControl(""),
      clientEmail: new FormControl(""),
      clientSubject: new FormControl(""),
    })
  }

  onSubmit() {
    this.dismissForm = false;
    const data = {
      yajamanName: this.contactForm.controls['clientName'].value,
      yajamanMail: this.contactForm.controls['clientEmail'].value,
      yajamanSubject: this.contactForm.controls['clientSubject'].value,
      yajamanMessage: this.contactForm.controls['clientMessage'].value,
      pujaTitle: this.contactForm.controls['pujaTitle'].value,
      pujaDescription: this.contactForm.controls['pujaDescription'].value,
    }
    if (this.contactForm.valid) {
      const message = "Hello, My self shree " + data.yajamanName + "\n I had send you this message to discussed about the " + data.pujaTitle + " I have facing some issue regarding the " + data.yajamanSubject + " hopefuly you have a ritual solution for my problem, here with I'm attaching my Mail address " + data.yajamanMail + " kindly do the helpful"
      const url = `https://api.whatsapp.com/send?phone=+917567751766&text=${message}`
      window.open(url, "_blank");
      this.contactForm.reset();
    }
  }

}
