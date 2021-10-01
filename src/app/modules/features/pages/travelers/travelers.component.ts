/**
 * Travelers Screen Component
 * @author    FlawlessThemes <flawlesstemplates@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   FlawlessThemes
 * 
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-travelers',
  templateUrl: './travelers.component.html',
  styleUrls: ['./travelers.component.scss'],
})
export class TravelersComponent implements OnInit {

  totalAdults: any = 1;
  totalYouths: any = 0;
  totalChildren: any = 0;
  totalInfants: any = 0;

  constructor(private http: HttpClient,
    private modalController: ModalController) { }

  ngOnInit() { }

  apply() {
    this.modalController.dismiss({
      totalAdults: this.totalAdults,
      totalYouths: this.totalYouths,
      totalChildren: this.totalChildren,
      totalInfants: this.totalInfants
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
