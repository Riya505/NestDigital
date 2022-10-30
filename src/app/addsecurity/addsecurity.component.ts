import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addsecurity',
  templateUrl: './addsecurity.component.html',
  styleUrls: ['./addsecurity.component.css']
})
export class AddsecurityComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  securityId=""
  securityName=""
  phone=""
  address=""
  dob=""
  doj=""
  email=""
  password=""

  readValue=()=>{
    let data={
      "securityId":this.securityId,
      "securityName":this.securityName,
      "phone":this.phone,
      "address":this.address,
      "dob":this.dob,
      "doj":this.doj,
      "email":this.email,
      "password":this.password
      
    }
    console.log(data)
    this.myapi.addSecurity(data).subscribe(
      (resp)=>{
        console.log(resp)
        alert("ADDED")
      }
    )
  }

  ngOnInit(): void {
  }

}
