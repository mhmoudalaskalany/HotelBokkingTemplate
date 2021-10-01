/**
 * SignIn Screen Component
 * @author    FlawlessThemes <flawlesstemplates@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   FlawlessThemes
 * 
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  gotoHomePage() {
    this.router.navigate(['/tabs/home']);
  }

  gotoSignupPage() {
    this.router.navigate(['/signup']);
  }

  gotoForgetPasswordPage() {
    this.router.navigate(['/forget-password']);
  }

}
