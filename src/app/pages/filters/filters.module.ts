import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FiltersComponent } from './filters.component';
import { FiltersRoutingModule } from './filters-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FiltersRoutingModule
  ],
  declarations: [FiltersComponent]
})
export class FiltersModule { }
