/**
 * Hotel Details Screen Component
 * @author    FlawlessThemes <flawlesstemplates@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   FlawlessThemes
 * 
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss'],
})
export class HotelDetailsComponent implements OnInit {

  hotels: any = [];
  hotelDetails: any;

  // Slider Options
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 3.1,
    spaceBetween: 10,
    loop: true,
    effect: 'slide',
  };

  constructor(private router: Router,
    private dataService: DataService) { }

  ngOnInit() {
    this.getHotelDetails();
    this.getPopularHotels();
  }

  getPopularHotels() {
    this.hotels = this.dataService.getHotelList();
  }

  getHotelDetails() {
    this.hotelDetails = {
      name: 'Toronto Don Valley Hotel and Suites',
      images: ['assets/images/hotels/3.jpg', 'assets/images/hotels/2.jpg'],
      overview: `There are many variations of passages of Lorem Ipsum available.`,
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
      rating: 4.7,
      totalReviews: 1080,
      hotelType: '5-star',
      address: 'North York, M3C 1J3 Toronto, Canada',
      website: 'www.booking.com',
      phone: '+1 213-321-1234',
      price: '300',
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

  gotoCardSelectionPage() {
    this.router.navigate(['/card-selection']);
  }
}
