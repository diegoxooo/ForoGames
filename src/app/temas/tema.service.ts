import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

private url = 'http://localhost:4000/temas/tema';

constructor(private http: HttpClient) { }

}


