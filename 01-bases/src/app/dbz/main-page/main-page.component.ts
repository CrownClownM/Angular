import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo:Personaje={
    nombre: 'Medina',
    poder: 1
  }
  
  // personajes: Personaje[] = [
  //   {
  //     nombre: 'Goku',
  //     poder: 15000
  //   },
  //   {
  //     nombre: 'Vegeta',
  //     poder: 7000
  //   }
  // ]

  // agregarNuevoPersonaje(personaje:Personaje){
  //   this.personajes.push(this.nuevo);
  //   this.nuevo={nombre:'', poder: 0};
  // }

  constructor(){} 
}
