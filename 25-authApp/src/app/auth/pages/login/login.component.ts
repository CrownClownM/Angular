import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    email:    ['test@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) { }

  login(){
    const {email, password} = this.miFormulario.value;

    this.auth.login(email, password)
        .subscribe( registrado => {
          if(registrado===true){
            this.router.navigateByUrl('/dashboard');
          } else {
            Swal.fire('Error',registrado, 'error')
          }
        });
    // Mensaje de error
  }
}
