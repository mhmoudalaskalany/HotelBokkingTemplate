/**
 * Landing Screen Component
 * @author    FlawlessThemes <flawlesstemplates@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   FlawlessThemes
 * 
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  gotoHomePage() {
    this.router.navigate(['/tabs/home']);
  }

  gotoSignInPage() {
    this.router.navigate(['/signin']);
  }

  gotoSignUpPage() {
    this.router.navigate(['/signup']);
  }

}
