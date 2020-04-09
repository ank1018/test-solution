import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeeCreateComponent } from "./employee-create/employee-create.component";

const routes: Routes = [
  { path: "", redirectTo: "/employee", pathMatch: "full" },
  { path: "employee", component: EmployeeComponent },
  { path: "add", component: EmployeeCreateComponent },
  {
    path: "edit/:empId",
    component: EmployeeCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
