import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-menu',
  styleUrl: './menu.css',
  templateUrl: './menu.html',
})
export class Menu {

  usuario:any;

  constructor(){
    let u:any = localStorage.getItem("usuario");
    if(u){
    this.usuario = JSON.parse(u);
    }
    else{
      if(window.location.pathname != "/"){
      location.href=""
    }
  }
  }

  cerrarSecion(){
    localStorage.clear();
    location.href= "";
  }
}
