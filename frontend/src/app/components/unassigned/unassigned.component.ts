import { Component, OnInit } from '@angular/core';
import { UnassignedService } from 'src/app/services/unassigned.service';
import { ActivatedRoute } from '@angular/router';
import { Bike } from 'src/app/models/bike';
import { Station } from 'src/app/models/station';
import { Unassigned } from 'src/app/models/unassigned';
import { Modify } from 'src/app/models/modify'

import { StationService } from 'src/app/services/station.service';


declare var M: any;

@Component({
  selector: 'app-unassigned',
  templateUrl: './unassigned.component.html',
  styleUrls: ['./unassigned.component.css']
})
export class UnassignedComponent implements OnInit {

  unassBikes = new Array<Unassigned>();
  unassBike = new Unassigned("");
  bike = new Bike;
  station = new Station("","","","",null);
  modify = new Modify;

  constructor( private StationService: StationService, private activatedRouter: ActivatedRoute, private unassignedService: UnassignedService) { }

  ngOnInit() {
    this.getUnassignedBikes()

  }

  getUnassignedBikes(){
    this.unassignedService.getUnassignedBikes().subscribe(res => {
      this.unassBikes = res;
      console.log("Unassigned Bikes: " + this.unassBikes)
     })  
  }

  addBikeToStation(idBike: string, idStation: string){
    let modify = new Modify(idBike, idStation);
    this.unassignedService.addBikeToStation(modify)
      .subscribe(
        res => {
          console.log(res);
        });
  }



  
}
