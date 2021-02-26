import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FrontendRoutingModule } from './frontend-routing.module';

import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    FrontendComponent,
    HomeComponent,
    HeaderComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FrontendRoutingModule,
    MaterialModule
  ]
})
export class FrontendModule { }
