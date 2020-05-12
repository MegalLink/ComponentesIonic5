import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.page.html',
  styleUrls: ['./date.page.scss'],
})
export class DatePage implements OnInit {
  bornDate:Date =new Date();
  customPickerOptions;
  customDate:Date =new Date();
  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (evento) =>{
          console.log('Clicked Save!');
          console.log(evento);
          this.customDate=new Date(evento.year.value,evento.month.value,evento.day.value);
        } 
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }
  
  cambioFecha(event){
    console.log(event)
    console.log('Date', new Date(event.detail.value))
  }
  
}
