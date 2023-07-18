import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NewemployeeService {
  private apiUrl = 'https://dummy.restapiexample.com/api/v1/employees';

  constructor(private obj: HttpClient) {}

  getApiData(): Observable<any> {
    return this.obj.get<any>(this.apiUrl);
  }
  // getData() {
  //   var url = 'https://dummy.restapiexample.com/api/v1/employees'; //get dummy data.
  //   return this.obj.get(url);
  // }
}
