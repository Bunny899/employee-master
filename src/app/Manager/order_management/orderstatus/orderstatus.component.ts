import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatTableDataSource,MatPaginator } from '../../../../../node_modules/@angular/material';
import { orderstatus } from 'src/app/Classes/order_class';
import { OrdermanagementService } from 'src/app/Services/ordermanagement.service';
import { employee } from 'src/app/Classes/employee_class';



@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css']
})
export class OrderstatusComponent implements OnInit {
  orderarr:orderstatus[]=[];
  displayedColumns: string[]=['order_id','order_date','order_amount','fk_product_id','fk_category_id','fk_user_email','Address','order_status','Delievery Assign To','Action'];
  dataSource=new MatTableDataSource();
  dataSource1=new MatTableDataSource();
  i:number;
  status_no:number;
  flag:number=0;
  delievery_assign:String;
  n_flag:number=0;
  delieveryarr:employee[]=[];
  constructor(private _ser:OrdermanagementService,public _router:Router) { }
  getdel(item)
  {
    this.delievery_assign=item.employee_email;

  }
  UpdateStatus(element)
  {
    console.log(this.delievery_assign);
    if(element.order_status=='Vendor Recieved Order')
    {
        this.status_no=1;
    }
    else if(element.order_status=='Product Dispatched')
    {
      this.status_no=2;
    }
    else if(element.order_status='Shipment')
    {
      this.status_no=3;
    }

    this._ser.updateStatus(new orderstatus(element.order_id,element.order_date,element.order_amount,element.fk_product_id,element.fk_category_id,element.fk_user_email,this.delievery_assign,this.status_no)).subscribe(
      (data:any)=>{

        this.orderarr=data;

        this.dataSource.data=this.orderarr;
        this.ngOnInit();
        this._router.navigate(['ManagerHomepage/orderstatus']);
      }
    );
  }
  onClick(item)
  {
    this._router.navigate(['ManagerHomepage/getbilldetails',item.bill_id]);
  }
  ngOnInit() {
    this._ser.getAllOrder().subscribe(
      (data:any[])=>
      {


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

            if(data[this.i].delievery_assign=="")
            {
              this.n_flag=1;


            }
            else
            {
              this.flag=1;

            }
         }
        this.orderarr=data;
        this.dataSource.data=this.orderarr;
      });

      this._ser.getAllDelieveryBoy().subscribe(
        (data:any)=>{
          this.delieveryarr=data;
        }
      );
  }

}
