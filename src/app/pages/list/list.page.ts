import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('lista', {static:false}) lista:IonList;
users:any;
  constructor(private dataS:DataService,private toastC:ToastController) { }

  ngOnInit() {
    this.dataS.getUsers().subscribe(resp=>{this.users=resp})
  }
 favorito(user){
  this.presentToast("Agregado a favoritos")
this.lista.closeSlidingItems();

}
 borrar(user){
  this.presentToast("Presiono Borrar")
  this.lista.closeSlidingItems();
}



async presentToast(message:string) {
  const toast = await this.toastC.create({
    message: message ,
    duration: 2000
  });
  toast.present();
}


}
