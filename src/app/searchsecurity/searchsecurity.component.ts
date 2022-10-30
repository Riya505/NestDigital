import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchsecurity',
  templateUrl: './searchsecurity.component.html',
  styleUrls: ['./searchsecurity.component.css']
})
export class SearchsecurityComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  securityId=""

  readValue=()=>{
    let data={
      "securityId":this.securityId
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
