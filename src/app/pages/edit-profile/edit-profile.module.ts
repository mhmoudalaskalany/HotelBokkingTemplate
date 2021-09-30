import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditProfileComponent } from './edit-profile.component';
import { EditProfileRoutingModule } from './edit-profile-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EditProfileRoutingModule
  ],
  declarations: [EditProfileComponent]
})
export class EditProfileModule { }
