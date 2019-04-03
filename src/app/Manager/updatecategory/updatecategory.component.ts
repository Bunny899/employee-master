import { Component, OnInit } from '@angular/core';
import { category } from '../../Classes/category_class';
import { Router,ActivatedRoute } from '@angular/router';
import { CategoryServiceService } from 'src/app/Services/category-service.service';


@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {
  category_id:number;
  category_name:String;
  constructor(private _catser:CategoryServiceService,private _router:Router,private _activatedroutes:ActivatedRoute) { }

  UpdateCategory()
  {
     this._catser.updatecategory(new category(this.category_id,this.category_name)).subscribe(
       (data:any)=>{
         console.log(data);
        this._router.navigate(['ManagerHomepage/viewcategory']);
       }
    )

  }
  CancelCategory()
  {
    this._router.navigate(['ManagerHomepage/viewcategory']);
  }
  BackButton()
  {
    this._router.navigate(['ManagerHomepage/viewcategory']);
  }
  ngOnInit() {
    this.category_id=this._activatedroutes.snapshot.params['category_id'];

    this._catser.getCategoryById(this.category_id).subscribe(
      (data:category[])=>{
        this.category_name=data[0].category_name;
      });

  }

}
