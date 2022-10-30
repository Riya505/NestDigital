import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchdata()
   }
   fetchdata=()=>{
    let data={
      "emp_id":localStorage.getItem("emp_id")
    }
    console.log(data)
    this.myapi.EmployeeMyProfile(data).subscribe(
      (resp)=>{
        this.data=resp
      }
    )
   }

  ngOnInit(): void {
  }


  data:any=[]

}
