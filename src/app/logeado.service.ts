import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogeadoService implements OnInit {
  public logeado: boolean;
  public usuario: number;

  constructor(private http: HttpClient) {
    this.logeado = false;
    this.usuario = 0;
  }
  ngOnInit(): void {}

  setUsuario(id: number) {
    this.usuario = id;
    sessionStorage.setItem('usuario', this.usuario.toString());
  }

  getUsuario() {
    return sessionStorage.getItem('usuario');
  }

  comprobar() {
    if (sessionStorage.getItem('usuario') != null) {
      this.logeado = true;
    } else {
      this.logeado = false;
    }
    return this.logeado;
  }

  isLogeado() {
    if (
      sessionStorage.getItem('token') !=
        '{"error":"Error usuario o contraseña no encontrados"}' &&
      sessionStorage.getItem('token') != null
    ) {
      // console.log(sessionStorage.getItem('token'));
      this.logeado = true;
    } else {
      this.logeado = false;
    }
    return this.logeado;
  }
}
