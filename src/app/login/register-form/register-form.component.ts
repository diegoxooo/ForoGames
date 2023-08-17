import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  registerForm = this.fb.group({
    usuario: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    contrasena: ['', Validators.required],
  });
  hide = true;
  private urlApi = 'http://192.168.1.65:8080/log/register';

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
