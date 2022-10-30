import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  constructor(private myrouter:Router,private api:ApiService) { }

  email=""
  password=""

  readValues=()=>{
    let data={
      "email":this.email,
      "password":this.password
    }
    console.log(data)
    this.api.employeeLogin(data).subscribe(
      (resp:any)=>{
        if (resp.length>0) {
          localStorage.setItem("emp_id",resp[0].emp_id)
          this.myrouter.navigate(["/myProfile"])
        } else {
          alert("Invalid credentials")
        }

      }
    )
  }
  

  ngOnInit(): void {
  }

}
