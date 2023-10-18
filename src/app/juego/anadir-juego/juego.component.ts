import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css'],
})
export class JuegoComponent {

  gameForm = this.fb.group({
    juego: [null, Validators.required]
  });

  private urlApi = AppComponent.url + 'juego';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: Router,
    private ar: ActivatedRoute
  ) {
    
  }

  onSubmit(): void {
    let id = this.ar.snapshot.paramMap.get('id');
    this.http
      .post<any>(this.urlApi + id, {
        juego: this.gameForm.value.juego,
        
      })
      .subscribe(() => {
        // console.log(sessionStorage.getItem('token'));
        this.route.navigate(['/']);
      });
  }
}
