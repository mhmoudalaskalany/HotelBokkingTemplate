import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HotelListingComponent } from './hotel-listing.component';
import { HotelListingRoutingModule } from './hotel-listing-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HotelListingRoutingModule
  ],
  declarations: [HotelListingComponent]
})
export class HotelListingModule { }
