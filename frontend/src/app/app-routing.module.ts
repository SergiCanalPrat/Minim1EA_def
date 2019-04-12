import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikeComponent } from './components/bike/bike.component';
import { StationComponent } from './components/station/station.component'
import { AppComponent } from './app.component'; 
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '',
  redirectTo: 'api/home',
  pathMatch: 'full'
},
  { path: 'api/home', component: HomeComponent },
  { path: 'api/app' , component: AppComponent},
  { path: 'api/bike', component: BikeComponent },
  { path: 'api/station', component: StationComponent },
  { path: 'api/unassigned', component: BikeComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
