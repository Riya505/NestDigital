import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leavestatus',
  templateUrl: './leavestatus.component.html',
  styleUrls: ['./leavestatus.component.css']
})
export class LeavestatusComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetch()
   }
   
   fetch=()=>{
    let data={
      "emp_id":localStorage.getItem("emp_id")

    }
    console.log(data)
    this.myapi.viewEmployeeLeaveStatus(data).subscribe(
      (resp)=>{

        this.leaveData=resp
      }
    )
   }




  leaveData:any=[]

  ngOnInit(): void {
  }

}
