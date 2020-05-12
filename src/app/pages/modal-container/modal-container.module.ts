import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalContainerPageRoutingModule } from './modal-container-routing.module';

import { ModalContainerPage } from './modal-container.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModalPage } from '../modal/modal.page';
import { ModalPageModule } from '../modal/modal.module';

@NgModule({
  //para que funcione el modal hay que agregarlo en entry components
  entryComponents:[
    ModalPage
  ],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalContainerPageRoutingModule,ComponentsModule,
    //importar tambie el modulo del modal
    ModalPageModule
  ],
  declarations: [ModalContainerPage]
})
export class ModalContainerPageModule {}
