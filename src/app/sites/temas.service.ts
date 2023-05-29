import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TemasService {
  private urlBase = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    let url = this.urlBase;
    return this.http.get(url);
  }
}
