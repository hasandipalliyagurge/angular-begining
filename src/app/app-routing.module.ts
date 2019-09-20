import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent }from './department-details/department-details.component';
import { DepartmentOverviewComponent }from './department-overview/department-overview.component';
import { DepartmentContactComponent }from './department-Contact/department-Contact.component';
import { EmplyeeOverviewComponent } from './emplyee-overview/emplyee-overview.component';

const routes: Routes = [
  { path: '',redirectTo:'/departments', pathMatch: 'full' },
  { path: 'departments' ,component: DepartmentListComponent },
  { 
    path: 'departments/:id', 
    component: DepartmentDetailsComponent,
    children: [
      {path:'overview', component: DepartmentOverviewComponent},
      {path: 'contact', component: DepartmentContactComponent}
    ]
  },
  { 
    path: 'employees',
    component: EmployeeListComponent,
    children: [
      {path:'overview', component:EmplyeeOverviewComponent}
    ]
  
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent,EmployeeListComponent,PageNotFoundComponent,
                                  DepartmentDetailsComponent,DepartmentOverviewComponent,DepartmentContactComponent,EmplyeeOverviewComponent]
