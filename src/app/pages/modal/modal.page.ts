import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() nombre;
  @Input() pais;

  constructor(private modalControler:ModalController) { }

  ngOnInit() {
  }
  salirSinArgumentos(){
this.modalControler.dismiss();
  }
  salirConArgumentos(){
this.modalControler.dismiss({
  nombre: this.nombre,
  pais: this.pais,
  colorOjos: 'cafe',
  colorCabello: 'Castaño'
});
  }
}
