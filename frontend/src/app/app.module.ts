import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BikeComponent} from './components/bike/bike.component';
import {StationComponent} from './components/station/station.component';
import { HomeComponent } from './components/home/home.component';
import { UnassignedComponent } from './components/unassigned/unassigned.component';

@NgModule({
  declarations: [
    AppComponent,
    BikeComponent,
    StationComponent,
    HomeComponent,
    UnassignedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
