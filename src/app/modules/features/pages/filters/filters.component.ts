import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {

  public knobValues: Object = {
    upper: 400,
    lower: 800
  }

  public popularFilters = [
    { val: 'Kitchen', isChecked: true },
    { val: 'Pool', isChecked: false },
    { val: 'Gym', isChecked: false },
    { val: 'Breakfast', isChecked: false },
    { val: 'Parking', isChecked: false },
    { val: 'Free Wifi', isChecked: false },
    { val: 'Pet Friendly', isChecked: false },
  ];

  public accommodation = [
    { val: 'Hotels', isChecked: true },
    { val: 'Apartment Rentals', isChecked: false },
    { val: 'Timeshare Rentals', isChecked: false },
    { val: 'Bed & Breakfast', isChecked: false },
    { val: 'Hostels', isChecked: false },
    { val: 'Camping', isChecked: false },
    { val: 'Villa', isChecked: false },
    { val: 'Home', isChecked: false }
  ]

  constructor(private router: Router) { }

  ngOnInit() { }

  apply() {
    this.router.navigate(['/tabs/home']);
  }

}
