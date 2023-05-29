import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Comentario } from 'src/app/models/Comentario';
import { ThemeService } from '../theme.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
})
export class ThemeComponent {
  public listaItems: Comentario[];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private service: ThemeService,
    private route: ActivatedRoute
  ) {
    this.listaItems = []
    let id = this.route.snapshot.paramMap.get('id');
    this.getItems(id);
    
  }

  getItems(id: string | null): void {
    this.service.getAll(id).subscribe((data) => (this.listaItems = data));
  }
}
