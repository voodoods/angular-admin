import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppHeaderModule } from './app-header/app-header.module'
import { AppDashboardModule } from './app-dashboard/app-dashboard.module'
import { PostListModule } from './post-list/post-list.module';
import { UserListComponent } from './user-list/user-list.component'
import { UserListModule } from './user-list/user-list.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppHeaderModule,
    AppDashboardModule,
    PostListModule,
    UserListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
