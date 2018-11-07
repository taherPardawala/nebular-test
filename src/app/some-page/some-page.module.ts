import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule,
  ],
  providers: [NbSidebarService],
})
export class SomePageModule { }
