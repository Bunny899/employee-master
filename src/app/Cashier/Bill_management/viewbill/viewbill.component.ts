import { Component, OnInit } from '@angular/core';
import { BillmanagementService } from '../../../Services/billmanagement.service';
import { viewbill } from '../../../Classes/bill_class';
import { Router } from "@angular/router";
import { MatTableDataSource,MatPaginator } from '../../../../../node_modules/@angular/material';


@Component({
  selector: 'app-viewbill',
  templateUrl: './viewbill.component.html',
  styleUrls: ['./viewbill.component.css']
})
export class ViewbillComponent implements OnInit {
  billarr:viewbill[]=[];
  displayedColumns: string[] = ['bill_id','bill_amount','bill_date','user_id','bill_status','product_name','Action'];
  dataSource=new MatTableDataSource();

  constructor(private _ser:BillmanagementService,public _router:Router) { }

  onClick(item)
  {
    this._router.navigate(['CashierHomepage/getbilldetails',item.bill_id]);
  }
  ngOnInit() {
    this._ser.getAllBill().subscribe(
      (data:any[])=>
      {
         console.log(data);
        this.billarr=data;
        this.dataSource.data=this.billarr;
      }
    );
  }

}
