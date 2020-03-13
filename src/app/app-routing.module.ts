import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  { path: '', component: AppDashboardComponent },
  { path: 'posts', component: PostListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
