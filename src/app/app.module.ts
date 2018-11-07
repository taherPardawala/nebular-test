import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';
import { SomePageModule } from './some-page/some-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    SomePageModule,
  ],
  // exports: [
  //   NbCardModule,
  // ],
  // providers: [NbSidebarService],

  bootstrap: [AppComponent]
})
export class AppModule { }
