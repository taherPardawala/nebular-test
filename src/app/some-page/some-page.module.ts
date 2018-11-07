import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbCardModule } from '@nebular/theme';
import { SomePageComponent } from './some-page.component';
import { AppModule } from '../app.module'
import { SharedModuleModule } from '../shared-module/shared-module.module'

@NgModule({
  declarations: [SomePageComponent],
  imports: [
    CommonModule,
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    SharedModuleModule
  ],
})
export class SomePageModule { }
