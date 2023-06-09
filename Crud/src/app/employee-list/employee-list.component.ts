import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";
@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  constructor(private empService: EmployeeService, private router: Router) {}
  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees() {
    this.empService.getAllEmployees().subscribe((data) => {
      console.log(data);
      this.employees = data;
    });
  }
  employeeDetails(id: number) {
    this.router.navigate(["employeedetails", id]);
  }
  updateEmployee(id: number) {
    this.router.navigate(["updateemployee", id]);
  }
  deleteEmployee(id: number) {
    this.empService.deleteEmployee(id).subscribe((data) => {
      this.getEmployees();
    });
  }
}
