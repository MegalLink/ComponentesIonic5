import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { SuperHeroe } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
@ViewChild(IonSegment,{static:true}) segmento:IonSegment;
valorBusqueda="";
 heroes:Observable<SuperHeroe[]>;
  constructor(private dataS:DataService) {

     setTimeout(()=>{
      this.heroes=dataS.getSuperHeroes();
     },5000)
    
   // this.heroes.subscribe(resp=>console.log(resp))
   }

  ngOnInit() {
    this.segmento.value='todos';
  }
  segmentChanged(event){
    // this.valorSegmento=event.detail.value;
   
    if(event.detail.value==="todos"){
      this.valorBusqueda="";
      return;
    }
    this.valorBusqueda=event.detail.value;
 
  }
}
