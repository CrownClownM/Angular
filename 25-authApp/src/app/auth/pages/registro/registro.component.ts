import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre:   ['test', [Validators.required, Validators.minLength(3)]],
    email:    ['test@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) { }

  registrar(){
    console.log(this.miFormulario.value);
    const {nombre, email, password} = this.miFormulario.value;

    this.auth.registro(nombre, email, password)
        .subscribe(resp => {
          console.log(resp)
        });
    // this.router.navigateByUrl('/dashboard');
  }

}
