import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {
  studentForm : FormGroup;
  deparment = [
    { value:'ECE'},{value:'CSE'},{value:'MECH'},{value:'IT'},{value:'EEE'},{value:'CE'}
  ]
  constructor(private builder:FormBuilder) { }

  ngOnInit() {
    this.studentForm = this.builder.group({
      studentName: ['', Validators.required],
      studentId: ['', Validators.compose([ Validators.required, Validators.pattern('[0-9]+')])],
      studentDeparment: ['', Validators.required],
      studentYear: ['', Validators.compose([ Validators.required, Validators.maxLength(2)])],
      studentDob : ['', Validators.compose([Validators.required])],
      studentPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      studentcPassword: ['', Validators.required]

    })
  }
  studentValue(value,valid){
      console.log(value);
  }

}
