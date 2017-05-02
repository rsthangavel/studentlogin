import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';
import { AuthService } from '../service/service';
declare var componentHandler: any;
@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  allstudent = [{}];
  error;

  constructor(private router: Router, private auth: AuthService, private dialog:MdDialog) { }

  ngOnInit() {
    if(localStorage.getItem('currentuser')){
    let user = JSON.parse(localStorage.getItem('currentuser'));
    if(user.user.success && user.user.Role=="admin"){
     this.auth.getStudentDetail(user.user.token)
        .subscribe(
          data =>{
            if(data.success){
               this.allstudent = data.message;
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
  this.router.navigate(['adminlogin']);
}
  }
   ngAfterContentChecked() {
    if (componentHandler) {
      componentHandler.upgradeAllRegistered();
    }
  }

  logout(){
      this.auth.logout();
      this.router.navigate(['']);
  }
  openDialog(){
    this.dialog.open(DialogComponent);
  }

}
//http://www.techrepublic.com/article/developers-guide-to-peer-reviews/
@Component({
  selector : 'test',
  template: 'TEst',
})
export class DialogComponent{}