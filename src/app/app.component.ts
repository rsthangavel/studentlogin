import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MdDialogRef } from '@angular/material';
import {DialogsService} from './service/dialog.service';
import { AuthService } from './service/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:boolean = false;
  result;
  hov:boolean = false;
  @ViewChild('start') start;
  constructor(sanitizer: DomSanitizer, private router: Router, private dialogsService: DialogsService,private auth:AuthService){
     this.router.events.subscribe(()=> {if(localStorage.getItem('currentuser') || localStorage.getItem('userdetail')){
      this.user = true; 
    }
    else{
      this.user = false;
    }});
      
  }
  logout(){
    
   this.dialogsService
      .confirm('Confirm Dialog', 'Are you sure you want Logout?')
      .subscribe(res =>{
       if(res){
         this.auth.logout();
  this.router.navigate(['']);
  this.hov = false;
  this.test();
  
       }
      } 
      );
 
  
  }
  ngOnInit():void{
     if (this.isOver()) 
        this.start.close();
      
  }
    onchange(){
      if(localStorage.getItem('currentuser')){
      this.user = true; 
    }
    else{
      this.user = false;
    }
  }
isOver(): boolean {
     // return window.matchMedia(`(max-width: 960px)`).matches;
     return false;
    
  }
  test():boolean{
    return this.hov;
    
  }
  close(){
  if (this.isOver()) 
        this.start.close();
  }
    
   onSignIn(googleUser){
    var profile = googleUser.getBasicProfile();
    console.log(profile);
   
}
}
