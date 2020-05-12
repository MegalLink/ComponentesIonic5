import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { ModalPage } from './modal.page';
import { ModalPageRoutingModule } from './modal-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   // ModalPageRoutingModule
  ],
  declarations: [ModalPage]
})
export class ModalPageModule {}
