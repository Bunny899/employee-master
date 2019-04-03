import { Component, OnInit,ViewChild } from '@angular/core';
import { product } from '../../../Classes/product_class';
import { ProductService } from '../../../Services/productmanagement.service';
import { Router,ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { CategoryServiceService } from 'src/app/Services/category-service.service';
import { category } from 'src/app/Classes/category_class';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  @ViewChild('employeeform') public createEmployeeForm:NgForm;
  product_id:string;
  product_name:string;
  category_id:number;
  product_price:number;
  product_colour:string;
  product_image:string;
  product_weight:number;
  product_warranty:number;
  product_material:string;
  product_Roomtype:string;
  product_height:number;
  product_width:number;
  product_depth:number;
  product_qty:number;
  product_soh:number;
  categoryarr:category[]=[];
  dataSource=new MatTableDataSource;
  addProductArray:product[]=[];
  selectedfile:File=null;
  constructor(private _productservice:ProductService,private _router:Router,private _catser:CategoryServiceService) { }
  onAddProductButton()
  {
    // this.product_image=this.selectedfile.name;
    // this._productservice.addproduct(new product(this.product_id,this.product_name,this.category_id,this.product_price,this.product_colour,this.product_image,this.product_weight,this.product_warranty,this.product_material,this.product_Roomtype,this.product_height,this.product_width,this.product_depth,this.product_qty,this.product_soh)).subscribe(
    //     (data:any)=>{

    //         this.addProductArray.push(new product(this.product_id,this.product_name,this.category_id,this.product_price,this.product_colour,this.product_image,this.product_weight,this.product_warranty,this.product_material,this.product_Roomtype,this.product_height,this.product_width,this.product_depth,this.product_qty,this.product_soh));
    //         alert("successfully added");
    //         this._router.navigate(['ManagerHomepage/viewproduct']);
    //     }
    // )


    var fd = new FormData();
      fd.append('product_name', this.product_name);
      fd.append('category_id', this.category_id.toString());
      fd.append('product_price', this.product_price.toString());
      fd.append('product_colour', this.product_colour);
      fd.append('product_image', this.selectedfile, this.selectedfile.name);
      fd.append('product_weight', this.product_weight.toString());
      fd.append('product_warranty', this.product_warranty.toString());
      fd.append('product_material', this.product_material);
      fd.append('product_Roomtype', this.product_Roomtype);
      fd.append('product_height', this.product_height.toString());
      fd.append('product_width', this.product_width.toString());
      fd.append('product_depth', this.product_depth.toString());
      fd.append('product_qty', this.product_qty.toString());
      fd.append('product_soh', this.product_soh.toString());

      this._productservice.addproduct(fd).subscribe(
        (data: any) => {
          console.log(data);
          alert('Successfully added');
          this.createEmployeeForm.reset();
          // this._router.navigate(['menunav/:user_email/product']);
        }
      )

  }
  onselect(value)
{
  this.selectedfile=<File>value.target.files[0];
}
  BackButton()
  {
    this._router.navigate(['ManagerHomepage/viewproduct']);
  }
  ngOnInit() {
    this._catser.getAllCategory().subscribe(
      (data:any)=>{

        this.categoryarr=data;

      }
    );
  }

}
