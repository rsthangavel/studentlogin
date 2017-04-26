import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import { router } from './router';
import 'hammerjs';
import { AppComponent } from './app.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewComponent, DialogComponent } from './admin-view/admin-view.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { IndexComponent } from './index/index.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDL } from './MaterialDesignLiteUpgradeElement';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthService } from './service/service';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DatepickerModule } from 'angular2-material-datepicker'

import { Dir } from './student-register/directive';
@NgModule({
  declarations: [
    AppComponent,
    StudentLoginComponent,
    AdminLoginComponent,
    AdminViewComponent,
    StudentViewComponent,
    IndexComponent,
    DialogComponent,
    MDL,
    StudentRegisterComponent,
    HeaderComponent,
    CarouselComponent,
    Dir

  ],
  entryComponents: [
        DialogComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(router),
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    DatepickerModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
