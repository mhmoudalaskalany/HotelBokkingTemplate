import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {

  currencies: any = [];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.getCurrency();
  }

  getCurrency() {
    this.currencyService.getCurrency().then((data) => {
      this.currencies = data;
    })
  }

}
