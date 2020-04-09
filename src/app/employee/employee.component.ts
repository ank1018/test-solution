import { Component, OnInit } from '@angular/core';
import { EmpService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  arrEmp: { "id": number; "name": string; "phone": string; "address": { "city": string; "address_line1": string; "address_line2": string; "postal_code": string; }; }[] = [];
  sortOrderAsc = false;
  constructor(
    private empService: EmpService
  ) { }

  ngOnInit(): void {
    this.arrEmp = this.empService.empArray;
  }

  sortTable(type) {
    if(this.sortOrderAsc) {
      this.arrEmp.sort(this.dynamicSort("-name"));
    } else {
      this.arrEmp.sort(this.dynamicSort("name"));
    }
    this.sortOrderAsc = !this.sortOrderAsc;
  }

   dynamicSort(property) {
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }
    }
}

}
