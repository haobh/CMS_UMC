import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {appRoutes} from './app.route';
import {UserListComponent} from './user.component';
import {LoginComponent} from './account/login.component';
import {HomeComponent} from './home/home.component';
import {AlertComponent} from './_directives/alert.component';

import { UserServices } from './user.services';
import {LoginServices} from './_services/login.services';
import {AlertService} from './_services/alert.service';

@NgModule({
  declarations: [
    AppComponent, UserListComponent,LoginComponent,HomeComponent,AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes
  ],
  providers: [
    UserServices,
    LoginServices,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
