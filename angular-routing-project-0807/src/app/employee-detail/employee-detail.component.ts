import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {


  id: any;
  employee: Employee = new Employee();

  constructor(private _activatedRoute: ActivatedRoute,
    private _httpClient: HttpClient,
    private _router: Router) { }

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this._httpClient.get<Employee>(`http://localhost:3000/employees/${this.id}`)
      .subscribe((result) => {
        this.employee = result;
      }, (error) => {
        console.log(error);
      })
  }

  deleteEmployee(): void {
    this._httpClient.delete
      (`http://localhost:3000/employees/${this.id}`).subscribe((result) => {
        alert('Employee Deleted Successfully.');
        this._router.navigate(['/employees']);
      }, (error) => {
        console.log(error);
      })
  }

}
