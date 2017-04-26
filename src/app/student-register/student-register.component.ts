import { Component,OnInit, Input, AfterViewInit, AfterViewChecked, TemplateRef, AfterContentInit, AfterContentChecked, HostBinding,Directive, HostListener, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Dir } from './directive';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/service';


@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css'],
})

export class StudentRegisterComponent implements OnInit {

    spinner:boolean = false;
   pass;
   cpass;
   redirectUrl = 'student';
   error:string;

  studentForm : FormGroup;
  deparment = [
    { value:'ECE'},{value:'CSE'},{value:'MECH'},{value:'IT'},{value:'EEE'},{value:'CE'}
  ]
  constructor(private builder:FormBuilder, private auth: AuthService, private router: Router) {  }

  ngOnInit() {
 
    this.studentForm = this.builder.group({
      studentName: ['', Validators.required],
      studentId: ['', Validators.compose([ Validators.required, Validators.pattern('[0-9]+'),Validators.maxLength(4)])],
      studentDeparment: ['', Validators.required],
      studentYear: ['', Validators.compose([ Validators.required, Validators.maxLength(4), Validators.pattern('[0-9]+')])],
      studentPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      studentcPassword: ['', Validators.required/* [this.user.bind(this.studentValue)]*/]

    })
      this.studentForm.valueChanges.map(x => {console.log(x)});
  }

  /*password(control): Observable<{[s:string]:boolean}>{
    console.log(control);
    this.pass = control.value;
   
       return Observable.from([{match:false}]);
    
  }

  user(control: FormControl): Observable<{[s:string]:boolean}>{
   this.cpass = control.value;
   console.log(this.pass);
   console.log(this.cpass);
   if(this.cpass === this.pass){
   return Observable.from([{error:false}]);
    }
    else{
       return Observable.from([{error:true}]);
    }
}*/

  studentValue(value,valid){
      if(valid && value.studentPassword === value.studentcPassword){
        this.spinner = true;
    //this.http.post('http://localhost:3000/api/admin-login', data,  {headers : header}).map((x) => x.json()).subscribe(data => {localStorage.setItem('token',data); this.redirect();});;
      this.auth.studentRegister(value)
        .subscribe(
          data =>{
               this.spinner = false;
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
  ngOnChanges(){
   console.log("changed");
  }
 
 ngAfterViewInit(){
   console.log('view Init');
  
 }
  ngAfterContentInit(){
    console.log('contentInit');
     
  }

}
