import { Component } from '@angular/core';
import { NewemployeeService } from '../service/newemployee.service';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css'],
})
export class NewemployeeComponent {
  employees: any[] = [];
  constructor(private _newemployeeService: NewemployeeService) {}

  ngOnInit() {
    this.getEmployeeData();
    // this.getDummyData();
  }
  // getDummyData() {
  //   this._newemployeeService.getData().subscribe((response) => {
  //     console.log(response);
  //   });
  // }
  getEmployeeData() {
    this._newemployeeService.getApiData().subscribe(
      (result) => {
        console.log(result);
        this.employees = result.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
