import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root',
})
export class RespuestasService {
  private urlApi = AppComponent.url;
  constructor(private http: HttpClient) {}

  getAll(id: string | null): Observable<any> {
    let url = this.urlApi + 'respuesta/' + id;
    return this.http.get(url);
  }
}
