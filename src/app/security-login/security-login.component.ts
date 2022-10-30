import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-login',
  templateUrl: './security-login.component.html',
  styleUrls: ['./security-login.component.css']
})
export class SecurityLoginComponent implements OnInit {

  constructor(private myrouter:Router,private myapi:ApiService) { }

  email=""
  password=""

  readValues=()=>{
    let data={
      "email":this.email,
      "password":this.password
    }
    console.log(data)
      this.myapi.SecurityLogin(data).subscribe(
        (resp:any)=>{
          if (resp.length>0) {
            localStorage.setItem("securityId",resp[0].securityId)
            this.myrouter.navigate(["/securityProfile"])
          } else {
            
          }
        }
      )
    
  }

  ngOnInit(): void {
  }

}
