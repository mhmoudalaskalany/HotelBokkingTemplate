/**
 * Card Selection Screen Component
 * @author    FlawlessThemes <flawlesstemplates@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   FlawlessThemes
 * 
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-selection',
  templateUrl: './card-selection.component.html',
  styleUrls: ['./card-selection.component.scss'],
})
export class CardSelectionComponent implements OnInit {

  cards: any = [{ name: 'Master Card', cardNumber: '1234...', img: 'assets/images/cards/mastercard.png' },
  { name: 'Paypal', cardNumber: '5678...', img: 'assets/images/cards/paypal.png' },
  { name: 'Visa Card', cardNumber: '4325...', img: 'assets/images/cards/visa.png' }];

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  gotoPurchaseTicket() {
    this.router.navigate(['/purchase']);
  }

}
