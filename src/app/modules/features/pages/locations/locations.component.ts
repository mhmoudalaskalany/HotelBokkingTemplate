/**
 * Locations Screen Component
 * @author    FlawlessThemes <flawlesstemplates@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   FlawlessThemes
 * 
 */

import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {

  title: string = 'Location';

  // List of Locations
  locations: any = [];

  // New List of Locations
  // This new list will help us for search
  newLocationList: any = [];

  constructor(private http: HttpClient,
    private modalController: ModalController) { }

  ngOnInit() {
    this.getLocation();
  }



  getLocation() {
    this.http.get('https://restcountries.eu/rest/v2/all')
      .subscribe(
        data => {
          this.locations = data;
          this.newLocationList = this.locations;
          console.log(this.newLocationList)
        },
        err => console.log(err)
      );
  }

  /**
   * Search Query
   * @param ev 
   */
  getItems(ev: any) {
    // Reset items back to all of the items
    this.locations = this.newLocationList;

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.locations = this.newLocationList.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  selectLocation(param) {
    this.modalController.dismiss(`${param.name} (${param.alpha3Code})`);
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
