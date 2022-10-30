import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  emp_id=localStorage.getItem("emp_id")
  start_Date=""
  end_Date=""
  duration=""
  type=""
  reason=""
  status=""

  readValue=()=>{
    let data={
      "emp_id":this.emp_id,
      "start_Date":this.start_Date,
      "end_Date":this.end_Date,
      "duration":this.duration,
      "type":this.type,
      "reason":this.reason,
      "status":this.status
    }
    this.myapi.applyLeave(data).subscribe(
      (resp)=>{

      }
    )
    alert("Leave Request is Applied")
    this.start_Date=""
    this.end_Date=""
    this.duration=""
    this.type=""
    this.reason=""
    this.status=""
  }

  ngOnInit(): void {
  }

}
