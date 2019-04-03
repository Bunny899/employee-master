import { Component, OnInit,ViewChild,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveService } from '../Services/leave.service';
import { LeaveTypeService } from '../Services/leave-type.service';
import { leave_type } from '../Classes/leave_type_class';
import { leave } from '../Classes/leave_class';
import { PersonaldataService } from '../Services/personaldata.service';
import { employee } from '../Classes/employee_class';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-addleave',
  templateUrl: './addleave.component.html',
  styleUrls: ['./addleave.component.css']
})
export class AddleaveComponent implements OnInit {
  @ViewChild('leaveForm') public createEmployeeForm:NgForm;
  leave_id:number;
  leave_msg:string;
  leave_days:number;
  leave_from_date:Date;
  leave_to_date:Date;
  leave_name:string;
  employee_name:string;
  LeaveArray:leave[]=[];
  LeaveTypeArray:leave_type[]=[];
  addLeaveArray:leave[]=[];
  EmployeeArray:employee[]=[];
  

  constructor(private _leaveservice:LeaveService,private _leaveTypeservice:LeaveTypeService,private _employeeservices:PersonaldataService) { }
  onAddProductButton(){

    // console.log(this.leave_from_date);
    this._leaveservice.addLeaveRecord(new leave(this.employee_name,this.leave_id,this.leave_msg,this.leave_days,this.leave_from_date,this.leave_to_date,this.leave_name)).subscribe(
      (data:any)=>{
          
          this.LeaveArray.push(new leave(this.employee_name,this.leave_id,this.leave_msg,this.leave_days,this.leave_from_date,this.leave_to_date,this.leave_name));
          alert("Your Leave Request Has Been Sent To Admin");
          console.log(data);
          this.createEmployeeForm.reset();
        
      }
  )
  }
  ngOnInit() {
    this._leaveTypeservice.getAllLeaveType().subscribe(
      (data:any)=>{
        this.LeaveTypeArray=data;
      console.log(this.LeaveTypeArray);
      }
    );

    this._employeeservices.getAllEmployee().subscribe(
      (data:any)=>{
        this.EmployeeArray=data;
      console.log(this.EmployeeArray);
      }
    );
  }

}
