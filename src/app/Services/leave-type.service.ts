import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LeaveTypeService {
  private url = 'http://localhost:3000/leaveType/';
  constructor(private _http:HttpClient) { }
  getAllLeaveType(){
    return this._http.get(this.url);
  }
}
