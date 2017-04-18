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
      adminName: ['', Validators.required],
      adminPassword: ['', Validators.required]
    });
  }
  adminValue(value, valid) {
    if(valid){
    let data = 'adminName='+ value.adminName + '&adminPassword=' + value.adminPassword;

    const header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');
    //this.http.post('http://localhost:3000/api/admin-login', data,  {headers : header}).map((x) => x.json()).subscribe(data => {localStorage.setItem('token',data); this.redirect();});;
      this.auth.adminLogin(value.adminName, value.adminPassword)
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
  private redirect(): void{
    this.router.navigate([this.redirectUrl]);
  }
}
