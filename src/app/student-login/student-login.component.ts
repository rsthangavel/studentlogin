import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  ActivatedRoute, Router, Params } from '@angular/router';
import { AuthService } from '../service/service';
//import { Http, Headers, Response  } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
 studentForm: FormGroup;
 redirectUrl:string = 'student';
 error;
  constructor(private builder: FormBuilder, private auth:AuthService, private router: Router,private activate:ActivatedRoute) {
   
  }

  ngOnInit() {
     this.activate.queryParams.subscribe(params=>{console.log(params)});
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
        
            console.log(data.message);
            if(data.success){
              if(data.Role == 'student'){
              this.router.navigate(['student']);
            }
            else if(data.Role == 'admin'){
              this.router.navigate(['admin']);
            }
            }
            else{
              this.error = data.message;
            }
              
        
          },
          error => {
         
          });
  }
}
google(){
 
}
}
