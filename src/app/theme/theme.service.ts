import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private urlApi = 'http://localhost:8080/tema/';
  constructor(private http: HttpClient) {}

  getAll(id: string | null): Observable<any> {
    let url = this.urlApi + id;
    // console.log(url);
    return this.http.get(url);
  }
}
