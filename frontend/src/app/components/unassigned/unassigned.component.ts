import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';
import { ActivatedRoute } from '@angular/router';
import { Bike } from 'src/app/models/bike';



@Component({
  selector: 'app-unassigned',
  templateUrl: './unassigned.component.html',
  styleUrls: ['./unassigned.component.css']
})
export class UnassignedComponent implements OnInit {

  constructor( private activatedRouter: ActivatedRoute, private bikeService: BikeService) { }

  unassBike = new Array<Bike>();

  ngOnInit() {
    this.getUnassignedBikes()

  }

  getUnassignedBikes(){
    this.bikeService.getUnassignedBikes().subscribe(res => {
      this.unassBike = res;
      console.log("Unassigned Bikes: " + this.unassBike)
     })  
  }
}
