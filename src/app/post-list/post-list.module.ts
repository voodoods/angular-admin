import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list.component';
import { PostListService } from './post-list.service'
import { HttpClientModule }    from '@angular/common/http';
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'

@NgModule({
  declarations: [PostListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [ PostListService ],
  exports: [
    PostListComponent
  ]
})
export class PostListModule { }
