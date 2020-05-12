import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.page.html',
  styleUrls: ['./modal-container.page.scss'],
})
export class ModalContainerPage implements OnInit {

  constructor(private modalControler:ModalController) { }

  ngOnInit() {
  }
 async abrirModal(){
   const modal= await this.modalControler.create({
      component: ModalPage,
      componentProps: {
        'nombre': 'Jeferson',
        'pais': 'Ecuador'
        
      }
    });
    await modal.present();
    const {data} = await modal.onDidDismiss();
    if(data){
      console.table("Data",data)
    }
    
  }

}
