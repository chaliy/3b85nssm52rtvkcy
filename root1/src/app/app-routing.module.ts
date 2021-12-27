import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { App1Component } from './components/app1/app1.component';
import { App1ExtComponent } from './components/app1ext/app1ext.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'app1ext-view', component: App1ExtComponent },
  { path: 'app1-view', component: App1Component },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
