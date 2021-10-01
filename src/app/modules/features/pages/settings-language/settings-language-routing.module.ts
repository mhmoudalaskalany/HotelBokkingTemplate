import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsLanguageComponent } from './settings-language.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsLanguageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsLanguageRoutingModule { }
