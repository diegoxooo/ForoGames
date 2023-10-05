import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { LogeadoService } from 'src/app/logeado.service';

import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginForm = this.fb.group({
    usuario: [null, Validators.required],
    contrasena: [null, Validators.required],
  });
  hide = true;
  public isLog = false;

  private urlApi = AppComponent.url + 'log/login';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: Router,
    private login: LogeadoService
  ) {}
  ngOnInit(): void {}

  onSubmit(): void {
    this.http
      .post<any>(this.urlApi, {
        usuario: this.loginForm.value.usuario,
        contrasena: this.loginForm.value.contrasena,
      })
      .subscribe(
        (token) => {
          sessionStorage.setItem('token', JSON.stringify(token));
          this.login.logeado = true;
          this.isLog = true;
          this.login.setUsuario(token.idUsuario);
          this.login.setName(token.userName);
          this.route.navigate(['/']);
        },
        (error) => this.onError(error)
      );
  }
  private onError(err: any) {
    console.log(err);
    const ERROR_NOT_PERMITS = 403;

    if (err instanceof HttpErrorResponse) {
      if (err.status === ERROR_NOT_PERMITS) {
        alert('El usuario no tiene permisos');
      }
    }
  }
}
