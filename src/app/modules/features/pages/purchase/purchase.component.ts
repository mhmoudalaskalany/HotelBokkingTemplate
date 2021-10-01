/**
 * Purchase Screen Component
 * @author    FlawlessThemes <flawlesstemplates@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   FlawlessThemes
 * 
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent implements OnInit {

  cardData: any = { name: 'Master Card', cardNumber: '1234...', img: 'assets/images/cards/mastercard.png' };
  hotelDetails: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.hotelDetails = {
      name: 'Toronto Don Valley Hotel and Suites',
      images: ['assets/images/hotels/1.jpg', 'assets/images/hotels/2.jpg'],
      overview: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
      rating: 4.5,
      totalReviews: 1080,
      hotelType: '5-star',
      address: 'M3C 1J3 Toronto, Canada',
      website: 'www.booking.com',
      phone: '+1 213-321-1234',
      price: '300',
      checkIn: new Date().toLocaleDateString(),
      checkOut: new Date().toLocaleDateString(),
      totalPassenger: 3,
      amenities: [{
        icon: 'fas fa-car',
        name: 'Free parking'
      }, {
        name: 'Air condition',
        icon: 'fas fa-fan'
      }, {
        name: 'Balcony',
        icon: 'fas fa-home'
      }, {
        name: 'Swimming pool',
        icon: 'fas fa-swimmer'
      }, {
        name: 'Spa services',
        icon: 'fas fa-spa'
      }]
    }
  }

  gotoBookingConfirmation() {
    this.router.navigate(['/booking-confirmation']);
  }
}
