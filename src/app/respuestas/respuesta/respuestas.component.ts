import { Component } from '@angular/core';
import { Comentario } from 'src/app/models/Comentario';
import { Respuesta } from 'src/app/models/Respuesta';
import { RespuestasService } from '../respuestas.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LogeadoService } from '../../logeado.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css'],
})
export class RespuestasComponent {
  public listaComents: any[];
  public listaResp: any[];
  public listaItems: any[] = [];

  private idUsuario = sessionStorage.getItem('usuario');
  public token = sessionStorage.getItem('token');

  temaForm = this.fb.group({
    comentario: [null],
    usuario: [this.idUsuario]
  });

  comentForm = this.fb.group({
    respuesta: [null],
  });

  private urlApi = AppComponent.url;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private service: RespuestasService,
    private route: ActivatedRoute,
    private router: Router,
    public login: LogeadoService
  ) {


    this.listaComents = [];
    this.listaResp = [];
    // this.listaItems = [];
  }

  ngAfterViewInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.getItems(id);
  } 

  eliminarComentario(id: string | null): void {
    this.http.delete<any>(this.urlApi + 'tema/' + id).subscribe(() => { location.reload(); });
  }

  responderComentario(id: string | null, idUsuario: string | null): void {
    this.http
      .post<any>(this.urlApi + 'respuesta/', {
        id: id,
        respuesta: this.comentForm.value.respuesta,
        idUsuario: idUsuario
      })
      .subscribe(() => {
        location.reload();
      });
  }

  onSubmit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.http
      .post<any>(this.urlApi + 'tema/' + id, {
        comentario: this.temaForm.value.comentario,
        usuario: this.temaForm.value.usuario
      })
      .subscribe(() => {
        location.reload();
      });
  }

  getItems(id: string | null): void {
    this.service.getAll(id).subscribe((data) => { this.listaResp = data; });

    // this.http.get<any>(this.urlApi + 'respuesta/').subscribe((resp) => { 
    //   this.listaResp = resp; console.log( this.listaResp);
    //   this.listaItems = this.listaComents.map(
    //     (com) => this.listaResp.map((res) => {
    //       if(!this.listaItems[com.idComent]){
    //         this.listaItems[com.idComent] = [];
    //       }
    //       if(res.idComent==com.idComent) {this.listaItems[com.idComent][res.id] = res}
    //     })
    //   );
    // });
    // console.log(this.listaItems);
  }

  // getRespuesta(id: string | null): object{
  //   this.http.get<any>(this.urlApi + 'respuesta/' + id).subscribe((resp) => {
  //     this.listaResp = resp;

      
  //   });
  //   console.log(this.listaResp)
  //   return this.listaResp;
  // }
}
