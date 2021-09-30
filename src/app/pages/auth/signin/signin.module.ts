import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin.component';
import { SigninRoutingModule } from './signin-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SigninRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [SigninComponent]
})
export class SigninModule { }
