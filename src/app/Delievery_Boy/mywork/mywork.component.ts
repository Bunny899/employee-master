import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { orderstatus } from 'src/app/Classes/order_class';
import { OrdermanagementService } from 'src/app/Services/ordermanagement.service';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.css']
})
export class MyworkComponent implements OnInit {

  orderarr:orderstatus[]=[];
  displayedColumns: string[]=['order_id','user_name','order_amount','contact_no','fk_user_email','Address','Action'];
  dataSource=new MatTableDataSource();
  employee_email:String;
  i:number;
  status_no:number;
  flag:number=0;
  asign_delievery:String;
  n_flag:number=0;
  constructor(private _ser:OrdermanagementService,public _router:Router) { }
  UpdateStatus(element)
  {
    if(element.order_status='Shipment')
    {
      this.status_no=3;
    }

    this._ser.updateStatus(new orderstatus(element.order_id,element.order_date,element.order_amount,element.fk_product_id,element.fk_category_id,element.fk_user_email,element.delievery_assign,this.status_no)).subscribe(
      (data:any)=>{

        this.orderarr=data;

        this.dataSource.data=this.orderarr;
        this.ngOnInit();
        this._router.navigate(['DelieveryHomepage/mywork']);
      }
    );
  }
  ngOnInit() {
    this.employee_email=localStorage.getItem('email')
    this._ser.getAllWork(this.employee_email).subscribe(
      (data:any[])=>
      {

        console.log(data);
         for(this.i=0;this.i<data.length;this.i++)
         {
            if(data[this.i].order_status==1)
            {
              data[this.i].order_status='Vendor Recieved Order';
            }
            else if(data[this.i].order_status==2)
            {
              data[this.i].order_status='Product Dispatched';
            }
            else if(data[this.i].order_status==3)
            {
                data[this.i].order_status='Shipment';
            }
            else if(data[this.i].order_status==4)
            {
              data[this.i].order_status='Order Delivered';

            }

          }
          this.orderarr=data;
          this.dataSource.data=this.orderarr;
        });
  }

}
