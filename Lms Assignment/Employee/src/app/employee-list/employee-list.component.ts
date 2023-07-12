import { Component } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  employeeobj: Employee;
  showEdit: Boolean;

  constructor() {
    this.employeeobj = {
      employeeID: 1,
      firstName: 'John',
      lastName: 'Doe',
      salary: 5000,
      dob: new Date(1990, 0, 1),
      email: 'john.doe@example.com',
    };
    // emp: any = [
    //   {
    //     EmployeeID: 101,
    //     FirstName: 'Pooja',
    //     LastName: 'Agrawal',
    //     Salary: 20000,
    //     DOB: '11/07/1997',
    //     Email: 'pooja@gmail.com',

    //   },

    // ];
    this.showEdit = false;
  }
  EditEmp() {
    this.showEdit = true;
  }

  UpdateEmp() {
    this.showEdit = false;
  }
}
