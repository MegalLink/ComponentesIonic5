import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private loadingController: LoadingController) { }
 loading:any;
  ngOnInit() {
this.presentLoading("Espere Porfavor");
setTimeout(()=>{
this.loading.dismiss();
},1500)
  }


  async presentLoading(mensaje:string) {
    this.loading = await this.loadingController.create({
      message: mensaje,
      
    });
    return this.loading.present();

 
  }

}
