/**
 * Hotel List Screen Component
 * @author    FlawlessThemes <flawlesstemplates@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   FlawlessThemes
 * 
 */

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
})
export class TripsComponent implements OnInit {

  hotels: any = [];

  constructor(private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.getHotelList();
  }

  getHotelList() {
    this.hotels = this.dataService.getHotelList();
    console.log(this.hotels)
  }

  gotoHotelDetails() {
    this.router.navigate(['/hotel-details']);
  }

}
