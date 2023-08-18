import { Component } from '@angular/core';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'forogames';

  public static url = 'http://192.168.1.65:8080/';
}
