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
      let url = window.location.origin;
      return this.http.post(url+'/api/admin-login', data, {headers: header})
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
      let data = 'studentId='+ name + '&studentPassword=' + password;
      let url = window.location.origin;
      return this.http.post(url+'/api/student-login', data, {headers: header})
      .map(res =>{
      let user = res.json();
     
      if(user.success && user.token){
         localStorage.setItem('currentuser', JSON.stringify({user}));
        }
        return res.json();
        });
  }
  studentRegister(value){
      const header = new Headers();
      let data = 'studentName='+value.studentName +'&studentId='+value.studentId+'&studentYear='+value.studentYear+'&studentDeparment='+value.studentDeparment+'&studentPassword='+value.studentPassword;
         let url = window.location.origin;
       
      header.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url+'/api/student-register', data, {headers: header})
      .map(res =>{
      let user = res.json();
        console.log(user);
      if(user.success && user.token){
         localStorage.setItem('currentuser', JSON.stringify({user}));
        }
        return res.json();
        });
  }
  getStudentDetail(token){
       const header = new Headers();
         let url = window.location.origin;
       let data = 'token='+token;
      header.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url+'/api/student-detail', data, {headers: header})
      .map(res =>{
      let user = res.json();
        console.log(user);
      if(user.success){
         localStorage.setItem('userdetail', user.success); 
        return res.json();
      }
      else{
        this.router.navigate(['']);
      }
        });
  }
  logout(){
    localStorage.clear();
  }
}
