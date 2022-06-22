import { Injectable } from '@angular/core';
import { CanLoad, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.verificaAutenticacion()
                .pipe(
                  tap(estaAutenticado => {
                    if(!estaAutenticado){
                      this.router.navigate(['./auth/login'])
                    }
                  })
                );
      
      //Prueba sencilla de autenticacion
      // if(this.authService.auth.id){
      //   return true;
      // }
      // console.log("Bloqueado por el guard - canActivated");
      // return false;
  }
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.verificaAutenticacion()
                .pipe(
                  tap(estaAutenticado => {
                    if(!estaAutenticado){
                      this.router.navigate(['./auth/login'])
                    }
                  })
                );

      //Autenticacion sencilla de prueba
      // if(this.authService.auth.id){
      //   return true;
      // }
      // console.log("Bloqueado por el guard - canLoad");
      // return false;
  }
}
