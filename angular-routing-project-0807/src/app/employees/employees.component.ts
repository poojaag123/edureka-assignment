import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  employees: Employee[] = [];

  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
    this._httpClient.get<Employee[]>('http://localhost:3000/employees')
      .subscribe((result) => {
        this.employees = result;
        console.log(this.employees);
      }, (error) => {
        console.log(error);
      })
  }

}
