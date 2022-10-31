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
import { ViewsecurityComponent } from './viewsecurity/viewsecurity.component';
import { SearchsecurityComponent } from './searchsecurity/searchsecurity.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { LeavestatusComponent } from './leavestatus/leavestatus.component';
import { SecurityLoginComponent } from './security-login/security-login.component';
import { SecuritydashboardComponent } from './securitydashboard/securitydashboard.component';
import { SecurityprofileComponent } from './securityprofile/securityprofile.component';
import { EmployeeCheckinComponent } from './employee-checkin/employee-checkin.component';

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
  },
  {
    path:"viewsecurity",component:ViewsecurityComponent
  },
  {
    path:"searchsecurity",component:SearchsecurityComponent
  },
  {
    path:"emplogin",component:EmployeeLoginComponent
  },
  {
    path:"myProfile",component:EmployeeProfileComponent
  },
  {
    path:"applyleave",component:ApplyLeaveComponent
  },
  {
    path:"leavestatus",component:LeavestatusComponent
  },
  {
    path:"seclogin",component:SecurityLoginComponent
  },
  {
    path:"secprofile",component:SecurityprofileComponent
  },
  {
    path:"checkin",component:EmployeeCheckinComponent
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
    AddsecurityComponent,
    ViewsecurityComponent,
    SearchsecurityComponent,
    EmployeeLoginComponent,
    EmployeeDashboardComponent,
    EmployeeProfileComponent,
    ApplyLeaveComponent,
    LeavestatusComponent,
    SecurityLoginComponent,
    SecuritydashboardComponent,
    SecurityprofileComponent,
    EmployeeCheckinComponent
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
