import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Bike } from "../models/bike";
import { Environments } from "./environments"
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UnassignedService {  
  environment: Environments;
  selectedBike: Bike; 

  constructor( private http: HttpClient) {
    this.selectedBike = new Bike("",null,"",false);
    this.environment = new Environments();
   }
   //recoger los datos en http 
   

  getUnassignedBikes(): Observable<Bike[]>{
    return this.http.get<Bike[]>(this.environment.urlBase + "unassigned");
  }

  getBikeById(_id: string): Observable<Bike> {
    return this.http.get<Bike>(this.environment.urlBike + `${_id}`);
  }

  saveBike(bike: Bike) {
    return this.http.post(this.environment.urlBike + "new", bike)
  }

  deleteBike(_id: string){
    return this.http.delete(this.environment.urlBike + `delete/${_id}`)
  }  
}