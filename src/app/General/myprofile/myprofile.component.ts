import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { employee } from 'src/app/Classes/employee_class';
import { PersonaldataService } from 'src/app/Services/personaldata.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  employee_email:String;
  employee_password:String;
  employee_name:String;
  employee_joining_date:Date;
  employee_salary:number;
  employee_designation:String;
  employee_mobileno:String;
  employee_city:String;
  employee_gender:String;
  employee_address:String;
  salary_status:String;
  constructor(private _personalservice:PersonaldataService,private _activatedroutes:ActivatedRoute,public _router:Router) { }

  OnUpdate()
  {
    if(this.employee_designation=="Cashier")
      this._router.navigate(['CashierHomepage/updateprofile',this.employee_email]);
    else if(this.employee_designation=="Manager")
      this._router.navigate(['ManagerHomepage/updateprofile',this.employee_email]);
    else if(this.employee_designation=="Delievery_Boy")
      this._router.navigate(['DelieveryHomepage/updateprofile',this.employee_email]);
  }

  ngOnInit() {
    this.employee_email=this._activatedroutes.snapshot.params['email'];


    this._personalservice.getProfileByEmail(this.employee_email).subscribe(
      (data:any)=>{
        this.employee_email=data[0].employee_email;
        this.employee_password=data[0].employee_password;
        this.employee_name=data[0].employee_name;
        this.employee_joining_date=data[0].employee_joining_date;
        this.employee_salary=data[0].employee_salary;
        this.employee_designation=data[0].employee_designation;
        this.employee_mobileno=data[0].employee_mobileno;
        this.employee_city=data[0].employee_city;
        this.employee_gender=data[0].employee_gender;
        this.employee_address=data[0].employee_address;
        this.salary_status=data[0].salary_status;
      }
    );
  }

}
