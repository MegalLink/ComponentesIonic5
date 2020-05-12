import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
albumes:any=[];
textoBuscar="";
  constructor(private dataS:DataService) {
    this.dataS.getAlbums().subscribe((resp)=>{
      this.albumes=resp;
     // console.log(this.albumes)
    })
   }

  ngOnInit() {
  }
  onSearchChange(event){

    this.textoBuscar=event.detail.value;
 
  }
}
