import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import  { AppDashboardComponent } from './app-dashboard.component'


@NgModule({
  declarations: [
    AppDashboardComponent
  ],
  imports: [
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    AppDashboardComponent
  ]
})
export class AppDashboardModule { }
