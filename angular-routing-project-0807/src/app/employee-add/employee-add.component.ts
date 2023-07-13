import { Component } from '@angular/core';
import { Employee } from '../models/employee';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {

  employee: Employee = new Employee();

  constructor(private _httpClient: HttpClient,
    private _router: Router) { }

  addEmployee(): void {
    console.log(this.employee);
    this._httpClient.post
      (`http://localhost:3000/employees`, this.employee).subscribe((result) => {
        alert('Employee Added Successfully.');
        this._router.navigate(['/employees']);
      }, (error) => {
        console.log(error);
      })
  }

}
