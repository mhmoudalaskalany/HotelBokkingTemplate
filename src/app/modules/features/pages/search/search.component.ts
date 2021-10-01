/**
 * Search Hotels Screen Component
 * @author    FlawlessThemes <flawlesstemplates@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   FlawlessThemes
 * 
 */

import { Component, OnInit } from '@angular/core';
import { CalendarModal, CalendarModalOptions } from 'ion2-calendar';
import { ModalController } from '@ionic/angular';
import { LocationsComponent } from '../locations/locations.component';
import { TravelersComponent } from '../travelers/travelers.component';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  hotelSearchData: any = {
    destination: 'Canada (CAN)',
    checkIn: new Date().toLocaleDateString(),
    checkOut: new Date().toLocaleDateString(),
    totalPassenger: 1
  };

  hotels: any = [];

  constructor(public modalController: ModalController,
    private router: Router,
    private dataService: DataService) { }

  ngOnInit() {
    this.getPopularHotels();
  }

  async getDestination() {
    const modal = await this.modalController.create({
      component: LocationsComponent
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.hotelSearchData.destination = data.data;
      }
    });

    return await modal.present();
  }

  async getCheckIn() {
    // Calendar Modal Config Options
    const options: CalendarModalOptions = {
      pickMode: 'range',
      title: 'Select Range',
      color: 'secondary'
    };

    let myCalendar = await this.modalController.create({
      component: CalendarModal,
      componentProps: { options }
    });

    // When Calendar Modal Dismiss
    myCalendar.onDidDismiss().then((data: any) => {
      if (data) {
        this.hotelSearchData.checkIn = data.data.from.string;
        this.hotelSearchData.checkOut = data.data.to.string;
      }
    })

    myCalendar.present();
  }

  async openTravelerPage() {
    const modal = await this.modalController.create({
      component: TravelersComponent
    });

    modal.onDidDismiss().then((data) => {
      if (data) {
        this.hotelSearchData.totalPassenger = data.data.totalAdults + data.data.totalChildren + data.data.totalInfants + data.data.totalYouths;
      }
    });

    return await modal.present();
  }

  getPopularHotels() {
    this.hotels = this.dataService.getHotelList();
  }

  gotoHotelListPage() {
    this.router.navigate(['/hotel-list']);
  }
}
