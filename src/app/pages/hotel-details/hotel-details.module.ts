import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HotelDetailsComponent } from './hotel-details.component';
import { HotelDetailsRoutingModule } from './hotel-details-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HotelDetailsRoutingModule
  ],
  declarations: [HotelDetailsComponent]
})
export class HotelDetailsModule { }
