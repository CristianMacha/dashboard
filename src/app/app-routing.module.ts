import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutingModule } from './modules/auth/auth-routing.module';
import { BackofficeRoutingModule } from './modules/backoffice/backoffice-routing.module';
import { FrontendRoutingModule } from './modules/frontend/frontend-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BackofficeRoutingModule,
    FrontendRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
