import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BackofficeComponent } from './backoffice.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CoursesComponent } from './pages/courses/courses.component';

const routes: Routes = [
  {
    path: 'backoffice',
    component: BackofficeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cursos', component: CoursesComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BackofficeRoutingModule { }
