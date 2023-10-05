import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

private url = AppComponent.url + 'temas/tema';

constructor(private http: HttpClient) { }

}


