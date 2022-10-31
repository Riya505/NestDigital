import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-securityprofile',
  templateUrl: './securityprofile.component.html',
  styleUrls: ['./securityprofile.component.css']
})
export class SecurityprofileComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

   fetchData=()=>{
    let data={
      "securityId":localStorage.getItem("securityId")
    }
    console.log(data)
    this.myapi.searchSecurity(data).subscribe(
      (resp)=>{
        this.data=resp
      }
    )
   }



  data:any=[]

  ngOnInit(): void {
  }

}
