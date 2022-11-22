import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HomeComponent } from './home/home.component';
import { QueryComponent } from './query/query.component';
import { ViewapplicationComponent } from './viewapplication/viewapplication.component';

const routes: Routes = [
  {path : '', component:HomeComponent},
  {path : 'home', component:HomeComponent},
  {path : 'appointment', component:AppointmentComponent},
  {path : 'queries', component:QueryComponent},
  {path : 'viewapplication', component:ViewapplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
