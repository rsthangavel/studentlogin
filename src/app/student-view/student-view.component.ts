import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
 @Input() user = true;
 userDetail = {};
 error;
  constructor(private router:Router, private auth: AuthService) { }

  ngOnInit() {
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
  else{
  this.router.navigate(['']);
}
  }

}
