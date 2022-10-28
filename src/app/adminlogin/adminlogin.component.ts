import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private myRouter:Router) { }

  userName=""
  password=""

  readValues=()=>{
    let data={
      "userName":this.userName,
      "password":this.password

    }
    if (this.userName=="Admin" && this.password=="12345") {
      alert("Login Successfull")
      
    } else {
      alert("Invalid credential")
      
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
