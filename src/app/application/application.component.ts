import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formGroup = this.formBuilder.group({
      startDate: new FormControl(null),
      analysisDate: new FormControl(null),
      planDuration: new FormControl(null),
      companyName: new FormControl(null),
      street: new FormControl(null),
      postcode: new FormControl(null),
      place: new FormControl(null),
      phone: new FormControl(null, [Validators.pattern(/^[+-\s\./0-9]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/), Validators.max(10)]),
      website: new FormControl(null),
      email: new FormControl(null, Validators.email),
    });
  }
}
