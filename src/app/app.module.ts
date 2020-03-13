import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppHeaderModule } from './app-header/app-header.module'
import { AppDashboardModule } from './app-dashboard/app-dashboard.module'
import { PostListModule } from './post-list/post-list.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppHeaderModule,
    AppDashboardModule,
    PostListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
