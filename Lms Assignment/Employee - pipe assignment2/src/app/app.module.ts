import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ColorDirective } from './Directive/color.directive';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';
import { NewemployeeComponent } from './newemployee/newemployee.component';
import { NewemployeeService } from './service/newemployee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    NewemployeeComponent,
    ColorDirective,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [NewemployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
