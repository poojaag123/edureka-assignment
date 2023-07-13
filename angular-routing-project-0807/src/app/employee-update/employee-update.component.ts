import { Component } from '@angular/core';
import { Employee } from '../models/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent {

  id: any;

  employee: Employee = new Employee();

  constructor(private _activatedRoute: ActivatedRoute,
    private _httpClient: HttpClient,
    private _router: Router) { }

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this._httpClient.get<Employee>
      (`http://localhost:3000/employees/${this.id}`).subscribe((result) => {
        this.employee = result;
      }, (error) => {
        console.log(error);
      })
  }

  updateEmployee(): void {
    this._httpClient.put
      (`http://localhost:3000/employees/${this.id}`, this.employee)
      .subscribe((result) => {
        alert('Employee Updated Successfully.');
        this._router.navigate(['/employees']);
      }, (error) => {
        console.log(error);
      })
  }

}
