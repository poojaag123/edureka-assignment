import { Component } from '@angular/core';
import { Employee } from '../models/employee2';
import { HttpClient } from '@angular/common/http';
import { NewemployeeService } from '../service/newemployee.service';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css'],
})
export class NewemployeeComponent {
  employees: Employee[] = [];
  constructor(private _newemployeeService: NewemployeeService) {}

  ngOnInit() {
    this._newemployeeService.getEmployees().subscribe(
      (result) => {
        this.employees = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
