import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BillmanagementService } from '../../../Services/billmanagement.service';
import { bill_details } from '../../../Classes/bill_details';
import { MatTableDataSource,MatPaginator } from '../../../../../node_modules/@angular/material';


@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {
  id:number;
  details_arr:bill_details[]=[];
  displayedColumns: string[] = ['fk_bill_id','product_name','bill_price','bill_qty','bill_remarks'];
  dataSource=new MatTableDataSource();
  constructor(public _actroute:ActivatedRoute,public _ser:BillmanagementService,public _router:Router) { }
  BackButton()
  {
    this._router.navigate(['CashierHomepage/Viewbill']);
  }
  
  ngOnInit() {
    this.id=this._actroute.snapshot.params['bill_id'];
    this._ser.getBillDetails(this.id).subscribe(
      (data:bill_details[])=>
      {
        this.details_arr=data;

        this.dataSource.data=this.details_arr;
      }
    );
  }

}
