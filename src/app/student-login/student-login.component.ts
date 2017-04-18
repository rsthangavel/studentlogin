import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
 studentForm: FormGroup;
  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.studentForm = this.builder.group({
      studentId : ['', Validators.compose([Validators.required, Validators.pattern('[0-9]+')])],
      password : ['', Validators.required]
    });
  }
  studentLogin(value, valid) {
   console.log(value);
  }
}
