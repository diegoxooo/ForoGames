import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-tema',
  templateUrl: './crear-tema.component.html',
  styleUrls: ['./crear-tema.component.css'],
})
export class CrearTemaComponent {
  @Input() juegos: any[];

  themeForm = this.fb.group({
    tema: [null, Validators.required],
    comentario: [null, Validators.required],
    idJuegos: [null, Validators.required],
  });

  private urlApi = 'http://192.168.1.65:8080/temas/tema/';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: Router,
    private ar: ActivatedRoute
  ) {
    this.juegos = [
      {
        id: 1,
        juego: 'God of War',
      },
      {
        id: 2,
        juego: 'Call of Duty',
      },
      {
        id: 3,
        juego: 'Dark Souls',
      },
      {
        id: 4,
        juego: 'Pokémon',
      },
      {
        id: 5,
        juego: 'Halo',
      },
      {
        id: 6,
        juego: 'The Legend of Zelda',
      },
      {
        id: 7,
        juego: 'Bloodborne',
      },
    ];
  }

  onSubmit(): void {
    let id = this.ar.snapshot.paramMap.get('id');
    this.http
      .post<any>(this.urlApi + id, {
        tema: this.themeForm.value.tema,
        comentario: this.themeForm.value.comentario,
        idJuegos: this.themeForm.value.idJuegos,
      })
      .subscribe(() => {
        // console.log(sessionStorage.getItem('token'));
        this.route.navigate(['/']);
      });
  }
}
