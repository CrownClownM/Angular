import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes:string[] = ['Levi','Ichigo','Asuka'];
  heroesBorrados:string[] = [];

  borrarListado(){
    const heroeBorrado = this.heroes.shift();
    this.heroesBorrados.push(heroeBorrado||'');
  }

}
