import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EmpService } from '../employee/employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  empForm: any;
  empId: string;
  mode: string;
  empList: any;

  constructor(
    public formbuilder: FormBuilder,
    public route: ActivatedRoute,
    private empService: EmpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.empId = paramMap.get("empId");
      this.empList = this.empService.empArray;

      if (paramMap.has("empId")) {
        this.mode = "edit";
        this.empId = paramMap.get("empId");
        let tempArr = [];
        tempArr = this.empList.filter(emp => {
           return emp.id == this.empId;
        })
        this.empForm.setValue({
          name: tempArr[0].name,
          phone: tempArr[0].phone,
          city: tempArr[0].address.city,
          addOne: tempArr[0].address.address_line1,
          addTwo: tempArr[0].address.address_line2,
          code: tempArr[0].address.postal_code,
        });
      } else {
        this.mode = "add";
      }
    });
  }

  createForm() {
    this.empForm = this.formbuilder.group({
      name: new FormControl("", [Validators.required, Validators.minLength(4)]),
      phone: new FormControl("", [Validators.required,, Validators.pattern(/^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$/)]),
      city: new FormControl(""),
      addOne: new FormControl(""),
      addTwo: new FormControl(""),
      code: new FormControl(""),
    })
  }

  onSubmit() {
    let maxId = Math.max.apply(Math, this.empList.map(function(o) { return o.id; }));
    let data = this.empForm.value;
    let tempObj = {
      id: +this.empId,
      name: data.name,
      phone: data.phone,
      address: {
        city: data.city,
        address_line1: data.addOne,
        address_line2: data.addTwo,
        postal_code: data.code
      }
    }
    if(this.mode == 'add') {
      tempObj.id = maxId+1;
      this.empService.empArray.push(tempObj);
    } else if(this.mode == 'edit') {
      let index = this.empService.empArray.findIndex(({ id }) => id == +this.empId);
      this.empService.empArray[index] = tempObj;
    }
    this.router.navigate(['/employee']);
  }
}
