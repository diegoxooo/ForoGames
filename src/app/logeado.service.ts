import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogeadoService implements OnInit {
  public logeado: boolean;
  public usuario: number;
  public userName: string;
  public admin:number;
  public mail: string; 

  constructor(private http: HttpClient) {
    this.logeado = false;
    this.usuario = 0;
    this.userName = "";
    this.admin = 0;
    this.mail = "";
  }
  ngOnInit(): void {}

  setUsuario(id: number) {
    this.usuario = id;
    sessionStorage.setItem('usuario', this.usuario.toString());
  }

  getUsuario() {
    return sessionStorage.getItem('usuario');
  }

  setMail(id: number) {
    this.usuario = id;
    sessionStorage.setItem('userMail', this.usuario.toString());
  }

  getMail() {
    return sessionStorage.getItem('userMail');
  }

  setName(name: string){
    this.userName = name;
    
    sessionStorage.setItem('userName', this.userName.toString());
  }

  getName(){
    return sessionStorage.getItem('userName');
  }

  setAdmin(adm: number){
    this.admin = adm;
    
    sessionStorage.setItem('admin', this.admin.toString());
  }

  getAdmin(){
    return sessionStorage.getItem('admin');
  }

  comprobar() {
    if (sessionStorage.getItem('token') != null) {
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
