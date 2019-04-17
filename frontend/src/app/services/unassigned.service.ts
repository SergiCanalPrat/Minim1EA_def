import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Bike } from "../models/bike";
import { Environments } from "./environments"
import { Observable } from 'rxjs';
import { Unassigned } from '../models/unassigned';
import { Modify } from "../models/modify"


@Injectable({
  providedIn: 'root'
})
export class UnassignedService {  
  environment: Environments;
  selectedBike: Bike; 
  modify: Modify;

  constructor( private http: HttpClient) {
    this.selectedBike = new Bike("","",null,"",false);
    this.environment = new Environments();
    this.modify = new Modify;
   }
   //recoger los datos en http 
   

  getUnassignedBikes(): Observable<Bike[]>{
    return this.http.get<Unassigned[]>(this.environment.urlBase + "unassigned");
  }

  getBikeById(_id: string): Observable<Bike> {
    return this.http.get<Bike>(this.environment.urlBike + `${_id}`);
  }

  addBikeToStation(modify: Modify) {
    console.log ("addBikeToStation - unassService")
    return this.http.post(this.environment.urlStation + "newBike/" , modify)
  }

  deleteBike(_id: string){
    return this.http.delete(this.environment.urlBike + `delete/${_id}`)
  }  
}