/**
 * Data Services
 * @author    FlawlessThemes <flawlesstemplates@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   FlawlessThemes
 * 
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  /**
   * ----------------------------------------------------
   * Get List of Reviews
   * ----------------------------------------------------
   */
  getReviews() {
    return [
      {
        name: 'Wilbert Hudson',
        image: 'assets/images/avatar.png',
        details: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        totalReviews: 120,
        rating: 4.8,
        updateDate: '21 June, 2020'
      },
      {
        name: 'Misty Smith',
        image: 'assets/images/avatar2.jpg',
        details: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        totalReviews: 100,
        rating: 4.5,
        updateDate: '21 June, 2020'
      },
      {
        name: 'Mozell Schulist',
        image: 'assets/images/avatar.png',
        details: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        totalReviews: 150,
        rating: 4.9,
        updateDate: '21 June, 2020'
      },
      {
        name: 'Richard Casper',
        image: 'assets/images/avatar2.jpg',
        details: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        totalReviews: 160,
        rating: 4.7,
        updateDate: '21 June, 2020'
      },
      {
        name: 'Ruby Franecki',
        image: 'assets/images/avatar.png',
        details: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        totalReviews: 190,
        rating: 4.5,
        updateDate: '21 June, 2020'
      },
      {
        name: 'Helen Walker',
        image: 'assets/images/avatar2.jpg',
        details: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        totalReviews: 200,
        rating: 4.6,
        updateDate: '21 June, 2020'
      },
      {
        name: 'Wilbert Hudson',
        image: 'assets/images/avatar.png',
        details: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        totalReviews: 120,
        rating: 4.5,
        updateDate: '21 June, 2020'
      }
    ]
  }


  /**
     * ----------------------------------------------------
     * Get List of Hotels
     * ----------------------------------------------------
     */
  getHotelList() {
    return [
      {
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
      },
      {
        name: 'The Novotel Toronto Centre',
        images: ['assets/images/hotels/3.jpg', 'assets/images/hotels/4.jpg'],
        overview: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
        description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
        rating: 4.7,
        totalReviews: 1080,
        hotelType: '5-star',
        address: 'M3C 1J3 Toronto, Canada',
        website: 'www.booking.com',
        phone: '+1 213-321-1234',
        price: '500',
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
      },
      {
        name: 'Town Inn Suites',
        images: ['assets/images/hotels/5.jpg', 'assets/images/hotels/6.jpg'],
        overview: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
        description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
        rating: 4.9,
        totalReviews: 1080,
        hotelType: '5-star',
        address: 'M3C 1J3 Toronto, Canada',
        website: 'www.booking.com',
        phone: '+1 213-321-1234',
        price: '600',
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
      },
      {
        name: 'Woodbine Hotel & Suites',
        images: ['assets/images/hotels/7.jpg', 'assets/images/hotels/8.jpg'],
        overview: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
        description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
        rating: 5.0,
        totalReviews: 1080,
        hotelType: '5-star',
        address: 'M3C 1J3 Toronto, Canada',
        website: 'www.booking.com',
        phone: '+1 213-321-1234',
        price: '500',
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
      },
      {
        name: 'One King West Hotel and Residence',
        images: ['assets/images/hotels/9.jpg', 'assets/images/hotels/2.jpg'],
        overview: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
        description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
        rating: 4.6,
        totalReviews: 1080,
        hotelType: '5-star',
        address: 'M3C 1J3 Toronto, Canada',
        website: 'www.booking.com',
        phone: '+1 213-321-1234',
        price: '800',
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
      },
      {
        name: 'Chelsea Hotel Toronto',
        images: ['assets/images/hotels/2.jpg', 'assets/images/hotels/3.jpg'],
        overview: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
        description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
        rating: 4.4,
        totalReviews: 1080,
        hotelType: '5-star',
        address: 'M3C 1J3 Toronto, Canada',
        website: 'www.booking.com',
        phone: '+1 213-321-1234',
        price: '900',
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
      },
      {
        name: 'EST Hotel',
        images: ['assets/images/hotels/6.jpg', 'assets/images/hotels/9.jpg'],
        overview: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
        description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
        rating: 4.2,
        totalReviews: 1080,
        hotelType: '5-star',
        address: 'M3C 1J3 Toronto, Canada',
        website: 'www.booking.com',
        phone: '+1 213-321-1234',
        price: '700',
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
    ]
  }
}
