import { NgModule } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'
import { AppHeaderComponent } from './app-header.component'

@NgModule({
  imports: [ MatToolbarModule ],
  declarations: [ AppHeaderComponent],
  exports: [ AppHeaderComponent ]
})
export class AppHeaderModule {}
