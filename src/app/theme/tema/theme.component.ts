import { Component } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Comentario } from 'src/app/models/Comentario';
import { ThemeService } from '../theme.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
})
export class ThemeComponent {
  public listaItems: Comentario[];

  temaForm = this.fb.group({
    comentario: [null],
    usuario: [null],
  });


private urlApi = 'http://localhost:8080/tema/:id';
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private service: ThemeService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.listaItems = []
    let id = this.route.snapshot.paramMap.get('id');
    this.getItems(id);
    
  }

  onSubmit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.http
      .post<any>(this.urlApi + id, {
        
        comentario: this.temaForm.value.comentario,
        usuario: this.temaForm.value.usuario,
        
      })
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

  getItems(id: string | null): void {
    this.service.getAll(id).subscribe((data) => (this.listaItems = data));
  }
}
