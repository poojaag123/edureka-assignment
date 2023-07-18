import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee2';

@Injectable({
  providedIn: 'root',
})
export class NewemployeeService {
  private apiUrl = 'http://localhost:3000/employees';

  constructor(private _httpclient: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this._httpclient.get<Employee[]>(this.apiUrl);
  }
}
