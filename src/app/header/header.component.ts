import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:boolean = false;
  constructor(private router:Router) {   
   
      
  }
  ngOnInit() {
  
     if(localStorage.getItem('currentuser')){
      this.user = true; 
    }
    else{
      this.user = false;
    }
  }

  @Input() result:number = 0;
  @Output() toggleSidenav = new EventEmitter<void>();

}
