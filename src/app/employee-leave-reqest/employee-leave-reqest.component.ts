import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-leave-reqest',
  templateUrl: './employee-leave-reqest.component.html',
  styleUrls: ['./employee-leave-reqest.component.css']
})
export class EmployeeLeaveReqestComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  LeaveStatus:boolean=false
  fetchData=()=>{
    this.myapi.viewEmployeeLeave().subscribe(
      (data)=>{
        this.leaveData=data
        this.LeaveStatus=true
      }
    )
  }
  rejectLeave=(emp_id:any)=>{
    let data={
      "emp_id":emp_id,
      "status":-1
    }
    this.myapi.updateLeaveStatus(data).subscribe(
      (resp)=>{

      }
    )
    alert("Employee id: "+ emp_id +"Leave Request Rejected")
  }
  acceptLeave=(emp_id:any)=>{
    let data={
      "emp_id":emp_id,
      "status":1
    }
    this.myapi.updateLeaveStatus(data).subscribe(
      (resp)=>{

      }
    )
    alert("Employee id: "+ emp_id +"Leave Request Accepted")
  }


  leaveData:any=[]

  ngOnInit(): void {
  }

}
