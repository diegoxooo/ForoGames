import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

private url = 'http://192.168.1.65:4000/temas/tema';

constructor(private http: HttpClient) { }

}


