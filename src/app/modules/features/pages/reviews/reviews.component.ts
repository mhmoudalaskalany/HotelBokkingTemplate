import { Component, OnInit } from '@angular/core';
import { DataService } from 'features/services/data.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {

  reviews: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getReviews();
  }

  getReviews() {
    this.reviews = this.dataService.getReviews();
  }

}
