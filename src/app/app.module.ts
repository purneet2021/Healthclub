import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QueryComponent } from './query/query.component';
import { FormsModule } from '@angular/forms';
import { ViewapplicationComponent } from './viewapplication/viewapplication.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    HomeComponent,
    QueryComponent,
    ViewapplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
