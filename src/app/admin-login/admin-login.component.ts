import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],

})

export class AdminLoginComponent implements OnInit {
 adminForm : FormGroup;
  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.adminForm = this.builder.group({
      adminName: ['', Validators.required],
      adminPassword: ['', Validators.required]
    });
  }
  adminValue(value, valid) {
    console.log(value);
  }

}
