import { Component, OnInit } from '@angular/core';
import { emp_salary } from '../../../Classes/salary_class';
import { Router } from "@angular/router";
import { MatTableDataSource,MatPaginator } from '../../../../../node_modules/@angular/material';
import { SalarymanagementService } from 'src/app/Services/salarymanagement.service';
import { update_salary } from 'src/app/Classes/salary_update';


@Component({
  selector: 'app-allsalarylist',
  templateUrl: './allsalarylist.component.html',
  styleUrls: ['./allsalarylist.component.css']
})
export class AllsalarylistComponent implements OnInit {

  salaryarr:emp_salary[]=[];
  displayedColumns: string[] = ['employee_name','employee_salary','employee_joining_date','employee_designation','employee_mobileno','employee_city','employee_gender','salary_status','Action'];
  dataSource=new MatTableDataSource();

  update_salaryarr:update_salary[];
  constructor(private _salaryser:SalarymanagementService,public _router:Router) { }
  UpdateStatus(element)
  {
    this._salaryser.updateStatus(new update_salary(element.employee_email,element.salary_status)).subscribe(
      (data:any)=>{

        this.update_salaryarr=data;

        this.dataSource.data=this.update_salaryarr;
        this.ngOnInit();
      }
    );
  }
  ngOnInit() {
    this._salaryser.getAllEmp().subscribe(
      (data:any[])=>
      {

        this.salaryarr=data;
        this.dataSource.data=this.salaryarr;
      }
    );
  }

}
