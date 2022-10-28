import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  emp_id=""
  name=""
  designation=""
  company_name=""
  dob=""
  gender=""
  email=""
  password=""

  readValue=()=>{
    let data={
      "emp_id":this.emp_id,
      "name":this.name,
      "designation":this.designation,
      "company_name":this.company_name,
      "dob":this.dob,
      "gender":this.gender,
      "email":this.email,
      "password":this.password
    }
    console.log(data)
    this.myapi.addEmployee(data).subscribe(
      (resp)=>{
        console.log(resp)
        alert("ADDED")
      }
    )
  }

  ngOnInit(): void {

  }

}
