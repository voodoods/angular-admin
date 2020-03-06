import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMainMenuComponent } from './app-main-menu.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ AppMainMenuComponent ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    AppMainMenuComponent
  ]
})
export class AppMainMenuModule { }
