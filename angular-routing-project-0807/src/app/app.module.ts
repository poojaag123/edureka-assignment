import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SupportComponent } from './support/support.component';
import { EmployeeSupportComponent } from './employee-support/employee-support.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { UsersComponent } from './users/users.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { UserService } from './services/user.service';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { ContactTemplateComponent } from './contact-template/contact-template.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PagenotfoundComponent,
    SupportComponent,
    EmployeeSupportComponent,
    CustomerSupportComponent,
    UsersComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    EmployeeAddComponent,
    EmployeeUpdateComponent,
    UserAddComponent,
    UserDetailComponent,
    ContactReactiveComponent,
    ContactTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [MainComponent]
})
export class AppModule { }
