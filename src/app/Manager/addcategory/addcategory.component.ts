import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/Classes/category_class';
import { CategoryServiceService } from 'src/app/Services/category-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  category_id:number;
  category_name:String;
  addCategoryArray:category[];
  constructor(private _catser:CategoryServiceService,private _router:Router) { }

onAddCategoryButton()
{
    this._catser.addcategory(new category(this.category_id,this.category_name)).subscribe(
      (data:any)=>{

          // this.addCategoryArray.push(new category(this.category_id,this.category_name));
          alert("successfully added");
          this._router.navigate(['ManagerHomepage/viewcategory']);
      }
  )
}
BackButton()
{
  this._router.navigate(['ManagerHomepage/viewcategory']);
}

  ngOnInit() {
  }

}
