import { Component, OnInit } from '@angular/core';
import { PersonaldataService } from 'src/app/Services/personaldata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { employee } from 'src/app/Classes/employee_class';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
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
  constructor(private  _personalservice:PersonaldataService,private _acroute:ActivatedRoute,public _route:Router) { }
  OnSave()
  {
      this._personalservice.updateProfile(new employee(this.employee_email,this.employee_password,this.employee_name,this.employee_joining_date,this.employee_salary,this.employee_designation,this.employee_mobileno,this.employee_city,this.employee_gender,this.employee_address,this.salary_status)).subscribe(
        (data:any)=>{
          alert("Successfully Updated");
        }
      )

  }
  ngOnInit() {

    this.employee_email=this._acroute.snapshot.params['email'];


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
