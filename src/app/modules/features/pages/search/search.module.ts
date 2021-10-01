import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { CalendarModule } from 'ion2-calendar';
import { LocationsModule } from '../locations/locations.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SearchRoutingModule,
    CalendarModule,
    LocationsModule
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }

