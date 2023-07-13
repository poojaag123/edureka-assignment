import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SupportComponent } from './support/support.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { EmployeeSupportComponent } from './employee-support/employee-support.component';
import { UsersComponent } from './users/users.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { ContactTemplateComponent } from './contact-template/contact-template.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user-add', component: UserAddComponent },
  { path: 'user-detail/:id', component: UserDetailComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employee-add', component: EmployeeAddComponent },
  { path: 'employee-update/:id', component: EmployeeUpdateComponent },
  { path: 'employee-detail/:id', component: EmployeeDetailComponent },
  {
    path: 'support', component: SupportComponent, children: [
      { path: '', component: CustomerSupportComponent },
      { path: 'customer-support', component: CustomerSupportComponent },
      { path: 'employee-support', component: EmployeeSupportComponent }
    ]
  },
  { path: 'contact-reactive', component: ContactReactiveComponent },
  { path: 'contact-template', component: ContactTemplateComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
