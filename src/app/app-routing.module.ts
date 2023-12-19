import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/wheater/pages/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'weather', pathMatch: 'full'},
  {path: 'weather', component: HomeComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
