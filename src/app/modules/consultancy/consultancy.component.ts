import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consultancy',
  templateUrl: './consultancy.component.html',
  styleUrls: ['./consultancy.component.scss']
})
export class ConsultancyComponent implements OnInit {

  dropdownArray = [
    "Marriage problem",
    "Money Problem",
    "Educational Problem",
    "Business / Job Problem",
    "Health Problem"
  ];

  formGroup: FormGroup
  fb: FormBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.formGroup = this.fb.group({
      name: new FormControl("", [Validators.required]),
      mobile: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      dob: new FormControl("", [Validators.required]),
      place: new FormControl("", [Validators.required]),
      birthPlace: new FormControl("", [Validators.required]),
      birthTime: new FormControl("", [Validators.required]),
      major: new FormControl("", [Validators.required]),
    })
  };


  onSubmit() {
    const data = {
      name: this.formGroup.controls['name'].value,
      mobile: this.formGroup.controls['mobile'].value,
      email: this.formGroup.controls['email'].value,
      dob: this.formGroup.controls['dob'].value,
      place: this.formGroup.controls['place'].value,
      birthPlace: this.formGroup.controls['birthPlace'].value,
      birthTime: this.formGroup.controls['birthTime'].value,
      major: this.formGroup.controls['major'].value,
    }

    if (this.formGroup.valid) {
      const string = "Hello, My self " + this.formGroup.value.name + " , I m worried about the " + this.formGroup.value.major + ". I am thankful, if you can guide me with my problem \n " + data
      const url = `https://api.whatsapp.com/send?phone=+917567751766&text=${string}`
      window.open(url, "_blank");
      this.formGroup.reset();
    }
  }
}
