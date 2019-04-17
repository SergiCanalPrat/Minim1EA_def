import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Station} from "../models/station";
import {Bike} from '../models/bike';
import {Environments} from "./environments";
import { Observable } from 'rxjs';
import { Modify } from '../models/modify';

@Injectable({
  providedIn: 'root'
})
export class StationService {
  environment: Environments;
  selectedBike: Station;

  constructor(private http: HttpClient) {
    this.selectedBike = new Station("","","","",null);
    this.environment = new Environments();
  }

  saveStation(station: Station) {
    return this.http.post(this.environment.urlStation + "new", station);
  }

  getStations() :Observable<Station[]>{
    return this.http.get<Station[]>(this.environment.urlStations);
  }

  /*getBikes() { 
    return this.http.get<Bikes[]>(this.environment.urlBike + "/getBikes");
  }*/

  getStationById(_id: string):Observable<Station> {
    return this.http.get<Station>(this.environment.urlStation + `${_id}`);
  }

  deleteStation(_id: string) {
    console.log("ENTRA AL DELETE");

    return this.http.delete(this.environment.urlStation + `${_id}`)
  }

  getBikeDeStationById(_idBike: String, _idStation: String):Observable<Bike> {
    return this.http.get<Bike>(this.environment.urlStation + `${_idStation}` + `/${_idBike}`)
  }

  getBikesDeStation(_id: String): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.environment.urlStation + "getBikes/" + `${_id}` )
  }

  addBikeToStation(modify: Modify) {
    return this.http.post(this.environment.urlStation+"/newbike", modify);
    
  }


}
