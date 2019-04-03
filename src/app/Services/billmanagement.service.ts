import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BillmanagementService {

  private bill_url="http://localhost:3000/empviewbill/";
  private bill_details_url='http://localhost:3000/empgetbilldetails/'
  constructor(private _http:HttpClient) { }

  getBillDetails(bill_id)
  {
    return this._http.get(this.bill_details_url+bill_id);
  }
  getAllBill()
  {
    return this._http.get(this.bill_url);
  }
}
