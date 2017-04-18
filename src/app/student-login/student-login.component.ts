import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/service';
@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
 studentForm: FormGroup;
 redirectUrl:string = 'student';
 error;
  constructor(private builder: FormBuilder, private auth:AuthService, private router: Router) { }

  ngOnInit() {
    this.studentForm = this.builder.group({
      studentId : ['', Validators.compose([Validators.required, Validators.pattern('[0-9]+')])],
      password : ['', Validators.required]
    });
  }
  login(value, valid) {
    if(valid){
   this.auth.studentLogin(value.studentId, value.password)
        .subscribe(
          data =>{
          console.log(data);
            console.log(data.message);
            if(data.success){
              this.router.navigate([this.redirectUrl]);
            }
            else{
              this.error = data.message;
            }
              
        
          },
          error => {
         
          });
  }
  }
}
