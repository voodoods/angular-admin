import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { PostListComponent } from './post-list/post-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', component: AppDashboardComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'users', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
