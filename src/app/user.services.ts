import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserServices {
    private apiUrl = "http://localhost:61136/api/user";
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private _http: Http) {

    }
    //Lấy toàn bộ danh sách
    GetList(): Observable<any[]> {
        return this._http.get(this.apiUrl).map((response: Response) => response.json());
    }
    //Search
    Search(keyword: string): Observable<any[]> {
        return this._http.get(this.apiUrl + "?name=" + keyword).map((response: Response) => response.json());
    }
    //Lấy theo ID
    GetSingle(id: number): Observable<any> {
        return this._http.get(`${this.apiUrl}/${id}`).map((response: Response) => response.json());
    }
    //Update theo ID, data: truyen ca mang data vao
    Update(id: number, data: any): Observable<any> {
        return this._http.put(`${this.apiUrl}/${id}`, data, { headers: this.headers }).map((response: Response) => response.json());
    }
    //Add
    Add(name: string, userName: string,passWord: string, status: boolean): Observable<any> {
        return this._http.post(this.apiUrl+ "?name=" + name + "&username=" + userName + "&password=" + passWord +
        "&status=" + status,{ headers: this.headers }).map((response: Response) => response.json());
    }
    //Delete
    Delete(id: number): Observable<any> {
        return this._http.delete(`${this.apiUrl}/${id}`).map((response: Response) => response.json());
    }
}