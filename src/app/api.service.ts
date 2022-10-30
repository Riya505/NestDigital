import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/EmployeeEntry",data)
  }
  viewEmployee=()=>{
    return this.http.get("http://localhost:8080/ViewEmployee")
  }
  searchEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/searchEmployee",data)
  }
  deleteEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteEmployee",data)
  }
  editEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/EditEmployee",data)
  }
  viewEmployeeLeave=()=>{
    return this.http.get("http://localhost:8080/viewAllLeave")
  }
  updateLeaveStatus=(data:any)=>{
    return this.http.post("http://localhost:8080/UpdateLeaveRequest",data)
  }
}
