import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('lista', {static:false}) lista:IonList;
users:any;
  constructor(private dataS:DataService) { }

  ngOnInit() {
    this.dataS.getUsers().subscribe(resp=>{this.users=resp})
  }
 favorito(user){
this.lista.closeSlidingItems();
}
 borrar(user){
  this.lista.closeSlidingItems();
}
}
