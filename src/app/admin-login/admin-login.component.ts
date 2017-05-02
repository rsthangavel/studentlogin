import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],

})

export class AdminLoginComponent implements OnInit {
 adminForm : FormGroup;
  adminName;
  error;
 public redirectUrl: string = 'admin';
  constructor(private builder: FormBuilder, private http: Http, private router: Router, private auth: AuthService ) { }

  ngOnInit() {
    this.adminForm = this.builder.group({
      adminId: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]+')])],
      adminPassword: ['', Validators.compose([Validators.required])]
    });
  }
  adminValue(value, valid) {
    console.log(value);
    if(valid){
   
    //this.http.post('http://localhost:3000/api/admin-login', data,  {headers : header}).map((x) => x.json()).subscribe(data => {localStorage.setItem('token',data); this.redirect();});;
    this.auth.adminLogin(value.adminId, value.adminPassword)
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
  private redirect(): void{
    this.router.navigate([this.redirectUrl]);
  }
}
