import { NgModule } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbSidebarModule,
    NbLayoutModule,
    // NbSidebarService,
    NbCardModule
  ],
  exports: [
    CommonModule,
    NbSidebarModule,
    NbLayoutModule,
    // NbSidebarService,
    NbCardModule
  ],
  providers: [NbSidebarService],
})
export class SharedModuleModule { }
