/**
 * Created by thangavel on 17/4/17.
 */

import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
export const  router: Routes = [
  {path: '', component: StudentLoginComponent },
  {path: 'studentlogin', component: StudentLoginComponent },
  {path: 'adminlogin', component: AdminLoginComponent },
  {path: 'student', component: StudentViewComponent},
  {path: 'admin', component: AdminViewComponent},
  {path: 'studentregister', component:StudentRegisterComponent }

];
