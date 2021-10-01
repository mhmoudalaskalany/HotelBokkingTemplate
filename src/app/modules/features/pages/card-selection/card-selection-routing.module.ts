import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardSelectionComponent } from './card-selection.component';

const routes: Routes = [
  {
    path: '',
    component: CardSelectionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardSelectionRoutingModule { }
