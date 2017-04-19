import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    if(localStorage.getItem('currentuser')){
    let user = JSON.parse(localStorage.getItem('currentuser'));
    if(user.user.success){
    console.log(user.user.token);
    }
  }
  else{
  this.router.navigate(['adminlogin']);
}
  }
  logout(){
      this.auth.logout();
      this.router.navigate(['']);
  }

}
//http://www.techrepublic.com/article/developers-guide-to-peer-reviews/
