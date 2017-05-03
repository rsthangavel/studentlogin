import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/service';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
 @Input() user = true;
 userDetail = {};
 error;
 token;
  constructor(private router:Router, private auth: AuthService, private activate: ActivatedRoute) {   }

  ngOnInit() {
    this.activate.queryParams.subscribe(params=>{ this.token = params['token']; console.log(params['token'])});
    console.log(this.token);
     if(localStorage.getItem('currentuser')){
    let user = JSON.parse(localStorage.getItem('currentuser'));
    if(user.user.success){
     this.auth.getStudentDetail(user.user.token)
        .subscribe(
          data =>{
            if(data.success){
               this.userDetail = data.message;
            }
            else{
              this.error = data.message;
            }
          },
          error => {
         
          });
  }
}
else if(this.token){
  this.auth.getStudentDetail(this.token)
        .subscribe(
          data =>{
            if(data.success){
               this.userDetail = data.message;
            }
            else{
              this.error = data.message;
            }
          },
          error => {
         
          });
}
  else{
  this.router.navigate(['']);
}
  }

}
