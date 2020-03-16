import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { UserListService } from './user-list.service';
import { UserListComponent } from './user-list.component';



@NgModule({
  declarations: [ UserListComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [ UserListService ],
  exports: [ UserListComponent ]
})
export class UserListModule { }
