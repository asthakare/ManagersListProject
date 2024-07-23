import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface Employee {
  name: string;
  salary: number;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees!: Employee[];
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    const savedEmployees = localStorage.getItem('employees');
    if (savedEmployees) {
      this.employees = JSON.parse(savedEmployees);
    } else {
      this.route.paramMap.subscribe(params => {
        if (history.state && history.state.employees) {
          this.employees = history.state.employees;
          localStorage.setItem('employees', JSON.stringify(this.employees));
        }
      });
    }
  }
  goBack(): void {
    this.router.navigate(['/managers']);
  }
}
