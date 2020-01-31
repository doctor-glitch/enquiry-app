import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-enquiryform',
  templateUrl: './enquiryform.component.html',
  styleUrls: ['./enquiryform.component.scss']
})
export class EnquiryformComponent implements OnInit {
  enquiryForm: any;
  options: FormGroup;
  error: any;
  constructor(private fb: FormBuilder) {
    this.enquiryForm = fb.group({
      fname: new FormControl('', [
        Validators.required
      ]),
      lname: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required
      ]),
      contact: new FormControl('', [
        Validators.required
      ]),
      comment: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),

    });
  }
save() {
  console.log(this.enquiryForm);
}

get(controlName) {
  return this.enquiryForm.get(controlName);
}

hasError(controlName) {
  return this.get(controlName).errors && (this.get(controlName).dirty || this.get(controlName).touched);
}
ngOnInit() {
}

}
