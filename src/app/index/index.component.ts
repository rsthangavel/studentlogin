import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
  onSignIn(googleUser){
    var profile = googleUser.getBasicProfile();
    console.log(profile);
  }
}
