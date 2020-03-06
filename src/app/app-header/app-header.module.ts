import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AppHeaderComponent } from "./app-header.component";
import { AppMainMenuModule } from '../app-main-menu/app-main-menu.module'
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule, MatToolbarModule, AppMainMenuModule],
  declarations: [AppHeaderComponent],
  exports: [AppHeaderComponent]
})
export class AppHeaderModule {}
