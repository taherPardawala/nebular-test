import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import { SomePageComponent } from './some-page.component';

@NgModule({
  declarations: [SomePageComponent],
  imports: [
    CommonModule,
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule,
  ],
  providers: [NbSidebarService], // we need this service for the sidebar
})
export class SomePageModule { }
