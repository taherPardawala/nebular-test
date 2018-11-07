import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbThemeModule } from '@nebular/theme';
import { SomePageComponent } from './some-page/some-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
