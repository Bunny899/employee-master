import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { loan } from "../Classes/loan_class";
@Injectable({
  providedIn: "root"
})
export class LoanService {
  private loan_url = "http://localhost:3000/loanemp/";
  private check_url = "http://localhost:3000/empgetdataforloan/";
  constructor(private _http: HttpClient) {}
  getLoan() {
    return this._http.get(this.loan_url);
  }
  addLoanNotification(item:loan) {
    const body = JSON.stringify(item);
    const head1 = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.loan_url, body, { headers: head1 });
  }
  getuserdata(employee_email:string)
  {
   return  this._http.get(this.check_url+employee_email);
  }
}
