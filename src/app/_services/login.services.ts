import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginServices {
    private apiUrl = "http://localhost:61136/api/account";
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private _http: Http) {

    }
    Login(userName: string, passWord: string): Observable<any[]> {
      return this._http.get(this.apiUrl + "?userName=" + userName+ "&passWord=" + passWord).map((response: Response) => response.json());
    }

}