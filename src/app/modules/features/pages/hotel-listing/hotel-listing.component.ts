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
  selector: 'app-hotel-listing',
  templateUrl: './hotel-listing.component.html',
  styleUrls: ['./hotel-listing.component.scss'],
})
export class HotelListingComponent implements OnInit {

  hotels: any = [];

  constructor(private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.getHotelList();
  }

  gotoSearchPage(ev) {
    this.router.navigate(['/search']);
  }

  gotoFilterPage() {
    this.router.navigate(['/filters']);
  }

  getHotelList() {
    this.hotels = this.dataService.getHotelList();
    console.log(this.hotels)
  }

  gotoHotelDetails() {
    this.router.navigate(['/hotel-details']);
  }

}
