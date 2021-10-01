import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingConfirmationComponent } from './booking-confirmation.component';
import { BookingConfirmationRoutingModule } from './booking-confirmation-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BookingConfirmationRoutingModule
  ],
  declarations: [BookingConfirmationComponent]
})
export class BookingConfirmationModule { }
