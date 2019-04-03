import { Injectable } from '@angular/core';
import { Login } from '../Classes/login_class';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private login_url='http://localhost:3000/emplogin/';


  constructor(private _http:HttpClient) { }

  getLogin(item:Login){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.login_url+item.employee_email, body, {headers: head1});
  }
}
