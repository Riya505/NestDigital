import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.viewEmployee().subscribe(
      (data)=>{
        this.EmployeData=data
      }
    )
  }

  deleteEmploye=(emp_id:any)=>{
    let data={
      "emp_id":emp_id
    }
    this.myapi.deleteEmployee(data).subscribe(
      (resp)=>{
        alert("DELETED!!")
      }
    )
    this.fetchData()
  }

  EmployeData:any=[]

  ngOnInit(): void {
  }

}
