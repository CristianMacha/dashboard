import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from 'src/app/core/core.module';

import { BackofficeComponent } from './backoffice.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    BackofficeComponent,
    DashboardComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    MaterialModule
  ],
})
export class BackofficeModule { }
