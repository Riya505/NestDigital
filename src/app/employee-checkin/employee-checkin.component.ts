import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-checkin',
  templateUrl: './employee-checkin.component.html',
  styleUrls: ['./employee-checkin.component.css']
})
export class EmployeeCheckinComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  securityId=localStorage.getItem("securityId")
  entryId=""
  

  
  readValue=()=>{
    let data={
      "securityId":this.securityId,
      "entryId":this.entryId
    }
    this.myapi.EmployeeCheckin(data).subscribe(
      (resp)=>{

      }
    )
    alert("Checkin")
    this.entryId=""
  }
  readCheckout=()=>{
    let data={
      "securityId":this.securityId,
      "entryId":this.entryId
    }
    this.myapi.EmployeeCheckout(data).subscribe(
      (resp)=>{

      }
    )
    alert("checkOut")
    this.entryId=""
  }

  data:any=[]

  ngOnInit(): void {
  }

}
