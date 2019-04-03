import { Component, OnInit } from '@angular/core';
import { product } from '../../../Classes/product_class';
import { ProductService } from '../../../Services/productmanagement.service';
import { Router,ActivatedRoute } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  product:product[]=[];
  addProductArray:product[]=[];
   deleteProductArray:product[]=[];
   f:number=0;
  displayedColumns: string[] = [ 'Product_Name','Category_Name','Qty','product_price','Action'];
  dataSource=new MatTableDataSource(this.product);
  constructor(private _productservice:ProductService,private _router:Router) { }

  ProductPage()
  {
    this._router.navigate(['ManagerHomepage/addproduct']);
  }
  UpdateProduct(item:product)
  {

    this._router.navigate(['ManagerHomepage/updateproduct',item.product_id]);
  }
  DeleteProduct(item)
  {
    this._productservice.deleteproduct(item).subscribe(
      (data:any)=>{
        console.log(data);
        this.deleteProductArray.splice(this.deleteProductArray.indexOf(item),1);
        this.dataSource.data.splice(this.dataSource.data.indexOf(item),1);
        console.log(this.dataSource.data);
        this.dataSource.data=this.product;
      }
    )
  }

  ngOnInit() {
    this._productservice.getAllProduct().subscribe(
      (data:any)=>{
        this.product=data;
        this.dataSource.data=this.product;
      }
    );
  }

}
