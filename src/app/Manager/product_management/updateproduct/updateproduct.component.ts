import { Component, OnInit } from '@angular/core';
import { product } from '../../../Classes/product_class';
import { ProductService } from '../../../Services/productmanagement.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
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
  updateProductArray:product[]=[];
  f:number=0;
  selectedfile:File=null;
  constructor(private _productservice:ProductService,private _router:Router,private _activatedroutes:ActivatedRoute) { }

  BackButton()
  {
    this._router.navigate(['ManagerHomepage/viewproduct']);
  }
  UpdateProduct()
  {
    //  this._productservice.updateproduct(new product(this.product_id,this.product_name,this.category_id,this.product_price,this.product_colour,this.product_image,this.product_weight,this.product_warranty,this.product_material,this.product_Roomtype,this.product_height,this.product_width,this.product_depth,this.product_qty,this.product_soh)).subscribe(
    //    (data:any)=>{
    //      console.log(data);
    //     this._router.navigate(['/product']);
    //    }
    // )

    if (this.f == 1)
    {
      var fd = new FormData();
      fd.append('product id', this.product_id);
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

      this._productservice.updateproductwithpic(this.product_id, fd).subscribe(
        (data: any) => {
          console.log(data);
          this._router.navigate(['ManagerHomepage/viewproduct']);
        }
      )

    }
    else
    {

      this._productservice.updateproductwithoutpic(new product(this.product_id,this.product_name,this.category_id,this.product_price,this.product_colour,this.product_image,this.product_weight,this.product_warranty,this.product_material,this.product_Roomtype,this.product_height,this.product_width,this.product_depth,this.product_qty,this.product_soh)).subscribe(
        (data: any) => {
          console.log(data);
          this._router.navigate(['ManagerHomepage/viewproduct']);
        }
      );
    }


  }
  onselect(value) {
    this.selectedfile = <File>value.target.files[0];
    this.f = 1;
  }
  CancelProduct()
  {
    this._router.navigate(['/product']);
  }
  ngOnInit() {
   this.product_id=this._activatedroutes.snapshot.params['product_id'];

    this._productservice.getProductById(this.product_id).subscribe(
      (data:product[])=>{
        this.product_id=data[0].product_id;
        this.product_name=data[0].product_name;
        this.category_id=data[0].category_id;
        this.product_price=data[0].product_price;
        this.product_colour=data[0].product_colour;
        this.product_image=data[0].product_image;
        this.product_weight=data[0].product_weight;
        this.product_warranty=data[0].product_warranty;
        this.product_material=data[0].product_material;
        this.product_Roomtype=data[0].product_Roomtype;
        this.product_height=data[0].product_height;
        this.product_width=data[0].product_width;
        this.product_depth=data[0].product_depth;
        this.product_qty=data[0].product_qty;
        this.product_soh=data[0].product_soh;
      }
    );
  }

}
