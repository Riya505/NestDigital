import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee-entry',
  templateUrl: './view-employee-entry.component.html',
  styleUrls: ['./view-employee-entry.component.css']
})
export class ViewEmployeeEntryComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.viewEmployeeEntry().subscribe(
      (data)=>{
        this.EmployeeEntryData=data
      }
    )
  }


  EmployeeEntryData:any=[]

  ngOnInit(): void {
  }

}
