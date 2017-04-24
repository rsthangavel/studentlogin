import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('start') start;
  constructon(sanitizer: DomSanitizer){}
  ngOnInit():void{
     if (this.isOver()) 
        this.start.close();
      
  }
isOver(): boolean {
   
      return window.matchMedia(`(max-width: 960px)`).matches;
    
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
