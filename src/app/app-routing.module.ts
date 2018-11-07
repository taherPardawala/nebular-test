import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SomePageComponent } from './some-page/some-page.component';

const routes: Routes = [
  {path: 'sp', component:SomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
