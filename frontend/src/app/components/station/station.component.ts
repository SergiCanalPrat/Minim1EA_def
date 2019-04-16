import { Component, OnInit } from '@angular/core';import {Router, ActivatedRoute} from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";

import { StationService } from '../../services/station.service';
import { BikeService } from '../../services/bike.service';
import { Station } from '../../models/station';
import { Bike } from '../../models/bike';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {

  constructor(private StationService: StationService, private activatedRouter: ActivatedRoute) { }
  stations: Station[];
  station: Station;
  
  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
    });
    this.listStations();

  }
 
  listStations(){
    this.StationService.getStations().subscribe(res => {
      this.stations = res;
      console.log("lista de stations" + this.stations )
    })
  }

  getStationById(_id: string){
    this.StationService.getStationById(_id)
    .subscribe(res =>{
      this.station = res;
      console.log(res); 
      console.log(this.station);
    });
  }



  

}