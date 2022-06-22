import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { AuthResponse, Usuario, Login } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BaseUrl = environment.BaseUrl;
  private apiKey: string = 'AIzaSyDEvx8r_ei1ZXe6IiqlaVLnM1zb3zBGFAQ';
  private _usuario! : Usuario; 

  constructor(private http: HttpClient) { }

  get usuario(){
    return {...this._usuario};
  }

  login(email:string, password:string){

    const url = `${this.BaseUrl}signInWithPassword?key=${this.apiKey}`
    const body = {
      email,
      password,
      returnSecureToken: true
    };

    return this.http.post<AuthResponse>(url, body)
            .pipe(
              tap( resp => {
                if (resp.registered){
                  localStorage.setItem('token', resp.idToken!);
                  this._usuario = {
                    email: resp.email
                  }
                }
              }),
              map(resp => resp.registered),
              catchError(err => of(err.error.error.message))
            );

  }

  registro(nombre: string, email: string, password: string){

    const url = `${this.BaseUrl}signUp?key=${this.apiKey}`

    const body = {
      nombre,
      email,
      password,
      returnSecureToken: true
    };

    return this.http.post<AuthResponse>(url, body);

  }

  validarToken(): Observable<boolean>{

    const url = `${this.BaseUrl}lookup?key=${this.apiKey}`
    const idToken = localStorage.getItem('token')
    const body = {idToken};

    return this.http.post<Login>(url, body)
    .pipe(
      map( resp => {
          this._usuario = {
            email: resp.users[0].email
          }
        return (resp.users[0].disabled === false);
      }),
      catchError(err => of(false))
    )
  }

  logout(){
    localStorage.removeItem('token');
  }

}
