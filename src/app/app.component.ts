import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
   onSignIn(googleUser){
    var profile = googleUser.getBasicProfile();
    console.log(profile);
  }
}
