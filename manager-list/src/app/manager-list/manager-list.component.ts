import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

export interface Employee {
  name: string;
  salary: number;
}

export interface Manager {
  managerName: string;
  position: string;
  experience: string;
  project: string;
  employees: Employee[];
}

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})

export class ManagerListComponent implements OnInit {

  displayedColumns: string[] = ['managerName', 'position', 'experience', 'project', 'employees'];
  dataSource!: MatTableDataSource<Manager>;
  selectedEmployees: Employee[] = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getManagers().subscribe((data: Manager[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewEmployees(manager: Manager) {
    this.router.navigate(['/employees', manager.managerName], { state: { employees: manager.employees } });
  }

}
