import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
nombre="";
usuario={
  email:'',
  password:''
}
constructor(){

}
  ngOnInit() {
    
  }
  logForm(){
      console.log(this.usuario)
  }


}
