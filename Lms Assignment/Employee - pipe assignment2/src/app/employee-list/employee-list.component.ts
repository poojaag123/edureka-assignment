import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  emplist = [
    {
      EmployeeID: 101,
      FirstName: 'Pooja',
      LastName: 'Agrawal',
      Salary: 20020,
      DOB: '11/07/1997',
      Email: 'pooja@gmail.com',
    },
    {
      EmployeeID: 102,
      FirstName: 'Priya',
      LastName: 'Agrawal',
      Salary: 22000,
      DOB: '11/07/1997',
      Email: 'peaya@gmail.com',
    },
    {
      EmployeeID: 103,
      FirstName: 'Pavan',
      LastName: 'Agrawal',
      Salary: 23000,
      DOB: '11/07/1997',
      Email: 'amija@gmail.com',
    },
    {
      EmployeeID: 104,
      FirstName: 'Prince',
      LastName: 'Agrawal',
      Salary: 35000,
      DOB: '11/07/1997',
      Email: 'nimba@gmail.com',
    },
  ];
}
