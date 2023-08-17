import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TemasService {
  private urlBase = 'http://192.168.1.65:8080/';
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    let url = this.urlBase;
    return this.http.get(url);
  }
}
