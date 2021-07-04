import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];

  constructor(private employeeService: EmployeeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(): void {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  employeeDetails(id: number): void {
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number): void {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    });
  }
}
