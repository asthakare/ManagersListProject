import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerListComponent } from './manager-list/manager-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  { path: '', component: ManagerListComponent },
  { path: 'managers', component: ManagerListComponent },
  { path: 'employees/:managerName', component: EmployeeListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
