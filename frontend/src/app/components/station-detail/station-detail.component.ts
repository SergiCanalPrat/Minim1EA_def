import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";

import { StationService } from '../../services/station.service';
import { BikeService } from '../../services/bike.service';
import { Station } from '../../models/station';
import { Bike } from '../../models/bike';

@Component({
  selector: 'app-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.css']
})
export class StationDetailComponent implements OnInit {

  station: Station;
  stationId : String;

  constructor(private StationService: StationService, private activatedRouter: ActivatedRoute, private bikeService: BikeService) { 
    this.station = new Station();

  }



  ngOnInit() {
    this.activatedRouter.params.subscribe(params =>{
      if (typeof params ['id'] !== 'undefined'){
        this.station._id = params['id'];
      }
      else{
        this.station._id = '';
      }
    });
    this.getBikesDeStation(this.station._id);
  }

  getBikesDeStation(_id: string){
    this.StationService.getBikesDeStation(_id)
    .subscribe(res => {
      this.station = res;
      console.log(this.station)
      this.stationId = _id;
    })
  }


  }
