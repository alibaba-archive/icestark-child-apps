import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { getBasename } from '@ice/stark-app';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'contact'},
  {path: 'contact' , component: ContactComponent },
  {path: 'detail' , component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: getBasename() }]
})
export class AppRoutingModule { }
