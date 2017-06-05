import {Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Http, Headers, RequestOptions} from '@angular/http'; 

import {LoginServices} from '../_services/login.services';
import {AlertService} from'../_services/alert.service';
@Component({
  selector: 'login-component',
  templateUrl: '/login.component.html',
})
export class LoginComponent implements OnInit {
    public subscription: Subscription;
    public user: any;  //chua 1 ban ghi
    public username: string;
    public password: string;
    returnUrl: string;
    loading = false;
    constructor(
      private loginService: LoginServices,
      private router: Router,
      private activateRoute: ActivatedRoute,
      private alertService: AlertService){
      }
    ngOnInit() {
        this.user = {};
        // get return url from route parameters or default to '/'
         this.returnUrl = './home';
    }
    Login() {
        this.loading=true;
        this.loginService.Login(this.username, this.password).subscribe(
                data => {
                    this.user=data;    
                    if(this.user==1)
                    {
                        //alert("Ok");
                        this.router.navigate([this.returnUrl]);
                    }
                    else
                    {                               
                        console.log(this.user); 
                        this.alertService.error(this.user);
                        alert(""+this.user);                       
                    }                  
                },
                error => {
                    alert(""+this.user);
                    this.alertService.error(error);
                    this.loading = false;
                }
         );
    }
}