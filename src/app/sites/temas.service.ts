import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root',
})
export class TemasService {
  private urlBase = AppComponent.url;
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    let url = this.urlBase;
    return this.http.get(url);
  }
}
