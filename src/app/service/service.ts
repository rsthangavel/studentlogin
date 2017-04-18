/**
 * Created by thangavel on 18/4/17.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, Response  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
@Injectable()
export class AuthService{
  redirectUrl:string = 'studentlogin';

  constructor(private http: Http,  private router: Router){}
  adminLogin(name: string, password: string ) {
      const header = new Headers();
      header.append('Content-Type', 'application/x-www-form-urlencoded');
      let data = 'adminName='+ name + '&adminPassword=' + password;

      return this.http.post('http://localhost:3000/api/admin-login', data, {headers: header})
      .map(res =>{
      let user = res.json();
     
      if(user.success && user.token){
         localStorage.setItem('currentuser', JSON.stringify({user}));
        }
        return res.json();
        });
  }
  studentLogin(name:string, password:string){
       const header = new Headers();
      header.append('Content-Type', 'application/x-www-form-urlencoded');
      let data = 'adminName='+ name + '&adminPassword=' + password;

      return this.http.post('http://localhost:3000/api/student-login', data, {headers: header})
      .map(res =>{
      let user = res.json();
     
      if(user.success && user.token){
         localStorage.setItem('currentuser', JSON.stringify({user}));
        }
        return res.json();
        });
  }
  logout(){
    
  }
}
