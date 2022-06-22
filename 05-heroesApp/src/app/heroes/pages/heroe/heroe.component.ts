import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(private activatedRoute: ActivatedRoute, 
              private heroesService: HeroesService,
              private Router: Router) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({id})=> 
    //   this.heroesService.getHeroePorId(id)
    // .subscribe( heroe => this.heroe = heroe)); //La misma mkd pero sin pipe, solo otro suscribe

    this.activatedRoute.params.pipe(
      switchMap(({id})=> this.heroesService.getHeroePorId(id))
    ).subscribe( heroe => this.heroe = heroe);
  }

  regresar(){
    this.Router.navigate(['/heroes/listado']);
  }

}
