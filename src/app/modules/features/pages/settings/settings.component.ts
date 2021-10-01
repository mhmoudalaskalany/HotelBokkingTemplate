import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  gotoCurrencyPage() {
    this.router.navigate(['/currency']);
  }

  logout() {
    this.router.navigate(['/landing']);
  }
}