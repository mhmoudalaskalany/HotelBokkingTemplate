import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelListingComponent } from './hotel-listing.component';

const routes: Routes = [
  {
    path: '',
    component: HotelListingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelListingRoutingModule { }
