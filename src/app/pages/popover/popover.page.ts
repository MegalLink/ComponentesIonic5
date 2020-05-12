import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverController:PopoverController) { }

  ngOnInit() {
  }
async mostrarPop(evento){
  const popover=await this.popoverController.create({
      component:PopinfoComponent,
      event:evento,
      mode:'ios',
      backdropDismiss:false
  });
  await popover.present();

  //onDidDismiss()
  const {data} = await popover.onWillDismiss(); //onWillDismiss() para que sea mas rapido cuando doy click
  console.log("Popover data",data);
}
}
