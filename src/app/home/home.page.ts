import { Component, OnInit } from "@angular/core";
import { MenuController } from '@ionic/angular';
import { Componente } from '../interfaces/interfaces';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  componentes: Observable<Componente[]>;
   
  constructor(private menuControler:MenuController,private dataS:DataService) {
   
   
  }
  ngOnInit(){
    this.componentes=this.dataS.getMenuOpts();
  }
  toggleMenu(){
        this.menuControler.toggle();
  }


}

