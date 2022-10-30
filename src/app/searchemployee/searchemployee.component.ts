import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  emp_id=""

  readValue=()=>{
    let data={
      "emp_id":this.emp_id
    }
    console.log(data)
    this.myapi.searchEmployee(data).subscribe(
      (resp)=>{
        this.data=resp
      }
    )
  }






  data:any=[]
  ngOnInit(): void {
  }

}
