import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  items: any;

  // Slider Options
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2.2,
    spaceBetween: 10,
    loop: true,
    effect: 'slide',
  };

  constructor(private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.getPopularHotels();
  }

  gotoSearchPage(ev) {
    this.router.navigate(['/search']);
  }

  gotoHotelList() {
    this.router.navigate(['/hotel-list']);
  }

  getPopularHotels() {
    this.items = this.dataService.getHotelList();
  }

}
