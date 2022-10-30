import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { EmployeeLeaveReqestComponent } from './employee-leave-reqest/employee-leave-reqest.component';
import { AddsecurityComponent } from './addsecurity/addsecurity.component';

const appRoutes:Routes=[
  {
    path:"",component:AdminloginComponent
  },
  {
    path:"addEmployee",component:AddEmployeeComponent
  },
  {
    path:"viewemp",component:ViewEmployeeComponent
  },
  {
    path:"searchemp",component:SearchemployeeComponent
  },
  {
    path:"allLeave",component:EmployeeLeaveReqestComponent
  },
  {
    path:"addsecurity",component:AddsecurityComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    NavbarComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    SearchemployeeComponent,
    EmployeeLeaveReqestComponent,
    AddsecurityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
