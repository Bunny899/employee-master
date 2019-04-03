import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { leave } from '../Classes/leave_class';
@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private url = 'http://localhost:3000/leave/';
  constructor(private _http:HttpClient) { }
  getAllLeaveEmployee(){
    return this._http.get(this.url);
  }
  addLeaveRecord(item:leave)
  {
    const body=JSON.stringify(item);
    const head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
}
