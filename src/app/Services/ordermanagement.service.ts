import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { orderstatus } from '../Classes/order_class';

@Injectable({
  providedIn: 'root'
})
export class OrdermanagementService {
  private order_url="http://localhost:3000/empvieworder/";
  private my_work_url="http://localhost:3000/empviewwork/";
  private get_delievery_boy="http://localhost:3000/empgetdelieveryboy/";
  constructor(private _http:HttpClient) { }

  getAllOrder()
  {
    return this._http.get(this.order_url);
  }
  updateStatus(item:orderstatus){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json')
    return this._http.put(this.order_url+item.order_id,body,{headers:head1});
  }
  getAllDelieveryBoy()
  {
    return this._http.get(this.get_delievery_boy);
  }
  getAllWork(employee_email)
  {
    return this._http.get(this.my_work_url+employee_email);

  }
}
