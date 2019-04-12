import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';
import {ActivatedRoute} from "@angular/router";
import { Bike } from 'src/app/models/bike';
import { Station } from 'src/app/models/station';


@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {

  station = Station;
  bikes = new Array<Bike>();

  constructor( private activatedRouter: ActivatedRoute, private bikeService: BikeService) { }

  ngOnInit() {    
    this.activatedRouter.params.subscribe(params => {
      });
      this.getBikes()
  }

  getBikes(){
    this.bikeService.getBikes().subscribe(res => {
      this.bikes = res;
      console.log("Bikes: " + this.bikes)
     })  
  }


}
