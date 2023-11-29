import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  registerForm = this.fb.group({
    usuario: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    contrasena: ['', Validators.required, Validators.maxLength(8), Validators.pattern('[a-zA-Z0-9 ]*')],
  });
  hide = true;
  private urlApi = AppComponent.url + 'log/register';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.http
      .post<any>(this.urlApi, {
        email: this.registerForm.value.email,
        usuario: this.registerForm.value.usuario,
        contrasena: this.registerForm.value.contrasena,
      })
      .subscribe((token) => {
        this.route.navigate(['/']);
      });
  }
}
